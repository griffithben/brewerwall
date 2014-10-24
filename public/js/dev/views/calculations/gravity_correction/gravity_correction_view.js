(function() {
  define(function(require) {
    var Backbone, GravityCorrectionView, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/gravity_correction/gravity_correction_view.html');
    require('beercalc');
    return GravityCorrectionView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #gc-temp': 'onValueChange',
        'keyup #gc-g': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#gc');
        this.ui.temp = this.$el.find('#gc-temp');
        this.ui.g = this.$el.find('#gc-g');
        this.ui.display_temp = this.$el.find('.gc-display-temp');
        this.ui.display_g = this.$el.find('.gc-display-g');
        this.ui.result_value = this.$el.find('#gc-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.temp.val())) && _.isFinite(parseFloat(this.ui.g.val())) && !_.isEmpty(this.ui.g.val()) && !_.isEmpty(this.ui.temp.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_temp.html(this.ui.temp.val());
          this.ui.display_g.html(this.ui.g.val());
          this.ui.result_value.html(Beercalc.gravityCorrection(parseFloat(this.ui.temp.val()), parseFloat(this.ui.g.val())));
        } else {
          this.ui.display_temp.html('Temperature');
          this.ui.display_g.html('Gravity');
          this.ui.result_value.html('Gravity');
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
        this.ui.temp.val('');
        this.ui.g.val('');
        this.ui.display_temp.html('Temperature');
        this.ui.display_g.html('Gravity');
        this.ui.result_value.html('Gravity');
      }
    });
  });

}).call(this);
