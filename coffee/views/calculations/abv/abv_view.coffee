define (require) ->
  Backbone = require 'backbone'
  viewtemplate = require 'text!views/calculations/abv/abv_view.html'
  require 'beercalc'

  ABVView = Backbone.View.extend {
    ui: {}
    events: {
      'keyup #abv-og' :'onValueChange',
      'keyup #abv-fg' :'onValueChange'
    }

    initialize: () ->
      self=this

      # Setup our UI
      this.$el.append(_.template(viewtemplate))
      this.ui.view = this.$el.find('#abv')
      this.ui.og = this.$el.find('#abv-og')
      this.ui.fg = this.$el.find('#abv-fg')
      this.ui.display_og = this.$el.find('.abv-display-og')
      this.ui.display_fg = this.$el.find('.abv-display-fg')
      this.ui.result_value = this.$el.find('#abv-value')

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
        this.ui.result_value.html(Beercalc.abv(this.ui.og.val(), this.ui.fg.val()).toFixed(2)+'%')

      else
        this.ui.display_og.html('OG')
        this.ui.display_fg.html('FG')
        this.ui.result_value.html('ABV')
      return

    show: () ->
      this.ui.view.show()
      return

    hide: () ->
      this.ui.view.hide()
      return
  }
