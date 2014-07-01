define (require) ->
	viewtemplate = require 'text!views/yeasts/yeast_view.html'
	listtemplate = require 'text!views/yeasts/yeast_list.html'
	yeast = require 'models/yeast'

	YeastRouter = Backbone.Router.extend {
		routes: {
			"(/)": "filter",
			":filter/:val(/)": "filter",
			":filter/:val/:filter/:val(/)": "filter",
			":filter/:val/:filter/:val/:filter/:val(/)": "filter"
		}
	}

	YeastView = Backbone.View.extend {
		ui: {}
		events: {
			'change #attenuation' :'onFilterChange',
			'change #tolerance' :'onFilterChange',
			'change #temperature' :'onFilterChange'
		}

		initialize: () ->
			self=this
			this.$el.append(_.template(viewtemplate))
			this.ui.list = this.$el.find('#list')
			this.ui.attenuation = this.$el.find('#attenuation')
			this.ui.tolerance = this.$el.find('#tolerance')
			this.ui.temperature = this.$el.find('#temperature')
			this.ui.filters = this.$el.find('.filter')
			this.ui.api_url = this.$el.find('#api-url')

			# Setup our router
			this.router = new YeastRouter;
			this.router.on('route:filter', _.bind(this.filter, this))
			Backbone.history.start()

			return

		onFilterChange: () ->
			navigate = []

			if(this.ui.attenuation.val() != "0")
				navigate.push("attenuation/"+encodeURIComponent(this.ui.attenuation.val()))

			if(this.ui.temperature.val() != "0")
				navigate.push("temperature/"+encodeURIComponent(this.ui.temperature.val()))

			if(this.ui.tolerance.val() != "0")
				navigate.push("tolerance/"+encodeURIComponent(this.ui.tolerance.val()))

			this.router.navigate(navigate.join('/'), {trigger:true})

			return

		filter: () ->
			self=this

			# reset our filters
			this.ui.filters.prop('selectedIndex', 0)

			# Create our filter data.
			filterData = {}
			filterRequest = []
			for e, i in arguments by 2
				if !_.isEmpty(arguments[i])
					filterData[arguments[i]] = arguments[i + 1]
					if(!_.isUndefined(self.ui[arguments[i]]))
						self.ui[arguments[i]].val(arguments[i + 1])
						filterRequest.push(arguments[i]+'='+arguments[i+1])

			# update our api endpoint
			this.api(filterRequest);

			# Fetch our collection
			yeast.collection.fetch({
				data: filterData,
				success: (collection, response, options) ->
					self.ui.list.html(_.template(listtemplate, collection))
			})

			return

		api: (params) ->
			# build our api endpoint.
			if(_.isEmpty(params.join('&')))
				this.ui.api_url.html('brewerwall.dev/api/yeasts')
			else
				this.ui.api_url.html('brewerwall.dev/api/yeasts?'+params.join('&'))

			return
  }
