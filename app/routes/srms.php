<?php
use Zend\Db\Sql\Sql;

$app->get('/api/srms', function () use ($app, $adapter){
  $sql = new Sql($adapter);
  $select = $sql->select();
  $select->from('srms');

  $selectString = $sql->getSqlStringForSqlObject($select);
  $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);

  echo json_encode($results->toArray());
});

$app->get('/api/srms/:id', function ($id) use ($app, $adapter){
  $sql = new Sql($adapter);
  $select = $sql->select();
  $select->from('srms')->where(array("id"=>$id));

  $selectString = $sql->getSqlStringForSqlObject($select);
  $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);

  echo json_encode($results->toArray());
});
