(function() {
  define(function(require) {
    var Backbone, FinalGravityView, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/final_gravity/final_gravity_view.html');
    require('beercalc');
    return FinalGravityView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #fg-g': 'onValueChange',
        'keyup #fg-vol_beg': 'onValueChange',
        'keyup #fg-vol_end': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#fg');
        this.ui.g = this.$el.find('#fg-g');
        this.ui.vol_beg = this.$el.find('#fg-vol_beg');
        this.ui.vol_end = this.$el.find('#fg-vol_end');
        this.ui.display_g = this.$el.find('.fg-display-g');
        this.ui.display_vol_beg = this.$el.find('.fg-display-vol_beg');
        this.ui.display_vol_end = this.$el.find('.fg-display-vol_end');
        this.ui.result_value = this.$el.find('#fg-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.g.val())) && _.isFinite(parseFloat(this.ui.vol_beg.val())) && _.isFinite(parseFloat(this.ui.vol_end.val())) && !_.isEmpty(this.ui.g.val()) && !_.isEmpty(this.ui.vol_beg.val()) && !_.isEmpty(this.ui.vol_end.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_g.html(this.ui.g.val());
          this.ui.display_vol_beg.html(this.ui.vol_beg.val());
          this.ui.display_vol_end.html(this.ui.vol_end.val());
          this.ui.result_value.html(Beercalc.finalGravity(this.ui.g.val(), this.ui.vol_beg.val(), this.ui.vol_end.val()).toFixed(2) + " Gravity Units");
        } else {
          this.ui.display_g.html('Gravity');
          this.ui.display_vol_beg.html('Volume Beginning');
          this.ui.display_vol_end.html('Volume End');
          this.ui.result_value.html('Final Gravity');
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
        this.ui.g.val('');
        this.ui.vol_beg.val('');
        this.ui.vol_end.val('');
        this.ui.display_g.html('Gravity');
        this.ui.display_vol_beg.html('Volume Beginning');
        this.ui.display_vol_end.html('Volume End');
        this.ui.result_value.html('Final Gravity');
      }
    });
  });

}).call(this);
