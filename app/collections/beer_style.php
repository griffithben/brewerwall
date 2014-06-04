<?php

namespace App\Collections;

use Zend\Db\Sql\Sql;
use App\Collections\AbstractCollection;

class BeerStyleCollection extends AbstractCollection {
  protected $_table = "beer_styles";
  protected $_pk = "id";

  public function fields($post){

    if(!is_object($post))
      return array();

    $select = $this->select();

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
    if(isset($post->og) && is_numeric($post->og)){
      $select->where->nest->greaterThanOrEqualTo('og_max', $post->og)->lessThanOrEqualTo('og_min', (float) $post->og)->or->expression('(og_max = 0 AND og_min = 0)', null);
    }

    //OG_Plato Property
    if(isset($post->og_plato) && is_numeric($post->og_plato)){
      $select->where->nest->greaterThanOrEqualTo('og_plato_max', $post->og_plato)->lessThanOrEqualTo('og_plato_min', $post->og_plato)->or->expression('(og_plato_max = 0 AND og_plato_min = 0)', null);
    }

    //FG Property
    if(isset($post->fg) && is_numeric($post->fg)){
      $select->where->nest->greaterThanOrEqualTo('fg_max', $post->fg)->lessThanOrEqualTo('fg_min', $post->fg)->or->expression('(fg_max = 0 AND fg_min = 0)', null);
    }

    //FG_Plato Property
    if(isset($post->fg_plato) && is_numeric($post->fg_plato)){
      $select->where->nest->greaterThanOrEqualTo('fg_plato_max', $post->fg_plato)->lessThanOrEqualTo('fg_plato_min', $post->fg_plato)->or->expression('(fg_plato_max = 0 AND fg_plato_min = 0)', null);
    }

    //ABW Property
    if(isset($post->abw) && is_numeric($post->abw)){
      $select->where->nest->greaterThanOrEqualTo('abw_max', $post->abw)->lessThanOrEqualTo('abw_min', $post->abw)->or->expression('(abw_max = 0 AND abw_min = 0)', null);
    }

    //ABV Property
    if(isset($post->abv) && is_numeric($post->abv)){
      $select->where->nest->greaterThanOrEqualTo('abv_max', $post->abv)->lessThanOrEqualTo('abv_min', $post->abv)->or->expression('(abv_max = 0 AND abv_min = 0)', null);
    }

    //IBU Property
    if(isset($post->ibu) && is_numeric($post->ibu)){
      $select->where->nest->greaterThanOrEqualTo('ibu_max', $post->ibu)->lessThanOrEqualTo('ibu_min', $post->ibu)->or->expression("(ibu_max = 0 AND ibu_min = 0)", null);
    }

    //SRM Property
    if(isset($post->srm) && is_numeric($post->srm)){
      $select->where->nest->greaterThanOrEqualTo('srm_max', $post->srm)->lessThanOrEqualTo('srm_min', $post->srm)
        ->or->expression("(srm_max = 0 AND srm_min = 0)", null)
        ->or->expression("(srm_min = srm_max AND srm_max != 0 AND srm_max <= ".$this->_adapter->platform->quoteValue($post->srm).")", null);
    }

    //EBC Property
    if(isset($post->ebc) && is_numeric($post->ebc)){
      $select->where->nest->greaterThanOrEqualTo('ebc_max', $post->ebc)->lessThanOrEqualTo('ebc_min', $post->ebc)
        ->or->expression("(ebc_max = 0 AND ebc_min = 0)", null)
        ->or->expression("(ebc_max = ebc_min AND ebc_max != 0 AND ebc_max <= ".$this->_adapter->platform->quoteValue($post->ebc).")", null);
    }

    //Year Property
    if(isset($post->year) && is_numeric($post->year))
      $select->where(array("year"=>$post->year));

    return $this->execute($select);
  }
}
