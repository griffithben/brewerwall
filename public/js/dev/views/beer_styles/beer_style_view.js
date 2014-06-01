(function() {
  define(function(require) {
    var BeerStyleView, LoginView, beer_style, viewtemplate;
    viewtemplate = require('text!views/beer_styles/beer_style_view.html');
    beer_style = require('models/beer_style');
    LoginView = {};
    return BeerStyleView = Backbone.View.extend({
      ui: {},
      events: {},
      initialize: function() {
        this.$el.append(_.template(viewtemplate));
      }
    });
  });

}).call(this);
