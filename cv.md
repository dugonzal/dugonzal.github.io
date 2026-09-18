---
layout: page
lang: es
title: CV
permalink: /cv/
alt: /en/cv/
description: CV de Duvan M. González Escobar — redes y transporte (SNMP, MPLS, SDH/PDH), NMS por FCAPS en producción 24/7, y backend Java y C++ sobre sistemas críticos.
---
<h1>Duvan Mauricio González Escobar</h1>
<div class="row"><span class="place">Ingeniero de Software · Redes y Transporte · FCAPS · Backend en producción 24/7 · {{ site.location }}</span></div>
<div class="row"><span class="place"><a href="mailto:{{ site.email }}">{{ site.email }}</a> · <a href="https://github.com/{{ site.github_username }}">github.com/{{ site.github_username }}</a></span></div>

<h2>Perfil</h2>

<p>Dos años manteniendo en producción el sistema de gestión de la red de operadores de telecomunicaciones: <b>polling SNMP v1/v2/v3</b> por dispositivo, <b>anillos MPLS</b> y circuitos de operador, operaciones remotas por <b>SSH</b> sobre equipos de red, y miles de eventos por minuto entrando por traps. Los servicios core que sostienen eso son <b>Java (Spring Boot)</b> y <b>C++</b>, con <b>Kafka</b> y <b>PostgreSQL</b> detrás. Cubro las cinco áreas de <b>FCAPS</b> —fallos, configuración, contabilidad, rendimiento y seguridad— con drivers propios que modelan cualquier dispositivo por <b>SNMP v1/v2/v3</b>, y actúo sobre los equipos, no solo los leo: operaciones <b>SET</b>, configuración por SSH con detección de deriva y reversión. Ciberseguridad multivendor alineada con <b>NIST</b> (CVEs, CPEs, CWEs) en el proyecto <b>VULCANO</b> (INCIBE/NextGenerationEU). Todo lo que afirmo aquí lo demuestro con código y con medidas.</p>

<h2>Experiencia</h2>

<div class="entry">
<div class="row"><span class="org">Ingeniero de Software — CIC Consulting Informático</span><span class="meta">Mar 2024 – Abr 2026</span></div>
<div class="row"><span class="place">Santander, Cantabria · NMS de operadores de telecomunicaciones</span></div>
</div>

<div class="entry indent">
<div class="row"><span class="sub">Netwin v9 · NMS + Ciberseguridad</span><span class="meta">May 2025 – Abr 2026</span></div>
<ul>
  <li>Desarrollé y mantuve en <b>Java (Spring Boot)</b> y C++ los servicios de monitorización: polling de OIDs por dispositivo, transporte vía <b>Kafka</b> y persistencia en <b>PostgreSQL</b>; build con <b>Maven</b> y despliegue sobre <b>Tomcat</b> en <b>Linux</b>.</li>
  <li>Desarrollé el <b>autodescubrimiento</b> de activos (traps SNMP, integración con inventario) y los drivers en C/C++ que construyen el <b>modelo completo de cualquier dispositivo</b> vía <b>SNMP v1/v2/v3</b> en segundos.</li>
  <li>Resolví <b>incidencias en producción</b> en Java y C++: análisis de trazas, diagnóstico funcional y técnico, mantenimiento sobre Linux con seguimiento hasta el cierre.</li>
  <li>Contribuí a <b>VULCANO (INCIBE/NextGenerationEU)</b>: gestión multivendor de dispositivos críticos y corrección de vulnerabilidades (CVEs/CPEs/CWEs) alineada a <b>NIST</b>.</li>
  <li>Versionado con <b>Git</b>, <b>CI/CD (GitLab, Jenkins)</b>, calidad con <b>SonarQube</b> y containerización con <b>Docker</b>.</li>
</ul>
</div>

<div class="entry indent">
<div class="row"><span class="sub">SGRwin v8 · NMS en producción 24/7</span><span class="meta">Mar 2024 – May 2025</span></div>
<ul>
  <li>Mantuve operativa una red de operadores con <b>miles de eventos por minuto</b> entrando por traps SNMP, sobre un NMS en servicio continuo: diagnostiqué y corregí <b>fugas de memoria en C++ distribuido</b> bajo carga real, clave para la continuidad del servicio.</li>
  <li>Mejoré el rendimiento de los <b>módulos de gestión de red MPLS</b> (anillos de operador y circuitos) y de las <b>operaciones remotas por SSH</b> sobre equipos de red en producción.</li>
  <li>Resolví fallos en <b>drivers de alarmas</b> y módulos de <b>polling</b>, y corregí fallos de arranque y <b>operaciones core (SET)</b> que bloqueaban la puesta en servicio del sistema.</li>
  <li>Sostuve y extendí código legacy <b>C/C++</b> en un sistema de alta criticidad operativa.</li>
</ul>
</div>

<h2>Proyectos y demostraciones</h2>

<ul>
  <li><b>SnmpLab</b> (C#/.NET · repositorio privado, disponible bajo petición): driver <b>SNMP v1/v2/v3 (USM)</b> propio y simulador de red, con las cinco áreas de <b>FCAPS</b>: alarmas, histórico que sobrevive al reinicio, configuración por SSH con deriva y reversión, contabilidad por ventanas cerradas y canal de aviso. <b>120.000 polls con 0 fallos a ~38.300 req/s</b>, interoperabilidad con net-snmp y <b>207 pruebas automatizadas en verde</b>.</li>
  <li><b>Laboratorio de red de 18 nodos</b> (OSPF, MPLS/LDP) con NMS en vivo: <b>237 comprobaciones con 0 fallos (18/18 dispositivos, 22/22 enlaces)</b> verificadas por protocolo y capturas decodificadas con tcpdump/tshark. <b>Publicado en abierto</b> (<a href="https://github.com/dugonzal/mpls-lab">github.com/dugonzal/mpls-lab</a>).</li>
  <li><b>woody_woodpacker</b> (público, <b>en pareja</b> con Aingeru Álvarez: <a href="https://github.com/AingeruAlvarezSanchez/woody-woodpacker">repo del proyecto</a> · <a href="https://github.com/dugonzal/woody-woodpacker">mi fork</a>): packer ELF64 en C + asm x86-64 con ChaCha20 y soporte PIE/ASLR. Mi parte: el stub autodescifrante, el keystream ChaCha20 y el descifrado de <code>.text</code> en runtime; verificado con gdb/objdump/strace.</li>
</ul>

<p>El detalle de cada demostración, con la evidencia que la sostiene, está en <a href="{{ '/pruebas/' | relative_url }}">Pruebas</a>.</p>

<h2>Competencias</h2>

<dl class="skills">
  <dt>Redes y transporte</dt><dd><b>SNMP v1/v2/v3 (USM)</b> con driver propio · <b>MPLS</b> (anillos y circuitos de operador) · <b>SDH/PDH</b> en gestión de red · <b>SSH</b> a equipos de red · <b>TCP/UDP</b> · HTTP · capturas y decodificación (tcpdump, tshark)</dd>
  <dt>FCAPS y operación</dt><dd>Fallos (alarmas con histéresis y correlación) · configuración (por SSH, con deriva y reversión) · contabilidad (ventanas cerradas) · rendimiento (polling y KPIs) · seguridad (NIST, CVEs/CPEs/CWEs) · guardias en producción 24/7</dd>
  <dt>Lenguajes</dt><dd>Java · C++ · C · C#/.NET · x86-64 asm</dd>
  <dt>Backend y datos</dt><dd>Java (<b>Spring Boot</b>, Spring Framework) · <b>APIs REST</b> · microservicios · Kafka (event-driven) · PostgreSQL (BBDD relacional) · Maven · Git</dd>
  <dt>Sistemas</dt><dd>Linux · <b>Apache Tomcat</b></dd>
  <dt>CI/CD y plataforma</dt><dd>GitLab · Jenkins · SonarQube · Docker · Kubernetes (k3s/k3d) · Terraform · Ansible · Helm</dd>
  <dt>Otros</dt><dd>MapStruct · Liquibase · Keycloak · SOAP · Oracle · Eclipse IDE</dd>
</dl>

<h2>Formación</h2>

<p>De la escuela vienen los fundamentos: <b>C, sistemas, redes y bajo nivel</b>. Lo que sostiene hoy el trabajo es lo que aprendí construyendo un <b>NMS completo por FCAPS</b> —fallos, configuración, contabilidad, rendimiento y seguridad— sobre una red de laboratorio propia de 18 nodos: un sistema de gestión no se entiende leyéndolo, se entiende teniendo que hacerlo funcionar.</p>

<div class="entry">
<div class="row"><span class="org">Ingeniería de Software (RNCP Nivel 6 · Grado UE) — Nivel 7 en curso</span><span class="meta">2025 – Actualidad</span></div>
<div class="row"><span class="place">École 42 Urduliz · nivel 14/17 · Kubernetes, Terraform, Ansible, Helm · CI/CD reproducible</span></div>
</div>

<div class="entry">
<div class="row"><span class="org">Núcleo Común de Ingeniería de Software</span><span class="meta">2022 – 2024</span></div>
<div class="row"><span class="place">École 42 Urduliz · C, sistemas, redes y bajo nivel: Minishell, Webserver, Inception (Docker), Piscine C++</span></div>
</div>

<h2>Idiomas</h2>

<p><b>Español</b> nativo · <b>Inglés</b> lectura técnica y de código · conversación básica</p>
