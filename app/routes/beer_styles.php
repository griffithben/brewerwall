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
  * @api {get} /api/v1/styles Request All Styles
  * @apiName GetAll
  * @apiGroup Beer Styles
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
  * @api {get} /api/v1/styles/:id Request Style
  * @apiName GetStyle
  * @apiGroup Beer Styles
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
  */

  $app->get('/styles/:id', function ($id) use ($app, $adapter){
    $collection = new BeerStyleCollection($adapter);
    echo json_encode($collection->id($id)->toArray());
  });

  /**
  * @api {post} /api/v1/styles Search All Styles
  * @apiName SearchAll
  * @apiGroup Beer Styles
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
  */

  $app->post('/styles', function () use ($app, $adapter){
    $post = (object)$app->request->post();
    $collection = new BeerStyleCollection($adapter);
    echo json_encode($collection->fields($post)->toArray());
  });

});
