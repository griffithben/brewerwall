(function() {
  define(function(require) {
    var Backbone, PlatoView, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/plato/plato_view.html');
    require('beercalc');
    return PlatoView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #plato-time': 'onValueChange',
        'keyup #plato-gravity': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#plato');
        this.ui.gravity = this.$el.find('#plato-gravity');
        this.ui.display_gravity = this.$el.find('.plato-display-gravity');
        this.ui.result_value = this.$el.find('#plato-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.gravity.val())) && !_.isEmpty(this.ui.gravity.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_gravity.html(this.ui.gravity.val());
          this.ui.result_value.html(Beercalc.plato(this.ui.gravity.val()).toFixed(2));
        } else {
          this.ui.display_gravity.html('Gravity');
          this.ui.result_value.html('Plato');
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
        this.ui.gravity.val('');
        this.ui.display_gravity.html('Gravity');
        this.ui.result_value.html('Plato');
      }
    });
  });

}).call(this);
