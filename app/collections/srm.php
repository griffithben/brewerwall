<?php

namespace App\Collections;

use Zend\Db\Sql\Sql;
use App\Collections\AbstractCollection;

class SrmCollection extends AbstractCollection {
  protected $_table = "srms";
  protected $_pk = "id";
}
