define({ api: [
  {
    "type": "get",
    "url": "/api/v1/styles",
    "title": "Request All Styles",
    "name": "GetAll",
    "group": "Beer_Styles",
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
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/beer_styles.php"
  },
  {
    "type": "get",
    "url": "/api/v1/styles/:id",
    "title": "Request Style",
    "name": "GetStyle",
    "group": "Beer_Styles",
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
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/beer_styles.php"
  },
  {
    "type": "post",
    "url": "/api/v1/styles",
    "title": "Search All Styles",
    "name": "SearchAll",
    "group": "Beer_Styles",
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
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/beer_styles.php"
  }
] });