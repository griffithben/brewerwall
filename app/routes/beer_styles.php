<?php
use Zend\Db\Sql\Sql;
use App\Collections\BeerStyleCollection;

// VIEW

$app->get('/styles', function () use ($app, $adapter)  {
  $app->render('styles.html', array('page'=>'styles'));
});

$app->get('/styles/:id', function ($id) use ($app, $adapter)  {
  $collection = new BeerStyleCollection($adapter);
  $style = $collection->id($id)->toArray();
  $app->render('style.html', array('page'=>'styles', 'style'=>$style[0]));
});

// API
$app->group('/api/v1', function() use ($app, $adapter) {

  /**
  * @api {get} /api/v1/styles Request All Beer Styles
  * @apiName GetAll
  * @apiExample Example URL:
  * http://brewerwall.com/api/v1/styles
  * @apiGroup Beer Styles
  * @apiVersion 1.0.0
  *
  * @apiSuccess {Object[]} beer_style List of Styles.
  * @apiSuccess {Int} beer_style.id Style Id.
  * @apiSuccess {String} beer_style.name  Name of the Style
  * @apiSuccess {String} beer_style.description  Description of the Style.
  * @apiSuccess {String} beer_style.category  Category of the Style (Ale, Lager)
  * @apiSuccess {String} beer_style.origin  Origin of the Style
  * @apiSuccess {Float} beer_style.og_min  Original Gravity min range of the Style
  * @apiSuccess {Float} beer_style.og_max  Original Gravity max range of the Style
  * @apiSuccess {Float} beer_style.og_plato_min  Original Gravity in Plato min range of the Style
  * @apiSuccess {Float} beer_style.og_plato_max  Original Gravity in Plato max range of the Style
  * @apiSuccess {Float} beer_style.fg_min  Final Gravity min range of the Style
  * @apiSuccess {Float} beer_style.fg_max  Final Gravity max range of the Style
  * @apiSuccess {Float} beer_style.fg_plato_min  Final Gravity in Plato min range of the Style
  * @apiSuccess {Float} beer_style.fg_plato_max  Final Gravity in Plato max range of the Style
  * @apiSuccess {Float} beer_style.abw_min  Alcohol by Weight min range of the Style
  * @apiSuccess {Float} beer_style.abw_max  Alcohol by Weight max range of the Style
  * @apiSuccess {Float} beer_style.abv_min  Alcohol by Volume min range of the Style
  * @apiSuccess {Float} beer_style.abv_max  Alcohol by Volume max range of the Style
  * @apiSuccess {Int} beer_style.ibu_min  International Bittering Unit min range of the Style
  * @apiSuccess {Int} beer_style.ibu_max  International Bittering Unit max range of the Style
  * @apiSuccess {Int} beer_style.srm_min  Standard Reference Method min range of the Style
  * @apiSuccess {Int} beer_style.srm_max  Standard Reference Method max range of the Style
  * @apiSuccess {Int} beer_style.ebc_min  EBC min range of the Style
  * @apiSuccess {Int} beer_style.ebc_max  EBC max range of the Style
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     [{
  *        "id":1,
  *        "name":"Classic English-Style Pale Ale",
  *        "description":"Classic English pale ales are golden to copper colored. Chill haze may be in evidence only at very cold temperatures. They have low to medium malt flavor and aroma. Low caramel malt character is allowable. Medium to medium-high hop bitterness, flavor, and aroma should be evident. Hop character is evident as earthy, herbal English-variety hop character. Note that \u00e2\u20ac\u0153earthy, herbal English-variety hop character\u00e2\u20ac\u009d is the perceived end, but may be a result of the skillful use of hops of other national origins. This is a medium-bodied ale. Fruity-ester flavors and aromas are moderate to strong. The absence of diacetyl is desirable, though, diacetyl (butterscotch character) is acceptable and characteristic when at very low levels.\n",
  *        "category":"Ale",
  *        "origin":"British",
  *        "og_min":1.04,
  *        "og_max":1.056,
  *        "og_plato_min:"10,
  *        "og_plato_max":14,
  *        "fg_min":1.008,
  *        "fg_max":1.016,
  *        "fg_plato_min":2,
  *        "fg_plato_max":4,
  *        "abw_min":3.5,
  *        "abw_max":4.2,
  *        "abv_min":4.5,
  *        "abv_max":5.5,
  *        "ibu_min":20,
  *        "ibu_max":40,
  *        "srm_min":5,
  *        "srm_max":12,
  *        "ebc_min":10,
  *        "ebc_max":24,
  *        "year":2013
  *      }, {...}]
  */

  $app->get('/styles', function () use ($app, $adapter){
    $collection = new BeerStyleCollection($adapter);
    $request = (object)$app->request->get();
    if(empty($request))
      echo json_encode($collection->all()->toArray());
    else
      echo json_encode($collection->fields($request)->toArray());
  });

  /**
  * @api {get} /api/v1/styles/:id Request Single Beer Style
  * @apiExample Example URL:
  * http://brewerwall.com/api/v1/styles/1
  * @apiName GetStyle
  * @apiGroup Beer Styles
  * @apiVersion 1.0.0
  *
  * @apiParam {Int} id Specific style unique ID.
  *
  * @apiSuccess {Int} id Style Id.
  * @apiSuccess {String} name  Name of the Style
  * @apiSuccess {String} description  Description of the Style.
  * @apiSuccess {String} category  Category of the Style (Ale, Lager)
  * @apiSuccess {String} origin  Origin of the Style
  * @apiSuccess {Float} og_min  Original Gravity min range of the Style
  * @apiSuccess {Float} og_max  Original Gravity max range of the Style
  * @apiSuccess {Float} og_plato_min  Original Gravity in Plato min range of the Style
  * @apiSuccess {Float} og_plato_max  Original Gravity in Plato max range of the Style
  * @apiSuccess {Float} fg_min  Final Gravity min range of the Style
  * @apiSuccess {Float} fg_max  Final Gravity max range of the Style
  * @apiSuccess {Float} fg_plato_min  Final Gravity in Plato min range of the Style
  * @apiSuccess {Float} fg_plato_max  Final Gravity in Plato max range of the Style
  * @apiSuccess {Float} abw_min  Alcohol by Weight min range of the Style
  * @apiSuccess {Float} abw_max  Alcohol by Weight max range of the Style
  * @apiSuccess {Float} abv_min  Alcohol by Volume min range of the Style
  * @apiSuccess {Float} abv_max  Alcohol by Volume max range of the Style
  * @apiSuccess {Int} ibu_min  International Bittering Unit min range of the Style
  * @apiSuccess {Int} ibu_max  International Bittering Unit max range of the Style
  * @apiSuccess {Int} srm_min  Standard Reference Method min range of the Style
  * @apiSuccess {Int} srm_max  Standard Reference Method max range of the Style
  * @apiSuccess {Int} ebc_min  EBC min range of the Style
  * @apiSuccess {Int} ebc_max  EBC max range of the Style
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     [{
  *        "id":1,
  *        "name":"Classic English-Style Pale Ale",
  *        "description":"Classic English pale ales are golden to copper colored. Chill haze may be in evidence only at very cold temperatures. They have low to medium malt flavor and aroma. Low caramel malt character is allowable. Medium to medium-high hop bitterness, flavor, and aroma should be evident. Hop character is evident as earthy, herbal English-variety hop character. Note that \u00e2\u20ac\u0153earthy, herbal English-variety hop character\u00e2\u20ac\u009d is the perceived end, but may be a result of the skillful use of hops of other national origins. This is a medium-bodied ale. Fruity-ester flavors and aromas are moderate to strong. The absence of diacetyl is desirable, though, diacetyl (butterscotch character) is acceptable and characteristic when at very low levels.\n",
  *        "category":"Ale",
  *        "origin":"British",
  *        "og_min":1.04,
  *        "og_max":1.056,
  *        "og_plato_min:"10,
  *        "og_plato_max":14,
  *        "fg_min":1.008,
  *        "fg_max":1.016,
  *        "fg_plato_min":2,
  *        "fg_plato_max":4,
  *        "abw_min":3.5,
  *        "abw_max":4.2,
  *        "abv_min":4.5,
  *        "abv_max":5.5,
  *        "ibu_min":20,
  *        "ibu_max":40,
  *        "srm_min":5,
  *        "srm_max":12,
  *        "ebc_min":10,
  *        "ebc_max":24,
  *        "year":2013
  *      }]
  */

  $app->get('/styles/:id', function ($id) use ($app, $adapter){
    $collection = new BeerStyleCollection($adapter);
    echo json_encode($collection->id($id)->toArray());
  });

  /**
  * @api {post} /api/v1/styles Search All Beer Styles
  * @apiName SearchAll
  * @apiExample Example URL:
  * http://brewerwall.com/api/v1/styles
  * @apiGroup Beer Styles
  * @apiVersion 1.0.0
  *
  * @apiParam {String} name Wildcard search on the name field.
  * @apiParam {String} description Wildcard search on the description field
  * @apiParam {String} category Exact search on the category field.
  * @apiParam {String} origin Wildcard search on the origin field.
  * @apiParam {Float} og Value search between min and max og fields.
  * @apiParam {Float} og_plato Value search between min and max og_plato fields.
  * @apiParam {Float} fg Value search between min and max fg fields.
  * @apiParam {Float} fg_plato Value search between min and max fg_plato fields.
  * @apiParam {Float} abw Value search between min and max abw fields.
  * @apiParam {Float} abv Value search between min and max abv fields.
  * @apiParam {Int} ibu Value search between min and max ibu fields.
  * @apiParam {Int} ebc Value search between min and max ebc fields.
  *
  * @apiSuccess {Object[]} beer_style List of Styles.
  * @apiSuccess {Int} beer_style.id Style Id.
  * @apiSuccess {String} beer_style.name  Name of the Style
  * @apiSuccess {String} beer_style.description  Description of the Style.
  * @apiSuccess {String} beer_style.category  Category of the Style (Ale, Lager)
  * @apiSuccess {String} beer_style.origin  Origin of the Style
  * @apiSuccess {Float} beer_style.og_min  Original Gravity min range of the Style
  * @apiSuccess {Float} beer_style.og_max  Original Gravity max range of the Style
  * @apiSuccess {Float} beer_style.og_plato_min  Original Gravity in Plato min range of the Style
  * @apiSuccess {Float} beer_style.og_plato_max  Original Gravity in Plato max range of the Style
  * @apiSuccess {Float} beer_style.fg_min  Final Gravity min range of the Style
  * @apiSuccess {Float} beer_style.fg_max  Final Gravity max range of the Style
  * @apiSuccess {Float} beer_style.fg_plato_min  Final Gravity in Plato min range of the Style
  * @apiSuccess {Float} beer_style.fg_plato_max  Final Gravity in Plato max range of the Style
  * @apiSuccess {Float} beer_style.abw_min  Alcohol by Weight min range of the Style
  * @apiSuccess {Float} beer_style.abw_max  Alcohol by Weight max range of the Style
  * @apiSuccess {Float} beer_style.abv_min  Alcohol by Volume min range of the Style
  * @apiSuccess {Float} beer_style.abv_max  Alcohol by Volume max range of the Style
  * @apiSuccess {Int} beer_style.ibu_min  International Bittering Unit min range of the Style
  * @apiSuccess {Int} beer_style.ibu_max  International Bittering Unit max range of the Style
  * @apiSuccess {Int} beer_style.srm_min  Standard Reference Method min range of the Style
  * @apiSuccess {Int} beer_style.srm_max  Standard Reference Method max range of the Style
  * @apiSuccess {Int} beer_style.ebc_min  EBC min range of the Style
  * @apiSuccess {Int} beer_style.ebc_max  EBC max range of the Style
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     [{
  *        "id":1,
  *        "name":"Classic English-Style Pale Ale",
  *        "description":"Classic English pale ales are golden to copper colored. Chill haze may be in evidence only at very cold temperatures. They have low to medium malt flavor and aroma. Low caramel malt character is allowable. Medium to medium-high hop bitterness, flavor, and aroma should be evident. Hop character is evident as earthy, herbal English-variety hop character. Note that \u00e2\u20ac\u0153earthy, herbal English-variety hop character\u00e2\u20ac\u009d is the perceived end, but may be a result of the skillful use of hops of other national origins. This is a medium-bodied ale. Fruity-ester flavors and aromas are moderate to strong. The absence of diacetyl is desirable, though, diacetyl (butterscotch character) is acceptable and characteristic when at very low levels.\n",
  *        "category":"Ale",
  *        "origin":"British",
  *        "og_min":1.04,
  *        "og_max":1.056,
  *        "og_plato_min:"10,
  *        "og_plato_max":14,
  *        "fg_min":1.008,
  *        "fg_max":1.016,
  *        "fg_plato_min":2,
  *        "fg_plato_max":4,
  *        "abw_min":3.5,
  *        "abw_max":4.2,
  *        "abv_min":4.5,
  *        "abv_max":5.5,
  *        "ibu_min":20,
  *        "ibu_max":40,
  *        "srm_min":5,
  *        "srm_max":12,
  *        "ebc_min":10,
  *        "ebc_max":24,
  *        "year":2013
  *      }, {...}]
  */

  $app->post('/styles', function () use ($app, $adapter){
    $post = (object)$app->request->post();
    $collection = new BeerStyleCollection($adapter);
    echo json_encode($collection->fields($post)->toArray());
  });

});
