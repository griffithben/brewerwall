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
$app->group('/api', function() use ($app, $adapter) {

  $app->get('/yeasts', function () use ($app, $adapter){
    $collection = new YeastCollection($adapter);
    $request = (object)$app->request->get();
    if(empty($request))
      echo json_encode($collection->all()->toArray());
    else
      echo json_encode($collection->fields($request)->toArray());
  });

  $app->get('/yeasts/:id', function ($id) use ($app, $adapter){
    $collection = new YeastCollection($adapter);
    echo json_encode($collection->id($id)->toArray());
  });

  $app->post('/yeasts', function () use ($app, $adapter){
    $post = (object)$app->request->post();
    $collection = new YeastCollection($adapter);
    echo json_encode($collection->fields($post)->toArray());
  });

});
