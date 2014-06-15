define (require) ->
  _ = require 'underscore'
  Backbone = require 'backbone'
  $ = require 'jquery'
  Hop = {}

  Hop.Model = Backbone.Model.extend {}

  Hop.Collection = Backbone.Collection.extend {
    model: Hop.Model
    url: "/api/hops"
  }

  return {
    collection: new Hop.Collection,
    model: Hop.Model
  }
