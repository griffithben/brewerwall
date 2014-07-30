(function() {
  define(function(require) {
    var ABWView, Backbone, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/abw/abw_view.html');
    require('beercalc');
    return ABWView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #abw-og': 'onValueChange',
        'keyup #abw-fg': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#abw');
        this.ui.og = this.$el.find('#abw-og');
        this.ui.fg = this.$el.find('#abw-fg');
        this.ui.display_og = this.$el.find('.abw-display-og');
        this.ui.display_fg = this.$el.find('.abw-display-fg');
        this.ui.result_value = this.$el.find('#abw-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.og.val())) && _.isFinite(parseFloat(this.ui.fg.val())) && !_.isEmpty(this.ui.fg.val()) && !_.isEmpty(this.ui.og.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_og.html(this.ui.og.val());
          this.ui.display_fg.html(this.ui.fg.val());
          this.ui.result_value.html(Beercalc.abw(this.ui.og.val(), this.ui.fg.val()).toFixed(2) + '%');
        } else {
          this.ui.display_og.html('OG');
          this.ui.display_fg.html('FG');
          this.ui.result_value.html('ABW');
        }
      },
      show: function() {
        this.ui.view.show();
        this.reset();
      },
      hide: function() {
        this.ui.view.hide();
        this.reset();
      },
      reset: function() {
        this.ui.og.val('');
        this.ui.fg.val('');
        this.ui.display_og.html('OG');
        this.ui.display_fg.html('FG');
        this.ui.result_value.html('ABW');
      }
    });
  });

}).call(this);
