define (require) ->
	viewtemplate = require 'text!views/beer_styles/beer_style_view.html'
	listtemplate = require 'text!views/beer_styles/beer_style_list.html'
	beer_style = require 'models/beer_style'
	LoginView = {}

	BeerStyleView = Backbone.View.extend {
		ui: {}
		events: {
			'change #abv' :'onFilterChange',
			'change #ibu' :'onFilterChange',
			'change #og' :'onFilterChange',
			'change #fg' :'onFilterChange'
		}

		initialize: () ->
			self=this
			this.$el.append(_.template(viewtemplate))
			this.ui.list = this.$el.find('#list')
			this.ui.abv = this.$el.find('#abv')
			this.ui.ibu = this.$el.find('#ibu')
			this.ui.og = this.$el.find('#og')
			this.ui.fg = this.$el.find('#fg')
			this.ui.api_url = this.$el.find('#api-url')
			beer_style.collection.fetch({
				success: (collection, response, options) ->
					self.ui.list.html(_.template(listtemplate, collection))
			})
			return

		onFilterChange: () ->
			self=this
			filterData = {}
			filterRequest = []

			if(self.ui.abv.val() != "0")
				filterData.abv = self.ui.abv.val()
				filterRequest.push('abv='+self.ui.abv.val())

			if(self.ui.ibu.val() != "0")
				filterData.ibu = self.ui.ibu.val()
				filterRequest.push('ibu='+self.ui.ibu.val())

			if(self.ui.og.val() != "0")
				filterData.og = self.ui.og.val()
				filterRequest.push('og='+self.ui.og.val())

			if(self.ui.fg.val() != "0")
				filterData.fg = self.ui.fg.val()
				filterRequest.push('fg='+self.ui.fg.val())

			if(_.isEmpty(filterRequest.join('&')))
				this.ui.api_url.html('brewerwall.dev/api/beerstyles')
			else
				this.ui.api_url.html('brewerwall.dev/api/beerstyles?'+filterRequest.join('&'))

			beer_style.collection.fetch({
				data: filterData,
				success: (collection, response, options) ->
					self.ui.list.html(_.template(listtemplate, collection))
			})
			return
  }
