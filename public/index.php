<?php

  //Autoload composer packages
  require_once '../vendor/autoload.php';

  //Setup
  $app = new \Slim\Slim(array(
    'templates.path' => '../app/views',
  ));

  require_once __DIR__ . '/../app/app.php';

  //Include our production hashed javascript
  $app->view()->appendData(array('prod_cache' => json_decode(file_get_contents(__DIR__ . '/modeDictionary.json'), true)));

  //Kick the tires and light the fires.
  $app->run();
