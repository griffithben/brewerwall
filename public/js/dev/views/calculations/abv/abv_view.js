(function() {
  define(function(require) {
    var ABVView, Backbone, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/abv/abv_view.html');
    require('beercalc');
    return ABVView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #abv-og': 'onValueChange',
        'keyup #abv-fg': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#abv');
        this.ui.og = this.$el.find('#abv-og');
        this.ui.fg = this.$el.find('#abv-fg');
        this.ui.display_og = this.$el.find('.abv-display-og');
        this.ui.display_fg = this.$el.find('.abv-display-fg');
        this.ui.result_value = this.$el.find('#abv-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.og.val())) && _.isFinite(parseFloat(this.ui.fg.val())) && !_.isEmpty(this.ui.fg.val()) && !_.isEmpty(this.ui.og.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_og.html(this.ui.og.val());
          this.ui.display_fg.html(this.ui.fg.val());
          this.ui.result_value.html(Beercalc.abv(this.ui.og.val(), this.ui.fg.val()).toFixed(2) + '%');
        } else {
          this.ui.display_og.html('OG');
          this.ui.display_fg.html('FG');
          this.ui.result_value.html('ABV');
        }
      },
      show: function() {
        this.ui.view.show();
      },
      hide: function() {
        this.ui.view.hide();
      }
    });
  });

}).call(this);
