<?php

use Zend\Db\Sql\Sql;

if(null == getenv("ENVIRONMENT")){
  Dotenv::load(__DIR__.'/../');
}
$mysql = parse_url(getenv(getenv("ENVIRONMENT")."_DATABASE_URL"));

$adapter = new Zend\Db\Adapter\Adapter(array(
  'driver' => 'Mysqli',
  'database' => substr($mysql["path"],1),
  'username' => $mysql["user"],
  'password' => $mysql["pass"],
  'hostname' => $mysql["host"],
  'charset'  => 'utf8'
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

$app->get('/grains', function () use ($app, $adapter)  {
  $app->render('grains.html', array('page'=>'grains'));
});

$app->get('/calculations', function () use ($app, $adapter)  {
  $app->render('calculations.html', array('page'=>'calculations'));
});
