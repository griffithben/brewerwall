<?php

class HopsTest extends Slim_Framework_TestCase{

  public function testHopsEndpoint(){
    $this->get('/api/hops');
    $this->assertEquals(200, $this->response->status());
  }

  public function testHopsCount(){
    $this->get('/api/hops');
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertEquals(207, count($styles));
  }

  public function testHopsGetById(){
    $this->get('/api/hops/1');
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertEquals(1, count($styles));
  }

  public function testHopsPostName(){
    $parameters = array('name' => "cascade");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(1, count($styles));
  }

  public function testHopsPostDescription(){
    $parameters = array('description' => "fruit");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(40, count($styles));
  }

  public function testHopsPostOrigin(){
    $parameters = array('origin' => "german");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(27, count($styles));
  }

  public function testHopsPostType(){
    $parameters = array('aroma' => "earth");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(13, count($styles));
  }

  public function testHopsPostStyles(){
    $parameters = array('styles' => "ale");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(85, count($styles));
  }

  public function testHopsPostAlpha(){
    $parameters = array('alpha' => "5");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(47, count($styles));
  }

  public function testHopsPostBeta(){
    $parameters = array('beta' => "5");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(88, count($styles));
  }

  public function testHopsPostCohumulone(){
    $parameters = array('cohumulone' => "25");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(52, count($styles));
  }

  public function testHopsPostTotalOil(){
    $parameters = array('total_oil' => "1.7");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(45, count($styles));
  }

  public function testHopsPostMyrcene(){
    $parameters = array('myrcene' => "35");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(49, count($styles));
  }

  public function testHopsPostHumulene(){
    $parameters = array('humulene' => "18");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(32, count($styles));
  }

  public function testHopsPostFarnesene(){
    $parameters = array('farnesene' => "3");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(13, count($styles));
  }

  public function testHopsPostCaryophyllene(){
    $parameters = array('caryophyllene' => "10");
    $this->post('/api/hops', $parameters);
    $styles = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(60, count($styles));
  }

}
