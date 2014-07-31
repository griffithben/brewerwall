(function() {
  define(function(require) {
    var Backbone, SRMView, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/srm/srm_view.html');
    require('beercalc');
    return SRMView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #srm-weight': 'onValueChange',
        'keyup #srm-lovibond': 'onValueChange',
        'keyup #srm-volume': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#srm');
        this.ui.weight = this.$el.find('#srm-weight');
        this.ui.lovibond = this.$el.find('#srm-lovibond');
        this.ui.volume = this.$el.find('#srm-volume');
        this.ui.display_weight = this.$el.find('.srm-display-weight');
        this.ui.display_lovibond = this.$el.find('.srm-display-lovibond');
        this.ui.display_volume = this.$el.find('.srm-display-volume');
        this.ui.result_value = this.$el.find('#srm-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.weight.val())) && _.isFinite(parseFloat(this.ui.lovibond.val())) && _.isFinite(parseFloat(this.ui.volume.val())) && !_.isEmpty(this.ui.weight.val()) && !_.isEmpty(this.ui.lovibond.val()) && !_.isEmpty(this.ui.volume.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_weight.html(this.ui.weight.val());
          this.ui.display_lovibond.html(this.ui.lovibond.val());
          this.ui.display_volume.html(this.ui.volume.val());
          this.ui.result_value.html(Beercalc.srm(this.ui.weight.val(), this.ui.lovibond.val(), this.ui.volume.val()).toFixed(2));
        } else {
          this.ui.display_weight.html('Weight');
          this.ui.display_lovibond.html('Lovibond');
          this.ui.display_volume.html('Volume');
          this.ui.result_value.html('SRM');
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
        this.ui.weight.val('');
        this.ui.lovibond.val('');
        this.ui.volume.val('');
        this.ui.display_weight.html('Weight');
        this.ui.display_lovibond.html('Lovibond');
        this.ui.display_volume.html('Volume');
        this.ui.result_value.html('SRM');
      }
    });
  });

}).call(this);
