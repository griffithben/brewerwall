{% extends "layout_secondary.html" %}
{% block script%}

{% endblock %}

{% block content %}
<div class="row">
  <div class="col-sm-12 col-md-12">
    <div class="secondary-header">
      <h2>{{ hop.name }}</h2>
      <div class="secondary-subset pull-right">
        <span class="label label-default pull-right">
          <h6>{% if hop.type == 'Both' %}
            Aroma & Bittering
          {% else %}
            {{ hop.type }}
          {% endif %}</h6>
        </span>
        <span class="label label-default pull-right">
          <h6>{{ hop.origin }}</h6>
        </span>
      </div>
    </div>
    <div>
      <pre id="api-url">brewerwall.dev/api/hops/{{ hop.id }}</pre>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-xs-3 col-sm-3 col-md-3">
    <label class="bold">Alpha</label>
    <p>{{ hop.alpha_min }}% - {{ hop.alpha_max }}%</p>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3">
    <label class="bold">Beta</label>
    <p>{{ hop.beta_min }}% - {{ hop.beta_max }}%</p>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3">
    <label class="bold">Cohumulone</label>
    <p>{{ hop.cohumulone_min }}% - {{ hop.cohumulone_max }}%</p>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3">
    <label class="bold">Total Oil</label>
    <p>{{ hop.total_oil_min }}% - {{ hop.total_oil_max }}%</p>
  </div>
</div>

<div class="row">
  <div class="col-xs-3 col-sm-3 col-md-3">
    <label class="bold">Myrcene</label>
    <p>{{ hop.myrcene_min }}% - {{ hop.myrcene_max }}%</p>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3">
    <label class="bold">Humulene</label>
    <p>{{ hop.humulene_min }}% - {{ hop.humulene_max }}%</p>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3">
    <label class="bold">Farnesene</label>
    <p>{{ hop.farnesene_min }}% - {{ hop.farnesene_max }}%</p>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3">
    <label class="bold">Caryophyllene</label>
    <p>{{ hop.caryophyllene_min }}% - {{ hop.caryophyllene_max }}%</p>
  </div>
</div>

<div class="row">
  <div class="col-sm-3 col-md-3">
    <label class="bold">Aroma</label>
    <p>{{ hop.aroma }}</p>
  </div>
  <div class="col-sm-9 col-md-9">
    <label class="bold">Description</label>
    <p>{{ hop.description }}</p>
  </div>
</div>

{% endblock %}
