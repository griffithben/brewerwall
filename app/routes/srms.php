<?php
use Zend\Db\Sql\Sql;
use App\Collections\SrmCollection;

// Views

$app->get('/srms', function () use ($app, $adapter)  {
  $collection = new SrmCollection($adapter);
  $srms = $collection->all()->toArray();
  $app->render('srms.html', array('srms'=>$srms, 'page'=>'srms'));
});


// API
$app->group('/api/v1', function() use ($app, $adapter) {

  /**
  * @api {get} /api/v1/srms Request All SRMs
  * @apiName GetAll
  * @apiExample Example URL:
  * http://brewerwall.com/api/v1/srms
  * @apiGroup Srms
  * @apiVersion 1.0.0
  *
  * @apiSuccess {Object[]} srm List of SRMs.
  * @apiSuccess {Int} srm.id SRM Id.
  * @apiSuccess {Int} srm.value SRM value.
  * @apiSuccess {Int} srm.hex SRM hexidecimal color value.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     [{
  *       "id":1,
  *       "value":1,
  *       "hex":"#FFE699"
  *     }, {...}]
  */

  $app->get('/srms', function () use ($app, $adapter){
    $collection = new SrmCollection($adapter);
    echo json_encode($collection->all()->toArray());
  });

  /**
  * @api {get} /api/v1/srms/:id Request Single SRM
  * @apiName GetSRM
  * @apiExample Example URL:
  * http://brewerwall.com/api/v1/srms/1
  * @apiGroup Srms
  * @apiVersion 1.0.0
  *
  * @apiParam {Int} id Specific SRM unique ID.
  *
  * @apiSuccess {Object[]} srm List of SRMs.
  * @apiSuccess {Int} srm.id SRM Id.
  * @apiSuccess {Int} srm.value SRM value.
  * @apiSuccess {Int} srm.hex SRM hexidecimal color value.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     [{
  *       "id":1,
  *       "value":1,
  *       "hex":"#FFE699"
  *     }]
  */

  $app->get('/srms/:id', function ($id) use ($app, $adapter){
    $collection = new SrmCollection($adapter);
    echo json_encode($collection->id($id)->toArray());
  });

});
