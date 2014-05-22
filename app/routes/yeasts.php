<?php
use Zend\Db\Sql\Sql;
use App\Collections\YeastCollection;

$app->get('/yeasts', function () use ($app, $adapter)  {
  $app->render('yeasts.html', array('page'=>'yeasts'));
});

$app->get('/api/yeasts', function () use ($app, $adapter){
  $collection = new YeastCollection($adapter);
  echo json_encode($collection->all()->toArray());
});

$app->get('/api/yeasts/:id', function ($id) use ($app, $adapter){
  $collection = new YeastCollection($adapter);
  echo json_encode($collection->id($id)->toArray());
});

$app->post('/api/yeasts', function () use ($app, $adapter){
  $post = (object)$app->request->post();
  $collection = new YeastCollection($adapter);
  echo json_encode($collection->fields($post)->toArray());
});
