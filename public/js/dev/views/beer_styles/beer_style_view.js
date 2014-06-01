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
        var self;
        self = this;
        beer_style.collection.fetch({
          success: function(collection, response, options) {
            return self.$el.append(_.template(viewtemplate, collection));
          }
        });
      }
    });
  });

}).call(this);
