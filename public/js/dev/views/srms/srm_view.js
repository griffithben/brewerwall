(function() {
  define(function(require) {
    var SRMView, listtemplate, srm, viewtemplate;
    viewtemplate = require('text!views/srms/srm_view.html');
    listtemplate = require('text!views/srms/srm_list.html');
    srm = require('models/srm');
    return SRMView = Backbone.View.extend({
      ui: {},
      events: {
        'click .srm-container': 'onSrmClick',
        'touchstart .srm-container': 'onSrmClick'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.list = this.$el.find('#list');
        this.ui.api_url = this.$el.find('#api-url');
        srm.collection.fetch({
          success: function(collection, response, options) {
            return self.ui.list.html(_.template(listtemplate, collection));
          }
        });
      },
      onFilterChange: function(e) {
        var filterData, filterRequest, self;
        self = this;
        filterData = {};
        filterRequest = [];
        if (_.isEmpty(filterRequest.join('&'))) {
          this.ui.api_url.html(_domain + '/api/v1/srms');
        } else {
          this.ui.api_url.html(_domain + '/api/v1/srms?' + filterRequest.join('&'));
        }
        srm.collection.fetch({
          data: filterData,
          success: function(collection, response, options) {
            return self.ui.list.html(_.template(listtemplate, collection));
          }
        });
      },
      onSrmClick: function(e) {
        $(e.currentTarget).toggleClass('hover');
      }
    });
  });

}).call(this);
