---
layout: page
lang: es
title: CV
permalink: /cv/
alt: /en/cv/
description: CV de Duvan M. González Escobar — backend Java en producción 24/7, redes y telecomunicaciones, bajo nivel en C y ensamblador.
---
<h1>Duvan Mauricio González Escobar</h1>
<div class="row"><span class="place">Ingeniero de Software · Backend Java · Sistemas Críticos 24/7 · {{ site.location }}</span></div>
<div class="row"><span class="place"><a href="mailto:{{ site.email }}">{{ site.email }}</a> · <a href="https://github.com/{{ site.github_username }}">github.com/{{ site.github_username }}</a></span></div>

<h2>Perfil</h2>

<p>Ingeniero de software especializado en <b>backend Java sobre sistemas de misión crítica en producción 24/7</b> (NMS comerciales de operadores de telecomunicaciones). Servicios core y <b>APIs REST</b>, microservicios <b>event-driven con Kafka + PostgreSQL</b>, <b>Linux</b> y <b>CI/CD</b>. Mi día a día: mantenimiento y modernización de servicios, <b>optimización de rendimiento</b> y <b>resolución de incidencias en producción</b>. Lo que afirmo aquí lo demuestro con código y con medidas.</p>

<h2>Experiencia</h2>

<div class="entry">
<div class="row"><span class="org">Ingeniero de Software — CIC Consulting Informático</span><span class="meta">Mar 2024 – Abr 2026</span></div>
<div class="row"><span class="place">Santander, Cantabria · NMS de operadores de telecomunicaciones</span></div>
</div>

<div class="entry indent">
<div class="row"><span class="sub">Netwin v9 · NMS + Ciberseguridad</span><span class="meta">May 2025 – Abr 2026</span></div>
<ul>
  <li>Desarrollé y mantuve en <b>Java (Spring Boot)</b> y C++ los servicios de monitorización: polling de OIDs por dispositivo, transporte vía <b>Kafka</b> y persistencia en <b>PostgreSQL</b>; build con <b>Maven</b> y despliegue sobre <b>Tomcat</b> en <b>Linux</b>.</li>
  <li>Desarrollé el <b>autodescubrimiento</b> de activos (traps SNMP, integración con inventario) y los drivers en C/C++ que construyen el modelo completo de cualquier dispositivo vía <b>SNMP v1/v2/v3</b>.</li>
  <li>Resolví <b>incidencias en producción</b> en Java y C++: análisis de trazas, diagnóstico funcional y técnico, mantenimiento sobre Linux con seguimiento hasta el cierre.</li>
  <li>Contribuí a <b>VULCANO (INCIBE/NextGenerationEU)</b>: gestión multivendor de dispositivos críticos y corrección de vulnerabilidades (CVEs/CPEs/CWEs) alineada a <b>NIST</b>.</li>
  <li>Versionado con <b>Git</b>, <b>CI/CD (GitLab, Jenkins)</b>, calidad con <b>SonarQube</b> y containerización con <b>Docker</b>.</li>
</ul>
</div>

<div class="entry indent">
<div class="row"><span class="sub">SGRwin v8 · NMS en producción 24/7</span><span class="meta">Mar 2024 – May 2025</span></div>
<ul>
  <li>Mantuve operativa una red de operadores con miles de eventos por minuto: diagnostiqué y corregí <b>fugas de memoria en C++ distribuido</b> bajo carga real, clave para la continuidad del servicio.</li>
  <li>Optimicé operaciones remotas <b>SSH</b> sobre anillos <b>MPLS</b> y circuitos de operador; corregí fallos de arranque y operaciones core que bloqueaban la puesta en servicio.</li>
</ul>
</div>

<h2>Proyectos y demostraciones</h2>

<ul>
  <li><b>SnmpLab</b> (C#/.NET · repositorio privado, disponible bajo petición): driver <b>SNMP v1/v2/v3 (USM)</b> propio y simulador de red. <b>120.000 polls con 0 fallos a ~38.300 req/s</b>, interoperabilidad con net-snmp y <b>207 pruebas automatizadas en verde</b>.</li>
  <li><b>Laboratorio de red de 18 nodos</b> (OSPF, MPLS/LDP) con NMS en vivo: <b>26.814 paquetes SNMP capturados en 15 s</b>, decodificados con tcpdump/tshark.</li>
  <li><b>woody_woodpacker</b> (público: <a href="https://github.com/dugonzal/woody-woodpacker">github.com/dugonzal/woody-woodpacker</a>): packer ELF64 en C + asm x86-64 con ChaCha20 y soporte PIE/ASLR; verificado con gdb/objdump/strace.</li>
</ul>

<p>El detalle de cada demostración, con la evidencia que la sostiene, está en <a href="{{ '/pruebas/' | relative_url }}">Pruebas</a>.</p>

<h2>Competencias</h2>

<dl class="skills">
  <dt>Lenguajes</dt><dd>Java · C++ · C · C#/.NET · x86-64 asm</dd>
  <dt>Backend y datos</dt><dd>Java (<b>Spring Boot</b>, Spring Framework) · <b>APIs REST</b> · microservicios · Kafka (event-driven) · PostgreSQL (BBDD relacional) · Maven · Git</dd>
  <dt>Sistemas y red</dt><dd>Linux · <b>Apache Tomcat</b> · SNMP v1/v2/v3 (USM) · SSH · TCP/UDP · HTTP · MPLS · SDH</dd>
  <dt>CI/CD y plataforma</dt><dd>GitLab · Jenkins · SonarQube · Docker · Kubernetes (k3s/k3d) · Terraform · Ansible · Helm</dd>
  <dt>Otros</dt><dd>MapStruct · Liquibase · Keycloak · SOAP · Oracle · Eclipse IDE</dd>
</dl>

<h2>Formación</h2>

<div class="entry">
<div class="row"><span class="org">Ingeniería de Software (RNCP Nivel 6 · Grado UE) — Nivel 7 en curso</span><span class="meta">2025 – Actualidad</span></div>
<div class="row"><span class="place">École 42 Urduliz · nivel 14/17 · Kubernetes, Terraform, Ansible, Helm · CI/CD reproducible</span></div>
</div>

<div class="entry">
<div class="row"><span class="org">Núcleo Común de Ingeniería de Software</span><span class="meta">2022 – 2024</span></div>
<div class="row"><span class="place">École 42 Urduliz · C, sistemas, redes y bajo nivel: Minishell, Webserver, Docker, Piscine C++</span></div>
</div>

<h2>Idiomas</h2>

<p><b>Español</b> nativo · <b>Inglés</b> lectura técnica y de código · conversación básica</p>
