---
layout: post
title: Un laboratorio de 18 nodos con NMS en vivo, levantado en una llamada
date: 2026-09-17 10:00:00 +0200
description: Parque de 18 nodos con OSPF y MPLS/LDP y un NMS haciendo polling en vivo. Qué medí, con qué y qué me llevé.
tags: [redes, mpls, snmp]
---

Cuando trabajo con SNMP en un banco de pruebas de tres dispositivos, siempre me queda la misma duda: esto aguanta una red de verdad. Así que monté una. Dieciocho nodos, OSPF, MPLS con LDP y un NMS haciendo polling continuo sobre el parque. No es un diagrama ni una maqueta: es una red que arranca de cero y responde.

## El contexto

Necesitaba tres cosas que un laboratorio de juguete no da: suficiente variedad de dispositivos para que el descubrimiento no sea trivial, enlaces que se caigan y vuelvan mientras hay polling en marcha, y un NMS con KPIs de verdad, no un `ping` en bucle.

## Cómo lo hice

El parque está montado con routers FRR sobre contenedores, con el direccionamiento y las sesiones definidos en fichero, de forma que el laboratorio se levanta entero con un comando y no "a mano". Eso es lo que lo hace repetible: si algo salgo mal, se tira y se vuelve a levantar igual.

El NMS hace polling periódico y recibe traps. Para dejar constancia de lo que pasa en el cable, capturo el tráfico del plano de gestión:

```bash
tcpdump -i any -s 0 -w parque-snmp.pcap port 161
```

## Los números

- 18 nodos arriba, con OSPF y LDP convergiendo.
- **26.814 paquetes SNMP capturados en 15 segundos** (5,9 MB de captura), decodificados después con `tshark`.
- Informes por etapa, incluidos los ciclos completos sin fallos y los que reventaron a propósito para ver cómo se comporta el NMS.

Lo que no salió a la primera: la primera versión del anillo no convergía y el polling daba timeouts que parecían fallos del driver. No lo eran. Lo dejé escrito en su informe porque aprender eso valía más que el verde.

## Qué me llevo

Que un driver SNMP se prueba de verdad con la red debajo, no con un simulador solo. Y que un laboratorio que se levanta con un comando es la diferencia entre "lo probé una vez" y "lo puedo probar delante de ti".
