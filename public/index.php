<?php

  //Autoload composer packages
  require_once '../vendor/autoload.php';
  
  //Setup
  $app = new \Slim\Slim(array(
    'templates.path' => '../views',
  ));

  require_once __DIR__ . '/../app/app.php';

  $app->run();
