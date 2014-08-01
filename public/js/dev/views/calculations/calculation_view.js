(function() {
  define(function(require) {
    var AAU, ABV, ABW, Backbone, CalculationRouter, CalculationView, Calories, IBU, MCU, Plato, RealExtract, SRM, Utilization, viewtemplate;
    Backbone = require('backbone');
    viewtemplate = require('text!views/calculations/calculation_view.html');
    ABV = require('views/calculations/abv/abv_view');
    ABW = require('views/calculations/abw/abw_view');
    MCU = require('views/calculations/mcu/mcu_view');
    SRM = require('views/calculations/srm/srm_view');
    AAU = require('views/calculations/aau/aau_view');
    IBU = require('views/calculations/ibu/ibu_view');
    Utilization = require('views/calculations/utilization/utilization_view');
    Plato = require('views/calculations/plato/plato_view');
    RealExtract = require('views/calculations/real_extract/real_extract_view');
    Calories = require('views/calculations/calories/calories_view');
    CalculationRouter = Backbone.Router.extend({
      routes: {
        ":calculation": "filter"
      }
    });
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
          }),
          utilization: new Utilization({
            el: this.$el
          }),
          plato: new Plato({
            el: this.$el
          }),
          real_extract: new RealExtract({
            el: this.$el
          }),
          calories: new Calories({
            el: this.$el
          })
        };
        this.calculations.abv.show();
        this.router = new CalculationRouter;
        this.router.on('route:filter', _.bind(this.filter, this));
        Backbone.history.start();
      },
      onCalculationChange: function(e) {
        this.router.navigate(this.ui.calculation_list.val(), {
          trigger: true
        });
      },
      filter: function() {
        this.hideAllCalculations();
        this.showCalculation(arguments[0]);
        this.ui.calculation_list.val(arguments[0]);
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
