<?php
use Zend\Db\Sql\Sql;
use App\Collections\HopCollection;

$app->get('/hops', function () use ($app, $adapter)  {
  $app->render('hops.html', array('page'=>'hops'));
});
