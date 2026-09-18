---
layout: post
lang: es
title: Un laboratorio de 18 nodos con NMS en vivo, levantado en una llamada
date: 2026-09-17 10:00:00 +0200
description: Parque de 18 nodos con OSPF y MPLS/LDP y un NMS haciendo polling en vivo. Qué medí, con qué y qué me llevé.
tags: [redes, mpls, snmp]
---

Cuando trabajo con SNMP en un banco de pruebas de tres dispositivos, siempre me queda la misma duda: esto aguanta una red de verdad. Así que monté una. Dieciocho nodos, OSPF, MPLS con LDP y un NMS haciendo polling continuo sobre el parque. No es un diagrama ni una maqueta: es una red que arranca de cero y responde.

## El contexto

Necesitaba tres cosas que un laboratorio de juguete no da: suficiente variedad de dispositivos para que el descubrimiento no sea trivial, enlaces que se caigan y vuelvan mientras hay polling en marcha, y un NMS con KPIs de verdad, no un `ping` en bucle.

## Cómo lo hice

El parque está montado con routers FRR sobre contenedores, con el direccionamiento y las sesiones definidos en fichero, de forma que el laboratorio se levanta entero con un comando y no "a mano". Eso es lo que lo hace repetible: si algo sale mal, se tira y se vuelve a levantar igual.

El NMS hace polling periódico y recibe traps. Lo que pasa en el cable queda en capturas por etapa, cada una con su recuento de paquetes y su sha256 en el informe correspondiente:

```bash
tcpdump -i <enlace> -s 0 -w labs/<etapa>/out/cap/<nombre>.pcap   # p. ej. el salto R1→R2 en MPLS
```

## Los números

- **18/18 dispositivos y 22/22 enlaces** declarados, vistos por el NMS: **237 comprobaciones, 0 fallos** (14-sep-2026, Etapa 11; `labs/11-gestion-snmp/out/verificacion.json`). La suite del NMS en Release: **106/106**.
- 18 nodos arriba con OSPF y MPLS/LDP convergiendo. Caminos verificados con **0 % de pérdida**: **0,17 ms** en el salto MPLS y **0,139 ms** entre dos sedes a través de la L3VPN.
- La convergencia, sin maquillar: primera respuesta buena en **t+33,83 s** y **43,6 % de pérdida** sobre 3000 paquetes durante el transitorio (Etapa 2).
- Los pcaps son pequeños y están todos: 16, 15 y 12 paquetes en la primera etapa, con su hash en el informe.

Lo que no salió a la primera, y está escrito entero en su informe: un barrido corriendo contra un binario obsoleto, `pass_persist` devolviendo una línea seca que desfasaba el walk completo (30 enlaces falsos), snmpd comiéndose el primer byte cuando el tipo era `octet`, y HOST-RESOURCES contestando "No Such Instance" en agentes recién arrancados. Ninguno era del protocolo: eran del banco y del instrumental. Uno sí era de código, y de los que duelen: `OctetString.ToString()` de SharpSnmpLib sustituye cada byte no-ASCII por `?`, así que un `Sala se1 · anillo` llegaba al NMS como `Sala se1 ?? anillo`.

## Qué me llevo

Que un driver SNMP se prueba de verdad con la red debajo, no con un simulador solo. Y que un laboratorio que se levanta con un comando es la diferencia entre "lo probé una vez" y "lo puedo probar delante de ti".
