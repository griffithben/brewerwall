<?php
use Zend\Db\Sql\Sql;

$app->get('/api/beerstyles', function () use ($app, $adapter){
  $sql = new Sql($adapter);
  $select = $sql->select();
  $select->from('beer_styles');

  $selectString = $sql->getSqlStringForSqlObject($select);
  $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);

  echo json_encode($results->toArray());
});

$app->get('/api/beerstyles/:id', function ($id) use ($app, $adapter){
  $sql = new Sql($adapter);
  $select = $sql->select();
  $select->from('beer_styles')->where(array("id"=>$id));

  $selectString = $sql->getSqlStringForSqlObject($select);
  $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);

  echo json_encode($results->toArray());
});

$app->post('/api/beerstyles', function () use ($app, $adapter){

  $sql = new Sql($adapter);
  $select = $sql->select();
  $select->from('beer_styles');

  $post = (object)$app->request->post();

  //Name Property
  if(isset($post->name) && is_string($post->name))
    $select->where->like("name", "%".strtolower($post->name)."%");

  //Description Property
  if(isset($post->description) && is_string($post->description))
    $select->where->like("description", "%".strtolower($post->description)."%");

  //Origin Property
  if(isset($post->origin) && is_string($post->origin))
    $select->where->like("origin", "%".strtolower($post->origin)."%");

  //Category Property
  if(isset($post->category) && is_string($post->category))
    $select->where->expression("LOWER(category) = ?", strtolower($post->category));

  //OG Property
  if(isset($post->og) && is_numeric($post->og))
    $select->where->greaterThanOrEqualTo('og_max', $post->og)->lessThanOrEqualTo('og_min', (float) $post->og);

  //OG_Plato Property
  if(isset($post->og_plato) && is_numeric($post->og_plato))
    $select->where->greaterThanOrEqualTo('og_plato_max', $post->og_plato)->lessThanOrEqualTo('og_plato_min', $post->og_plato);

  //FG Property
  if(isset($post->fg) && is_numeric($post->fg))
    $select->where->greaterThanOrEqualTo('fg_max', $post->fg)->lessThanOrEqualTo('fg_min', $post->fg);

  //FG_Plato Property
  if(isset($post->fg_plato) && is_numeric($post->fg_plato))
    $select->where->greaterThanOrEqualTo('fg_plato_max', $post->fg_plato)->lessThanOrEqualTo('fg_plato_min', $post->fg_plato);

  //ABW Property
  if(isset($post->abw) && is_numeric($post->abw))
    $select->where->greaterThanOrEqualTo('abw_max', $post->abw)->lessThanOrEqualTo('abw_min', $post->abw);

  //ABV Property
  if(isset($post->abv) && is_numeric($post->abv))
    $select->where->greaterThanOrEqualTo('abv_max', $post->abv)->lessThanOrEqualTo('abv_min', $post->abv);

  //IBU Property
  if(isset($post->ibu) && is_numeric($post->ibu))
    $select->where->greaterThanOrEqualTo('ibu_max', $post->ibu)->lessThanOrEqualTo('ibu_min', $post->ibu);

  //SRM Property
  if(isset($post->srm) && is_numeric($post->srm))
    $select->where->greaterThanOrEqualTo('srm_max', $post->srm)->lessThanOrEqualTo('srm_min', $post->srm);

  //EBC Property
  if(isset($post->abw) && is_numeric($post->abw))
    $select->where->greaterThanOrEqualTo('abw_max', $post->abw)->lessThanOrEqualTo('abw_min', $post->abw);

  //ABW Property
  if(isset($post->year) && is_numeric($post->year))
    $select->where(array("year"=>$post->year));

  $selectString = $sql->getSqlStringForSqlObject($select);
  $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
  echo json_encode($results->toArray());
});
