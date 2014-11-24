<?php
  if(null == getenv("ENVIRONMENT")){
    Dotenv::load(__DIR__);
  }
  $mysql = parse_url(getenv(getenv("ENVIRONMENT")."_DATABASE_URL"));
  return array(
    "paths" => array(
        "migrations" => "migrations"
    ),
    "environments" => array(
      "default_migration_table" => "_migrations",
      "default_database" => "prod",
      "prod" => array(
        "adapter" => "mysql",
        "host" => $mysql["host"],
        "name" => substr($mysql["path"],1),
        "user" => $mysql["user"],
        "pass" => $mysql["pass"],
        "port" => 3306,
        "charset"=> "utf8"
      )
    )
  );
