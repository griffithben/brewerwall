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
$app->group('/api', function() use ($app, $adapter) {

  $app->get('/srms', function () use ($app, $adapter){
    $collection = new SrmCollection($adapter);
    echo json_encode($collection->all()->toArray());
  });

  $app->get('/srms/:id', function ($id) use ($app, $adapter){
    $collection = new SrmCollection($adapter);
    echo json_encode($collection->id($id)->toArray());
  });

});
