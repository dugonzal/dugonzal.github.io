---
layout: page
lang: en
title: Services
permalink: /en/services/
alt: /servicios/
tagline: Software engineer — observability, networks and platform
description: End-to-end observability installed on your stack in about a week — metrics, logs, dashboards and alerts with written thresholds. Scope, pricing and process.
---

<h1>Services</h1>

<p class="lead">I install a system's observability in about a week: metrics, logs, dashboards and alerts that actually page someone, configured for your system and handed over with the documentation.</p>

<p>I come from two years of keeping telecom operators' networks alive in 24/7 production: thousands of events per minute, incidents at any hour, and the memory leaks that only show up under real load. What I do now is leave that same level of visibility installed on infrastructure that isn't mine. Every number on this page has its measurement on the <a href="{{ '/en/pruebas/' | relative_url }}">Evidence</a> page.</p>

<h2>What's included</h2>

<ul>
  <li><b>Metrics and logs</b> on a stack that has already matured: VictoriaMetrics or Prometheus for metrics, Loki for logs, Grafana for the dashboards.</li>
  <li><b>Dashboards per service.</b> Not one giant panel nobody looks at: one per service, with what you need to see when something goes wrong.</li>
  <li><b>Alerts with written thresholds</b> for your system, plus the runbook that says who does what when they fire. No factory defaults.</li>
  <li><b>A real handover:</b> a recorded session, the documentation in your repository, the credentials in your hands. Nothing stays tied to me.</li>
</ul>

<h2>Three ways to start</h2>

<div class="cards">
  <div class="card">
    <h3>1 · Start — €2,000</h3>
    <p>One payment, nothing after it. The stack goes up (VictoriaMetrics or Prometheus + Grafana), with per-service dashboards, basic alerts and the deployment documented. For teams that want to stop operating blind and see where to start.</p>
  </div>
  <div class="card">
    <h3>2 · In production — €3,500 + €1,500-2,000/month</h3>
    <p>Everything in Start, plus Loki for logs, alerts with escalation, per-service SLOs and an on-call runbook. This is the one teams buy once the system has customers behind it.</p>
  </div>
  <div class="card">
    <h3>3 · Watched platform — €5,000+ + €2,500-4,000/month</h3>
    <p>Everything above, plus correlation of metrics, logs and traces, high-concurrency analytics (Go, Kafka, PostgreSQL), an SLA with response times and infrastructure cost optimisation. For teams that need a partner on call, not an installer.</p>
  </div>
</div>

<p>You enter at the first level and move up when you need to. Payment is 50% on signature and 50% on delivery; the monthly maintenance has a three-month minimum, because thresholds get tuned with time and with data.</p>

<h2>What else I do</h2>

<p>Observability is the way in, because it is what gets asked for most. These are the other three, and they run through the same process and the same terms:</p>

<ul>
  <li><b>Platform and Kubernetes.</b> A genuinely reproducible cluster — infrastructure as code, GitOps, network closed by default, identity, secrets, image registry — plus a test environment that comes up the same way production does. Priced by scope: two to six weeks. I don't touch your applications' code.</li>
  <li><b>On-call and maintenance.</b> If the system is already up and nobody watches it at weekends: <b>€1,500–2,000/month</b> in production, <b>€2,500–4,000/month</b> with a written SLA and response times. Three-month minimum, because thresholds get tuned with data.</li>
  <li><b>Backend in Go or Java, by sprint.</b> One vertical with a delivery date: API, persistence, tests and deployment, with the numbers of what it holds. Fixed price before starting.</li>
</ul>

<p>And if your world is <b>industry or energy</b> (SCADA, IEC 104, IEC 61850, NIS2), the way in starts with an assessment measured on your own equipment: the gaps in writing, ordered by risk, and a phased plan. Quoted separately.</p>

<h2>How the week goes</h2>

<ul>
  <li><b>Day 0.</b> I send you six questions in writing. What breaks, how often, how long it takes you to notice, who watches it, what you measure today and how it is put together. They take five minutes to answer.</li>
  <li><b>Day 1-2.</b> Inventory: which services exist, which exporters are already there, and what can be measured from day one.</li>
  <li><b>Day 2-3.</b> The stack up on your infrastructure, without touching what already runs.</li>
  <li><b>Day 3-4.</b> Per-service dashboards and alerts with thresholds in numbers, not adjectives.</li>
  <li><b>Day 4-5.</b> SLOs and the on-call runbook, with every alert's threshold written down.</li>
  <li><b>Day 5-6.</b> Handover: a recorded hour, the documentation in your repository, the keys with you.</li>
  <li><b>Day 6-7.</b> We measure before and after (time to detect, time to resolve, useful alerts versus noise) and I close with the second invoice.</li>
</ul>

<p>Thirty days after delivery I ask for the testimonial and, if the work went well, we continue with the monthly retainer.</p>

<h2>What's not included</h2>

<p>I don't replace Datadog if what you want is managed SaaS: that's a different thing and it works. I don't build product features. There is no 24/7 on-call until you contract the third level. And I don't take projects where nothing can be measured: without numbers before and after, neither of us will know whether I was any use.</p>

<h2>How to start</h2>

<p>Write to <a href="mailto:{{ site.email }}">{{ site.email }}</a> with one line about what breaks. I'll send the six questions, tell you which level fits and what it costs, and if you want to see it working before deciding anything, I'll pass you a live panel with real data.</p>

<p class="muted">All in writing, no calls.</p>
