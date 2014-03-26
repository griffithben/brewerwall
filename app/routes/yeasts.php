<?php
use Zend\Db\Sql\Sql;

$app->get('/api/yeasts', function () use ($app, $adapter){
  $sql = new Sql($adapter);
  $select = $sql->select();
  $select->from('yeasts');

  $selectString = $sql->getSqlStringForSqlObject($select);
  $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);

  echo json_encode($results->toArray());
});
