define (require) ->
	viewtemplate = require 'text!views/beer_styles/beer_style_view.html'
	listtemplate = require 'text!views/beer_styles/beer_style_list.html'
	beer_style = require 'models/beer_style'

	BeerStyleRouter = Backbone.Router.extend {
		routes: {
			"(/)": "filter",
			":filter/:val(/)": "filter",
			":filter/:val/:filter/:val(/)": "filter",
			":filter/:val/:filter/:val/:filter/:val(/)": "filter"
			":filter/:val/:filter/:val/:filter/:val/:filter/:val(/)": "filter"
		}
	}

	BeerStyleView = Backbone.View.extend {
		ui: {}
		events: {
			'change #abv' :'onFilterChange',
			'change #ibu' :'onFilterChange',
			'change #og' :'onFilterChange',
			'change #fg' :'onFilterChange',
			'click #filters-toggle' :'onFilterToggleClick'
		}

		initialize: () ->
			self=this
			this.$el.append(_.template(viewtemplate))
			this.ui.list = this.$el.find('#list')
			this.ui.abv = this.$el.find('#abv')
			this.ui.ibu = this.$el.find('#ibu')
			this.ui.og = this.$el.find('#og')
			this.ui.fg = this.$el.find('#fg')
			this.ui.filters = this.$el.find('.filter')
			this.ui.filters_container = this.$el.find('#filters-container')
			this.ui.api_url = this.$el.find('#api-url')

			# Setup our router
			this.router = new BeerStyleRouter;
			this.router.on('route:filter', _.bind(this.filter, this))
			Backbone.history.start()

			window.onresize = _.bind(this.onWindowResize, this)
			this.filter_init()

			return

		onFilterChange: () ->
			navigate = []

			if(this.ui.abv.val() != "0")
				navigate.push("abv/"+encodeURIComponent(this.ui.abv.val()))

			if(this.ui.ibu.val() != "0")
				navigate.push("ibu/"+encodeURIComponent(this.ui.ibu.val()))

			if(this.ui.og.val() != "0")
				navigate.push("og/"+encodeURIComponent(this.ui.og.val()))

			if(this.ui.fg.val() != "0")
				navigate.push("fg/"+encodeURIComponent(this.ui.fg.val()))

			this.router.navigate(navigate.join('/'), {trigger:true})

			return

		onFilterToggleClick: () ->
			this.filter_toggle()
			return

		onWindowResize: () ->
			this.filter_init()
			return

		filter_init: () ->
			if window.innerWidth > 768
				this.ui.filters_container.show()
			else
				this.ui.filters_container.hide()
			return

		filter_toggle: () ->
			this.ui.filters_container.toggle()
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
			beer_style.collection.fetch({
				data: filterData,
				success: (collection, response, options) ->
					self.ui.list.html(_.template(listtemplate, collection))
			})

			return

		api: (params) ->
			# build our api endpoint.
			if(_.isEmpty(params.join('&')))
				this.ui.api_url.html(_domain+'/api/v1/beerstyles')
			else
				this.ui.api_url.html(_domain+'/api/v1/beerstyles?'+params.join('&'))
  }
