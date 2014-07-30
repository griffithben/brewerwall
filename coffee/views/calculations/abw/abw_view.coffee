define (require) ->
  Backbone = require 'backbone'
  viewtemplate = require 'text!views/calculations/abw/abw_view.html'
  require 'beercalc'

  ABWView = Backbone.View.extend {
    ui: {}
    events: {
      'keyup #abw-og' :'onValueChange',
      'keyup #abw-fg' :'onValueChange'
    }

    initialize: () ->
      self=this

      # Setup our UI
      this.$el.append(_.template(viewtemplate))
      this.ui.view = this.$el.find('#abw')
      this.ui.og = this.$el.find('#abw-og')
      this.ui.fg = this.$el.find('#abw-fg')
      this.ui.display_og = this.$el.find('.abw-display-og')
      this.ui.display_fg = this.$el.find('.abw-display-fg')
      this.ui.result_value = this.$el.find('#abw-value')

      this.hide();
      return

    validated: () ->
      return (_.isFinite(parseFloat(this.ui.og.val())) && _.isFinite(parseFloat(this.ui.fg.val())) && !_.isEmpty(this.ui.fg.val()) && !_.isEmpty(this.ui.og.val()))

    onValueChange: () ->

      if this.validated()
        # Display values within the equation
        this.ui.display_og.html(this.ui.og.val())
        this.ui.display_fg.html(this.ui.fg.val())

        # Run the calculation
        this.ui.result_value.html(Beercalc.abw(this.ui.og.val(), this.ui.fg.val()).toFixed(2)+'%')

      else
        this.ui.display_og.html('OG')
        this.ui.display_fg.html('FG')
        this.ui.result_value.html('ABW')
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
      this.ui.og.val('')
      this.ui.fg.val('')
      this.ui.display_og.html('OG')
      this.ui.display_fg.html('FG')
      this.ui.result_value.html('ABW')
      return
  }
