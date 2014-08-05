define (require) ->
  Backbone = require 'backbone'
  viewtemplate = require 'text!views/calculations/gu/gu_view.html'
  require 'beercalc'

  GUView = Backbone.View.extend {
    ui: {}
    events: {
      'keyup #gu-g' :'onValueChange'
    }

    initialize: () ->
      self=this

      # Setup our UI
      this.$el.append(_.template(viewtemplate))
      this.ui.view = this.$el.find('#gu')
      this.ui.g = this.$el.find('#gu-g')
      this.ui.display_g = this.$el.find('.gu-display-g')
      this.ui.result_value = this.$el.find('#gu-value')

      this.hide();
      return

    validated: () ->
      return (_.isFinite(parseFloat(this.ui.g.val())) && !_.isEmpty(this.ui.g.val()))

    onValueChange: () ->

      if this.validated()
        # Display values within the equation
        this.ui.display_g.html(this.ui.g.val())

        # Run the calculation
        this.ui.result_value.html(Beercalc.gu(this.ui.g.val())+" Units")

      else
        this.ui.display_g.html('G')
        this.ui.result_value.html('Gravity Units')
      return

    show: () ->
      this.ui.view.show()
      return

    hide: () ->
      this.ui.view.hide()
      return
  }
