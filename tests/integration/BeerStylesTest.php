<?php

class stylesTest extends Slim_Framework_TestCase{

    public function teststylesEndpoint(){
      $this->get('/api/v1/styles');
      $this->assertEquals(200, $this->response->status());
    }

    public function teststylesCount(){
      $this->get('/api/v1/styles');
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertEquals(127, count($styles));
    }

    public function teststylesGetById(){
      $this->get('/api/v1/styles/1');
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertEquals(1, count($styles));
    }

    public function testBeerStylePostName(){
      $parameters = array('name' => "english");
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(6, count($styles));
    }

    public function testBeerStylePostDescription(){
      $parameters = array('description' => "english");
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(13, count($styles));
    }

    public function testBeerStylePostOrigin(){
      $parameters = array('origin' => "British");
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(21, count($styles));
    }

    public function testBeerStylePostCategory(){
      $parameters = array('category' => "Ale");
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(76, count($styles));
    }

    public function testBeerStylePostOG(){
      $parameters = array('og' => 1.080);
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(32, count($styles));
    }

    public function testBeerStylePostOGPlato(){
      $parameters = array('og_plato' => 12);
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(74, count($styles));
    }

    public function testBeerStylePostFG(){
      $parameters = array('fg' => 1.008);
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(51, count($styles));
    }

    public function testBeerStylePostFGPlato(){
      $parameters = array('fg_plato' => 2);
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(79, count($styles));
    }

    public function testBeerStylePostABW(){
      $parameters = array('abw' => 8);
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(33, count($styles));
    }

    public function testBeerStylePostABV(){
      $parameters = array('abv' => 8);
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(41, count($styles));
    }

    public function testBeerStylePostIBU(){
      $parameters = array('ibu' => 8);
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(22, count($styles));
    }

    public function testBeerStylePostSRM(){
      $parameters = array('srm' => 8);
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(63, count($styles));
    }

    public function testBeerStylePostEBC(){
      $parameters = array('ebc' => 8);
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(53, count($styles));
    }

    public function testBeerStylePostYear(){
      $parameters = array('year' => 2013);
      $this->post('/api/v1/styles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(127, count($styles));
    }
}
