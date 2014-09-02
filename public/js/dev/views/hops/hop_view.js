(function() {
  define(function(require) {
    var HopRouter, HopView, hop, listtemplate, viewtemplate;
    viewtemplate = require('text!views/hops/hop_view.html');
    listtemplate = require('text!views/hops/hop_list.html');
    hop = require('models/hop');
    HopRouter = Backbone.Router.extend({
      routes: {
        "(/)": "filter",
        ":filter/:val(/)": "filter",
        ":filter/:val/:filter/:val(/)": "filter",
        ":filter/:val/:filter/:val/:filter/:val(/)": "filter"
      }
    });
    return HopView = Backbone.View.extend({
      ui: {},
      events: {
        'change #alpha': 'onFilterChange',
        'change #beta': 'onFilterChange',
        'change #origin': 'onFilterChange',
        'click #filters-toggle': 'onFilterToggleClick'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.list = this.$el.find('#list');
        this.ui.alpha = this.$el.find('#alpha');
        this.ui.beta = this.$el.find('#beta');
        this.ui.origin = this.$el.find('#origin');
        this.ui.filters = this.$el.find('.filter');
        this.ui.filters_container = this.$el.find('#filters-container');
        this.ui.api_url = this.$el.find('#api-url');
        this.router = new HopRouter;
        this.router.on('route:filter', _.bind(this.filter, this));
        Backbone.history.start();
        window.onresize = _.bind(this.onWindowResize, this);
        this.filter_init();
      },
      onFilterChange: function() {
        var navigate;
        navigate = [];
        if (this.ui.alpha.val() !== "0") {
          navigate.push("alpha/" + encodeURIComponent(this.ui.alpha.val()));
        }
        if (this.ui.beta.val() !== "0") {
          navigate.push("beta/" + encodeURIComponent(this.ui.beta.val()));
        }
        if (this.ui.origin.val() !== "0") {
          navigate.push("origin/" + encodeURIComponent(this.ui.origin.val()));
        }
        this.router.navigate(navigate.join('/'), {
          trigger: true
        });
      },
      onFilterToggleClick: function() {
        this.filter_toggle();
      },
      onWindowResize: function() {
        this.filter_init();
      },
      filter_init: function() {
        if (window.innerWidth > 768) {
          this.ui.filters_container.show();
        } else {
          this.ui.filters_container.hide();
        }
      },
      filter_toggle: function() {
        this.ui.filters_container.toggle();
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
        hop.collection.fetch({
          data: filterData,
          success: function(collection, response, options) {
            return self.ui.list.html(_.template(listtemplate, collection));
          }
        });
      },
      api: function(params) {
        if (_.isEmpty(params.join('&'))) {
          return this.ui.api_url.html('brewerwall.dev/api/hops');
        } else {
          return this.ui.api_url.html('brewerwall.dev/api/hops?' + params.join('&'));
        }
      }
    });
  });

}).call(this);
