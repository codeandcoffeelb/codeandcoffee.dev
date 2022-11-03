---
title:  "News"
date:   2017-01-25 00:00:00
layout: layouts/subpage.njk
---

<h1 class="title is-1">News</h1>

<ul>
{% for c in collections.news %}
    <li>
        <a href="{{ c.url }}">
        {{ c.data.title }} - {{ c.data.date }}
        </a>
    </li>
{% endfor %}
</ul>