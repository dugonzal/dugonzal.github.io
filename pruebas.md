---
layout: page
lang: es
title: Pruebas
permalink: /pruebas/
alt: /en/pruebas/
description: Cada afirmación de este perfil con la evidencia que la sostiene — números medidos, repositorios y qué se puede y no se puede enseñar.
---

<h1>Pruebas</h1>

<p class="lead">Esta página es el porqué de este sitio: aquí no hay adjetivos. Cada afirmación va con la evidencia que la sostiene, y lo que no puedo enseñar va marcado como tal. Ninguna cifra es una estimación: sale de un informe o de una ejecución que puedo repetir delante de ti.</p>

<div class="case" id="snmp">
<h3>1 · Escribí un driver SNMP completo (v1/v2/v3 con USM), no solo lo usé</h3>
<p>Driver y simulador de dispositivos de telecomunicaciones propios: PDU, ASN.1/BER, tipos de dato, gestión de sesiones, timeouts y reintentos, USM con autenticación y cifrado, y descubrimiento de topología. Sin depender de la lógica de otro NMS.</p>
<ul>
  <li><b>Demostrado con:</b> <b>207 pruebas automatizadas en verde</b> (unitarias, integración y protocolo), ejecutadas sobre el simulador y contra <b>net-snmp</b> real para comprobar interoperabilidad.</li>
  <li><b>Rendimiento medido:</b> <b>120.000 polls sin un solo fallo a ~38.300 req/s</b>; ~39.700 req/s contra un único agente con un socket UDP multiplexado.</li>
</ul>
<p class="where">Repositorio privado — se abre bajo petición para un proceso de selección.</p>
</div>

<div class="case" id="lab">
<h3>2 · Monté un laboratorio de red de 18 nodos y lo medí</h3>
<p>Parque de 18 nodos con OSPF y MPLS/LDP y un NMS en vivo, levantado de cero en cada prueba. No es un diagrama: es una red que arranca y responde.</p>
<ul>
  <li><b>Demostrado con:</b> <b>237 comprobaciones automáticas con 0 fallos: 18/18 dispositivos y 22/22 enlaces verificados por protocolo</b>, más <b>13 informes de etapa</b> con sus capturas decodificadas con tcpdump y tshark (informe de la etapa 11, 14-sep-2026).</li>
  <li><b>Detalle fino:</b> SNMPv3 authPriv sobre el laboratorio — identidad visible, carga útil cifrada, verificable en la captura.</li>
</ul>
<p class="where">Repositorio privado — se abre bajo petición para un proceso de selección.</p>
</div>

<div class="case" id="backend">
<h3>3 · Backend Java en producción 24/7, con guardias y KPIs</h3>
<p>Servicios core de NMS comerciales de operadores durante <b>25 meses</b> (marzo 2024 – abril 2026) en CIC Consulting Informático. Mantenimiento y modernización de servicios, análisis de problemas en producción y optimización de rendimiento.</p>
<ul>
  <li><b>Demostrado con:</b> experiencia verificable por referencia laboral, el propio producto (SGRwin v8 y Netwin v9, en producción en operadores) y el detalle técnico que puedo defender línea a línea en una entrevista.</li>
  <li><b>Límite honesto:</b> el código es de cliente y no es publicable — ni una línea, aunque me lo pidan.</li>
</ul>
</div>

<div class="case" id="elf">
<h3>4 · Packer ELF64 en C y ensamblador, con cifrado real</h3>
<p>Herramienta que cifra el segmento del entrypoint de un binario ELF64 y le inyecta un stub autodescifrante en x86-64, manteniendo PIE/ASLR. El resultado ejecuta igual que el original, con el código cifrado en disco.</p>
<ul>
  <li><b>Demostrado con:</b> repositorio público con el código y las pruebas, más la verificación en ejecución con readelf, objdump, gdb y strace.</li>
  <li><b>Proyecto en pareja</b> (42) con Aingeru Álvarez: el repo del proyecto es <a href="https://github.com/AingeruAlvarezSanchez/woody-woodpacker">AingeruAlvarezSanchez/woody-woodpacker</a> y el mío su fork (<a href="https://github.com/dugonzal/woody-woodpacker">dugonzal/woody-woodpacker</a>). Mi parte: el stub autodescifrante, el keystream ChaCha20 y el descifrado de <code>.text</code> en tiempo de ejecución.</li>
</ul>
</div>

<div class="case" id="ocaml">
<h3>5 · Máquina de Turing en OCaml con la salida fijada byte a byte</h3>
<p>Implementación del proyecto <code>ft_turing</code> de École 42: parseo de la descripción de la máquina, cinta dinámica, ejecución por pasos y traza. Lo interesante no es que funcione: es que <b>no puede comportarse distinto sin que salte una prueba</b>.</p>
<ul>
  <li><b>Demostrado con:</b> batería de <b>112 pruebas golden</b> que comparan la salida generada con la esperada, byte a byte, y un <code>make test</code> que las ejecuta todas.</li>
</ul>
<p class="where">Repositorio privado — se abre bajo petición para un proceso de selección.</p>
</div>

<h2>Cómo accedo a lo que no es público</h2>

<p>Los repositorios privados los abro sin problema durante un proceso de selección: te doy acceso temporal, te paso los informes o lo levantamos en una llamada y lo ves funcionando en mi máquina. Lo que no hago es pedirte que me creas.</p>
