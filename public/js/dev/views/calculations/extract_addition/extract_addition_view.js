(function() {
  define(function(require) {
    var Backbone, ExtractAdditionView, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/extract_addition/extract_addition_view.html');
    require('beercalc');
    return ExtractAdditionView = Backbone.View.extend({
      ui: {},
      events: {
        'keyup #ea-target_gu': 'onValueChange',
        'keyup #ea-total_gu': 'onValueChange',
        'keyup #ea-extract_type': 'onValueChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.view = this.$el.find('#ea');
        this.ui.g = this.$el.find('#ea-target_gu');
        this.ui.total_gu = this.$el.find('#ea-total_gu');
        this.ui.extract_type = this.$el.find('#ea-extract_type');
        this.ui.display_target_gu = this.$el.find('.ea-display-target_gu');
        this.ui.display_total_gu = this.$el.find('.ea-display-total_gu');
        this.ui.display_extract_type = this.$el.find('.ea-display-extract_type');
        this.ui.result_value = this.$el.find('#ea-value');
        this.hide();
      },
      validated: function() {
        return _.isFinite(parseFloat(this.ui.g.val())) && _.isFinite(parseFloat(this.ui.total_gu.val())) && !_.isEmpty(this.ui.g.val()) && !_.isEmpty(this.ui.total_gu.val()) && !_.isEmpty(this.ui.extract_type.val());
      },
      onValueChange: function() {
        if (this.validated()) {
          this.ui.display_target_gu.html(this.ui.g.val());
          this.ui.display_total_gu.html(this.ui.total_gu.val());
          this.ui.display_extract_type.html(this.ui.extract_type.val());
          this.ui.result_value.html(Beercalc.extractAddition(this.ui.g.val(), this.ui.total_gu.val(), this.ui.extract_type.val()).toFixed(2) + " Gravity Units");
        } else {
          this.ui.display_target_gu.html('Target Gravity');
          this.ui.display_total_gu.html('Total Gravity');
          this.ui.display_extract_type.html('Extract');
          this.ui.result_value.html('Extract Addition');
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
        this.ui.total_gu.val('');
        this.ui.extract_type.val('');
        this.ui.display_target_gu.html('Target Gravity');
        this.ui.display_total_gu.html('Total Gravity');
        this.ui.display_extract_type.html('Extract');
        this.ui.result_value.html('Extract Addition');
      }
    });
  });

}).call(this);
