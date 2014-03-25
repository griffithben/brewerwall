<?php

class BeerStylesTest extends Slim_Framework_TestCase{
    public function testBeerStylesEndpoint(){
      $this->get('/api/beerstyles');
      $this->assertEquals(200, $this->response->status());
    }
    public function testBeerStylesCount(){
      $this->get('/api/beerstyles');
      $styles = json_decode($this->response->body());
      $this->assertEquals(127, count($styles));
    }
}
