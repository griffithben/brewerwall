<?php

namespace App\Collections;

use Zend\Db\Sql\Sql;
use App\Collections\AbstractCollection;

class HopCollection extends AbstractCollection {
  protected $_table = "hops";
  protected $_pk = "id";
}
