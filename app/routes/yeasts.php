<?php
use Zend\Db\Sql\Sql;
use App\Collections\YeastCollection;

$app->get('/yeasts', function () use ($app, $adapter)  {
  $app->render('yeasts.html', array('page'=>'yeasts'));
});

$app->get('/yeasts/:id', function ($id) use ($app, $adapter)  {
  $collection = new YeastCollection($adapter);
  $yeast = $collection->id($id)->toArray();
  $app->render('yeast.html', array('page'=>'yeasts', 'yeast'=>$yeast[0]));
});

// API
$app->group('/api/v1', function() use ($app, $adapter) {

  /**
  * @api {get} /api/v1/yeasts Request All Yeasts
  * @apiName GetAll
  * @apiExample Example URL:
  * http://brewerwall.com/api/v1/yeasts
  * @apiGroup Yeasts
  * @apiVersion 1.0.0
  *
  * @apiSuccess {Object[]} yeast List of Yeasts.
  * @apiSuccess {Int} yeast.id SRM Id.
  * @apiSuccess {String} yeast.laboratory Laboratory of the strain.
  * @apiSuccess {String} yeast.strain Strain of the yeast.
  * @apiSuccess {String} yeast.name Name of the yeast.
  * @apiSuccess {String} yeast.description Description of the yeast.
  * @apiSuccess {Int} yeast.attenuation_min Attenuation min range of the yeast.
  * @apiSuccess {Int} yeast.attenuation_max Attenuation max range of the yeast.
  * @apiSuccess {String} yeast.flocculation Flocculation of the yeast.
  * @apiSuccess {Int} yeast.temperature_min Temperature min range of the yeast.
  * @apiSuccess {Int} yeast.temperature_max Temperature max range of the yeast.
  * @apiSuccess {Int} yeast.tolerance ABV Tolerance of the yeast.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     [{
  *       "id":1,
  *       "laboratory":"White Labs",
  *       "strain":"WLP001",
  *       "name":"California Ale Yeast",
  *       "description":"This yeast is famous for its clean flavors, balance and ability to be used in almost any style ale. It accentuates the hop flavors and is extremely versatile.",
  *       "attenuation_min":73,
  *       "attenuation_max":80,
  *       "flocculation":"Medium",
  *       "temperature_min":68,
  *       "temperature_max":73,
  *       "tolerance":15
  *     }, {...}]
  */

  $app->get('/yeasts', function () use ($app, $adapter){
    $collection = new YeastCollection($adapter);
    $request = (object)$app->request->get();
    if(empty($request))
      echo json_encode($collection->all()->toArray());
    else
      echo json_encode($collection->fields($request)->toArray());
  });

  /**
  * @api {get} /api/v1/yeasts/:id Request Single Yeast
  * @apiName GetYeast
  * @apiExample Example URL:
  * http://brewerwall.com/api/v1/yeasts/1
  * @apiGroup Yeasts
  * @apiVersion 1.0.0
  *
  * @apiParam {Int} id Specific Yeast unique ID.
  *
  * @apiSuccess {Object[]} yeast List of Yeasts.
  * @apiSuccess {Int} yeast.id SRM Id.
  * @apiSuccess {String} yeast.laboratory Laboratory of the strain.
  * @apiSuccess {String} yeast.strain Strain of the yeast.
  * @apiSuccess {String} yeast.name Name of the yeast.
  * @apiSuccess {String} yeast.description Description of the yeast.
  * @apiSuccess {Int} yeast.attenuation_min Attenuation min range of the yeast.
  * @apiSuccess {Int} yeast.attenuation_max Attenuation max range of the yeast.
  * @apiSuccess {String} yeast.flocculation Flocculation of the yeast.
  * @apiSuccess {Int} yeast.temperature_min Temperature min range of the yeast.
  * @apiSuccess {Int} yeast.temperature_max Temperature max range of the yeast.
  * @apiSuccess {Int} yeast.tolerance ABV Tolerance of the yeast.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     [{
  *       "id":1,
  *       "laboratory":"White Labs",
  *       "strain":"WLP001",
  *       "name":"California Ale Yeast",
  *       "description":"This yeast is famous for its clean flavors, balance and ability to be used in almost any style ale. It accentuates the hop flavors and is extremely versatile.",
  *       "attenuation_min":73,
  *       "attenuation_max":80,
  *       "flocculation":"Medium",
  *       "temperature_min":68,
  *       "temperature_max":73,
  *       "tolerance":15
  *     }]
  */

  $app->get('/yeasts/:id', function ($id) use ($app, $adapter){
    $collection = new YeastCollection($adapter);
    echo json_encode($collection->id($id)->toArray());
  });

  /**
  * @api {post} /api/v1/yeasts Search All Yeasts
  * @apiName SearchAll
  * @apiExample Example URL:
  * http://brewerwall.com/api/v1/yeasts
  * @apiGroup Yeasts
  * @apiVersion 1.0.0
  *
  * @apiParam {String} laboratory Exact search on the laboratory field.
  * @apiParam {String} strain Exact search on the strain field.
  * @apiParam {String} name Wildcard search on the name field.
  * @apiParam {String} description Wildcard search on the description field
  * @apiParam {Int} attenuation Value search between min and max attenuation fields.
  * @apiParam {String} flocculation Exact search on the flocculation field.
  * @apiParam {Int} temperature Value search between min and max temperature fields.
  * @apiParam {Int} tolerance Value search greater than the provided value on the tolerance field.
  *
  * @apiSuccess {Object[]} yeast List of Yeasts.
  * @apiSuccess {Int} yeast.id SRM Id.
  * @apiSuccess {String} yeast.laboratory Laboratory of the strain.
  * @apiSuccess {String} yeast.strain Strain of the yeast.
  * @apiSuccess {String} yeast.name Name of the yeast.
  * @apiSuccess {String} yeast.description Description of the yeast.
  * @apiSuccess {Int} yeast.attenuation_min Attenuation min range of the yeast.
  * @apiSuccess {Int} yeast.attenuation_max Attenuation max range of the yeast.
  * @apiSuccess {String} yeast.flocculation Flocculation of the yeast.
  * @apiSuccess {Int} yeast.temperature_min Temperature min range of the yeast.
  * @apiSuccess {Int} yeast.temperature_max Temperature max range of the yeast.
  * @apiSuccess {Int} yeast.tolerance ABV Tolerance of the yeast.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     [{
  *       "id":1,
  *       "laboratory":"White Labs",
  *       "strain":"WLP001",
  *       "name":"California Ale Yeast",
  *       "description":"This yeast is famous for its clean flavors, balance and ability to be used in almost any style ale. It accentuates the hop flavors and is extremely versatile.",
  *       "attenuation_min":73,
  *       "attenuation_max":80,
  *       "flocculation":"Medium",
  *       "temperature_min":68,
  *       "temperature_max":73,
  *       "tolerance":15
  *     }, {...}]
  */

  $app->post('/yeasts', function () use ($app, $adapter){
    $post = (object)$app->request->post();
    $collection = new YeastCollection($adapter);
    echo json_encode($collection->fields($post)->toArray());
  });

});
