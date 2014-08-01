define (require) ->
  Backbone = require 'backbone'
  viewtemplate = require 'text!views/calculations/calculation_view.html'

  # calculations
  ABV = require 'views/calculations/abv/abv_view'
  ABW = require 'views/calculations/abw/abw_view'
  MCU = require 'views/calculations/mcu/mcu_view'
  SRM = require 'views/calculations/srm/srm_view'
  AAU = require 'views/calculations/aau/aau_view'
  IBU = require 'views/calculations/ibu/ibu_view'
  Utilization = require 'views/calculations/utilization/utilization_view'
  Plato = require 'views/calculations/plato/plato_view'
  RealExtract = require 'views/calculations/real_extract/real_extract_view'
  Calories = require 'views/calculations/calories/calories_view'

  CalculationRouter = Backbone.Router.extend {
    routes: {
      ":calculation":"filter"
    }
  }

  CalculationView = Backbone.View.extend {
    ui: {}
    events: {
      'change #calculation-list' : 'onCalculationChange'
    }

    initialize: () ->
      self=this

      # Setup our UI
      this.$el.append(_.template(viewtemplate))
      this.ui.calculation_list = this.$el.find('#calculation-list')

      # Setup our Calculations
      this.calculations = {
        abv : new ABV({el:this.$el})
        abw : new ABW({el:this.$el})
        mcu : new MCU({el:this.$el})
        srm : new SRM({el:this.$el})
        aau : new AAU({el:this.$el})
        ibu : new IBU({el:this.$el})
        utilization : new Utilization({el:this.$el})
        plato : new Plato({el:this.$el})
        real_extract : new RealExtract({el:this.$el})
        calories : new Calories({el:this.$el})
      }

      # Show our default item
      this.calculations.abv.show()

      # Setup our router
      this.router = new CalculationRouter;
      this.router.on('route:filter', _.bind(this.filter, this))
      Backbone.history.start()
      return

    onCalculationChange: (e) ->
      this.router.navigate(this.ui.calculation_list.val(), {trigger:true})
      return

    filter: () ->
      this.hideAllCalculations()
      this.showCalculation(arguments[0])
      this.ui.calculation_list.val(arguments[0])
      return

    showCalculation: (id) ->
      this.calculations[id].show()
      return

    hideAllCalculations: () ->
      _.each(this.calculations, (calculation, key, list) ->
        calculation.hide()
      )
  }
