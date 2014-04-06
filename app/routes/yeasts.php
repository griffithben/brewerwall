<?php
use Zend\Db\Sql\Sql;
use App\Collections\YeastCollection;

$app->get('/api/yeasts', function () use ($app, $adapter){
  $yeastCollection = new YeastCollection($adapter);
  echo json_encode($yeastCollection->all()->toArray());
});

$app->get('/api/yeasts/:id', function ($id) use ($app, $adapter){
  $yeastCollection = new YeastCollection($adapter);
  echo json_encode($yeastCollection->id($id)->toArray());
});

$app->post('/api/yeasts', function () use ($app, $adapter){
  $post = (object)$app->request->post();
  $yeastCollection = new YeastCollection($adapter);
  echo json_encode($yeastCollection->fields($post)->toArray());
});
