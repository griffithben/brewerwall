define (require) ->
  viewtemplate = require 'text!views/srms/srm_view.html'
  listtemplate = require 'text!views/srms/srm_list.html'
  srm = require 'models/srm'

  SRMView = Backbone.View.extend {
    ui: {}
    events: {}

    initialize: () ->
      self=this
      this.$el.append(_.template(viewtemplate))
      this.ui.list = this.$el.find('#list')
      this.ui.api_url = this.$el.find('#api-url')
      srm.collection.fetch({
        success: (collection, response, options) ->
          self.ui.list.html(_.template(listtemplate, collection))
      })
      return

    onFilterChange: () ->
      self=this
      filterData = {}
      filterRequest = []

      if(_.isEmpty(filterRequest.join('&')))
        this.ui.api_url.html('brewerwall.dev/api/srms')
      else
        this.ui.api_url.html('brewerwall.dev/api/srms?'+filterRequest.join('&'))

      srm.collection.fetch({
        data: filterData,
        success: (collection, response, options) ->
          self.ui.list.html(_.template(listtemplate, collection))
      })
      return
  }