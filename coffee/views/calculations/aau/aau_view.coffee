define (require) ->
  Backbone = require 'backbone'
  viewtemplate = require 'text!views/calculations/aau/aau_view.html'
  require 'beercalc'

  AAUView = Backbone.View.extend {
    ui: {}
    events: {
      'keyup #aau-alpha' :'onValueChange',
      'keyup #aau-weight' :'onValueChange'
    }

    initialize: () ->
      self=this

      # Setup our UI
      this.$el.append(_.template(viewtemplate))
      this.ui.view = this.$el.find('#aau')
      this.ui.alpha = this.$el.find('#aau-alpha')
      this.ui.weight = this.$el.find('#aau-weight')
      this.ui.display_alpha = this.$el.find('.aau-display-alpha')
      this.ui.display_weight = this.$el.find('.aau-display-weight')
      this.ui.result_value = this.$el.find('#aau-value')

      this.hide();
      return

    validated: () ->
      return (_.isFinite(parseFloat(this.ui.alpha.val())) && _.isFinite(parseFloat(this.ui.weight.val())) && !_.isEmpty(this.ui.weight.val()) && !_.isEmpty(this.ui.alpha.val()))

    onValueChange: () ->

      if this.validated()
        # Display values within the equation
        this.ui.display_alpha.html(this.ui.alpha.val())
        this.ui.display_weight.html(this.ui.weight.val())

        # Run the calculation
        this.ui.result_value.html(Beercalc.aau(this.ui.alpha.val(), this.ui.weight.val()).toFixed(2)+'%')

      else
        this.ui.display_alpha.html('Alpha')
        this.ui.display_weight.html('Weight')
        this.ui.result_value.html('AAU')
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
      this.ui.alpha.val('')
      this.ui.weight.val('')
      this.ui.display_alpha.html('Alpha')
      this.ui.display_weight.html('Weight')
      this.ui.result_value.html('AAU')
      return
  }
