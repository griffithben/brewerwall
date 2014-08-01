(function() {
  define(function(require) {
    var Backbone, RealExtractView, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/real_extract/real_extract_view.html');
    require('beercalc');
    return RealExtractView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #real_extract-og': 'onValueChange',
        'keyup #real_extract-fg': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#real_extract');
        this.ui.og = this.$el.find('#real_extract-og');
        this.ui.fg = this.$el.find('#real_extract-fg');
        this.ui.display_og = this.$el.find('.real_extract-display-og');
        this.ui.display_fg = this.$el.find('.real_extract-display-fg');
        this.ui.result_value = this.$el.find('#real_extract-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.og.val())) && _.isFinite(parseFloat(this.ui.fg.val())) && !_.isEmpty(this.ui.fg.val()) && !_.isEmpty(this.ui.og.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_og.html(this.ui.og.val());
          this.ui.display_fg.html(this.ui.fg.val());
          this.ui.result_value.html(Beercalc.realExtract(this.ui.og.val(), this.ui.fg.val()).toFixed(2));
        } else {
          this.ui.display_og.html('OG');
          this.ui.display_fg.html('FG');
          this.ui.result_value.html('Real Extract');
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
