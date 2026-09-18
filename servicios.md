---
layout: page
lang: es
title: Servicios
permalink: /servicios/
alt: /en/services/
description: Montaje de observabilidad end-to-end en tu stack en aproximadamente una semana — métricas, logs, paneles y alertas con umbrales escritos. Alcance, precio y proceso.
---

<h1>Servicios</h1>

<p class="lead">Monto la observabilidad de un sistema en aproximadamente una semana: métricas, logs, paneles y alertas que avisan de verdad, configuradas para tu sistema y entregadas con la documentación.</p>

<p>Vengo de dos años manteniendo en pie la red de operadores de telecomunicaciones en producción 24/7: miles de eventos por minuto, incidencias a cualquier hora y las fugas de memoria que solo aparecen bajo carga real. Lo que hago ahora es dejar ese mismo nivel de visibilidad montado en infraestructura que no es mía. Cada número que afirmo en esta página tiene su medición en <a href="{{ '/pruebas/' | relative_url }}">Pruebas</a>.</p>

<h2>Qué entra</h2>

<ul>
  <li><b>Métricas y logs</b> con la pila que ya maduró: VictoriaMetrics o Prometheus para las métricas, Loki para los logs, Grafana para los paneles.</li>
  <li><b>Paneles por servicio.</b> No un panel gigante que nadie mira: uno por servicio, con lo que hay que ver cuando algo va mal.</li>
  <li><b>Alertas con umbrales escritos</b> para tu sistema, y el runbook de quién hace qué cuando saltan. Sin umbrales de fábrica.</li>
  <li><b>Traspaso de verdad:</b> sesión grabada, documentación en tu repositorio y las credenciales en tu poder. No queda nada atado a mí.</li>
</ul>

<h2>Tres formas de empezar</h2>

<div class="cards">
  <div class="card">
    <h3>1 · Arranque — 2.000 €</h3>
    <p>Un pago, sin nada después. Se levanta la pila (VictoriaMetrics o Prometheus + Grafana), se dejan paneles por servicio, alertas básicas y la documentación del despliegue. Para quien quiere dejar de operar a ciegas y ver por dónde empieza.</p>
  </div>
  <div class="card">
    <h3>2 · En producción — 3.500 € + 1.500-2.000 €/mes</h3>
    <p>Todo lo del arranque, más Loki para los logs, alertas con escalado, SLOs por servicio y runbook de guardia. Es el que se contrata cuando el sistema ya tiene clientes detrás.</p>
  </div>
  <div class="card">
    <h3>3 · Plataforma vigilada — 5.000 €+ + 2.500-4.000 €/mes</h3>
    <p>Todo lo anterior, más correlación de métricas, logs y trazas, analítica de alta concurrencia (Go, Kafka, PostgreSQL), SLA con tiempos de respuesta y optimización de coste de infraestructura. Para quien necesita un partner de guardia, no un instalador.</p>
  </div>
</div>

<p>Se entra por el primer nivel y se sube cuando hace falta. El pago es 50% a la firma y 50% a la entrega; el mantenimiento mensual tiene un mínimo de tres meses porque las alertas se afinan con el tiempo y con datos.</p>

<h2>Lo que también hago</h2>

<p>La observabilidad es por donde se entra, porque es lo que más se pide. Estas son las otras tres, y van por el mismo proceso y las mismas condiciones:</p>

<ul>
  <li><b>Plataforma y Kubernetes.</b> Clúster reproducible de verdad —con la infraestructura como código, GitOps, red cerrada por defecto, identidad, secretos y registro de imágenes— y un entorno de pruebas que se levanta igual que producción. Presupuesto según alcance: de dos a seis semanas. No toco el código de tus aplicaciones.</li>
  <li><b>Guardia y mantenimiento.</b> Si ya tienes el sistema montado y no hay nadie que lo mire los fines de semana: <b>1.500–2.000 €/mes</b> en producción, <b>2.500–4.000 €/mes</b> con SLA y tiempos de respuesta escritos. Mínimo tres meses, porque los umbrales se afinan con datos.</li>
  <li><b>Backend Go o Java, por sprint.</b> Un vertical concreto con fecha de entrega: API, persistencia, pruebas y despliegue, con las cifras de lo que aguanta. Presupuesto cerrado antes de empezar.</li>
</ul>

<p>Y si tu mundo es la <b>industria o la energía</b> (SCADA, IEC 104, IEC 61850, NIS2), el camino empieza por un assessment medido sobre tus equipos: los huecos por escrito en orden de riesgo y un plan por fases. Se presupuesta aparte.</p>

<h2>Cómo es la semana</h2>

<ul>
  <li><b>Día 0.</b> Te mando seis preguntas por escrito. Qué se cae, cada cuánto, cuánto tardáis en enteraros, quién lo mira, qué se mide hoy y con qué está montado. Se contestan en cinco minutos.</li>
  <li><b>Día 1-2.</b> Inventario: qué servicios hay, qué exportadores ya existen y qué se puede medir desde el primer momento.</li>
  <li><b>Día 2-3.</b> La pila en pie sobre tu infraestructura, sin tocar lo que ya corre.</li>
  <li><b>Día 3-4.</b> Paneles por servicio y alertas con umbrales en números, no en adjetivos.</li>
  <li><b>Día 4-5.</b> SLOs y runbook de guardia, con el umbral escrito de cada alerta.</li>
  <li><b>Día 5-6.</b> Traspaso: una hora grabada, la documentación en tu repositorio, las claves contigo.</li>
  <li><b>Día 6-7.</b> Medimos antes y después (tiempo de detección, tiempo de resolución, alertas útiles frente a ruido) y cierro con la factura del segundo pago.</li>
</ul>

<p>A los treinta días de la entrega te pido el testimonial y, si el trabajo ha ido bien, seguimos con el mantenimiento mensual.</p>

<h2>Qué no incluye</h2>

<p>No sustituyo a Datadog si lo que quieres es el SaaS gestionado: eso es otra cosa y funciona. No desarrollo funcionalidad de tu producto. No hay guardia 24/7 hasta que contrates el tercer nivel. Y no cojo proyectos donde no se pueda medir nada: si no hay números antes y después, ninguno de los dos sabremos si serví de algo.</p>

<h2>Cómo se empieza</h2>

<p>Escríbeme a <a href="mailto:{{ site.email }}">{{ site.email }}</a> con una línea sobre qué se te cae. Te mando las seis preguntas, te digo qué nivel encaja y cuánto cuesta, y si quieres verlo funcionando antes de decidir nada, te paso un panel con datos reales.</p>

<p class="muted">Todo por escrito, sin llamadas.</p>
