---
layout: page
lang: es
title: Proyectos
permalink: /proyectos/
alt: /en/projects/
description: Los proyectos de Duvan M. González Escobar — repositorios públicos con su código y lo que se puede verificar, y lo privado con su evidencia medida.
---

<h1>Proyectos</h1>

<p class="lead">Público lo que puedo enseñar y de lo que no, doy la evidencia y la puerta abierta. Ninguna entrada de esta página es un diagrama: cada una tiene código, o medida, o las dos cosas.</p>

<p><b>¿Buscas a alguien que te lo monte?</b> Monto la observabilidad de un sistema en aproximadamente una semana. <a href="{{ '/servicios/' | relative_url }}">Qué hago, qué cuesta y cómo es la semana →</a></p>

<div class="case" id="cliente-0">
<h3>1 · Cliente 0 — NMS/FCAPS y driver SNMP, en abierto</h3>
<p>El sistema de gestión de red y el driver SNMP que lo alimenta, desarrollado y medido sobre un parque de laboratorio propio de 18 nodos. El repositorio no contiene el producto: contiene lo que su licencia declara abierto — los contratos de cable entre agente y gestor, los códecs de telemetría (C37.118, IEC 104) y la puerta de licencia, ejecutable — más la evidencia de lo medido.</p>
<ul>
  <li><b>Repo:</b> <a href="https://github.com/dugonzal/cliente-0">github.com/dugonzal/cliente-0</a></li>
  <li><b>El laboratorio donde se midió:</b> <a href="https://github.com/dugonzal/mpls-lab">github.com/dugonzal/mpls-lab</a> — 18 nodos FRR con OSPF y MPLS/LDP, 17 bancos y el verificador independiente de cada uno, en abierto.</li>
  <li><b>Dentro:</b> <code>open-reference/contracts/</code> (MIT) · <code>open-reference/stub/</code> · <code>evidence/</code> con los resultados · <code>docs/</code> con la serie de artículos.</li>
</ul>
</div>

<div class="case" id="snmplab">
<h3>2 · SnmpLab — driver SNMP v1/v2/v3 (USM) propio</h3>
<p>Driver y simulador de dispositivos de telecomunicaciones escritos desde cero: PDU, ASN.1/BER, tipos de dato, sesiones, timeouts y reintentos, USM con autenticación y cifrado, y descubrimiento de topología. Sin depender de la lógica de otro NMS.</p>
<ul>
  <li><b>Medido:</b> <b>207 pruebas automatizadas en verde</b> (unitarias, integración y protocolo) e interoperabilidad comprobada contra <b>net-snmp</b> real.</li>
  <li><b>Rendimiento:</b> <b>120.000 polls sin un solo fallo a ~38.300 req/s</b>.</li>
</ul>
<p class="where">Repositorio privado — se abre bajo petición para un proceso de selección.</p>
</div>

<div class="case" id="lab">
<h3>3 · Laboratorio de red de 18 nodos, con NMS en vivo</h3>
<p>Parque de 18 nodos con OSPF y MPLS/LDP y un NMS haciendo polling real, definido en fichero y levantado entero con un comando: se tira y se vuelve a levantar igual, que es lo que lo hace repetible.</p>
<ul>
  <li><b>Verificado por protocolo:</b> <b>237 comprobaciones con 0 fallos — 18/18 dispositivos y 22/22 enlaces</b> (informe de la etapa 11, 14-sep-2026).</li>
  <li><b>Material:</b> 13 informes de etapa con sus capturas decodificadas con tcpdump y tshark, incluido SNMPv3 authPriv sobre el laboratorio.</li>
</ul>
<p class="where">Repositorio privado — se abre bajo petición para un proceso de selección.</p>
</div>

<div class="case" id="woody">
<h3>4 · woody_woodpacker — packer ELF64 (en pareja)</h3>
<p>Proyecto en pareja con <b>Aingeru Álvarez</b>: packer que cifra el segmento del entrypoint de un binario ELF64 y le inyecta un stub autodescifrante en x86-64, manteniendo PIE/ASLR. El binario resultante ejecuta igual que el original, con el código cifrado en disco. Mi parte: el stub autodescifrante, el keystream ChaCha20 y el descifrado de <code>.text</code> en tiempo de ejecución.</p>
<ul>
  <li><b>Repo del proyecto:</b> <a href="https://github.com/AingeruAlvarezSanchez/woody-woodpacker">AingeruAlvarezSanchez/woody-woodpacker</a></li>
  <li><b>Mi fork:</b> <a href="https://github.com/dugonzal/woody-woodpacker">dugonzal/woody-woodpacker</a></li>
  <li><b>Verificación:</b> en ejecución con readelf, objdump, gdb y strace.</li>
</ul>
</div>

<div class="case" id="libsam">
<h3>5 · libsam — librería en ensamblador x86-64</h3>
<p>Las funciones de la libc reescritas en ensamblador (el proyecto <i>libasm</i> del cursus de 42), con <code>Makefile</code> y <code>Dockerfile</code> para reproducir el build en cualquier máquina.</p>
<ul>
  <li><b>Repo:</b> <a href="https://github.com/dugonzal/libsam">github.com/dugonzal/libsam</a></li>
</ul>
</div>

<div class="case" id="turing">
<h3>6 · ft_turing — máquina de Turing en OCaml (en pareja)</h3>
<p>Máquina de Turing dirigida por una descripción en JSON: parseo, cinta dinámica, ejecución por pasos y traza parcial, más un bonus que estima la complejidad temporal de la máquina que acaba de ejecutar. Lo que garantiza que no se rompa es una batería de pruebas que compara la salida con la esperada <b>byte a byte</b>: si el comportamiento cambia, salta una prueba.</p>
<ul>
  <li><b>Repo del proyecto:</b> <a href="https://github.com/dugonzal/ft_turing">github.com/dugonzal/ft_turing</a></li>
  <li><b>Mi parte:</b> cinta y ejecutor, la CLI de traza y el bonus de complejidad; el parseo es de mi compañero.</li>
</ul>
<p class="where">La versión de aprendizaje, con el battery completo, es un repositorio privado que abro bajo petición.</p>
</div>

<div class="case" id="cursus">
<h3>7 · Cursus de École 42 — repositorios públicos</h3>
<p>Los proyectos del cursus, cada uno con su código y su build reproducible:</p>
<ul>
  <li><b>C</b>: <a href="https://github.com/dugonzal/libft">libft</a> (librería propia) · <a href="https://github.com/dugonzal/get_next_line">get_next_line</a> · <a href="https://github.com/dugonzal/push_swap">push_swap</a> (ordenación con dos pilas) · <a href="https://github.com/dugonzal/Philosophers">Philosophers</a> (hilos y semáforos) · <a href="https://github.com/dugonzal/Minitalk">Minitalk</a> (IPC con señales) · <a href="https://github.com/dugonzal/so_long">so_long</a> · <a href="https://github.com/dugonzal/cub3d">cub3d</a> (raycasting) · <a href="https://github.com/dugonzal/ft_printf">ft_printf</a></li>
  <li><b>C++</b>: <a href="https://github.com/dugonzal/cpp">cpp</a> (módulos del cursus) · <a href="https://github.com/dugonzal/webserver">webserver</a> (servidor HTTP)</li>
  <li><b>Java</b>: <a href="https://github.com/dugonzal/avaj-launcher">avaj-launcher</a> (simulación de tráfico aéreo desde un UML)</li>
  <li><b>Python</b>: <a href="https://github.com/dugonzal/rsa">rsa</a> (criptografía RSA)</li>
  <li><b>Infraestructura</b>: <a href="https://github.com/dugonzal/inception">inception</a> (Docker) · <a href="https://github.com/dugonzal/archlinux-docker">archlinux-docker</a></li>
</ul>
</div>

<div class="case" id="otros">
<h3>8 · Herramientas propias, también públicas</h3>
<ul>
  <li><a href="https://github.com/dugonzal/patent-research-mcp">patent-research-mcp</a> — servidor MCP en Python para extraer y analizar patentes: ingesta, secciones estructuradas y exportación.</li>
  <li><a href="https://github.com/dugonzal/human-capability-os">human-capability-os</a> — TypeScript, modelo determinista de capacidades con consentimiento explícito.</li>
</ul>
</div>

<h2>Cómo accedo a lo que no es público</h2>

<p>Los repositorios privados los abro sin problema durante un proceso de selección: acceso temporal, los informes, o lo levantamos en una llamada y lo ves funcionando en mi máquina. El detalle de cada prueba está en <a href="{{ '/pruebas/' | relative_url }}">Pruebas</a>.</p>
