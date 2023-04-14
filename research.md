---
layout: page
title: Research
permalink: /research/
---

{% assign imgwidth=100 %}

My main research interests are **expressive rendering and image synthesis stylization**.  

The subject of my PhD is linked with **mountain panorama maps**. It is a broad topic that covers many fields from history, cartography, to visual perception and rendering.
I am focused on the style of the [Atelier Pierre Novat], that produces hand-made paintings with a high aesthetic quality but still conveying information in a very efficient way.
My main goal is to **understand the style of the artist**, i.e. translate his sensitivity and intuitions into concepts and algorithms.
I also aim at providing semi-automated ways to render such panoramas and tools to allow artists to finely control their production.
One of the key idea is to **understand what degrees of freedom we have with respect to reality, without altering global coherence and plausibility of the panorama**.  

## Publications

<!-- display based on date and publication type -->
<!-- either journal, conference, talk or report -->

<!-- add years in a single array: [2017, 2016, ...] -->
{% for post in site.posts %}
  {% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
  {% if year != y %}
    {% assign year = y %}
    {% if alldates %}
      {% assign alldates=alldates | append: "," | append: y %}
    {% else %}
      {% assign alldates=y %}
    {% endif %}
  {% endif %}
{% endfor %}
{% assign dates=alldates | split: "," %}

<!-- loop over each date containing a publication -->
<div class="post">
{% for d in dates %}
  <!-- count journals, conferences, talks, reports, book chapters, thesis, posters, for the current year -->
  {% assign nb_j=0 %}
  {% assign nb_c=0 %}
  {% assign nb_t=0 %}
  {% assign nb_r=0 %}
  {% assign nb_b=0 %}
  {% assign nb_th=0 %}
  {% assign nb_p=0 %}
  {% for paper in site.posts %}
    {% capture year %}{{paper.date | date: "%Y"}}{% endcapture %}
    {% if year == d %}

      {% if paper.tags contains 'journal' %}
        {% assign nb_j=nb_j | plus: 1 %}
      {% endif %}

      {% if paper.tags contains 'conference' %}
        {% assign nb_c=nb_c | plus: 1 %}
      {% endif %}

      {% if paper.tags contains 'talk' %}
        {% assign nb_t=nb_t | plus: 1 %}
      {% endif %}

      {% if paper.tags contains 'report' %}
        {% assign nb_r=nb_r | plus: 1 %}
      {% endif %}

      {% if paper.tags contains 'bookchap' %}
        {% assign nb_b=nb_b | plus: 1 %}
      {% endif %}

      {% if paper.tags contains 'thesis' %}
        {% assign nb_th=nb_th | plus: 1 %}
      {% endif %}

      {% if paper.tags contains 'poster' %}
        {% assign nb_p=nb_p | plus: 1 %}
      {% endif %}

    {% endif %}
  {% endfor %}

  <!-- add them in order -->
  <div class="publication-date" align="middle"> {{ d }}<br></div>

  {% if nb_th>0 %}
    <div class="publication-type"> — Thesis —</div>
    {% for paper in site.posts %}
      {% capture year %}{{paper.date | date: "%Y"}}{% endcapture %}
      {% if year == d and paper.tags contains 'thesis' %}
        {% include publication.html %}
      {% endif %}
    {% endfor %}
  {% endif %}

  {% if nb_j>0 %}
    <div class="publication-type"> — Journal papers —</div>
    {% for paper in site.posts %}
      {% capture year %}{{paper.date | date: "%Y"}}{% endcapture %}
      {% if year == d and paper.tags contains 'journal' %}
        {% include publication.html %}
      {% endif %}
    {% endfor %}
  {% endif %}

  {% if nb_c>0 %}
    <div class="publication-type"> — Conference papers —</div>
    {% for paper in site.posts %}
      {% capture year %}{{paper.date | date: "%Y"}}{% endcapture %}
      {% if year == d and paper.tags contains 'conference' %}
        {% include publication.html %}
      {% endif %}
    {% endfor %}
  {% endif %}

  {% if nb_p>0 %}
    <div class="publication-type"> — Posters —</div>
    {% for paper in site.posts %}
      {% capture year %}{{paper.date | date: "%Y"}}{% endcapture %}
      {% if year == d and paper.tags contains 'poster' %}
        {% include publication.html %}
      {% endif %}
    {% endfor %}
  {% endif %}

  {% if nb_t>0 %}
    <div class="publication-type"> — Talks —</div>
    {% for paper in site.posts %}
      {% capture year %}{{paper.date | date: "%Y"}}{% endcapture %}
      {% if year == d and paper.tags contains 'talk' %}
        {% include publication.html %}
      {% endif %}
    {% endfor %}
  {% endif %}

  {% if nb_b>0 %}
    <div class="publication-type"> — Book chapters —</div>
    {% for paper in site.posts %}
      {% capture year %}{{paper.date | date: "%Y"}}{% endcapture %}
      {% if year == d and paper.tags contains 'bookchap' %}
        {% include publication.html %}
      {% endif %}
    {% endfor %}
  {% endif %}

  {% if nb_r>0 %}
    <div class="publication-type"> — Research reports —</div>
    {% for paper in site.posts %}
      {% capture year %}{{paper.date | date: "%Y"}}{% endcapture %}
      {% if year == d and paper.tags contains 'report' %}
        {% include publication.html %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}
</div>



[Atelier Pierre Novat]: http://atelier.novat.free.fr/atelier_pierre_novat/liste_des_panoramas.html
