<?php

  //Autoload composer packages
  require_once '../vendor/autoload.php';
  require_once '../config/config.php';
  use Zend\Db\Sql\Sql;

  //Setup
  $app = new \Slim\Slim(array(
    'templates.path' => '../views',
  ));

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
  $app->get('/', function () use ($app, $adapter)  {
    $app->render('index.html');
  });

  $app->get('/api/yeast', function () use ($app, $adapter){
    $sql = new Sql($adapter);
    $select = $sql->select();
    $select->from('yeasts');

    $selectString = $sql->getSqlStringForSqlObject($select);
    $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);

    echo json_encode($results->toArray());
  });

  $app->get('/api/beerstyles', function () use ($app, $adapter){
    $sql = new Sql($adapter);
    $select = $sql->select();
    $select->from('beer_styles');

    $selectString = $sql->getSqlStringForSqlObject($select);
    $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);

    echo json_encode($results->toArray());
  });

  $app->get('/api/beerstyles/:id', function ($id) use ($app, $adapter){
    $sql = new Sql($adapter);
    $select = $sql->select();
    $select->from('beer_styles')->where(array("id"=>$id));

    $selectString = $sql->getSqlStringForSqlObject($select);
    $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);

    echo json_encode($results->toArray());
  });

  $app->post('/api/beerstyles', function () use ($app, $adapter){

    $sql = new Sql($adapter);
    $select = $sql->select();
    $select->from('beer_styles');

    //Category Property
    if(isset($app->request->headers->category) && is_string($app->request->headers->category))
      $select->where(array('LOWER(category)'=>strtolower($app->request->headers->category)));

    //OG Property
    if(isset($app->request->headers->og) && is_numeric($app->request->headers->og))
      $select->where->greaterThanOrEqualTo('og_max', $app->request->headers->og)->lessThanOrEqualTo('og_min', $app->request->headers->og);

    //OG_Plato Property
    if(isset($app->request->headers->og_plato) && is_numeric($app->request->headers->og_plato))
      $select->where->greaterThanOrEqualTo('og_plato_max', $app->request->headers->og_plato)->lessThanOrEqualTo('og_plato_min', $app->request->headers->og_plato);

    //FG Property
    if(isset($app->request->headers->fg) && is_numeric($app->request->headers->fg))
      $select->where->greaterThanOrEqualTo('fg_max', $app->request->headers->fg)->lessThanOrEqualTo('fg_min', $app->request->headers->fg);

    //FG_Plato Property
    if(isset($app->request->headers->fg_plato) && is_numeric($app->request->headers->fg_plato))
      $select->where->greaterThanOrEqualTo('fg_plato_max', $app->request->headers->fg_plato)->lessThanOrEqualTo('fg_plato_min', $app->request->headers->fg_plato);

    //ABW Property
    if(isset($app->request->headers->abw) && is_numeric($app->request->headers->abw))
      $select->where->greaterThanOrEqualTo('abw_max', $app->request->headers->abw)->lessThanOrEqualTo('abw_min', $app->request->headers->abw);

    //ABV Property
    if(isset($app->request->headers->abv) && is_numeric($app->request->headers->abv))
      $select->where->greaterThanOrEqualTo('abv_max', $app->request->headers->abv)->lessThanOrEqualTo('abv_min', $app->request->headers->abv);

    //IBU Property
    if(isset($app->request->headers->ibu) && is_numeric($app->request->headers->ibu))
      $select->where->greaterThanOrEqualTo('ibu_max', $app->request->headers->ibu)->lessThanOrEqualTo('ibu_min', $app->request->headers->ibu);

    //SRM Property
    if(isset($app->request->headers->srm) && is_numeric($app->request->headers->srm))
      $select->where->greaterThanOrEqualTo('srm_max', $app->request->headers->srm)->lessThanOrEqualTo('srm_min', $app->request->headers->srm);

    //EBC Property
    if(isset($app->request->headers->abw) && is_numeric($app->request->headers->abw))
      $select->where->greaterThanOrEqualTo('abw_max', $app->request->headers->abw)->lessThanOrEqualTo('abw_min', $app->request->headers->abw);

    //ABW Property
    if(isset($app->request->headers->year) && is_numeric($app->request->headers->year))
      $select->where(array("year"=>$app->request->headers->year));

    $selectString = $sql->getSqlStringForSqlObject($select);
    $results = $adapter->query($selectString, $adapter::QUERY_MODE_EXECUTE);
    echo json_encode($results->toArray());
  });

  $app->run();
