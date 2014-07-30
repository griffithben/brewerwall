define (require) ->
  Backbone = require 'backbone'
  viewtemplate = require 'text!views/calculations/calculation_view.html'

  # calculations
  ABV = require 'views/calculations/abv/abv_view'
  ABW = require 'views/calculations/abw/abw_view'

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
      }

      # Show our default item
      this.calculations.abv.show()
      return

    onCalculationChange: (e) ->
      this.hideAllCalculations()
      this.showCalculation(this.ui.calculation_list.val())
      return

    showCalculation: (id) ->
      this.calculations[id].show()
      return

    hideAllCalculations: () ->
      _.each(this.calculations, (calculation, key, list) ->
        calculation.hide()
      )
  }
