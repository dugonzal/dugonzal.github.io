/* Núcleo de cálculo de rentabilidad — el mismo que motor.py, en JS.
 *
 * Se usa desde la web y desde los tests de paridad (node). La regla es que
 * Python y JS den el MISMO número: si discrepan, el test falla.
 *
 * Reglas, idénticas a motor.py/costes.py:
 *  - El envío viene por pedido y se reparte entre líneas por facturación.
 *  - Un pedido devuelto entero: se resta todo y el envío pagado es pérdida.
 *  - Un pedido cancelado no cuenta.
 *  - El coste se busca por FECHA (último tramo con 'desde' <= fecha del pedido).
 *  - Si no hay tramo aplicable, se usa el más antiguo y se marca "sin fecha".
 *  - Si no hay coste, se marca "SIN COSTE" y el margen no se cree.
 */
(function (raiz) {
  "use strict";

  // Parser CSV con comillas, comas y saltos dentro de campo (RFC4180 simplificado).
  function parseCSV(texto) {
    const filas = [];
    let campo = "", fila = [], entreComillas = false;
    for (let i = 0; i < texto.length; i++) {
      const c = texto[i];
      if (entreComillas) {
        if (c === '"') {
          if (texto[i + 1] === '"') { campo += '"'; i++; }
          else entreComillas = false;
        } else campo += c;
      } else if (c === '"') entreComillas = true;
      else if (c === ",") { fila.push(campo); campo = ""; }
      else if (c === "\n") { fila.push(campo); filas.push(fila); fila = []; campo = ""; }
      else if (c !== "\r") campo += c;
    }
    if (campo.length || fila.length) { fila.push(campo); filas.push(fila); }
    return filas.filter((f) => f.length && f.some((v) => v.trim() !== ""));
  }

  function num(txt) {
    let t = String(txt == null ? "" : txt).trim().replace(/€/g, "").replace(/\s/g, "");
    if (!t) return 0;
    if (t.includes(",") && t.includes(".")) {
      t = t.lastIndexOf(".") > t.lastIndexOf(",") ? t.replace(/,/g, "") : t.replace(/\./g, "").replace(",", ".");
    } else if (t.includes(",")) t = t.replace(",", ".");
    const n = parseFloat(t);
    return isNaN(n) ? 0 : n;
  }

  function norm(k) { return String(k || "").trim().toLowerCase().replace(/^\ufeff/, ""); }

  function campo(fila, alias) {
    for (const a of alias) if (fila[a] !== undefined && fila[a] !== "") return String(fila[a]);
    return "";
  }

  const COL = {
    pedido: ["name", "nombre"],
    fecha: ["created at", "fecha"],
    sku: ["lineitem sku", "sku"],
    cant: ["lineitem quantity", "cantidad"],
    precio: ["lineitem price", "precio"],
    envio: ["shipping", "envio"],
    total: ["total"],
    devuelto: ["refunded amount", "importe devuelto"],
    cancelado: ["cancelled at", "cancelado el"],
    nombre: ["lineitem name"],
  };

  // Devuelve {pedidos, lineas, avisos} a partir del export de Shopify.
  // `envioPagadoPedido`: lo que te cuesta a ti enviar cada pedido. El export no lo
  // trae (solo trae lo que pagó el cliente), así que se reparte igual que el cobrado.
  function leerExport(texto, envioPagadoPedido) {
    const pagado = num(envioPagadoPedido || 0);
    const filas = parseCSV(texto);
    if (!filas.length) return { error: "El fichero está vacío." };
    const cab = filas[0].map(norm);
    const objetos = filas.slice(1).map((f) => {
      const o = {};
      cab.forEach((k, i) => { o[k] = f[i] !== undefined ? f[i] : ""; });
      return o;
    });

    if (!cab.includes("name") && !cab.includes("nombre")) {
      return { error: "No parece el export de pedidos de Shopify: falta la columna 'Name'." };
    }

    const grupos = new Map();
    for (const o of objetos) {
      const n = campo(o, COL.pedido);
      if (!n) continue;
      if (!grupos.has(n)) grupos.set(n, []);
      grupos.get(n).push(o);
    }

    const lineas = [];
    const avisos = [];
    for (const [nombre, grupo] of grupos) {
      const p = grupo[0];
      if (campo(p, COL.cancelado)) { avisos.push({ pedido: nombre, motivo: "cancelado: no cuenta" }); continue; }
      const fecha = campo(p, COL.fecha).slice(0, 10) || null;
      const total = num(campo(p, COL.total));
      const dev = num(campo(p, COL.devuelto));
      if (dev && total && dev < total - 0.01) {
        avisos.push({ pedido: nombre, motivo: `devolución parcial (${dev.toFixed(2)} de ${total.toFixed(2)}): cuenta como venta` });
      }
      const devuelto = !!(total && dev >= total - 0.01);
      const envioPedido = num(campo(p, COL.envio));

      const suyas = [];
      for (const o of grupo) {
        const cant = Math.round(num(campo(o, COL.cant)));
        if (cant <= 0) continue;
        const precio = num(campo(o, COL.precio));
        const sku = campo(o, COL.sku) || ("sin-sku:" + campo(o, COL.nombre).slice(0, 24));
        suyas.push({ sku, cant, precio });
      }
      if (!suyas.length) { avisos.push({ pedido: nombre, motivo: "sin líneas con cantidad: ignorado" }); continue; }

      const facturado = suyas.reduce((s, l) => s + l.cant * l.precio, 0) || 1;
      for (const l of suyas) {
        const parte = (l.cant * l.precio) / facturado;
        lineas.push({
          pedido: nombre, sku: l.sku, unidades: l.cant, precio: l.precio,
          envioCobrado: +(envioPedido * parte).toFixed(4),
          envioPagado: +(pagado * parte).toFixed(4),
          devuelto, fecha,
        });
      }
    }
    return { lineas, avisos, pedidos: grupos.size };
  }

  // tramos: [{sku, coste, desde}]  →  {coste, exacto} | null
  function costeEn(tramos, sku, fecha) {
    const suyos = tramos.filter((t) => t.sku === sku && t.coste !== "" && !isNaN(t.coste))
      .sort((a, b) => (a.desde < b.desde ? -1 : 1));
    if (!suyos.length) return null;
    if (!fecha) return { coste: +suyos[0].coste, exacto: false };
    let elegido = null;
    for (const t of suyos) { if (t.desde <= fecha) elegido = t; else break; }
    if (!elegido) return { coste: +suyos[0].coste, exacto: false };
    return { coste: +elegido.coste, exacto: true };
  }

  // Igual que motor.calcular: agrega por SKU y ordena por beneficio.
  function calcular(lineas, tramos, comisionPct, comisionFija) {
    const out = new Map();
    for (const l of lineas) {
      if (!out.has(l.sku)) {
        out.set(l.sku, { sku: l.sku, unidades: 0, ingresos: 0, costeProducto: 0, envio: 0,
                         comisiones: 0, devoluciones: 0, sinCosteFechado: 0, sinCoste: 0 });
      }
      const r = out.get(l.sku);
      const bruto = l.unidades * l.precio + l.envioCobrado;
      const comision = bruto * (comisionPct / 100) + comisionFija;

      const c = costeEn(tramos, l.sku, l.fecha);
      const costeU = c ? c.coste : 0;
      const exacto = c ? c.exacto : false;

      if (l.devuelto) { r.devoluciones += bruto; r.envio += l.envioPagado; r.comisiones += comision; continue; }

      r.unidades += l.unidades;
      r.ingresos += bruto;
      r.costeProducto += l.unidades * costeU;
      r.envio += l.envioPagado;
      r.comisiones += comision;
      if (!c) r.sinCoste++; else if (!exacto) r.sinCosteFechado++;
    }
    for (const r of out.values()) {
      r.beneficio = r.ingresos - r.costeProducto - r.envio - r.comisiones - r.devoluciones;
      r.margen = r.ingresos ? (r.beneficio / r.ingresos) * 100 : 0;
      r.pierde = r.beneficio < 0;
      r.sinCosteTotal = r.sinCoste > 0;
      r.costeFiable = r.sinCoste === 0 && r.sinCosteFechado === 0;
    }
    return [...out.values()].sort((a, b) => b.beneficio - a.beneficio);
  }

  const api = { parseCSV, num, leerExport, calcular, costeEn };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  raiz.Nucleo = api;
})(typeof window !== "undefined" ? window : globalThis);
