<?php

class YeastsTest extends Slim_Framework_TestCase{

  public function testSrmsEndpoint(){
    $this->get('/api/yeasts');
    $this->assertEquals(200, $this->response->status());
  }

  public function testYeastsCount(){
    $this->get('/api/yeasts');
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertEquals(144, count($styles));
  }

  public function testYeastsGetById(){
    $this->get('/api/yeasts/1');
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertEquals(1, count($styles));
  }

  public function testYeastsPostLaboratory(){
    $parameters = array('laboratory' => "white labs");
    $this->post('/api/yeasts', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(92, count($styles));
  }

  public function testYeastsPostStrain(){
    $parameters = array('strain' => "wlp001");
    $this->post('/api/yeasts', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(1, count($styles));
  }

  public function testYeastsPostName(){
    $parameters = array('name' => "california");
    $this->post('/api/yeasts', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(4, count($styles));
  }

  public function testYeastsPostDescription(){
    $parameters = array('description' => "clean");
    $this->post('/api/yeasts', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(32, count($styles));
  }

  public function testYeastsPostAttenuation(){
    $parameters = array('attenuation' => "80");
    $this->post('/api/yeasts', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(58, count($styles));
  }

  public function testYeastsPostFlocculation(){
    $parameters = array('flocculation' => "medium");
    $this->post('/api/yeasts', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(50, count($styles));
  }

  public function testYeastsPostTemperature(){
    $parameters = array('temperature' => "80");
    $this->post('/api/yeasts', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(21, count($styles));
  }

  public function testYeastsPostTolerance(){
    $parameters = array('tolerance' => "12");
    $this->post('/api/yeasts', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(63, count($styles));
  }
}
