(function() {
  define(function(require) {
    var $, Backbone, Yeast, _;
    _ = require('underscore');
    Backbone = require('backbone');
    $ = require('jquery');
    Yeast = {};
    Yeast.Model = Backbone.Model.extend({});
    Yeast.Collection = Backbone.Collection.extend({
      model: Yeast.Model,
      url: "/api/v1/yeasts"
    });
    return {
      collection: new Yeast.Collection,
      model: Yeast.Model
    };
  });

}).call(this);
