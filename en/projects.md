---
layout: page
lang: en
title: Projects
permalink: /en/projects/
alt: /proyectos/
description: Duvan M. González Escobar's projects — public repositories with their code and what can be verified, and private ones with their measured evidence.
---

<h1>Projects</h1>

<p class="lead">I publish what I can show, and for what I cannot I give the evidence and an open door. No entry on this page is a diagram: each one has code, or a measurement, or both.</p>

<p><b>Looking for someone to install it?</b> I install a system's observability in about a week. <a href="{{ '/en/services/' | relative_url }}">What I do, what it costs and how the week goes →</a></p>

<div class="case" id="cliente-0">
<h3>1 · Cliente 0 — NMS/FCAPS and SNMP driver, in the open</h3>
<p>The network management system and the SNMP driver feeding it, developed and measured on my own 18-node lab. The repository does not contain the product: it contains what its licence declares open — the wire contracts between agent and manager, the telemetry codecs (C37.118, IEC 104) and the licence gate, executable — plus the evidence of what was measured.</p>
<ul>
  <li><b>Repo:</b> <a href="https://github.com/dugonzal/cliente-0">github.com/dugonzal/cliente-0</a></li>
  <li><b>The lab it was measured on:</b> <a href="https://github.com/dugonzal/mpls-lab">github.com/dugonzal/mpls-lab</a> — 18 FRR nodes running OSPF and MPLS/LDP, 17 test benches and each one's independent verifier, in the open.</li>
  <li><b>Inside:</b> <code>open-reference/contracts/</code> (MIT) · <code>open-reference/stub/</code> · <code>evidence/</code> with the results · <code>docs/</code> with the article series.</li>
</ul>
</div>

<div class="case" id="snmplab">
<h3>2 · SnmpLab — my own SNMP v1/v2/v3 (USM) driver</h3>
<p>Telecom device driver and simulator written from scratch: PDU, ASN.1/BER, data types, sessions, timeouts and retries, USM with authentication and encryption, and topology discovery. No dependency on another NMS's logic.</p>
<ul>
  <li><b>Measured:</b> <b>207 automated tests passing</b> (unit, integration and protocol) and interoperability checked against real <b>net-snmp</b>.</li>
  <li><b>Performance:</b> <b>120,000 polls with zero failures at ~38,300 req/s</b>.</li>
</ul>
<p class="where">Private repository — opened on request for a hiring process.</p>
</div>

<div class="case" id="lab">
<h3>3 · 18-node network lab with a live NMS</h3>
<p>An 18-node setup with OSPF and MPLS/LDP and an NMS doing real polling, defined in files and brought up with a single command: it gets torn down and rebuilt identically, which is what makes it repeatable.</p>
<ul>
  <li><b>Verified at the protocol level:</b> <b>237 checks with 0 failures — 18/18 devices and 22/22 links</b> (stage 11 report, 14 Sep 2026).</li>
  <li><b>Material:</b> 13 stage reports with their captures decoded with tcpdump and tshark, including SNMPv3 authPriv over the lab.</li>
</ul>
<p class="where">Private repository — opened on request for a hiring process.</p>
</div>

<div class="case" id="woody">
<h3>4 · woody_woodpacker — ELF64 packer (joint project)</h3>
<p>A joint project with <b>Aingeru Álvarez</b>: a packer that encrypts the entrypoint segment of an ELF64 binary and injects a self-decrypting x86-64 stub, keeping PIE/ASLR intact. The resulting binary runs exactly like the original, with the code encrypted on disk. My part: the self-decrypting stub, the ChaCha20 keystream and the runtime <code>.text</code> decryption.</p>
<ul>
  <li><b>Project repo:</b> <a href="https://github.com/AingeruAlvarezSanchez/woody-woodpacker">AingeruAlvarezSanchez/woody-woodpacker</a></li>
  <li><b>My fork:</b> <a href="https://github.com/dugonzal/woody-woodpacker">dugonzal/woody-woodpacker</a></li>
  <li><b>Verification:</b> at runtime with readelf, objdump, gdb and strace.</li>
</ul>
</div>

<div class="case" id="libsam">
<h3>5 · libsam — x86-64 assembly library</h3>
<p>The libc functions rewritten in assembly (the <i>libasm</i> project from the 42 cursus), with a <code>Makefile</code> and a <code>Dockerfile</code> so the build reproduces on any machine.</p>
<ul>
  <li><b>Repo:</b> <a href="https://github.com/dugonzal/libsam">github.com/dugonzal/libsam</a></li>
</ul>
</div>

<div class="case" id="turing">
<h3>6 · ft_turing — Turing machine in OCaml (joint project)</h3>
<p>A Turing machine driven by a JSON description: parsing, dynamic tape, step execution and partial trace, plus a bonus that estimates the time complexity of the machine it has just run. What keeps it honest is a test battery that compares the output with the expected one <b>byte by byte</b>: if the behaviour changes, a test fails.</p>
<ul>
  <li><b>Project repo:</b> <a href="https://github.com/dugonzal/ft_turing">github.com/dugonzal/ft_turing</a></li>
  <li><b>My part:</b> tape and executor, the trace CLI and the complexity bonus; the parser is my teammate's.</li>
</ul>
<p class="where">The learning version, with the full battery, is a private repository I open on request.</p>
</div>

<div class="case" id="cursus">
<h3>7 · École 42 cursus — public repositories</h3>
<p>The cursus projects, each with its code and a reproducible build:</p>
<ul>
  <li><b>C</b>: <a href="https://github.com/dugonzal/libft">libft</a> (own library) · <a href="https://github.com/dugonzal/get_next_line">get_next_line</a> · <a href="https://github.com/dugonzal/push_swap">push_swap</a> (two-stack sorting) · <a href="https://github.com/dugonzal/Philosophers">Philosophers</a> (threads and semaphores) · <a href="https://github.com/dugonzal/Minitalk">Minitalk</a> (signal IPC) · <a href="https://github.com/dugonzal/so_long">so_long</a> · <a href="https://github.com/dugonzal/cub3d">cub3d</a> (raycasting) · <a href="https://github.com/dugonzal/ft_printf">ft_printf</a></li>
  <li><b>C++</b>: <a href="https://github.com/dugonzal/cpp">cpp</a> (cursus modules) · <a href="https://github.com/dugonzal/webserver">webserver</a> (HTTP server)</li>
  <li><b>Java</b>: <a href="https://github.com/dugonzal/avaj-launcher">avaj-launcher</a> (air traffic simulation from a UML)</li>
  <li><b>Python</b>: <a href="https://github.com/dugonzal/rsa">rsa</a> (RSA cryptography)</li>
  <li><b>Infrastructure</b>: <a href="https://github.com/dugonzal/inception">inception</a> (Docker) · <a href="https://github.com/dugonzal/archlinux-docker">archlinux-docker</a></li>
</ul>
</div>

<div class="case" id="otros">
<h3>8 · Own tools, also public</h3>
<ul>
  <li><a href="https://github.com/dugonzal/patent-research-mcp">patent-research-mcp</a> — MCP server in Python to fetch and analyse patents: ingestion, structured sections and export.</li>
  <li><a href="https://github.com/dugonzal/human-capability-os">human-capability-os</a> — TypeScript, a deterministic capability model with explicit consent.</li>
</ul>
</div>

<h2>How I give access to what is not public</h2>

<p>I open the private repositories without fuss during a hiring process: temporary access, the reports, or we bring it up on a call and you see it running on my machine. The detail of every piece of evidence is on the <a href="{{ '/en/pruebas/' | relative_url }}">Evidence</a> page.</p>
