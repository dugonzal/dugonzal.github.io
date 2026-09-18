---
layout: page
lang: en
title: CV
permalink: /en/cv/
alt: /cv/
tagline: Software engineer — networks and transport, FCAPS, backend in 24/7 production
description: CV of Duvan M. González Escobar — networks and transport (SNMP, MPLS, SDH/PDH), NMS across FCAPS in 24/7 production, and Java and C++ backends on critical systems.
---
<h1>Duvan Mauricio González Escobar</h1>
<div class="row"><span class="place">Software Engineer · Networks and Transport · FCAPS · Backend in 24/7 production · {{ site.location_en }}</span></div>
<div class="row"><span class="place"><a href="mailto:{{ site.email }}">{{ site.email }}</a> · <a href="https://github.com/{{ site.github_username }}">github.com/{{ site.github_username }}</a></span></div>

<h2>Profile</h2>

<p>Two years keeping the network management system of telecom operators running in production: per-device <b>SNMP v1/v2/v3 polling</b>, <b>MPLS rings</b> and carrier circuits, remote <b>SSH</b> operations on network equipment, and thousands of events per minute arriving as traps. The core services behind that are <b>Java (Spring Boot)</b> and <b>C++</b>, with <b>Kafka</b> and <b>PostgreSQL</b> underneath. I cover all five <b>FCAPS</b> areas —fault, configuration, accounting, performance and security— with my own drivers that model any device over <b>SNMP v1/v2/v3</b>, and I act on the equipment, not just read it: <b>SET</b> operations, SSH configuration with drift detection and rollback. Multivendor cybersecurity aligned with <b>NIST</b> (CVEs, CPEs, CWEs) on the <b>VULCANO</b> project (INCIBE/NextGenerationEU). Everything I claim here I back with code and with measurements.</p>

<h2>Experience</h2>

<div class="entry">
<div class="row"><span class="org">Software Engineer — CIC Consulting Informático</span><span class="meta">Mar 2024 – Apr 2026</span></div>
<div class="row"><span class="place">Santander, Cantabria · NMS for telecom operators</span></div>
</div>

<div class="entry indent">
<div class="row"><span class="sub">Netwin v9 · NMS + Cybersecurity</span><span class="meta">May 2025 – Apr 2026</span></div>
<ul>
  <li>Built and maintained the monitoring services in <b>Java (Spring Boot)</b> and C++: per-device OID polling, transport over <b>Kafka</b> and persistence in <b>PostgreSQL</b>; build with <b>Maven</b> and deployment on <b>Tomcat</b> over <b>Linux</b>.</li>
  <li>Built <b>asset auto-discovery</b> (SNMP traps, inventory integration) and the C/C++ drivers that build the <b>full model of any device</b> over <b>SNMP v1/v2/v3</b> in seconds.</li>
  <li>Resolved <b>production incidents</b> in Java and C++: log analysis, functional and technical diagnosis, maintenance on Linux with follow-up until closure.</li>
  <li>Contributed to <b>VULCANO (INCIBE/NextGenerationEU)</b>: multivendor management of critical devices and vulnerability remediation (CVEs/CPEs/CWEs) aligned with <b>NIST</b>.</li>
  <li>Version control with <b>Git</b>, <b>CI/CD (GitLab, Jenkins)</b>, quality with <b>SonarQube</b> and containerisation with <b>Docker</b>.</li>
</ul>
</div>

<div class="entry indent">
<div class="row"><span class="sub">SGRwin v8 · NMS in 24/7 production</span><span class="meta">Mar 2024 – May 2025</span></div>
<ul>
  <li>Kept an operator network running with <b>thousands of events per minute</b> arriving as SNMP traps, on an NMS in continuous service: diagnosed and fixed <b>memory leaks in distributed C++</b> under real load, critical for service continuity.</li>
  <li>Improved the performance of the <b>MPLS network management modules</b> (operator rings and circuits) and of the <b>remote SSH operations</b> on network equipment in production.</li>
  <li>Fixed faults in <b>alarm drivers</b> and <b>polling</b> modules, and corrected startup faults and <b>core (SET) operations</b> that were blocking service commissioning.</li>
  <li>Sustained and extended legacy <b>C/C++</b> code in a system of high operational criticality.</li>
</ul>
</div>

<h2>Projects and demos</h2>

<ul>
  <li><b>SnmpLab</b> (C#/.NET · private repository, available on request): my own <b>SNMP v1/v2/v3 (USM)</b> driver and network simulator, covering the five <b>FCAPS</b> areas: alarms, history that survives a restart, SSH configuration with drift and rollback, accounting in closed windows and a notification channel. <b>120,000 polls with 0 failures at ~38,300 req/s</b>, interoperability with net-snmp and <b>207 automated tests passing</b>.</li>
  <li><b>18-node network lab</b> (OSPF, MPLS/LDP) with a live NMS: <b>237 checks with 0 failures (18/18 devices, 22/22 links)</b> verified at the protocol level and captures decoded with tcpdump/tshark. <b>Published in the open</b> (<a href="https://github.com/dugonzal/mpls-lab">github.com/dugonzal/mpls-lab</a>).</li>
  <li><b>woody_woodpacker</b> (public, <b>joint project</b> with Aingeru Álvarez: <a href="https://github.com/AingeruAlvarezSanchez/woody-woodpacker">project repo</a> · <a href="https://github.com/dugonzal/woody-woodpacker">my fork</a>): ELF64 packer in C + x86-64 assembly with ChaCha20 and PIE/ASLR support. My part: the self-decrypting stub, the ChaCha20 keystream and the runtime <code>.text</code> decryption; verified with gdb/objdump/strace.</li>
</ul>

<p>The detail of each demo, with the evidence behind it, is on the <a href="{{ '/en/pruebas/' | relative_url }}">Evidence</a> page.</p>

<h2>Skills</h2>

<dl class="skills">
  <dt>Networks and transport</dt><dd><b>SNMP v1/v2/v3 (USM)</b> with my own driver · <b>MPLS</b> (operator rings and circuits) · <b>SDH/PDH</b> in network management · <b>SSH</b> to network equipment · <b>TCP/UDP</b> · HTTP · capture and decoding (tcpdump, tshark)</dd>
  <dt>FCAPS and operations</dt><dd>Fault (alarms with hysteresis and correlation) · configuration (over SSH, with drift and rollback) · accounting (closed windows) · performance (polling and KPIs) · security (NIST, CVEs/CPEs/CWEs) · 24/7 production on-call</dd>
  <dt>Languages</dt><dd>Java · C++ · C · C#/.NET · x86-64 asm</dd>
  <dt>Backend and data</dt><dd>Java (<b>Spring Boot</b>, Spring Framework) · <b>REST APIs</b> · microservices · Kafka (event-driven) · PostgreSQL (relational databases) · Maven · Git</dd>
  <dt>Systems</dt><dd>Linux · <b>Apache Tomcat</b></dd>
  <dt>CI/CD and platform</dt><dd>GitLab · Jenkins · SonarQube · Docker · Kubernetes (k3s/k3d) · Terraform · Ansible · Helm</dd>
  <dt>Other</dt><dd>MapStruct · Liquibase · Keycloak · SOAP · Oracle · Eclipse IDE</dd>
</dl>

<h2>Education</h2>

<p>The school gave me the foundations: <b>C, systems, networks and low level</b>. What sustains the work today is what I learned by building a <b>complete NMS across FCAPS</b> —fault, configuration, accounting, performance and security— on my own 18-node lab network: a management system is not understood by reading about it, it is understood by having to make it work.</p>

<div class="entry">
<div class="row"><span class="org">Software Engineering (RNCP Level 6 · EU degree) — Level 7 in progress</span><span class="meta">2025 – Present</span></div>
<div class="row"><span class="place">École 42 Urduliz · level 14/17 · Kubernetes, Terraform, Ansible, Helm · reproducible CI/CD</span></div>
</div>

<div class="entry">
<div class="row"><span class="org">Software Engineering Common Core</span><span class="meta">2022 – 2024</span></div>
<div class="row"><span class="place">École 42 Urduliz · C, systems, networks and low level: Minishell, Webserver, Inception (Docker), C++ Piscine</span></div>
</div>

<h2>Languages</h2>

<p><b>Spanish</b> native · <b>English</b> technical and code reading · basic conversation</p>
