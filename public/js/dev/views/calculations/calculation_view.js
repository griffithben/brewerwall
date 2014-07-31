(function() {
  define(function(require) {
    var AAU, ABV, ABW, Backbone, CalculationView, IBU, MCU, SRM, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/calculation_view.html');
    ABV = require('views/calculations/abv/abv_view');
    ABW = require('views/calculations/abw/abw_view');
    MCU = require('views/calculations/mcu/mcu_view');
    SRM = require('views/calculations/srm/srm_view');
    AAU = require('views/calculations/aau/aau_view');
    IBU = require('views/calculations/ibu/ibu_view');
    return CalculationView = Backbone.View.extend({
      ui: {},
      events: {
        'change #calculation-list': 'onCalculationChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.calculation_list = this.$el.find('#calculation-list');
        this.calculations = {
          abv: new ABV({
            el: this.$el
          }),
          abw: new ABW({
            el: this.$el
          }),
          mcu: new MCU({
            el: this.$el
          }),
          srm: new SRM({
            el: this.$el
          }),
          aau: new AAU({
            el: this.$el
          }),
          ibu: new IBU({
            el: this.$el
          })
        };
        this.calculations.abv.show();
      },
      onCalculationChange: function(e) {
        this.hideAllCalculations();
        this.showCalculation(this.ui.calculation_list.val());
      },
      showCalculation: function(id) {
        this.calculations[id].show();
      },
      hideAllCalculations: function() {
        return _.each(this.calculations, function(calculation, key, list) {
          return calculation.hide();
        });
      }
    });
  });

}).call(this);
