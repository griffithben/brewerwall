define (require) ->
  Backbone = require 'backbone'
  viewtemplate = require 'text!views/calculations/abv/abv_view.html'
  require 'beercalc'

  ABVView = Backbone.View.extend {
    ui: {}
    events: {}

    initialize: () ->
      self=this

      console.log(Beercalc.abv(1.080, 1.020))

      # Setup our UI
      this.$el.append(_.template(viewtemplate))
      return
  }
