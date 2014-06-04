(function() {
  define(function(require) {
    var YeastView, listtemplate, viewtemplate, yeast;
    viewtemplate = require('text!views/yeasts/yeast_view.html');
    listtemplate = require('text!views/yeasts/yeast_list.html');
    yeast = require('models/yeast');
    return YeastView = Backbone.View.extend({
      ui: {},
      events: {
        'change #attenuation': 'onFilterChange',
        'change #tolerance': 'onFilterChange',
        'change #temperature': 'onFilterChange'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.list = this.$el.find('#list');
        this.ui.attenuation = this.$el.find('#attenuation');
        this.ui.tolerance = this.$el.find('#tolerance');
        this.ui.temperature = this.$el.find('#temperature');
        this.ui.api_url = this.$el.find('#api-url');
        yeast.collection.fetch({
          success: function(collection, response, options) {
            return self.ui.list.html(_.template(listtemplate, collection));
          }
        });
      },
      onFilterChange: function() {
        var filterData, filterRequest, self;
        self = this;
        filterData = {};
        filterRequest = [];
        if (self.ui.attenuation.val() !== "0") {
          filterData.attenuation = self.ui.attenuation.val();
          filterRequest.push('attenuation=' + self.ui.attenuation.val());
        }
        if (self.ui.temperature.val() !== "0") {
          filterData.temperature = self.ui.temperature.val();
          filterRequest.push('temperature=' + self.ui.temperature.val());
        }
        if (self.ui.tolerance.val() !== "0") {
          filterData.tolerance = self.ui.tolerance.val();
          filterRequest.push('tolerance=' + self.ui.tolerance.val());
        }
        if (_.isEmpty(filterRequest.join('&'))) {
          this.ui.api_url.html('brewerwall.dev/api/yeasts');
        } else {
          this.ui.api_url.html('brewerwall.dev/api/yeasts?' + filterRequest.join('&'));
        }
        yeast.collection.fetch({
          data: filterData,
          success: function(collection, response, options) {
            return self.ui.list.html(_.template(listtemplate, collection));
          }
        });
      }
    });
  });

}).call(this);
