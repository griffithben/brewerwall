<?php

class HopsTest extends Slim_Framework_TestCase{

  public function testHopsEndpoint(){
    $this->get('/api/v1/hops');
    $this->assertEquals(200, $this->response->status());
  }

  public function testHopsCount(){
    $this->get('/api/v1/hops');
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertEquals(207, count($hops));
  }

  public function testHopsGetById(){
    $this->get('/api/v1/hops/1');
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertEquals(1, count($hops));
  }

  public function testHopsPostName(){
    $parameters = array('name' => "cascade");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(1, count($hops));
  }

  public function testHopsPostDescription(){
    $parameters = array('description' => "fruit");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(40, count($hops));
  }

  public function testHopsPostOrigin(){
    $parameters = array('origin' => "german");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(27, count($hops));
  }

  public function testHopsPostType(){
    $parameters = array('aroma' => "earth");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(13, count($hops));
  }

  public function testHopsPostStyles(){
    $parameters = array('styles' => "ale");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(85, count($hops));
  }

  public function testHopsPostAlpha(){
    $parameters = array('alpha' => "5");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(47, count($hops));
  }

  public function testHopsPostBeta(){
    $parameters = array('beta' => "5");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(88, count($hops));
  }

  public function testHopsPostCohumulone(){
    $parameters = array('cohumulone' => "25");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(52, count($hops));
  }

  public function testHopsPostTotalOil(){
    $parameters = array('total_oil' => "1.7");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(45, count($hops));
  }

  public function testHopsPostMyrcene(){
    $parameters = array('myrcene' => "35");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(49, count($hops));
  }

  public function testHopsPostHumulene(){
    $parameters = array('humulene' => "18");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(32, count($hops));
  }

  public function testHopsPostFarnesene(){
    $parameters = array('farnesene' => "3");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(13, count($hops));
  }

  public function testHopsPostCaryophyllene(){
    $parameters = array('caryophyllene' => "10");
    $this->post('/api/v1/hops', $parameters);
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(60, count($hops));
  }

  public function testHopsSubstitutions(){
    $this->get('/api/v1/hops/1/substitutes');
    $hops = json_decode($this->response->body());
    $this->assertEquals(200, $this->response->status());
    $this->assertSame(5, count($hops));
  }

}
