<?php

namespace App\Collections;

use Zend\Db\Sql\Sql;
use App\Collections\AbstractCollection;

class HopCollection extends AbstractCollection {
  protected $_table = "hops";
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
      $select->where(array("origin"=>strtolower($post->origin)));

    //Type Property
    if(isset($post->type) && is_string($post->type))
      $select->where->expression("LOWER(type) = ?", strtolower($post->type));

    //Aroma Property
    if(isset($post->aroma) && is_string($post->aroma))
      $select->where->like("aroma", "%".strtolower($post->aroma)."%");

    //Styles Styles
    if(isset($post->styles) && is_string($post->styles))
      $select->where->like("styles", "%".strtolower($post->styles)."%");

    //Alpha Property
    if(isset($post->alpha) && is_numeric($post->alpha)){
      $select->where->nest->greaterThanOrEqualTo('alpha_max', $post->alpha)->lessThanOrEqualTo('alpha_min', $post->alpha);
    }

    //Beta Property
    if(isset($post->beta) && is_numeric($post->beta)){
      $select->where->nest->greaterThanOrEqualTo('beta_max', $post->beta)->lessThanOrEqualTo('beta_min', $post->beta);
    }

    //Cohumulone Property
    if(isset($post->cohumulone) && is_numeric($post->cohumulone)){
      $select->where->nest->greaterThanOrEqualTo('cohumulone_max', $post->cohumulone)->lessThanOrEqualTo('cohumulone_min', $post->cohumulone);
    }

    //Total Oil Property
    if(isset($post->total_oil) && is_numeric($post->total_oil)){
      $select->where->nest->greaterThanOrEqualTo('total_oil_max', $post->total_oil)->lessThanOrEqualTo('total_oil_min', $post->total_oil);
    }

    //Myrcene Property
    if(isset($post->myrcene) && is_numeric($post->myrcene)){
      $select->where->nest->greaterThanOrEqualTo('myrcene_max', $post->myrcene)->lessThanOrEqualTo('myrcene_min', $post->myrcene);
    }

    //Humulene Property
    if(isset($post->humulene) && is_numeric($post->humulene)){
      $select->where->nest->greaterThanOrEqualTo('humulene_max', $post->humulene)->lessThanOrEqualTo('humulene_min', $post->humulene);
    }

    //Farnesene Property
    if(isset($post->farnesene) && is_numeric($post->farnesene)){
      $select->where->nest->greaterThanOrEqualTo('farnesene_max', $post->farnesene)->lessThanOrEqualTo('farnesene_min', $post->farnesene);
    }

    //Caryophyllene Property
    if(isset($post->caryophyllene) && is_numeric($post->caryophyllene)){
      $select->where->nest->greaterThanOrEqualTo('caryophyllene_max', $post->caryophyllene)->lessThanOrEqualTo('caryophyllene_min', $post->caryophyllene);
    }

    return $this->execute($select);
  }
}
