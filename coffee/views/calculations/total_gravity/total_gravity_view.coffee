define (require) ->
  Backbone = require 'backbone'
  viewtemplate = require 'text!views/calculations/total_gravity/total_gravity_view.html'
  require 'beercalc'

  TotalGravityView = Backbone.View.extend {
    ui: {}
    events: {
      'keyup #tg-g' :'onValueChange',
      'keyup #tg-v' :'onValueChange'
    }

    initialize: () ->
      self=this

      # Setup our UI
      this.$el.append(_.template(viewtemplate))
      this.ui.view = this.$el.find('#tg')
      this.ui.g = this.$el.find('#tg-g')
      this.ui.v = this.$el.find('#tg-v')
      this.ui.display_g = this.$el.find('.tg-display-g')
      this.ui.display_v = this.$el.find('.tg-display-v')
      this.ui.result_value = this.$el.find('#tg-value')

      this.hide();
      return

    validated: () ->
      return (_.isFinite(parseFloat(this.ui.g.val())) && _.isFinite(parseFloat(this.ui.v.val())) && !_.isEmpty(this.ui.v.val()) && !_.isEmpty(this.ui.g.val()))

    onValueChange: () ->

      if this.validated()
        # Display values within the equation
        this.ui.display_g.html(this.ui.g.val())
        this.ui.display_v.html(this.ui.v.val())

        # Run the calculation
        this.ui.result_value.html(Beercalc.totalGravity(this.ui.g.val(), this.ui.v.val()).toFixed(2)+' Total Gravity')

      else
        this.ui.display_g.html('Gravity')
        this.ui.display_v.html('Volume')
        this.ui.result_value.html('Total Gravity')
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
      this.ui.g.val('')
      this.ui.v.val('')
      this.ui.display_g.html('Gravity')
      this.ui.display_v.html('Volume')
      this.ui.result_value.html('Total Gravity')
      return
  }
