define (require) ->
	viewtemplate = require 'text!views/hops/hop_view.html'
	listtemplate = require 'text!views/hops/hop_list.html'
	hop = require 'models/hop'

	HopView = Backbone.View.extend {
		ui: {}
		events: {
			'change #alpha' :'onFilterChange',
			'change #beta' :'onFilterChange',
			'change #origin' :'onFilterChange'
		}

		initialize: () ->
			self=this
			this.$el.append(_.template(viewtemplate))
			this.ui.list = this.$el.find('#list')
			this.ui.alpha = this.$el.find('#alpha')
			this.ui.beta = this.$el.find('#beta')
			this.ui.origin = this.$el.find('#origin')
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

			if(self.ui.alpha.val() != "0")
				filterData.alpha = self.ui.alpha.val()
				filterRequest.push('alpha='+self.ui.alpha.val())

			if(self.ui.beta.val() != "0")
				filterData.beta = self.ui.beta.val()
				filterRequest.push('beta='+self.ui.beta.val())

			if(self.ui.origin.val() != "0")
				filterData.origin = self.ui.origin.val()
				filterRequest.push('origin='+self.ui.origin.val())

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
