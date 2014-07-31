(function() {
  define(function(require) {
    var Backbone, ibuView, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/ibu/ibu_view.html');
    require('beercalc');
    return ibuView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #ibu-alpha': 'onValueChange',
        'keyup #ibu-weight': 'onValueChange',
        'keyup #ibu-time': 'onValueChange',
        'keyup #ibu-gravity': 'onValueChange',
        'keyup #ibu-volume': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#ibu');
        this.ui.alpha = this.$el.find('#ibu-alpha');
        this.ui.weight = this.$el.find('#ibu-weight');
        this.ui.time = this.$el.find('#ibu-time');
        this.ui.gravity = this.$el.find('#ibu-gravity');
        this.ui.volume = this.$el.find('#ibu-volume');
        this.ui.display_alpha = this.$el.find('.ibu-display-alpha');
        this.ui.display_weight = this.$el.find('.ibu-display-weight');
        this.ui.display_time = this.$el.find('.ibu-display-time');
        this.ui.display_gravity = this.$el.find('.ibu-display-gravity');
        this.ui.display_volume = this.$el.find('.ibu-display-volume');
        this.ui.result_value = this.$el.find('#ibu-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.alpha.val())) && _.isFinite(parseFloat(this.ui.weight.val())) && _.isFinite(parseFloat(this.ui.time.val())) && _.isFinite(parseFloat(this.ui.gravity.val())) && _.isFinite(parseFloat(this.ui.volume.val())) && !_.isEmpty(this.ui.weight.val()) && !_.isEmpty(this.ui.alpha.val()) && !_.isEmpty(this.ui.time.val()) && !_.isEmpty(this.ui.gravity.val()) && !_.isEmpty(this.ui.volume.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_alpha.html(this.ui.alpha.val());
          this.ui.display_weight.html(this.ui.weight.val());
          this.ui.display_time.html(this.ui.time.val());
          this.ui.display_gravity.html(this.ui.gravity.val());
          this.ui.display_volume.html(this.ui.volume.val());
          this.ui.result_value.html(Beercalc.ibu(this.ui.alpha.val(), this.ui.weight.val(), this.ui.time.val(), this.ui.gravity.val(), this.ui.volume.val()).toFixed(2) + '%');
        } else {
          this.ui.display_alpha.html('Alpha');
          this.ui.display_weight.html('Weight');
          this.ui.result_value.html('IBU');
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
        this.ui.alpha.val('');
        this.ui.weight.val('');
        this.ui.display_alpha.html('Alpha');
        this.ui.display_weight.html('Weight');
        this.ui.result_value.html('IBU');
      }
    });
  });

}).call(this);
