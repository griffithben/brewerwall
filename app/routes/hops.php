<?php
use Zend\Db\Sql\Sql;
use App\Collections\HopCollection;

// VIEW

$app->get('/hops', function () use ($app, $adapter)  {
  $app->render('hops.html', array('page'=>'hops'));
});


// API
$app->group('/api', function() use ($app, $adapter) {
  $app->get('/hops', function () use ($app, $adapter){
    $collection = new HopCollection($adapter);
    $request = (object)$app->request->get();
    if(empty($request))
      echo json_encode($collection->all()->toArray());
    else
      echo json_encode($collection->fields($request)->toArray());
  });

  $app->get('/hops/:id', function ($id) use ($app, $adapter){
    $collection = new HopCollection($adapter);
    echo json_encode($collection->id($id)->toArray());
  });

  $app->post('/hops', function () use ($app, $adapter){
    $post = (object)$app->request->post();
    $collection = new HopCollection($adapter);
    echo json_encode($collection->fields($post)->toArray());
  });

});
