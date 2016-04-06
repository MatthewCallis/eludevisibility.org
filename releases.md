---
layout: page
title : Releases
permalink: /releases/
tagline: "ROM Releases"
---

{% for category in site.categories %}
  {% unless category == 'releases' %}
  <h2><a name="{{ category | first }}">{{ category | first }}</a></h2>
  <ul>
  {% for posts in category %}
    {% capture site_posts %}{% for post in posts %}{{ post.title }}#{{ post.url }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
    {% assign sorted_posts = site_posts | split:',' | sort %}
    {% for post in sorted_posts %}
      {% assign keyValue = post | split: '#' %}
      {% if keyValue[1] %}
      <li>
        <a href="{{ keyValue[1] }}" title="{{ keyValue[0] }}">{{ keyValue[0] }}</a>
      </li>
      {% endif %}
    {% endfor %}
  {% endfor %}
  </ul>
  {% endunless %}
{% endfor %}
