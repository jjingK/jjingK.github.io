---
layout: page
title: Tags
---

<!-- from https://blog.meinside.pe.kr/Adding-tag-cloud-and-archives-page-to-Jekyll/ -->

<ul class="tag-cloud">
{% for tag in site.tags %}
    <li style="font-size: {{ tag | last | size | times: 100 | divided_by: site.tags.size | plus: 70  }}%">
        <a href="#{{ tag | first | slugize }}">
            {{ tag | first }}
        </a>
    </li>
{% endfor %}
</ul>

<div class="archives">
{% for tag in site.tags %}
  <div class="archives-group">
    {% capture tag_name %}{{ tag | first }}{% endcapture %}
    <h3 id="#{{ tag_name | slugsize }}">
      {{ tag_name }}<span class="count">({{ site.tags[tag_name].size }})</span>
    </h3>
    <a name="{{ tag_name | slugize }}"></a>
    {% for post in site.tags[tag_name] %}
      <article class="archive-item">
        <h3><a href="{{ root_url }}{{ post.url }}">{{post.title}}</a></h3>
      </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
