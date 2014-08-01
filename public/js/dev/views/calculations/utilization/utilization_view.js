(function() {
  define(function(require) {
    var Backbone, UtilizationView, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/utilization/utilization_view.html');
    require('beercalc');
    return UtilizationView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #utilization-time': 'onValueChange',
        'keyup #utilization-gravity': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#utilization');
        this.ui.time = this.$el.find('#utilization-time');
        this.ui.gravity = this.$el.find('#utilization-gravity');
        this.ui.display_time = this.$el.find('.utilization-display-time');
        this.ui.display_gravity = this.$el.find('.utilization-display-gravity');
        this.ui.result_value = this.$el.find('#utilization-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.time.val())) && _.isFinite(parseFloat(this.ui.gravity.val())) && !_.isEmpty(this.ui.gravity.val()) && !_.isEmpty(this.ui.time.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_time.html(this.ui.time.val());
          this.ui.display_gravity.html(this.ui.gravity.val());
          this.ui.result_value.html(Beercalc.utilization(this.ui.time.val(), this.ui.gravity.val()).toFixed(2) + '%');
        } else {
          this.ui.display_time.html('Time');
          this.ui.display_gravity.html('Gravity');
          this.ui.result_value.html('Utilization');
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
        this.ui.time.val('');
        this.ui.gravity.val('');
        this.ui.display_time.html('Time');
        this.ui.display_gravity.html('Gravity');
        this.ui.result_value.html('Utilization');
      }
    });
  });

}).call(this);
