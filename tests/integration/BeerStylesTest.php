<?php

class BeerStylesTest extends Slim_Framework_TestCase{

    public function testBeerStylesEndpoint(){
      $this->get('/api/beerstyles');
      $this->assertEquals(200, $this->response->status());
    }

    public function testBeerStylesCount(){
      $this->get('/api/beerstyles');
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertEquals(127, count($styles));
    }

    public function testBeerStylesGetById(){
      $this->get('/api/beerstyles/1');
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertEquals(1, count($styles));
    }

    public function testBeerStylePost(){
      $parameters = array('og' => 1.080);
      $this->post('/api/beerstyles', $parameters);
      $styles = json_decode($this->response->body());
      $this->assertEquals(200, $this->response->status());
      $this->assertSame(21, count($styles));
    }
}
