<?php

namespace App\Collections;
use Zend\Db\Sql\Sql;

class AbstractCollection{

  protected $_adapter = null;
  protected $_sql = null;

  public function __construct($adapter){
    $this->_adapter = $adapter;
    $this->_sql = new Sql($adapter);
  }

  protected function execute($statement){
    $selectString = $this->_sql->getSqlStringForSqlObject($statement);
    $adapter = $this->_adapter;
    $results = $this->_adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
    return $results;
  }
}
