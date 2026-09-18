---
layout: page
lang: es
title: Blog
permalink: /blog/
alt: /en/blog/
description: Entradas técnicas de Duvan M. González Escobar — sistemas en producción, redes y telecomunicaciones, bajo nivel. Con las cifras y la evidencia de cada cosa.
---

<h1>Blog</h1>

<p class="lead">Escribo de lo que toco de verdad: sistemas en producción, redes y telecomunicaciones, y bajo nivel. Cada entrada lleva sus cifras y sus comandos para que puedas repetirla.</p>

<p><b>¿Buscas a alguien que te lo monte?</b> Monto la observabilidad de un sistema en aproximadamente una semana. <a href="{{ '/servicios/' | relative_url }}">Qué hago, qué cuesta y cómo es la semana →</a></p>

{% assign es_posts = site.posts | where_exp: "p", "p.lang != 'en'" %}
{% if es_posts.size == 0 %}
<p class="muted">Todavía no hay entradas publicadas. La primera está en el horno.</p>
{% endif %}

{% for post in es_posts %}
{% assign idx = post.date | date: "%-m" | minus: 1 %}
<div class="case">
  <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <p class="meta">{{ post.date | date: "%-d" }} de {{ site.meses[idx] }} de {{ post.date | date: "%Y" }}{% if post.tags %} · {{ post.tags | join: " · " }}{% endif %}</p>
  {% if post.description %}<p>{{ post.description }}</p>{% else %}<p>{{ post.excerpt | strip_html | truncatewords: 45 }}</p>{% endif %}
  <p><a href="{{ post.url | relative_url }}">Leer →</a></p>
</div>
{% endfor %}
