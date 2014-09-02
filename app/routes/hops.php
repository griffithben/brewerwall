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

  $app->get('/hops/:id/substitutes', function ($id) use ($app, $adapter){
    $collection = new HopSubstituteCollection($adapter);
    echo json_encode($collection->hop($id)->toArray());
  });

  $app->post('/hops', function () use ($app, $adapter){
    $post = (object)$app->request->post();
    $collection = new HopCollection($adapter);
    echo json_encode($collection->fields($post)->toArray());
  });

});
