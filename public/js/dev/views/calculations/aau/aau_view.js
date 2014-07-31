(function() {
  define(function(require) {
    var AAUView, Backbone, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/aau/aau_view.html');
    require('beercalc');
    return AAUView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #aau-alpha': 'onValueChange',
        'keyup #aau-weight': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#aau');
        this.ui.alpha = this.$el.find('#aau-alpha');
        this.ui.weight = this.$el.find('#aau-weight');
        this.ui.display_alpha = this.$el.find('.aau-display-alpha');
        this.ui.display_weight = this.$el.find('.aau-display-weight');
        this.ui.result_value = this.$el.find('#aau-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.alpha.val())) && _.isFinite(parseFloat(this.ui.weight.val())) && !_.isEmpty(this.ui.weight.val()) && !_.isEmpty(this.ui.alpha.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_alpha.html(this.ui.alpha.val());
          this.ui.display_weight.html(this.ui.weight.val());
          this.ui.result_value.html(Beercalc.aau(this.ui.alpha.val(), this.ui.weight.val()).toFixed(2) + '%');
        } else {
          this.ui.display_alpha.html('Alpha');
          this.ui.display_weight.html('Weight');
          this.ui.result_value.html('AAU');
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
        this.ui.result_value.html('AAU');
      }
    });
  });

}).call(this);
