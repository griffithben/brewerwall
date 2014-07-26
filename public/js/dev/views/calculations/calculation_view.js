(function() {
  define(function(require) {
    var ABV, Backbone, CalculationView, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/calculation_view.html');
    ABV = require('views/calculations/abv/abv_view');
    return CalculationView = Backbone.View.extend({
      ui: {},
      events: {},
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.abv = new ABV({
          el: this.$el
        });
      }
    });
  });

}).call(this);
