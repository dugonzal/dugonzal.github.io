---
layout: page
lang: en
title: CV
permalink: /en/cv/
alt: /cv/
tagline: Software engineer — Java backend in 24/7 production, networks and low level
description: CV of Duvan M. González Escobar — Java backend in 24/7 production, networks and telecommunications, low level in C and assembly.
---
<h1>Duvan Mauricio González Escobar</h1>
<div class="row"><span class="place">Software Engineer · Java Backend · 24/7 Critical Systems · {{ site.location_en }}</span></div>
<div class="row"><span class="place"><a href="mailto:{{ site.email }}">{{ site.email }}</a> · <a href="https://github.com/{{ site.github_username }}">github.com/{{ site.github_username }}</a></span></div>

<h2>Profile</h2>

<p>Software engineer specialised in <b>Java backends for mission-critical systems in 24/7 production</b> (commercial NMS platforms for telecom operators). Core services and <b>REST APIs</b>, <b>event-driven microservices with Kafka + PostgreSQL</b>, <b>Linux</b> and <b>CI/CD</b>. Day to day: maintenance and modernisation of services, <b>performance optimisation</b> and <b>production incident resolution</b>. Everything I claim here I back with code and with measurements.</p>

<h2>Experience</h2>

<div class="entry">
<div class="row"><span class="org">Software Engineer — CIC Consulting Informático</span><span class="meta">Mar 2024 – Apr 2026</span></div>
<div class="row"><span class="place">Santander, Cantabria · NMS for telecom operators</span></div>
</div>

<div class="entry indent">
<div class="row"><span class="sub">Netwin v9 · NMS + Cybersecurity</span><span class="meta">May 2025 – Apr 2026</span></div>
<ul>
  <li>Built and maintained the monitoring services in <b>Java (Spring Boot)</b> and C++: per-device OID polling, transport over <b>Kafka</b> and persistence in <b>PostgreSQL</b>; build with <b>Maven</b> and deployment on <b>Tomcat</b> over <b>Linux</b>.</li>
  <li>Built <b>asset auto-discovery</b> (SNMP traps, inventory integration) and the C/C++ drivers that build the full model of any device over <b>SNMP v1/v2/v3</b>.</li>
  <li>Resolved <b>production incidents</b> in Java and C++: log analysis, functional and technical diagnosis, maintenance on Linux with follow-up until closure.</li>
  <li>Contributed to <b>VULCANO (INCIBE/NextGenerationEU)</b>: multivendor management of critical devices and vulnerability remediation (CVEs/CPEs/CWEs) aligned with <b>NIST</b>.</li>
  <li>Version control with <b>Git</b>, <b>CI/CD (GitLab, Jenkins)</b>, quality with <b>SonarQube</b> and containerisation with <b>Docker</b>.</li>
</ul>
</div>

<div class="entry indent">
<div class="row"><span class="sub">SGRwin v8 · NMS in 24/7 production</span><span class="meta">Mar 2024 – May 2025</span></div>
<ul>
  <li>Kept an operator network running thousands of events per minute: diagnosed and fixed <b>memory leaks in distributed C++</b> under real load, critical for service continuity.</li>
  <li>Optimised remote <b>SSH</b> operations over <b>MPLS</b> rings and carrier circuits; fixed startup faults and core operations that were blocking service commissioning.</li>
</ul>
</div>

<h2>Projects and demos</h2>

<ul>
  <li><b>SnmpLab</b> (C#/.NET · private repository, available on request): my own <b>SNMP v1/v2/v3 (USM)</b> driver and network simulator. <b>120,000 polls with 0 failures at ~38,300 req/s</b>, interoperability with net-snmp and <b>207 automated tests passing</b>.</li>
  <li><b>18-node network lab</b> (OSPF, MPLS/LDP) with a live NMS: <b>237 checks with 0 failures (18/18 devices, 22/22 links)</b> verified at the protocol level and captures decoded with tcpdump/tshark.</li>
  <li><b>woody_woodpacker</b> (public, <b>joint project</b> with Aingeru Álvarez: <a href="https://github.com/AingeruAlvarezSanchez/woody-woodpacker">project repo</a> · <a href="https://github.com/dugonzal/woody-woodpacker">my fork</a>): ELF64 packer in C + x86-64 assembly with ChaCha20 and PIE/ASLR support. My part: the self-decrypting stub, the ChaCha20 keystream and the runtime <code>.text</code> decryption; verified with gdb/objdump/strace.</li>
</ul>

<p>The detail of each demo, with the evidence behind it, is on the <a href="{{ '/en/pruebas/' | relative_url }}">Evidence</a> page.</p>

<h2>Skills</h2>

<dl class="skills">
  <dt>Languages</dt><dd>Java · C++ · C · C#/.NET · x86-64 asm</dd>
  <dt>Backend and data</dt><dd>Java (<b>Spring Boot</b>, Spring Framework) · <b>REST APIs</b> · microservices · Kafka (event-driven) · PostgreSQL (relational databases) · Maven · Git</dd>
  <dt>Systems and network</dt><dd>Linux · <b>Apache Tomcat</b> · SNMP v1/v2/v3 (USM) · SSH · TCP/UDP · HTTP · MPLS · SDH</dd>
  <dt>CI/CD and platform</dt><dd>GitLab · Jenkins · SonarQube · Docker · Kubernetes (k3s/k3d) · Terraform · Ansible · Helm</dd>
  <dt>Other</dt><dd>MapStruct · Liquibase · Keycloak · SOAP · Oracle · Eclipse IDE</dd>
</dl>

<h2>Education</h2>

<div class="entry">
<div class="row"><span class="org">Software Engineering (RNCP Level 6 · EU degree) — Level 7 in progress</span><span class="meta">2025 – Present</span></div>
<div class="row"><span class="place">École 42 Urduliz · level 14/17 · Kubernetes, Terraform, Ansible, Helm · reproducible CI/CD</span></div>
</div>

<div class="entry">
<div class="row"><span class="org">Software Engineering Common Core</span><span class="meta">2022 – 2024</span></div>
<div class="row"><span class="place">École 42 Urduliz · C, systems, networks and low level: Minishell, Webserver, Docker, C++ Piscine</span></div>
</div>

<h2>Languages</h2>

<p><b>Spanish</b> native · <b>English</b> technical and code reading · basic conversation</p>
