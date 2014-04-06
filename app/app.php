<?php

require_once __DIR__ . '/../config/config.php';
use Zend\Db\Sql\Sql;

$adapter = new Zend\Db\Adapter\Adapter(array(
  'driver' => Config::DB_DRIVER,
  'database' => Config::DB_SCHEMA,
  'username' => Config::DB_USER,
  'password' => Config::DB_PASSWORD,
  'hostname' => Config::DB_HOST,
  'charset'  => Config::DB_CHARSET
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

//Routes
foreach (glob(__DIR__ . "/routes/*.php") as $filename){ require $filename; }

//Collections
foreach (glob(__DIR__ . "/collections/*.php") as $filename){ require_once $filename; }

$app->get('/', function () use ($app, $adapter)  {
  $app->render('index.html');
});

$app->get('/docs', function () use ($app, $adapter)  {
  $app->render('index.html');
});

$app->get('/about', function () use ($app, $adapter)  {
  $app->render('about.html');
});

$app->get('/styles', function () use ($app, $adapter)  {
  $app->render('styles.html');
});

$app->get('/hops', function () use ($app, $adapter)  {
  $app->render('hops.html');
});

$app->get('/yeasts', function () use ($app, $adapter)  {
  $app->render('yeasts.html');
});

$app->get('/grains', function () use ($app, $adapter)  {
  $app->render('grains.html');
});

$app->get('/calculations', function () use ($app, $adapter)  {
  $app->render('calculations.html');
});

$app->get('/srms', function () use ($app, $adapter)  {
  $app->render('srms.html');
});
