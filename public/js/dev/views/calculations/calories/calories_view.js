(function() {
  define(function(require) {
    var Backbone, CaloriesView, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/calories/calories_view.html');
    require('beercalc');
    return CaloriesView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #calories-og': 'onValueChange',
        'keyup #calories-fg': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#calories');
        this.ui.og = this.$el.find('#calories-og');
        this.ui.fg = this.$el.find('#calories-fg');
        this.ui.display_og = this.$el.find('.calories-display-og');
        this.ui.display_fg = this.$el.find('.calories-display-fg');
        this.ui.result_value = this.$el.find('#calories-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.og.val())) && _.isFinite(parseFloat(this.ui.fg.val())) && !_.isEmpty(this.ui.fg.val()) && !_.isEmpty(this.ui.og.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_og.html(this.ui.og.val());
          this.ui.display_fg.html(this.ui.fg.val());
          this.ui.result_value.html(Beercalc.calories(this.ui.og.val(), this.ui.fg.val()).toFixed(2));
        } else {
          this.ui.display_og.html('OG');
          this.ui.display_fg.html('FG');
          this.ui.result_value.html('Calories');
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
