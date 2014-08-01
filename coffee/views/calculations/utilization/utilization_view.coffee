define (require) ->
  Backbone = require 'backbone'
  viewtemplate = require 'text!views/calculations/utilization/utilization_view.html'
  require 'beercalc'

  UtilizationView = Backbone.View.extend {
    ui: {}
    events: {
      'keyup #utilization-time' :'onValueChange',
      'keyup #utilization-gravity' :'onValueChange'
    }

    initialize: () ->
      self=this

      # Setup our UI
      this.$el.append(_.template(viewtemplate))
      this.ui.view = this.$el.find('#utilization')
      this.ui.time = this.$el.find('#utilization-time')
      this.ui.gravity = this.$el.find('#utilization-gravity')
      this.ui.display_time = this.$el.find('.utilization-display-time')
      this.ui.display_gravity = this.$el.find('.utilization-display-gravity')
      this.ui.result_value = this.$el.find('#utilization-value')

      this.hide();
      return

    validated: () ->
      return (_.isFinite(parseFloat(this.ui.time.val())) && _.isFinite(parseFloat(this.ui.gravity.val())) && !_.isEmpty(this.ui.gravity.val()) && !_.isEmpty(this.ui.time.val()))

    onValueChange: () ->

      if this.validated()
        # Display values within the equation
        this.ui.display_time.html(this.ui.time.val())
        this.ui.display_gravity.html(this.ui.gravity.val())

        # Run the calculation
        this.ui.result_value.html(Beercalc.utilization(this.ui.time.val(), this.ui.gravity.val()).toFixed(2)+'%')

      else
        this.ui.display_time.html('Time')
        this.ui.display_gravity.html('Gravity')
        this.ui.result_value.html('Utilization')
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
      this.ui.time.val('')
      this.ui.gravity.val('')
      this.ui.display_time.html('Time')
      this.ui.display_gravity.html('Gravity')
      this.ui.result_value.html('Utilization')
      return
  }
