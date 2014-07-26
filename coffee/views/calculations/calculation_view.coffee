define (require) ->
  Backbone = require 'backbone'
  viewtemplate = require 'text!views/calculations/calculation_view.html'

  # calculations
  ABV = require 'views/calculations/abv/abv_view'

  CalculationView = Backbone.View.extend {
    ui: {}
    events: {}

    initialize: () ->
      self=this

      # Setup our UI
      this.$el.append(_.template(viewtemplate))

      # Setup our Calculations
      this.abv = new ABV({el:this.$el})
      return
  }
