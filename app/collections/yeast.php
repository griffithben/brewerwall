<?php

namespace App\Collections;

use Zend\Db\Sql\Sql;
use App\Collections\AbstractCollection;

class YeastCollection extends AbstractCollection {
  protected $_table = "yeasts";
  protected $_pk = "id";

  public function fields($post){

    if(!is_object($post))
      return array();

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
      $select->where->nest->greaterThanOrEqualTo('attenuation_max', $post->attenuation)->lessThanOrEqualTo('attenuation_min', $post->attenuation)
        ->or->expression("(attenuation_max = 0 AND attenuation_min = 0)", null)
        ->or->expression("(attenuation_max = attenuation_min AND attenuation_max != 0 AND attenuation_max <= ".$this->_adapter->platform->quoteValue($post->attenuation).")", null);
    }

    //Flocculation Property
    if(isset($post->flocculation) && is_string($post->flocculation))
      $select->where->expression("LOWER(flocculation) = ?", strtolower($post->flocculation));

    //Temperature Property
    if(isset($post->temperature) && is_numeric($post->temperature)){
      $select->where->nest->greaterThanOrEqualTo('temperature_max', $post->temperature)->lessThanOrEqualTo('temperature_min', $post->temperature)
        ->or->expression("(temperature_max = 0 AND temperature_min = 0)", null)
        ->or->expression("(temperature_max = temperature_min AND temperature_max != 0 AND temperature_max <= ".$this->_adapter->platform->quoteValue($post->temperature).")", null);
    }

    //Tolerance Property
    if(isset($post->tolerance) && is_numeric($post->tolerance))
      $select->where->greaterThanOrEqualTo('tolerance', $post->tolerance);

    return $this->execute($select);
  }
}
