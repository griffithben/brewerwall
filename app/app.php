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

$app->get('/', function () use ($app, $adapter)  {
  $app->render('index.html');
});
