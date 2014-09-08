<?php
use Zend\Db\Sql\Sql;
use App\Collections\HopCollection;
use App\Collections\HopSubstituteCollection;

// VIEW

$app->get('/hops/*', function () use ($app, $adapter)  {
  $app->render('hops.html', array('page'=>'hops'));
});

$app->get('/hops/:id', function ($id) use ($app, $adapter)  {
  $collection = new HopCollection($adapter);
  $hop = $collection->id($id)->toArray();
  $collection = new HopSubstituteCollection($adapter);
  $substitutes = $collection->hop($id)->toArray();
  $app->render('hop.html', array('page'=>'hops', 'hop'=>$hop[0], 'substitutes'=>$substitutes));
});


// API
$app->group('/api/v1', function() use ($app, $adapter) {

  /**
  * @api {get} /api/v1/hops Request All Hops
  * @apiName GetAll
  * @apiExample Example URL:
  * http://brewerwall.com/api/v1/hops
  * @apiGroup Hops
  * @apiVersion 1.0.0
  *
  * @apiSuccess {Object[]} hop List of Hops.
  * @apiSuccess {Int} hop.id Hop Id.
  * @apiSuccess {String} hop.name Name of the Hop
  * @apiSuccess {String} hop.description Description of the Hop.
  * @apiSuccess {String} hop.origin Origin of the Hop.
  * @apiSuccess {String} hop.type Type of the Hop (Aroma, Bittering or Both).
  * @apiSuccess {String} hop.styles Styles of Beer the Hop relates to.
  * @apiSuccess {String} hop.storage Storage properties of the Hop.
  * @apiSuccess {Float} hop.alpha_min  Alpha min range of the Hop.
  * @apiSuccess {Float} hop.alpha_max  Alpha max range of the Hop.
  * @apiSuccess {Float} hop.beta_min  Beta min range of the Hop.
  * @apiSuccess {Float} hop.beta_max  Beta max range of the Hop.
  * @apiSuccess {Float} hop.cohumulone_min  Cohumulone min range of the Hop.
  * @apiSuccess {Float} hop.cohumulone_max  Cohumulone max range of the Hop.
  * @apiSuccess {Float} hop.total_oil_min  Total Oil min range of the Hop.
  * @apiSuccess {Float} hop.total_oil_max  Total Oil max range of the Hop.
  * @apiSuccess {Float} hop.myrcene_min  Myrcene min range of the Hop.
  * @apiSuccess {Float} hop.myrcene_max  Myrcene max range of the Hop.
  * @apiSuccess {Float} hop.humulone_min  Humulone min range of the Hop.
  * @apiSuccess {Float} hop.humulone_max  Humulone max range of the Hop.
  * @apiSuccess {Float} hop.farnesene_min  Farnesene min range of the Hop.
  * @apiSuccess {Float} hop.farnesene_max  Farnesene max range of the Hop.
  * @apiSuccess {Float} hop.caryophyllene_min  Caryophyllene min range of the Hop.
  * @apiSuccess {Float} hop.caryophyllene_max  Caryophyllene max range of the Hop.
  * @apiSuccess {Float} hop.source  Source of the Hop data.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     [{
  *       "id":1,
  *       "name":"AHTANUM",
  *       "description":"Yakima Valley bred Ahtanum is sweet and peppery with a piney-citrus aspect. Warmly aromatic and moderately bittering, Ahtanum is a hop of distinction. It is often likened to Cascade, although it makes more sense to say that Cascade is a good substitute. Ahtanum is less bitter, its alpha acids are lower, and its grapefruit essence is much more pronounced than Cascade\u00e2\u20ac\u2122s. It really is more akin to Willamette, with Willamette\u00e2\u20ac\u2122s note being more lemon than grapefruit. Ahtanum\u00e2\u20ac\u2122s distinct citrus character has led to it being used as the singular hop in Dogfish Head\u00e2\u20ac\u2122s Blood Orange Heffeweisen and Stone Brewing\u00e2\u20ac\u2122s Pale Ale.",
  *       "origin":"US",
  *       "type":"Aroma",
  *       "aroma":"Floral, earthy, citrus and grapefruit tones",
  *       "styles":"Pale Ale",
  *       "storage":"Fair to Good",
  *       "alpha_min":5.7,
  *       "alpha_max":6.3,
  *       "beta_min":5,
  *       "beta_max":6.5,
  *       "cohumulone_min":30,
  *       "cohumulone_max":35,
  *       "total_oil_min":0.8,
  *       "total_oil_max":1.2,
  *       "myrcene_min":50,
  *       "myrcene_max":55,
  *       "humulene_min":16,
  *       "humulene_max":20,
  *       "farnesene_min":0,
  *       "farnesene_max":1,
  *       "caryophyllene_min":9,
  *       "caryophyllene_max":12,
  *       "source":"Hop Union, Hoplist"
  *     }, {...}]
  */

  $app->get('/hops', function () use ($app, $adapter){
    $collection = new HopCollection($adapter);
    $request = (object)$app->request->get();
    if(empty($request))
      echo json_encode($collection->all()->toArray());
    else
      echo json_encode($collection->fields($request)->toArray());
  });

  /**
  * @api {get} /api/v1/hops Request Single Hop
  * @apiName GetHop
  * @apiExample Example URL:
  * http://brewerwall.com/api/v1/hops/1
  * @apiGroup Hops
  * @apiVersion 1.0.0
  *
  * @apiParam {Int} id Specific hop unique ID.
  *
  * @apiSuccess {Object[]} hop List of Hops.
  * @apiSuccess {Int} hop.id Hop Id.
  * @apiSuccess {String} hop.name Name of the Hop
  * @apiSuccess {String} hop.description Description of the Hop.
  * @apiSuccess {String} hop.origin Origin of the Hop.
  * @apiSuccess {String} hop.type Type of the Hop (Aroma, Bittering or Both).
  * @apiSuccess {String} hop.styles Styles of Beer the Hop relates to.
  * @apiSuccess {String} hop.storage Storage properties of the Hop.
  * @apiSuccess {Float} hop.alpha_min  Alpha min range of the Hop.
  * @apiSuccess {Float} hop.alpha_max  Alpha max range of the Hop.
  * @apiSuccess {Float} hop.beta_min  Beta min range of the Hop.
  * @apiSuccess {Float} hop.beta_max  Beta max range of the Hop.
  * @apiSuccess {Float} hop.cohumulone_min  Cohumulone min range of the Hop.
  * @apiSuccess {Float} hop.cohumulone_max  Cohumulone max range of the Hop.
  * @apiSuccess {Float} hop.total_oil_min  Total Oil min range of the Hop.
  * @apiSuccess {Float} hop.total_oil_max  Total Oil max range of the Hop.
  * @apiSuccess {Float} hop.myrcene_min  Myrcene min range of the Hop.
  * @apiSuccess {Float} hop.myrcene_max  Myrcene max range of the Hop.
  * @apiSuccess {Float} hop.humulone_min  Humulone min range of the Hop.
  * @apiSuccess {Float} hop.humulone_max  Humulone max range of the Hop.
  * @apiSuccess {Float} hop.farnesene_min  Farnesene min range of the Hop.
  * @apiSuccess {Float} hop.farnesene_max  Farnesene max range of the Hop.
  * @apiSuccess {Float} hop.caryophyllene_min  Caryophyllene min range of the Hop.
  * @apiSuccess {Float} hop.caryophyllene_max  Caryophyllene max range of the Hop.
  * @apiSuccess {Float} hop.source  Source of the Hop data.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     [{
  *       "id":1,
  *       "name":"AHTANUM",
  *       "description":"Yakima Valley bred Ahtanum is sweet and peppery with a piney-citrus aspect. Warmly aromatic and moderately bittering, Ahtanum is a hop of distinction. It is often likened to Cascade, although it makes more sense to say that Cascade is a good substitute. Ahtanum is less bitter, its alpha acids are lower, and its grapefruit essence is much more pronounced than Cascade\u00e2\u20ac\u2122s. It really is more akin to Willamette, with Willamette\u00e2\u20ac\u2122s note being more lemon than grapefruit. Ahtanum\u00e2\u20ac\u2122s distinct citrus character has led to it being used as the singular hop in Dogfish Head\u00e2\u20ac\u2122s Blood Orange Heffeweisen and Stone Brewing\u00e2\u20ac\u2122s Pale Ale.",
  *       "origin":"US",
  *       "type":"Aroma",
  *       "aroma":"Floral, earthy, citrus and grapefruit tones",
  *       "styles":"Pale Ale",
  *       "storage":"Fair to Good",
  *       "alpha_min":5.7,
  *       "alpha_max":6.3,
  *       "beta_min":5,
  *       "beta_max":6.5,
  *       "cohumulone_min":30,
  *       "cohumulone_max":35,
  *       "total_oil_min":0.8,
  *       "total_oil_max":1.2,
  *       "myrcene_min":50,
  *       "myrcene_max":55,
  *       "humulene_min":16,
  *       "humulene_max":20,
  *       "farnesene_min":0,
  *       "farnesene_max":1,
  *       "caryophyllene_min":9,
  *       "caryophyllene_max":12,
  *       "source":"Hop Union, Hoplist"
  *     }]
  */

  $app->get('/hops/:id', function ($id) use ($app, $adapter){
    $collection = new HopCollection($adapter);
    echo json_encode($collection->id($id)->toArray());
  });

  /**
  * @api {get} /api/v1/hops Request Single Hop Substitutes
  * @apiName GetHopSubstitutes
  * @apiExample Example URL:
  * http://brewerwall.com/api/v1/hops/1/substitutes
  * @apiGroup Hops
  * @apiVersion 1.0.0
  *
  * @apiParam {Int} id Specific hop unique ID.
  *
  * @apiSuccess {Object[]} hop List of Hop Substitutes.
  * @apiSuccess {Int} hop.id Hop Id.
  * @apiSuccess {String} hop.name Name of the Hop
  * @apiSuccess {String} hop.description Description of the Hop.
  * @apiSuccess {String} hop.origin Origin of the Hop.
  * @apiSuccess {String} hop.type Type of the Hop (Aroma, Bittering or Both).
  * @apiSuccess {String} hop.styles Styles of Beer the Hop relates to.
  * @apiSuccess {String} hop.storage Storage properties of the Hop.
  * @apiSuccess {Float} hop.alpha_min  Alpha min range of the Hop.
  * @apiSuccess {Float} hop.alpha_max  Alpha max range of the Hop.
  * @apiSuccess {Float} hop.beta_min  Beta min range of the Hop.
  * @apiSuccess {Float} hop.beta_max  Beta max range of the Hop.
  * @apiSuccess {Float} hop.cohumulone_min  Cohumulone min range of the Hop.
  * @apiSuccess {Float} hop.cohumulone_max  Cohumulone max range of the Hop.
  * @apiSuccess {Float} hop.total_oil_min  Total Oil min range of the Hop.
  * @apiSuccess {Float} hop.total_oil_max  Total Oil max range of the Hop.
  * @apiSuccess {Float} hop.myrcene_min  Myrcene min range of the Hop.
  * @apiSuccess {Float} hop.myrcene_max  Myrcene max range of the Hop.
  * @apiSuccess {Float} hop.humulone_min  Humulone min range of the Hop.
  * @apiSuccess {Float} hop.humulone_max  Humulone max range of the Hop.
  * @apiSuccess {Float} hop.farnesene_min  Farnesene min range of the Hop.
  * @apiSuccess {Float} hop.farnesene_max  Farnesene max range of the Hop.
  * @apiSuccess {Float} hop.caryophyllene_min  Caryophyllene min range of the Hop.
  * @apiSuccess {Float} hop.caryophyllene_max  Caryophyllene max range of the Hop.
  * @apiSuccess {Float} hop.source  Source of the Hop data.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     [{
  *       "id":1,
  *       "name":"AHTANUM",
  *       "description":"Yakima Valley bred Ahtanum is sweet and peppery with a piney-citrus aspect. Warmly aromatic and moderately bittering, Ahtanum is a hop of distinction. It is often likened to Cascade, although it makes more sense to say that Cascade is a good substitute. Ahtanum is less bitter, its alpha acids are lower, and its grapefruit essence is much more pronounced than Cascade\u00e2\u20ac\u2122s. It really is more akin to Willamette, with Willamette\u00e2\u20ac\u2122s note being more lemon than grapefruit. Ahtanum\u00e2\u20ac\u2122s distinct citrus character has led to it being used as the singular hop in Dogfish Head\u00e2\u20ac\u2122s Blood Orange Heffeweisen and Stone Brewing\u00e2\u20ac\u2122s Pale Ale.",
  *       "origin":"US",
  *       "type":"Aroma",
  *       "aroma":"Floral, earthy, citrus and grapefruit tones",
  *       "styles":"Pale Ale",
  *       "storage":"Fair to Good",
  *       "alpha_min":5.7,
  *       "alpha_max":6.3,
  *       "beta_min":5,
  *       "beta_max":6.5,
  *       "cohumulone_min":30,
  *       "cohumulone_max":35,
  *       "total_oil_min":0.8,
  *       "total_oil_max":1.2,
  *       "myrcene_min":50,
  *       "myrcene_max":55,
  *       "humulene_min":16,
  *       "humulene_max":20,
  *       "farnesene_min":0,
  *       "farnesene_max":1,
  *       "caryophyllene_min":9,
  *       "caryophyllene_max":12,
  *       "source":"Hop Union, Hoplist"
  *     }, {...}]
  */

  $app->get('/hops/:id/substitutes', function ($id) use ($app, $adapter){
    $collection = new HopSubstituteCollection($adapter);
    echo json_encode($collection->hop($id)->toArray());
  });

  /**
  * @api {post} /api/v1/hops Search All Hops
  * @apiName SearchAll
  * @apiExample Example URL:
  * http://brewerwall.com/api/v1/hops
  * @apiGroup Hops
  * @apiVersion 1.0.0
  *
  * @apiParam {String} name Wildcard search on the name field.
  * @apiParam {String} description Wildcard search on the description field
  * @apiParam {String} origin Wildcard search on the origin field.
  * @apiParam {String} type Exact search on the type field.
  * @apiParam {String} styles Wildcard search on the styles field.
  * @apiParam {Float} alpha Value search between min and max alpha fields.
  * @apiParam {Float} beta Value search between min and max beta fields.
  * @apiParam {Float} cohumulone Value search between min and max cohumulone fields.
  * @apiParam {Float} total_oil Value search between min and max total_oil fields.
  * @apiParam {Float} mycrene Value search between min and max mycrene fields.
  * @apiParam {Float} humulone Value search between min and max humulone fields.
  * @apiParam {Float} farnesene Value search between min and max farnesene fields.
  * @apiParam {Float} caryophyllene Value search between min and max caryophyllene fields.
  *
  * @apiSuccess {Object[]} hop List of Hops.
  * @apiSuccess {Int} hop.id Hop Id.
  * @apiSuccess {String} hop.name Name of the Hop
  * @apiSuccess {String} hop.description Description of the Hop.
  * @apiSuccess {String} hop.origin Origin of the Hop.
  * @apiSuccess {String} hop.type Type of the Hop (Aroma, Bittering or Both).
  * @apiSuccess {String} hop.styles Styles of Beer the Hop relates to.
  * @apiSuccess {String} hop.storage Storage properties of the Hop.
  * @apiSuccess {Float} hop.alpha_min  Alpha min range of the Hop.
  * @apiSuccess {Float} hop.alpha_max  Alpha max range of the Hop.
  * @apiSuccess {Float} hop.beta_min  Beta min range of the Hop.
  * @apiSuccess {Float} hop.beta_max  Beta max range of the Hop.
  * @apiSuccess {Float} hop.cohumulone_min  Cohumulone min range of the Hop.
  * @apiSuccess {Float} hop.cohumulone_max  Cohumulone max range of the Hop.
  * @apiSuccess {Float} hop.total_oil_min  Total Oil min range of the Hop.
  * @apiSuccess {Float} hop.total_oil_max  Total Oil max range of the Hop.
  * @apiSuccess {Float} hop.myrcene_min  Myrcene min range of the Hop.
  * @apiSuccess {Float} hop.myrcene_max  Myrcene max range of the Hop.
  * @apiSuccess {Float} hop.humulone_min  Humulone min range of the Hop.
  * @apiSuccess {Float} hop.humulone_max  Humulone max range of the Hop.
  * @apiSuccess {Float} hop.farnesene_min  Farnesene min range of the Hop.
  * @apiSuccess {Float} hop.farnesene_max  Farnesene max range of the Hop.
  * @apiSuccess {Float} hop.caryophyllene_min  Caryophyllene min range of the Hop.
  * @apiSuccess {Float} hop.caryophyllene_max  Caryophyllene max range of the Hop.
  * @apiSuccess {Float} hop.source  Source of the Hop data.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     [{
  *       "id":"1",
  *       "name":"AHTANUM",
  *       "description":"Yakima Valley bred Ahtanum is sweet and peppery with a piney-citrus aspect. Warmly aromatic and moderately bittering, Ahtanum is a hop of distinction. It is often likened to Cascade, although it makes more sense to say that Cascade is a good substitute. Ahtanum is less bitter, its alpha acids are lower, and its grapefruit essence is much more pronounced than Cascade\u00e2\u20ac\u2122s. It really is more akin to Willamette, with Willamette\u00e2\u20ac\u2122s note being more lemon than grapefruit. Ahtanum\u00e2\u20ac\u2122s distinct citrus character has led to it being used as the singular hop in Dogfish Head\u00e2\u20ac\u2122s Blood Orange Heffeweisen and Stone Brewing\u00e2\u20ac\u2122s Pale Ale.",
  *       "origin":"US",
  *       "type":"Aroma",
  *       "aroma":"Floral, earthy, citrus and grapefruit tones",
  *       "styles":"Pale Ale",
  *       "storage":"Fair to Good",
  *       "alpha_min":5.7,
  *       "alpha_max":6.3,
  *       "beta_min":5,
  *       "beta_max":6.5,
  *       "cohumulone_min":30,
  *       "cohumulone_max":35,
  *       "total_oil_min":0.8,
  *       "total_oil_max":1.2,
  *       "myrcene_min":50,
  *       "myrcene_max":55,
  *       "humulene_min":16,
  *       "humulene_max":20,
  *       "farnesene_min":0,
  *       "farnesene_max":1,
  *       "caryophyllene_min":9,
  *       "caryophyllene_max":12,
  *       "source":"Hop Union, Hoplist"
  *     }, {...}]
  */

  $app->post('/hops', function () use ($app, $adapter){
    $post = (object)$app->request->post();
    $collection = new HopCollection($adapter);
    echo json_encode($collection->fields($post)->toArray());
  });

});
