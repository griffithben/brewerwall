<?php

class SrmsTest extends Slim_Framework_TestCase{

  public function testSrmsEndpoint(){
    $this->get('/api/v1/srms');
    $this->assertEquals(200, $this->response->status());
  }

  public function testSrmsCount(){
    $this->get('/api/v1/srms');
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertEquals(40, count($styles));
  }

  public function testSrmsGetById(){
    $this->get('/api/v1/srms/1');
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertEquals(1, count($styles));
  }
}
