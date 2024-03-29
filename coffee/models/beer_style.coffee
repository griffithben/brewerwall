define (require) ->
	_ = require 'underscore'
	Backbone = require 'backbone'
	$ = require 'jquery'
	BeerStyle = {}

	BeerStyle.Model = Backbone.Model.extend {}

	BeerStyle.Collection = Backbone.Collection.extend {
		model: BeerStyle.Model
		url: "/api/v1/styles"
	}

	return {
		collection: new BeerStyle.Collection,
		model: BeerStyle.Model
	}
