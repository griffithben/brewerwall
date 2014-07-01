define (require) ->
	viewtemplate = require 'text!views/hops/hop_view.html'
	listtemplate = require 'text!views/hops/hop_list.html'
	hop = require 'models/hop'

	HopRouter = Backbone.Router.extend {
		routes: {
			"(/)": "filter",
			":filter/:val(/)": "filter",
			":filter/:val/:filter/:val(/)": "filter",
			":filter/:val/:filter/:val/:filter/:val(/)": "filter"
		}
	}

	HopView = Backbone.View.extend {
		ui: {}
		events: {
			'change #alpha' :'onFilterChange',
			'change #beta' :'onFilterChange',
			'change #origin' :'onFilterChange'
		}

		initialize: () ->
			self=this

			# Setup our UI
			this.$el.append(_.template(viewtemplate))
			this.ui.list = this.$el.find('#list')
			this.ui.alpha = this.$el.find('#alpha')
			this.ui.beta = this.$el.find('#beta')
			this.ui.origin = this.$el.find('#origin')
			this.ui.filters = this.$el.find('.filter')
			this.ui.api_url = this.$el.find('#api-url')

			# Setup our router
			this.router = new HopRouter;
			this.router.on('route:filter', _.bind(this.filter, this))
			Backbone.history.start()
			return

		onFilterChange: () ->
			navigate=[]

			if(this.ui.alpha.val() != "0")
				navigate.push("alpha/"+encodeURIComponent(this.ui.alpha.val()))

			if(this.ui.beta.val() != "0")
				navigate.push("beta/"+encodeURIComponent(this.ui.beta.val()))

			if(this.ui.origin.val() != "0")
				navigate.push("origin/"+encodeURIComponent(this.ui.origin.val()))

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
			hop.collection.fetch({
				data: filterData,
				success: (collection, response, options) ->
					self.ui.list.html(_.template(listtemplate, collection))
			})

			return

		api: (params) ->
			# build our api endpoint.
			if(_.isEmpty(params.join('&')))
				this.ui.api_url.html('brewerwall.dev/api/hops')
			else
				this.ui.api_url.html('brewerwall.dev/api/hops?'+params.join('&'))
  }
