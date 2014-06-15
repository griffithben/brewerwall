define (require) ->
	viewtemplate = require 'text!views/hops/hop_view.html'
	listtemplate = require 'text!views/hops/hop_list.html'
	hop = require 'models/yeast'

	HopView = Backbone.View.extend {
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
			this.ui.api_url = this.$el.find('#api-url')
			hop.collection.fetch({
				success: (collection, response, options) ->
					self.ui.list.html(_.template(listtemplate, collection))
			})
			return

		onFilterChange: () ->
			self=this
			filterData = {}
			filterRequest = []

			if(self.ui.attenuation.val() != "0")
				filterData.attenuation = self.ui.attenuation.val()
				filterRequest.push('attenuation='+self.ui.attenuation.val())


			if(_.isEmpty(filterRequest.join('&')))
				this.ui.api_url.html('brewerwall.dev/api/hops')
			else
				this.ui.api_url.html('brewerwall.dev/api/hops?'+filterRequest.join('&'))

			hop.collection.fetch({
				data: filterData,
				success: (collection, response, options) ->
					self.ui.list.html(_.template(listtemplate, collection))
			})
			return
  }
