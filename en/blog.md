---
layout: page
lang: en
title: Blog
permalink: /en/blog/
alt: /blog/
tagline: Software engineer — Java backend in 24/7 production, networks and low level
description: Technical posts by Duvan M. González Escobar — production systems, networks and telecommunications, low level. With the numbers and the evidence for each one.
---

<h1>Blog</h1>

<p class="lead">I write about what I actually touch: production systems, networks and telecommunications, and low level. Every post carries its numbers and its commands so you can reproduce it.</p>

<p><b>Looking for someone to install it?</b> I install a system's observability in about a week. <a href="{{ '/en/services/' | relative_url }}">What I do, what it costs and how the week goes →</a></p>

{% assign en_posts = site.posts | where_exp: "p", "p.lang == 'en'" %}
{% if en_posts.size == 0 %}
<p class="muted">No posts published yet. The first one is in the oven.</p>
{% endif %}

{% for post in en_posts %}
{% assign idx = post.date | date: "%-m" | minus: 1 %}
<div class="case">
  <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <p class="meta">{{ site.months[idx] }} {{ post.date | date: "%-d" }}, {{ post.date | date: "%Y" }}{% if post.tags %} · {{ post.tags | join: " · " }}{% endif %}</p>
  {% if post.description %}<p>{{ post.description }}</p>{% else %}<p>{{ post.excerpt | strip_html | truncatewords: 45 }}</p>{% endif %}
  <p><a href="{{ post.url | relative_url }}">Read →</a></p>
</div>
{% endfor %}
