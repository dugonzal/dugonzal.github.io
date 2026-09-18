---
layout: page
lang: en
title: Evidence
permalink: /en/pruebas/
alt: /pruebas/
tagline: Software engineer — Java backend in 24/7 production, networks and low level
description: Every claim on this profile with the evidence that backs it — measured numbers, repositories and what can and cannot be shown.
---

<h1>Evidence</h1>

<p class="lead">This page is the reason this site exists: no adjectives here. Every claim comes with what backs it, and whatever I cannot show is marked as such. No number is an estimate: each one comes from a report or from a run I can repeat in front of you.</p>

<div class="case" id="snmp">
<h3>1 · I wrote a complete SNMP driver (v1/v2/v3 with USM), I did not just use one</h3>
<p>My own driver and simulator for telecom devices: PDUs, ASN.1/BER, data types, session management, timeouts and retries, USM with authentication and encryption, and topology discovery. Without depending on another NMS's logic.</p>
<ul>
  <li><b>Backed by:</b> <b>207 automated tests passing</b> (unit, integration and protocol), run against the simulator and against real <b>net-snmp</b> to check interoperability.</li>
  <li><b>Measured performance:</b> <b>120,000 polls with zero failures at ~38,300 req/s</b>; ~39,700 req/s against a single agent with a multiplexed UDP socket.</li>
</ul>
<p class="where">Private repository — opened on request for a hiring process.</p>
</div>

<div class="case" id="lab">
<h3>2 · I built an 18-node network lab and measured it</h3>
<p>An 18-node setup with OSPF and MPLS/LDP plus a live NMS, brought up from scratch on every run. It is not a diagram: it is a network that starts and answers.</p>
<ul>
  <li><b>Backed by:</b> <b>237 automated checks with 0 failures: 18/18 devices and 22/22 links verified at the protocol level</b>, plus <b>13 stage reports</b> with their captures decoded with tcpdump and tshark (stage 11 report, 14 Sep 2026).</li>
  <li><b>Fine detail:</b> SNMPv3 authPriv over the lab — visible identity, encrypted payload, verifiable in the capture.</li>
</ul>
<p class="where">Private repository — opened on request for a hiring process.</p>
</div>

<div class="case" id="backend">
<h3>3 · Java backend in 24/7 production, with on-call and KPIs</h3>
<p>Core services of commercial NMS platforms for operators for <b>25 months</b> (March 2024 – April 2026) at CIC Consulting Informático. Maintenance and modernisation of services, production problem analysis and performance optimisation.</p>
<ul>
  <li><b>Backed by:</b> experience verifiable by employment reference, the products themselves (SGRwin v8 and Netwin v9, in production at operators) and the technical detail I can defend line by line in an interview.</li>
  <li><b>Honest limit:</b> the code belongs to the client and cannot be published — not a single line, even if I am asked.</li>
</ul>
</div>

<div class="case" id="elf">
<h3>4 · ELF64 packer in C and assembly, with real encryption</h3>
<p>A tool that encrypts the entrypoint segment of an ELF64 binary and injects a self-decrypting x86-64 stub, keeping PIE/ASLR intact. The result runs exactly like the original, with the code encrypted on disk.</p>
<ul>
  <li><b>Backed by:</b> public repository with the code and the tests, plus runtime verification with readelf, objdump, gdb and strace.</li>
  <li><b>Joint project</b> (42) with Aingeru Álvarez: the project repo is <a href="https://github.com/AingeruAlvarezSanchez/woody-woodpacker">AingeruAlvarezSanchez/woody-woodpacker</a> and mine is the fork (<a href="https://github.com/dugonzal/woody-woodpacker">dugonzal/woody-woodpacker</a>). My part: the self-decrypting stub, the ChaCha20 keystream and the runtime <code>.text</code> decryption.</li>
</ul>
</div>

<div class="case" id="ocaml">
<h3>5 · Turing machine in OCaml with byte-exact output</h3>
<p>Implementation of École 42's <code>ft_turing</code> project: parsing the machine description, dynamic tape, step-by-step execution and trace. The interesting part is not that it works: it is that <b>it cannot behave differently without a test firing</b>.</p>
<ul>
  <li><b>Backed by:</b> a suite of <b>112 golden tests</b> comparing generated output with the expected one, byte by byte, and a <code>make test</code> that runs them all.</li>
</ul>
<p class="where">Private repository — opened on request for a hiring process.</p>
</div>

<h2>How to access what is not public</h2>

<p>I open private repositories without any problem during a hiring process: I give you temporary access, I send you the reports, or we get on a call and you watch it running on my machine. What I will not do is ask you to take my word for it.</p>
