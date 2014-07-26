(function() {
  define(function(require) {
    var ABVView, Backbone, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/abv/abv_view.html');
    require('beercalc');
    return ABVView = Backbone.View.extend({
      ui: {},
      events: {},
      initialize: function() {
        var self;
        self = this;
        console.log(Beercalc.abv(1.080, 1.020));
        this.$el.append(_.template(viewtemplate));
      }
    });
  });

}).call(this);
