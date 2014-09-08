define({ api: [
  {
    "type": "get",
    "url": "/api/v1/styles",
    "title": "Request All Beer Styles",
    "name": "GetAll",
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://brewerwall.com/api/v1/styles\n"
      }
    ],
    "group": "Beer_Styles",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "beer_style",
            "optional": false,
            "description": "<p>List of Styles.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.id",
            "optional": false,
            "description": "<p>Style Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "beer_style.name",
            "optional": false,
            "description": "<p>Name of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "beer_style.description",
            "optional": false,
            "description": "<p>Description of the Style.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "beer_style.category",
            "optional": false,
            "description": "<p>Category of the Style (Ale, Lager)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "beer_style.origin",
            "optional": false,
            "description": "<p>Origin of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.og_min",
            "optional": false,
            "description": "<p>Original Gravity min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.og_max",
            "optional": false,
            "description": "<p>Original Gravity max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.og_plato_min",
            "optional": false,
            "description": "<p>Original Gravity in Plato min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.og_plato_max",
            "optional": false,
            "description": "<p>Original Gravity in Plato max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.fg_min",
            "optional": false,
            "description": "<p>Final Gravity min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.fg_max",
            "optional": false,
            "description": "<p>Final Gravity max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.fg_plato_min",
            "optional": false,
            "description": "<p>Final Gravity in Plato min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.fg_plato_max",
            "optional": false,
            "description": "<p>Final Gravity in Plato max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.abw_min",
            "optional": false,
            "description": "<p>Alcohol by Weight min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.abw_max",
            "optional": false,
            "description": "<p>Alcohol by Weight max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.abv_min",
            "optional": false,
            "description": "<p>Alcohol by Volume min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.abv_max",
            "optional": false,
            "description": "<p>Alcohol by Volume max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.ibu_min",
            "optional": false,
            "description": "<p>International Bittering Unit min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.ibu_max",
            "optional": false,
            "description": "<p>International Bittering Unit max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.srm_min",
            "optional": false,
            "description": "<p>Standard Reference Method min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.srm_max",
            "optional": false,
            "description": "<p>Standard Reference Method max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.ebc_min",
            "optional": false,
            "description": "<p>EBC min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.ebc_max",
            "optional": false,
            "description": "<p>EBC max range of the Style</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n      \"id\":1,\n      \"name\":\"Classic English-Style Pale Ale\",\n      \"description\":\"Classic English pale ales are golden to copper colored. Chill haze may be in evidence only at very cold temperatures. They have low to medium malt flavor and aroma. Low caramel malt character is allowable. Medium to medium-high hop bitterness, flavor, and aroma should be evident. Hop character is evident as earthy, herbal English-variety hop character. Note that \\u00e2\\u20ac\\u0153earthy, herbal English-variety hop character\\u00e2\\u20ac\\u009d is the perceived end, but may be a result of the skillful use of hops of other national origins. This is a medium-bodied ale. Fruity-ester flavors and aromas are moderate to strong. The absence of diacetyl is desirable, though, diacetyl (butterscotch character) is acceptable and characteristic when at very low levels.\\n\",\n      \"category\":\"Ale\",\n      \"origin\":\"British\",\n      \"og_min\":1.04,\n      \"og_max\":1.056,\n      \"og_plato_min:\"10,\n      \"og_plato_max\":14,\n      \"fg_min\":1.008,\n      \"fg_max\":1.016,\n      \"fg_plato_min\":2,\n      \"fg_plato_max\":4,\n      \"abw_min\":3.5,\n      \"abw_max\":4.2,\n      \"abv_min\":4.5,\n      \"abv_max\":5.5,\n      \"ibu_min\":20,\n      \"ibu_max\":40,\n      \"srm_min\":5,\n      \"srm_max\":12,\n      \"ebc_min\":10,\n      \"ebc_max\":24,\n      \"year\":2013\n    }, {...}]\n"
        }
      ]
    },
    "filename": "app/routes/beer_styles.php"
  },
  {
    "type": "get",
    "url": "/api/v1/styles/:id",
    "title": "Request Single Beer Style",
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://brewerwall.com/api/v1/styles/1\n"
      }
    ],
    "name": "GetStyle",
    "group": "Beer_Styles",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "field": "id",
            "optional": false,
            "description": "<p>Specific style unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "field": "id",
            "optional": false,
            "description": "<p>Style Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Description of the Style.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Category of the Style (Ale, Lager)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "origin",
            "optional": false,
            "description": "<p>Origin of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "og_min",
            "optional": false,
            "description": "<p>Original Gravity min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "og_max",
            "optional": false,
            "description": "<p>Original Gravity max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "og_plato_min",
            "optional": false,
            "description": "<p>Original Gravity in Plato min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "og_plato_max",
            "optional": false,
            "description": "<p>Original Gravity in Plato max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "fg_min",
            "optional": false,
            "description": "<p>Final Gravity min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "fg_max",
            "optional": false,
            "description": "<p>Final Gravity max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "fg_plato_min",
            "optional": false,
            "description": "<p>Final Gravity in Plato min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "fg_plato_max",
            "optional": false,
            "description": "<p>Final Gravity in Plato max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "abw_min",
            "optional": false,
            "description": "<p>Alcohol by Weight min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "abw_max",
            "optional": false,
            "description": "<p>Alcohol by Weight max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "abv_min",
            "optional": false,
            "description": "<p>Alcohol by Volume min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "abv_max",
            "optional": false,
            "description": "<p>Alcohol by Volume max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "ibu_min",
            "optional": false,
            "description": "<p>International Bittering Unit min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "ibu_max",
            "optional": false,
            "description": "<p>International Bittering Unit max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "srm_min",
            "optional": false,
            "description": "<p>Standard Reference Method min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "srm_max",
            "optional": false,
            "description": "<p>Standard Reference Method max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "ebc_min",
            "optional": false,
            "description": "<p>EBC min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "ebc_max",
            "optional": false,
            "description": "<p>EBC max range of the Style</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n      \"id\":1,\n      \"name\":\"Classic English-Style Pale Ale\",\n      \"description\":\"Classic English pale ales are golden to copper colored. Chill haze may be in evidence only at very cold temperatures. They have low to medium malt flavor and aroma. Low caramel malt character is allowable. Medium to medium-high hop bitterness, flavor, and aroma should be evident. Hop character is evident as earthy, herbal English-variety hop character. Note that \\u00e2\\u20ac\\u0153earthy, herbal English-variety hop character\\u00e2\\u20ac\\u009d is the perceived end, but may be a result of the skillful use of hops of other national origins. This is a medium-bodied ale. Fruity-ester flavors and aromas are moderate to strong. The absence of diacetyl is desirable, though, diacetyl (butterscotch character) is acceptable and characteristic when at very low levels.\\n\",\n      \"category\":\"Ale\",\n      \"origin\":\"British\",\n      \"og_min\":1.04,\n      \"og_max\":1.056,\n      \"og_plato_min:\"10,\n      \"og_plato_max\":14,\n      \"fg_min\":1.008,\n      \"fg_max\":1.016,\n      \"fg_plato_min\":2,\n      \"fg_plato_max\":4,\n      \"abw_min\":3.5,\n      \"abw_max\":4.2,\n      \"abv_min\":4.5,\n      \"abv_max\":5.5,\n      \"ibu_min\":20,\n      \"ibu_max\":40,\n      \"srm_min\":5,\n      \"srm_max\":12,\n      \"ebc_min\":10,\n      \"ebc_max\":24,\n      \"year\":2013\n    }]\n"
        }
      ]
    },
    "filename": "app/routes/beer_styles.php"
  },
  {
    "type": "post",
    "url": "/api/v1/styles",
    "title": "Search All Beer Styles",
    "name": "SearchAll",
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://brewerwall.com/api/v1/styles\n"
      }
    ],
    "group": "Beer_Styles",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Wildcard search on the name field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Wildcard search on the description field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "category",
            "optional": false,
            "description": "<p>Exact search on the category field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "origin",
            "optional": false,
            "description": "<p>Wildcard search on the origin field.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "og",
            "optional": false,
            "description": "<p>Value search between min and max og fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "og_plato",
            "optional": false,
            "description": "<p>Value search between min and max og_plato fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "fg",
            "optional": false,
            "description": "<p>Value search between min and max fg fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "fg_plato",
            "optional": false,
            "description": "<p>Value search between min and max fg_plato fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "abw",
            "optional": false,
            "description": "<p>Value search between min and max abw fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "abv",
            "optional": false,
            "description": "<p>Value search between min and max abv fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "field": "ibu",
            "optional": false,
            "description": "<p>Value search between min and max ibu fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "field": "ebc",
            "optional": false,
            "description": "<p>Value search between min and max ebc fields.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "beer_style",
            "optional": false,
            "description": "<p>List of Styles.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.id",
            "optional": false,
            "description": "<p>Style Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "beer_style.name",
            "optional": false,
            "description": "<p>Name of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "beer_style.description",
            "optional": false,
            "description": "<p>Description of the Style.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "beer_style.category",
            "optional": false,
            "description": "<p>Category of the Style (Ale, Lager)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "beer_style.origin",
            "optional": false,
            "description": "<p>Origin of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.og_min",
            "optional": false,
            "description": "<p>Original Gravity min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.og_max",
            "optional": false,
            "description": "<p>Original Gravity max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.og_plato_min",
            "optional": false,
            "description": "<p>Original Gravity in Plato min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.og_plato_max",
            "optional": false,
            "description": "<p>Original Gravity in Plato max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.fg_min",
            "optional": false,
            "description": "<p>Final Gravity min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.fg_max",
            "optional": false,
            "description": "<p>Final Gravity max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.fg_plato_min",
            "optional": false,
            "description": "<p>Final Gravity in Plato min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.fg_plato_max",
            "optional": false,
            "description": "<p>Final Gravity in Plato max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.abw_min",
            "optional": false,
            "description": "<p>Alcohol by Weight min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.abw_max",
            "optional": false,
            "description": "<p>Alcohol by Weight max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.abv_min",
            "optional": false,
            "description": "<p>Alcohol by Volume min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "beer_style.abv_max",
            "optional": false,
            "description": "<p>Alcohol by Volume max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.ibu_min",
            "optional": false,
            "description": "<p>International Bittering Unit min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.ibu_max",
            "optional": false,
            "description": "<p>International Bittering Unit max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.srm_min",
            "optional": false,
            "description": "<p>Standard Reference Method min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.srm_max",
            "optional": false,
            "description": "<p>Standard Reference Method max range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.ebc_min",
            "optional": false,
            "description": "<p>EBC min range of the Style</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "beer_style.ebc_max",
            "optional": false,
            "description": "<p>EBC max range of the Style</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n      \"id\":1,\n      \"name\":\"Classic English-Style Pale Ale\",\n      \"description\":\"Classic English pale ales are golden to copper colored. Chill haze may be in evidence only at very cold temperatures. They have low to medium malt flavor and aroma. Low caramel malt character is allowable. Medium to medium-high hop bitterness, flavor, and aroma should be evident. Hop character is evident as earthy, herbal English-variety hop character. Note that \\u00e2\\u20ac\\u0153earthy, herbal English-variety hop character\\u00e2\\u20ac\\u009d is the perceived end, but may be a result of the skillful use of hops of other national origins. This is a medium-bodied ale. Fruity-ester flavors and aromas are moderate to strong. The absence of diacetyl is desirable, though, diacetyl (butterscotch character) is acceptable and characteristic when at very low levels.\\n\",\n      \"category\":\"Ale\",\n      \"origin\":\"British\",\n      \"og_min\":1.04,\n      \"og_max\":1.056,\n      \"og_plato_min:\"10,\n      \"og_plato_max\":14,\n      \"fg_min\":1.008,\n      \"fg_max\":1.016,\n      \"fg_plato_min\":2,\n      \"fg_plato_max\":4,\n      \"abw_min\":3.5,\n      \"abw_max\":4.2,\n      \"abv_min\":4.5,\n      \"abv_max\":5.5,\n      \"ibu_min\":20,\n      \"ibu_max\":40,\n      \"srm_min\":5,\n      \"srm_max\":12,\n      \"ebc_min\":10,\n      \"ebc_max\":24,\n      \"year\":2013\n    }, {...}]\n"
        }
      ]
    },
    "filename": "app/routes/beer_styles.php"
  },
  {
    "type": "get",
    "url": "/api/v1/hops",
    "title": "Request All Hops",
    "name": "GetAll",
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://brewerwall.com/api/v1/hops\n"
      }
    ],
    "group": "Hops",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "hop",
            "optional": false,
            "description": "<p>List of Hops.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "hop.id",
            "optional": false,
            "description": "<p>Hop Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.name",
            "optional": false,
            "description": "<p>Name of the Hop</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.description",
            "optional": false,
            "description": "<p>Description of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.origin",
            "optional": false,
            "description": "<p>Origin of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.type",
            "optional": false,
            "description": "<p>Type of the Hop (Aroma, Bittering or Both).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.styles",
            "optional": false,
            "description": "<p>Styles of Beer the Hop relates to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.storage",
            "optional": false,
            "description": "<p>Storage properties of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.alpha_min",
            "optional": false,
            "description": "<p>Alpha min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.alpha_max",
            "optional": false,
            "description": "<p>Alpha max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.beta_min",
            "optional": false,
            "description": "<p>Beta min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.beta_max",
            "optional": false,
            "description": "<p>Beta max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.cohumulone_min",
            "optional": false,
            "description": "<p>Cohumulone min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.cohumulone_max",
            "optional": false,
            "description": "<p>Cohumulone max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.total_oil_min",
            "optional": false,
            "description": "<p>Total Oil min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.total_oil_max",
            "optional": false,
            "description": "<p>Total Oil max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.myrcene_min",
            "optional": false,
            "description": "<p>Myrcene min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.myrcene_max",
            "optional": false,
            "description": "<p>Myrcene max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.humulone_min",
            "optional": false,
            "description": "<p>Humulone min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.humulone_max",
            "optional": false,
            "description": "<p>Humulone max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.farnesene_min",
            "optional": false,
            "description": "<p>Farnesene min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.farnesene_max",
            "optional": false,
            "description": "<p>Farnesene max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.caryophyllene_min",
            "optional": false,
            "description": "<p>Caryophyllene min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.caryophyllene_max",
            "optional": false,
            "description": "<p>Caryophyllene max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.source",
            "optional": false,
            "description": "<p>Source of the Hop data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\":1,\n     \"name\":\"AHTANUM\",\n     \"description\":\"Yakima Valley bred Ahtanum is sweet and peppery with a piney-citrus aspect. Warmly aromatic and moderately bittering, Ahtanum is a hop of distinction. It is often likened to Cascade, although it makes more sense to say that Cascade is a good substitute. Ahtanum is less bitter, its alpha acids are lower, and its grapefruit essence is much more pronounced than Cascade\\u00e2\\u20ac\\u2122s. It really is more akin to Willamette, with Willamette\\u00e2\\u20ac\\u2122s note being more lemon than grapefruit. Ahtanum\\u00e2\\u20ac\\u2122s distinct citrus character has led to it being used as the singular hop in Dogfish Head\\u00e2\\u20ac\\u2122s Blood Orange Heffeweisen and Stone Brewing\\u00e2\\u20ac\\u2122s Pale Ale.\",\n     \"origin\":\"US\",\n     \"type\":\"Aroma\",\n     \"aroma\":\"Floral, earthy, citrus and grapefruit tones\",\n     \"styles\":\"Pale Ale\",\n     \"storage\":\"Fair to Good\",\n     \"alpha_min\":5.7,\n     \"alpha_max\":6.3,\n     \"beta_min\":5,\n     \"beta_max\":6.5,\n     \"cohumulone_min\":30,\n     \"cohumulone_max\":35,\n     \"total_oil_min\":0.8,\n     \"total_oil_max\":1.2,\n     \"myrcene_min\":50,\n     \"myrcene_max\":55,\n     \"humulene_min\":16,\n     \"humulene_max\":20,\n     \"farnesene_min\":0,\n     \"farnesene_max\":1,\n     \"caryophyllene_min\":9,\n     \"caryophyllene_max\":12,\n     \"source\":\"Hop Union, Hoplist\"\n   }, {...}]\n"
        }
      ]
    },
    "filename": "app/routes/hops.php"
  },
  {
    "type": "get",
    "url": "/api/v1/hops",
    "title": "Request Single Hop",
    "name": "GetHop",
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://brewerwall.com/api/v1/hops/1\n"
      }
    ],
    "group": "Hops",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "field": "id",
            "optional": false,
            "description": "<p>Specific hop unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "hop",
            "optional": false,
            "description": "<p>List of Hops.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "hop.id",
            "optional": false,
            "description": "<p>Hop Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.name",
            "optional": false,
            "description": "<p>Name of the Hop</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.description",
            "optional": false,
            "description": "<p>Description of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.origin",
            "optional": false,
            "description": "<p>Origin of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.type",
            "optional": false,
            "description": "<p>Type of the Hop (Aroma, Bittering or Both).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.styles",
            "optional": false,
            "description": "<p>Styles of Beer the Hop relates to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.storage",
            "optional": false,
            "description": "<p>Storage properties of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.alpha_min",
            "optional": false,
            "description": "<p>Alpha min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.alpha_max",
            "optional": false,
            "description": "<p>Alpha max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.beta_min",
            "optional": false,
            "description": "<p>Beta min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.beta_max",
            "optional": false,
            "description": "<p>Beta max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.cohumulone_min",
            "optional": false,
            "description": "<p>Cohumulone min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.cohumulone_max",
            "optional": false,
            "description": "<p>Cohumulone max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.total_oil_min",
            "optional": false,
            "description": "<p>Total Oil min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.total_oil_max",
            "optional": false,
            "description": "<p>Total Oil max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.myrcene_min",
            "optional": false,
            "description": "<p>Myrcene min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.myrcene_max",
            "optional": false,
            "description": "<p>Myrcene max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.humulone_min",
            "optional": false,
            "description": "<p>Humulone min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.humulone_max",
            "optional": false,
            "description": "<p>Humulone max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.farnesene_min",
            "optional": false,
            "description": "<p>Farnesene min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.farnesene_max",
            "optional": false,
            "description": "<p>Farnesene max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.caryophyllene_min",
            "optional": false,
            "description": "<p>Caryophyllene min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.caryophyllene_max",
            "optional": false,
            "description": "<p>Caryophyllene max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.source",
            "optional": false,
            "description": "<p>Source of the Hop data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\":1,\n     \"name\":\"AHTANUM\",\n     \"description\":\"Yakima Valley bred Ahtanum is sweet and peppery with a piney-citrus aspect. Warmly aromatic and moderately bittering, Ahtanum is a hop of distinction. It is often likened to Cascade, although it makes more sense to say that Cascade is a good substitute. Ahtanum is less bitter, its alpha acids are lower, and its grapefruit essence is much more pronounced than Cascade\\u00e2\\u20ac\\u2122s. It really is more akin to Willamette, with Willamette\\u00e2\\u20ac\\u2122s note being more lemon than grapefruit. Ahtanum\\u00e2\\u20ac\\u2122s distinct citrus character has led to it being used as the singular hop in Dogfish Head\\u00e2\\u20ac\\u2122s Blood Orange Heffeweisen and Stone Brewing\\u00e2\\u20ac\\u2122s Pale Ale.\",\n     \"origin\":\"US\",\n     \"type\":\"Aroma\",\n     \"aroma\":\"Floral, earthy, citrus and grapefruit tones\",\n     \"styles\":\"Pale Ale\",\n     \"storage\":\"Fair to Good\",\n     \"alpha_min\":5.7,\n     \"alpha_max\":6.3,\n     \"beta_min\":5,\n     \"beta_max\":6.5,\n     \"cohumulone_min\":30,\n     \"cohumulone_max\":35,\n     \"total_oil_min\":0.8,\n     \"total_oil_max\":1.2,\n     \"myrcene_min\":50,\n     \"myrcene_max\":55,\n     \"humulene_min\":16,\n     \"humulene_max\":20,\n     \"farnesene_min\":0,\n     \"farnesene_max\":1,\n     \"caryophyllene_min\":9,\n     \"caryophyllene_max\":12,\n     \"source\":\"Hop Union, Hoplist\"\n   }]\n"
        }
      ]
    },
    "filename": "app/routes/hops.php"
  },
  {
    "type": "get",
    "url": "/api/v1/hops",
    "title": "Request Single Hop Substitutes",
    "name": "GetHopSubstitutes",
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://brewerwall.com/api/v1/hops/1/substitutes\n"
      }
    ],
    "group": "Hops",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "field": "id",
            "optional": false,
            "description": "<p>Specific hop unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "hop",
            "optional": false,
            "description": "<p>List of Hop Substitutes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "hop.id",
            "optional": false,
            "description": "<p>Hop Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.name",
            "optional": false,
            "description": "<p>Name of the Hop</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.description",
            "optional": false,
            "description": "<p>Description of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.origin",
            "optional": false,
            "description": "<p>Origin of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.type",
            "optional": false,
            "description": "<p>Type of the Hop (Aroma, Bittering or Both).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.styles",
            "optional": false,
            "description": "<p>Styles of Beer the Hop relates to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.storage",
            "optional": false,
            "description": "<p>Storage properties of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.alpha_min",
            "optional": false,
            "description": "<p>Alpha min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.alpha_max",
            "optional": false,
            "description": "<p>Alpha max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.beta_min",
            "optional": false,
            "description": "<p>Beta min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.beta_max",
            "optional": false,
            "description": "<p>Beta max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.cohumulone_min",
            "optional": false,
            "description": "<p>Cohumulone min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.cohumulone_max",
            "optional": false,
            "description": "<p>Cohumulone max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.total_oil_min",
            "optional": false,
            "description": "<p>Total Oil min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.total_oil_max",
            "optional": false,
            "description": "<p>Total Oil max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.myrcene_min",
            "optional": false,
            "description": "<p>Myrcene min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.myrcene_max",
            "optional": false,
            "description": "<p>Myrcene max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.humulone_min",
            "optional": false,
            "description": "<p>Humulone min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.humulone_max",
            "optional": false,
            "description": "<p>Humulone max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.farnesene_min",
            "optional": false,
            "description": "<p>Farnesene min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.farnesene_max",
            "optional": false,
            "description": "<p>Farnesene max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.caryophyllene_min",
            "optional": false,
            "description": "<p>Caryophyllene min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.caryophyllene_max",
            "optional": false,
            "description": "<p>Caryophyllene max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.source",
            "optional": false,
            "description": "<p>Source of the Hop data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\":1,\n     \"name\":\"AHTANUM\",\n     \"description\":\"Yakima Valley bred Ahtanum is sweet and peppery with a piney-citrus aspect. Warmly aromatic and moderately bittering, Ahtanum is a hop of distinction. It is often likened to Cascade, although it makes more sense to say that Cascade is a good substitute. Ahtanum is less bitter, its alpha acids are lower, and its grapefruit essence is much more pronounced than Cascade\\u00e2\\u20ac\\u2122s. It really is more akin to Willamette, with Willamette\\u00e2\\u20ac\\u2122s note being more lemon than grapefruit. Ahtanum\\u00e2\\u20ac\\u2122s distinct citrus character has led to it being used as the singular hop in Dogfish Head\\u00e2\\u20ac\\u2122s Blood Orange Heffeweisen and Stone Brewing\\u00e2\\u20ac\\u2122s Pale Ale.\",\n     \"origin\":\"US\",\n     \"type\":\"Aroma\",\n     \"aroma\":\"Floral, earthy, citrus and grapefruit tones\",\n     \"styles\":\"Pale Ale\",\n     \"storage\":\"Fair to Good\",\n     \"alpha_min\":5.7,\n     \"alpha_max\":6.3,\n     \"beta_min\":5,\n     \"beta_max\":6.5,\n     \"cohumulone_min\":30,\n     \"cohumulone_max\":35,\n     \"total_oil_min\":0.8,\n     \"total_oil_max\":1.2,\n     \"myrcene_min\":50,\n     \"myrcene_max\":55,\n     \"humulene_min\":16,\n     \"humulene_max\":20,\n     \"farnesene_min\":0,\n     \"farnesene_max\":1,\n     \"caryophyllene_min\":9,\n     \"caryophyllene_max\":12,\n     \"source\":\"Hop Union, Hoplist\"\n   }, {...}]\n"
        }
      ]
    },
    "filename": "app/routes/hops.php"
  },
  {
    "type": "post",
    "url": "/api/v1/hops",
    "title": "Search All Hops",
    "name": "SearchAll",
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://brewerwall.com/api/v1/hops\n"
      }
    ],
    "group": "Hops",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Wildcard search on the name field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Wildcard search on the description field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "origin",
            "optional": false,
            "description": "<p>Wildcard search on the origin field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "type",
            "optional": false,
            "description": "<p>Exact search on the type field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "styles",
            "optional": false,
            "description": "<p>Wildcard search on the styles field.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "alpha",
            "optional": false,
            "description": "<p>Value search between min and max alpha fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "beta",
            "optional": false,
            "description": "<p>Value search between min and max beta fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "cohumulone",
            "optional": false,
            "description": "<p>Value search between min and max cohumulone fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "total_oil",
            "optional": false,
            "description": "<p>Value search between min and max total_oil fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "mycrene",
            "optional": false,
            "description": "<p>Value search between min and max mycrene fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "humulone",
            "optional": false,
            "description": "<p>Value search between min and max humulone fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "farnesene",
            "optional": false,
            "description": "<p>Value search between min and max farnesene fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "caryophyllene",
            "optional": false,
            "description": "<p>Value search between min and max caryophyllene fields.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "hop",
            "optional": false,
            "description": "<p>List of Hops.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "hop.id",
            "optional": false,
            "description": "<p>Hop Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.name",
            "optional": false,
            "description": "<p>Name of the Hop</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.description",
            "optional": false,
            "description": "<p>Description of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.origin",
            "optional": false,
            "description": "<p>Origin of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.type",
            "optional": false,
            "description": "<p>Type of the Hop (Aroma, Bittering or Both).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.styles",
            "optional": false,
            "description": "<p>Styles of Beer the Hop relates to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "hop.storage",
            "optional": false,
            "description": "<p>Storage properties of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.alpha_min",
            "optional": false,
            "description": "<p>Alpha min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.alpha_max",
            "optional": false,
            "description": "<p>Alpha max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.beta_min",
            "optional": false,
            "description": "<p>Beta min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.beta_max",
            "optional": false,
            "description": "<p>Beta max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.cohumulone_min",
            "optional": false,
            "description": "<p>Cohumulone min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.cohumulone_max",
            "optional": false,
            "description": "<p>Cohumulone max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.total_oil_min",
            "optional": false,
            "description": "<p>Total Oil min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.total_oil_max",
            "optional": false,
            "description": "<p>Total Oil max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.myrcene_min",
            "optional": false,
            "description": "<p>Myrcene min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.myrcene_max",
            "optional": false,
            "description": "<p>Myrcene max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.humulone_min",
            "optional": false,
            "description": "<p>Humulone min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.humulone_max",
            "optional": false,
            "description": "<p>Humulone max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.farnesene_min",
            "optional": false,
            "description": "<p>Farnesene min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.farnesene_max",
            "optional": false,
            "description": "<p>Farnesene max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.caryophyllene_min",
            "optional": false,
            "description": "<p>Caryophyllene min range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.caryophyllene_max",
            "optional": false,
            "description": "<p>Caryophyllene max range of the Hop.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "field": "hop.source",
            "optional": false,
            "description": "<p>Source of the Hop data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\":\"1\",\n     \"name\":\"AHTANUM\",\n     \"description\":\"Yakima Valley bred Ahtanum is sweet and peppery with a piney-citrus aspect. Warmly aromatic and moderately bittering, Ahtanum is a hop of distinction. It is often likened to Cascade, although it makes more sense to say that Cascade is a good substitute. Ahtanum is less bitter, its alpha acids are lower, and its grapefruit essence is much more pronounced than Cascade\\u00e2\\u20ac\\u2122s. It really is more akin to Willamette, with Willamette\\u00e2\\u20ac\\u2122s note being more lemon than grapefruit. Ahtanum\\u00e2\\u20ac\\u2122s distinct citrus character has led to it being used as the singular hop in Dogfish Head\\u00e2\\u20ac\\u2122s Blood Orange Heffeweisen and Stone Brewing\\u00e2\\u20ac\\u2122s Pale Ale.\",\n     \"origin\":\"US\",\n     \"type\":\"Aroma\",\n     \"aroma\":\"Floral, earthy, citrus and grapefruit tones\",\n     \"styles\":\"Pale Ale\",\n     \"storage\":\"Fair to Good\",\n     \"alpha_min\":5.7,\n     \"alpha_max\":6.3,\n     \"beta_min\":5,\n     \"beta_max\":6.5,\n     \"cohumulone_min\":30,\n     \"cohumulone_max\":35,\n     \"total_oil_min\":0.8,\n     \"total_oil_max\":1.2,\n     \"myrcene_min\":50,\n     \"myrcene_max\":55,\n     \"humulene_min\":16,\n     \"humulene_max\":20,\n     \"farnesene_min\":0,\n     \"farnesene_max\":1,\n     \"caryophyllene_min\":9,\n     \"caryophyllene_max\":12,\n     \"source\":\"Hop Union, Hoplist\"\n   }, {...}]\n"
        }
      ]
    },
    "filename": "app/routes/hops.php"
  },
  {
    "type": "get",
    "url": "/api/v1/srms",
    "title": "Request All SRMs",
    "name": "GetAll",
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://brewerwall.com/api/v1/srms\n"
      }
    ],
    "group": "Srms",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "srm",
            "optional": false,
            "description": "<p>List of SRMs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "srm.id",
            "optional": false,
            "description": "<p>SRM Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "srm.value",
            "optional": false,
            "description": "<p>SRM value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "srm.hex",
            "optional": false,
            "description": "<p>SRM hexidecimal color value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\":1,\n     \"value\":1,\n     \"hex\":\"#FFE699\"\n   }, {...}]\n"
        }
      ]
    },
    "filename": "app/routes/srms.php"
  },
  {
    "type": "get",
    "url": "/api/v1/srms/:id",
    "title": "Request Single SRM",
    "name": "GetSRM",
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://brewerwall.com/api/v1/srms/1\n"
      }
    ],
    "group": "Srms",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "field": "id",
            "optional": false,
            "description": "<p>Specific SRM unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "srm",
            "optional": false,
            "description": "<p>List of SRMs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "srm.id",
            "optional": false,
            "description": "<p>SRM Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "srm.value",
            "optional": false,
            "description": "<p>SRM value.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "srm.hex",
            "optional": false,
            "description": "<p>SRM hexidecimal color value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\":1,\n     \"value\":1,\n     \"hex\":\"#FFE699\"\n   }]\n"
        }
      ]
    },
    "filename": "app/routes/srms.php"
  },
  {
    "type": "get",
    "url": "/api/v1/yeasts",
    "title": "Request All Yeasts",
    "name": "GetAll",
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://brewerwall.com/api/v1/yeasts\n"
      }
    ],
    "group": "Yeasts",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "yeast",
            "optional": false,
            "description": "<p>List of Yeasts.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.id",
            "optional": false,
            "description": "<p>SRM Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.laboratory",
            "optional": false,
            "description": "<p>Laboratory of the strain.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.strain",
            "optional": false,
            "description": "<p>Strain of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.name",
            "optional": false,
            "description": "<p>Name of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.description",
            "optional": false,
            "description": "<p>Description of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.attenuation_min",
            "optional": false,
            "description": "<p>Attenuation min range of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.attenuation_max",
            "optional": false,
            "description": "<p>Attenuation max range of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.flocculation",
            "optional": false,
            "description": "<p>Flocculation of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.temperature_min",
            "optional": false,
            "description": "<p>Temperature min range of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.temperature_max",
            "optional": false,
            "description": "<p>Temperature max range of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.tolerance",
            "optional": false,
            "description": "<p>ABV Tolerance of the yeast.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\":1,\n     \"laboratory\":\"White Labs\",\n     \"strain\":\"WLP001\",\n     \"name\":\"California Ale Yeast\",\n     \"description\":\"This yeast is famous for its clean flavors, balance and ability to be used in almost any style ale. It accentuates the hop flavors and is extremely versatile.\",\n     \"attenuation_min\":73,\n     \"attenuation_max\":80,\n     \"flocculation\":\"Medium\",\n     \"temperature_min\":68,\n     \"temperature_max\":73,\n     \"tolerance\":15\n   }, {...}]\n"
        }
      ]
    },
    "filename": "app/routes/yeasts.php"
  },
  {
    "type": "get",
    "url": "/api/v1/yeasts/:id",
    "title": "Request Single Yeast",
    "name": "GetYeast",
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://brewerwall.com/api/v1/yeasts/1\n"
      }
    ],
    "group": "Yeasts",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "field": "id",
            "optional": false,
            "description": "<p>Specific Yeast unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "yeast",
            "optional": false,
            "description": "<p>List of Yeasts.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.id",
            "optional": false,
            "description": "<p>SRM Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.laboratory",
            "optional": false,
            "description": "<p>Laboratory of the strain.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.strain",
            "optional": false,
            "description": "<p>Strain of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.name",
            "optional": false,
            "description": "<p>Name of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.description",
            "optional": false,
            "description": "<p>Description of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.attenuation_min",
            "optional": false,
            "description": "<p>Attenuation min range of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.attenuation_max",
            "optional": false,
            "description": "<p>Attenuation max range of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.flocculation",
            "optional": false,
            "description": "<p>Flocculation of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.temperature_min",
            "optional": false,
            "description": "<p>Temperature min range of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.temperature_max",
            "optional": false,
            "description": "<p>Temperature max range of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.tolerance",
            "optional": false,
            "description": "<p>ABV Tolerance of the yeast.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\":1,\n     \"laboratory\":\"White Labs\",\n     \"strain\":\"WLP001\",\n     \"name\":\"California Ale Yeast\",\n     \"description\":\"This yeast is famous for its clean flavors, balance and ability to be used in almost any style ale. It accentuates the hop flavors and is extremely versatile.\",\n     \"attenuation_min\":73,\n     \"attenuation_max\":80,\n     \"flocculation\":\"Medium\",\n     \"temperature_min\":68,\n     \"temperature_max\":73,\n     \"tolerance\":15\n   }]\n"
        }
      ]
    },
    "filename": "app/routes/yeasts.php"
  },
  {
    "type": "post",
    "url": "/api/v1/yeasts",
    "title": "Search All Yeasts",
    "name": "SearchAll",
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://brewerwall.com/api/v1/yeasts\n"
      }
    ],
    "group": "Yeasts",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "laboratory",
            "optional": false,
            "description": "<p>Exact search on the laboratory field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "strain",
            "optional": false,
            "description": "<p>Exact search on the strain field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Wildcard search on the name field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "description",
            "optional": false,
            "description": "<p>Wildcard search on the description field</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "field": "attenuation",
            "optional": false,
            "description": "<p>Value search between min and max attenuation fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "flocculation",
            "optional": false,
            "description": "<p>Exact search on the flocculation field.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "field": "temperature",
            "optional": false,
            "description": "<p>Value search between min and max temperature fields.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "field": "tolerance",
            "optional": false,
            "description": "<p>Value search greater than the provided value on the tolerance field.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "yeast",
            "optional": false,
            "description": "<p>List of Yeasts.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.id",
            "optional": false,
            "description": "<p>SRM Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.laboratory",
            "optional": false,
            "description": "<p>Laboratory of the strain.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.strain",
            "optional": false,
            "description": "<p>Strain of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.name",
            "optional": false,
            "description": "<p>Name of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.description",
            "optional": false,
            "description": "<p>Description of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.attenuation_min",
            "optional": false,
            "description": "<p>Attenuation min range of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.attenuation_max",
            "optional": false,
            "description": "<p>Attenuation max range of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "yeast.flocculation",
            "optional": false,
            "description": "<p>Flocculation of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.temperature_min",
            "optional": false,
            "description": "<p>Temperature min range of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.temperature_max",
            "optional": false,
            "description": "<p>Temperature max range of the yeast.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "field": "yeast.tolerance",
            "optional": false,
            "description": "<p>ABV Tolerance of the yeast.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   [{\n     \"id\":1,\n     \"laboratory\":\"White Labs\",\n     \"strain\":\"WLP001\",\n     \"name\":\"California Ale Yeast\",\n     \"description\":\"This yeast is famous for its clean flavors, balance and ability to be used in almost any style ale. It accentuates the hop flavors and is extremely versatile.\",\n     \"attenuation_min\":73,\n     \"attenuation_max\":80,\n     \"flocculation\":\"Medium\",\n     \"temperature_min\":68,\n     \"temperature_max\":73,\n     \"tolerance\":15\n   }, {...}]\n"
        }
      ]
    },
    "filename": "app/routes/yeasts.php"
  }
] });