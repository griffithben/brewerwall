(function() {
  define(function(require) {
    var $, Backbone, SRM, _;
    _ = require('underscore');
    Backbone = require('backbone');
    $ = require('jquery');
    SRM = {};
    SRM.Model = Backbone.Model.extend({});
    SRM.Collection = Backbone.Collection.extend({
      model: SRM.Model,
      url: "/api/v1/srms"
    });
    return {
      collection: new SRM.Collection,
      model: SRM.Model
    };
  });

}).call(this);
