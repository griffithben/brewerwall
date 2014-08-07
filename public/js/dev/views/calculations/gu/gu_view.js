(function() {
  define(function(require) {
    var Backbone, GUView, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/gu/gu_view.html');
    require('beercalc');
    return GUView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #gu-g': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#gu');
        this.ui.g = this.$el.find('#gu-g');
        this.ui.display_g = this.$el.find('.gu-display-g');
        this.ui.result_value = this.$el.find('#gu-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.g.val())) && !_.isEmpty(this.ui.g.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_g.html(this.ui.g.val());
          this.ui.result_value.html(Beercalc.gu(this.ui.g.val()) + " Units");
        } else {
          this.ui.display_g.html('Gravity');
          this.ui.result_value.html('Gravity Units');
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
