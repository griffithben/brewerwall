<?php

namespace App\Collections;

use Zend\Db\Sql\Sql;
use App\Collections\AbstractCollection;

class HopSubstituteCollection extends AbstractCollection {
  protected $_table = "hop_substitutions";
  protected $_pk = "id";

  public function hop($id){
    return $this->execute(
      $this->select()->from('hop_substitutions', array('id'))->columns(array())
        ->join('hops', 'hops.id = hop_substitutions.substitution_id')
        ->where(array("hop_id"=>$id))
    );
  }
}
