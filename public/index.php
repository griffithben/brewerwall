<?php

  //Autoload composer packages
  require_once '../vendor/autoload.php';

  $app = new \Slim\Slim(array(
    'templates.path' => '../views',
  ));

  // Prepare view
  $app->view(new \Slim\Views\Twig());
  $app->view->parserOptions = array(
      'charset' => 'utf-8',
      'cache' => realpath('../templates/cache'),
      'auto_reload' => true,
      'strict_variables' => false,
      'autoescape' => true
  );
  $app->view->parserExtensions = array(new \Slim\Views\TwigExtension());



  $app->get('/hello/:name', function ($name) {
      echo "Hello, $name";
  });

  $connection = new PDO('mysql:host=127.0.0.1;dbname=brewerwall_dev', "root", "rootroot");
  $db = new NotORM($connection);

  $app->get('/', function () use ($app, $connection, $db)  {
      foreach ($db->yeasts() as $yeast) { // get all applications
        echo $yeast['strain'];
        echo "<br/>";
      }
      $app->render('index.html');
  });

  $app->run();
