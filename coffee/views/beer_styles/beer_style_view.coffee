define (require) ->
	viewtemplate = require 'text!views/beer_styles/beer_style_view.html'
	beer_style = require 'models/beer_style'
	LoginView = {}

	BeerStyleView = Backbone.View.extend {
		ui: {}
		events: {}

		initialize: () ->
      this.$el.append(_.template(viewtemplate))
      return
  }
