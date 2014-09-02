(function() {
  define(function(require) {
    var BeerStyleRouter, BeerStyleView, beer_style, listtemplate, viewtemplate;
    viewtemplate = require('text!views/beer_styles/beer_style_view.html');
    listtemplate = require('text!views/beer_styles/beer_style_list.html');
    beer_style = require('models/beer_style');
    BeerStyleRouter = Backbone.Router.extend({
      routes: {
        "(/)": "filter",
        ":filter/:val(/)": "filter",
        ":filter/:val/:filter/:val(/)": "filter",
        ":filter/:val/:filter/:val/:filter/:val(/)": "filter",
        ":filter/:val/:filter/:val/:filter/:val/:filter/:val(/)": "filter"
      }
    });
    return BeerStyleView = Backbone.View.extend({
      ui: {},
      events: {
        'change #abv': 'onFilterChange',
        'change #ibu': 'onFilterChange',
        'change #og': 'onFilterChange',
        'change #fg': 'onFilterChange',
        'click #filters-toggle': 'onFilterToggleClick'
      },
      initialize: function() {
        var self;
        self = this;
        this.$el.append(_.template(viewtemplate));
        this.ui.list = this.$el.find('#list');
        this.ui.abv = this.$el.find('#abv');
        this.ui.ibu = this.$el.find('#ibu');
        this.ui.og = this.$el.find('#og');
        this.ui.fg = this.$el.find('#fg');
        this.ui.filters = this.$el.find('.filter');
        this.ui.filters_container = this.$el.find('#filters-container');
        this.ui.api_url = this.$el.find('#api-url');
        this.router = new BeerStyleRouter;
        this.router.on('route:filter', _.bind(this.filter, this));
        Backbone.history.start();
        window.onresize = _.bind(this.onWindowResize, this);
        this.filter_init();
      },
      onFilterChange: function() {
        var navigate;
        navigate = [];
        if (this.ui.abv.val() !== "0") {
          navigate.push("abv/" + encodeURIComponent(this.ui.abv.val()));
        }
        if (this.ui.ibu.val() !== "0") {
          navigate.push("ibu/" + encodeURIComponent(this.ui.ibu.val()));
        }
        if (this.ui.og.val() !== "0") {
          navigate.push("og/" + encodeURIComponent(this.ui.og.val()));
        }
        if (this.ui.fg.val() !== "0") {
          navigate.push("fg/" + encodeURIComponent(this.ui.fg.val()));
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
        beer_style.collection.fetch({
          data: filterData,
          success: function(collection, response, options) {
            return self.ui.list.html(_.template(listtemplate, collection));
          }
        });
      },
      api: function(params) {
        if (_.isEmpty(params.join('&'))) {
          return this.ui.api_url.html(_domain + '/api/beerstyles');
        } else {
          return this.ui.api_url.html(_domain + '/api/beerstyles?' + params.join('&'));
        }
      }
    });
  });

}).call(this);
