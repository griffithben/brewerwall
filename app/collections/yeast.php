<?php

namespace App\Collections;

use Zend\Db\Sql\Sql;

class YeastCollection {
  private $_table = "Yeasts";
  private $_pk = "id";
  private $_adapter = null;
  private $_sql = null;

  public function __construct($adapter){
    $this->_adapter = $adapter;
    $this->_sql = new Sql($adapter);
  }

  public function select(){
    return $this->_sql->select()->from($this->_table);
  }

  public function all(){
    $selectString = $this->_sql->getSqlStringForSqlObject($this->select());
    $adapter = $this->_adapter;
    $results = $this->_adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
    return $results;
  }

  public function id($id){
    $selectString = $this->_sql->getSqlStringForSqlObject($this->select()->where(array($this->_pk=>$id)));
    $adapter = $this->_adapter;
    $results = $this->_adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
    return $results;
  }

  public function fields($post){
    $select = $this->select();

    //Laboratory Property
    if(isset($post->laboratory) && is_string($post->laboratory))
      $select->where->expression("LOWER(laboratory) = ?", strtolower($post->laboratory));

    //Strain Property
    if(isset($post->strain) && is_string($post->strain))
      $select->where->expression("LOWER(strain) = ?", strtolower($post->strain));

    //Name Property
    if(isset($post->name) && is_string($post->name))
      $select->where->like("name", "%".strtolower($post->name)."%");

    //Description Property
    if(isset($post->description) && is_string($post->description))
      $select->where->like("description", "%".strtolower($post->description)."%");

    //Attenuation Property
    if(isset($post->attenuation) && is_numeric($post->attenuation)){
      $select->where->greaterThanOrEqualTo('attenuation_max', $post->attenuation)->lessThanOrEqualTo('attenuation_min', $post->attenuation);
      $select->where("(attenuation_max = 0 AND attenuation_min = 0)", 'OR');
      $select->where("(attenuation_max = attenuation_min AND attenuation_max != 0 AND attenuation_max <= ".$this->_adapter->platform->quoteValue($post->attenuation).")", 'OR');
    }

    //Flocculation Property
    if(isset($post->flocculation) && is_string($post->flocculation))
      $select->where->expression("LOWER(flocculation) = ?", strtolower($post->flocculation));

    //Temperature Property
    if(isset($post->temperature) && is_numeric($post->temperature)){
      $select->where->greaterThanOrEqualTo('temperature_max', $post->temperature)->lessThanOrEqualTo('temperature_min', $post->temperature);
      $select->where("(temperature_max = 0 AND temperature_min = 0)", 'OR');
      $select->where("(temperature_max = temperature_min AND temperature_max != 0 AND temperature_max <= ".$this->_adapter->platform->quoteValue($post->temperature).")", 'OR');
    }

    //Tolerance Property
    if(isset($post->tolerance) && is_numeric($post->tolerance))
      $select->where->greaterThanOrEqualTo('tolerance', $post->tolerance);

    $selectString = $this->_sql->getSqlStringForSqlObject($select);
    $adapter = $this->_adapter;
    $results = $this->_adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
    return $results;
  }
}
