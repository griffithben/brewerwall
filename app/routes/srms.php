<?php
use Zend\Db\Sql\Sql;
use App\Collections\SrmCollection;

$app->get('/api/srms', function () use ($app, $adapter){
  $collection = new SrmCollection($adapter);
  echo json_encode($collection->all()->toArray());
});

$app->get('/api/srms/:id', function ($id) use ($app, $adapter){
  $collection = new SrmCollection($adapter);
  echo json_encode($collection->id($id)->toArray());
});
