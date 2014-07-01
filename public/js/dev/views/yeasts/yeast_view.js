(function() {
  define(function(require) {
    var YeastRouter, YeastView, listtemplate, viewtemplate, yeast;
    viewtemplate = require('text!views/yeasts/yeast_view.html');
    listtemplate = require('text!views/yeasts/yeast_list.html');
    yeast = require('models/yeast');
    YeastRouter = Backbone.Router.extend({
      routes: {
        "(/)": "filter",
        ":filter/:val(/)": "filter",
        ":filter/:val/:filter/:val(/)": "filter",
        ":filter/:val/:filter/:val/:filter/:val(/)": "filter"
      }
    });
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
        this.ui.filters = this.$el.find('.filter');
        this.ui.api_url = this.$el.find('#api-url');
        this.router = new YeastRouter;
        this.router.on('route:filter', _.bind(this.filter, this));
        Backbone.history.start();
      },
      onFilterChange: function() {
        var navigate;
        navigate = [];
        if (this.ui.attenuation.val() !== "0") {
          navigate.push("attenuation/" + encodeURIComponent(this.ui.attenuation.val()));
        }
        if (this.ui.temperature.val() !== "0") {
          navigate.push("temperature/" + encodeURIComponent(this.ui.temperature.val()));
        }
        if (this.ui.tolerance.val() !== "0") {
          navigate.push("tolerance/" + encodeURIComponent(this.ui.tolerance.val()));
        }
        this.router.navigate(navigate.join('/'), {
          trigger: true
        });
      },
      filter: function() {
        var e, filterData, filterRequest, i, self, _i, _len;
        self = this;
        this.ui.filters.prop('selectedIndex', 0);
        filterData = {};
        filterRequest = [];
        for (i = _i = 0, _len = arguments.length; _i < _len; i = _i += 2) {
          e = arguments[i];
          if (!_.isEmpty(arguments[i])) {
            filterData[arguments[i]] = arguments[i + 1];
            if (!_.isUndefined(self.ui[arguments[i]])) {
              self.ui[arguments[i]].val(arguments[i + 1]);
              filterRequest.push(arguments[i] + '=' + arguments[i + 1]);
            }
          }
        }
        this.api(filterRequest);
        yeast.collection.fetch({
          data: filterData,
          success: function(collection, response, options) {
            return self.ui.list.html(_.template(listtemplate, collection));
          }
        });
      },
      api: function(params) {
        if (_.isEmpty(params.join('&'))) {
          this.ui.api_url.html('brewerwall.dev/api/yeasts');
        } else {
          this.ui.api_url.html('brewerwall.dev/api/yeasts?' + params.join('&'));
        }
      }
    });
  });

}).call(this);
