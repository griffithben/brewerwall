define (require) ->
  Backbone = require 'backbone'
  viewtemplate = require 'text!views/calculations/extract_addition/extract_addition_view.html'
  require 'beercalc'

  ExtractAdditionView = Backbone.View.extend {
    ui: {}
    events: {
      'keyup #ea-target_gu' :'onValueChange',
      'keyup #ea-total_gu' :'onValueChange',
      'keyup #ea-extract_type' :'onValueChange'
    }

    initialize: () ->
      self=this

      # Setup our UI
      this.$el.append(_.template(viewtemplate))
      this.ui.view = this.$el.find('#ea')
      this.ui.g = this.$el.find('#ea-target_gu')
      this.ui.total_gu = this.$el.find('#ea-total_gu')
      this.ui.extract_type = this.$el.find('#ea-extract_type')
      this.ui.display_target_gu = this.$el.find('.ea-display-target_gu')
      this.ui.display_total_gu = this.$el.find('.ea-display-total_gu')
      this.ui.display_extract_type = this.$el.find('.ea-display-extract_type')
      this.ui.result_value = this.$el.find('#ea-value')

      this.hide();
      return

    validated: () ->
      return (_.isFinite(parseFloat(this.ui.g.val())) && _.isFinite(parseFloat(this.ui.total_gu.val()))  && !_.isEmpty(this.ui.g.val()) && !_.isEmpty(this.ui.total_gu.val()) && !_.isEmpty(this.ui.extract_type.val()))

    onValueChange: () ->

      if this.validated()
        # Display values within the equation
        this.ui.display_target_gu.html(this.ui.g.val())
        this.ui.display_total_gu.html(this.ui.total_gu.val())
        this.ui.display_extract_type.html(this.ui.extract_type.val())

        # Run the calculation
        this.ui.result_value.html(Beercalc.extractAddition(this.ui.g.val(), this.ui.total_gu.val(), this.ui.extract_type.val()).toFixed(2)+" Gravity Units")

      else
        this.ui.display_target_gu.html('Target Gravity')
        this.ui.display_total_gu.html('Total Gravity')
        this.ui.display_extract_type.html('Extract')
        this.ui.result_value.html('Extract Addition')
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
      this.ui.total_gu.val('')
      this.ui.extract_type.val('')
      this.ui.display_target_gu.html('Target Gravity')
      this.ui.display_total_gu.html('Total Gravity')
      this.ui.display_extract_type.html('Extract')
      this.ui.result_value.html('Extract Addition')
      return
  }
