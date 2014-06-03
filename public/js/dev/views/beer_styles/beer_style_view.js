(function() {
  define(function(require) {
    var BeerStyleView, LoginView, beer_style, listtemplate, viewtemplate;
    viewtemplate = require('text!views/beer_styles/beer_style_view.html');
    listtemplate = require('text!views/beer_styles/beer_style_list.html');
    beer_style = require('models/beer_style');
    LoginView = {};
    return BeerStyleView = Backbone.View.extend({
      ui: {},
      events: {
        'change #abv': 'onFilterChange',
        'change #ibu': 'onFilterChange',
        'change #og': 'onFilterChange',
        'change #fg': 'onFilterChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.list = this.$el.find('#list');
        this.ui.abv = this.$el.find('#abv');
        this.ui.ibu = this.$el.find('#ibu');
        this.ui.og = this.$el.find('#og');
        this.ui.fg = this.$el.find('#fg');
        beer_style.collection.fetch({
          success: function(collection, response, options) {
            return self.ui.list.html(_.template(listtemplate, collection));
          }
        });
      },
      onFilterChange: function() {
        var self;
        self = this;
        beer_style.collection.fetch({
          data: {
            abv: self.ui.abv.val(),
            ibu: self.ui.ibu.val(),
            og: self.ui.og.val(),
            fg: self.ui.fg.val()
          },
          success: function(collection, response, options) {
            return self.ui.list.html(_.template(listtemplate, collection));
          }
        });
      }
    });
  });

}).call(this);
