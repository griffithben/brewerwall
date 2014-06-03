<?php
use Zend\Db\Sql\Sql;
use App\Collections\BeerStyleCollection;

// VIEW

$app->get('/styles', function () use ($app, $adapter)  {
  $collection = new BeerStyleCollection($adapter);
  $styles = $collection->all()->toArray();
  $app->render('styles.html', array('styles'=>$styles, 'page'=>'styles'));
});


// API

$app->get('/api/beerstyles', function () use ($app, $adapter){
  $collection = new BeerStyleCollection($adapter);
  $request = (object)$app->request->get();
  if(empty($request))
    echo json_encode($collection->all()->toArray());
  else
    echo json_encode($collection->fields($request)->toArray());
});

$app->get('/api/beerstyles/:id', function ($id) use ($app, $adapter){
  $collection = new BeerStyleCollection($adapter);
  echo json_encode($collection->id($id)->toArray());
});

$app->post('/api/beerstyles', function () use ($app, $adapter){
  $post = (object)$app->request->post();
  $collection = new BeerStyleCollection($adapter);
  echo json_encode($collection->fields($post)->toArray());
});
