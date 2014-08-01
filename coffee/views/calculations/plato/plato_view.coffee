define (require) ->
  Backbone = require 'backbone'
  viewtemplate = require 'text!views/calculations/plato/plato_view.html'
  require 'beercalc'

  PlatoView = Backbone.View.extend {
    ui: {}
    events: {
      'keyup #plato-time' :'onValueChange',
      'keyup #plato-gravity' :'onValueChange'
    }

    initialize: () ->
      self=this

      # Setup our UI
      this.$el.append(_.template(viewtemplate))
      this.ui.view = this.$el.find('#plato')
      this.ui.gravity = this.$el.find('#plato-gravity')
      this.ui.display_gravity = this.$el.find('.plato-display-gravity')
      this.ui.result_value = this.$el.find('#plato-value')

      this.hide();
      return

    validated: () ->
      return (_.isFinite(parseFloat(this.ui.gravity.val())) && !_.isEmpty(this.ui.gravity.val()))

    onValueChange: () ->

      if this.validated()
        # Display values within the equation
        this.ui.display_gravity.html(this.ui.gravity.val())

        # Run the calculation
        this.ui.result_value.html(Beercalc.plato(this.ui.gravity.val()).toFixed(2))

      else
        this.ui.display_gravity.html('Gravity')
        this.ui.result_value.html('Plato')
      return

    show: () ->
      this.ui.view.show()
      this.reset()
      return

    hide: () ->
      this.ui.view.hide()
      this.reset()
      return

    reset: () ->
      this.ui.gravity.val('')
      this.ui.display_gravity.html('Gravity')
      this.ui.result_value.html('Plato')
      return
  }
