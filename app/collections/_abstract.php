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

  public function select(){
    return $this->_sql->select()->from($this->_table);
  }

  public function all(){
    return $this->execute($this->select());
  }

  public function id($id){
    return $this->execute($this->select()->where(array($this->_pk=>$id)));
  }

  protected function execute($statement){
    $selectString = $this->_sql->getSqlStringForSqlObject($statement);
    $adapter = $this->_adapter;
    //echo $selectString;
    $results = $this->_adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
    return $results;
  }
}
