import React, { Component } from 'react';

import Col from './components/Col';
import Data from './data/data.json';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './index.css';
class App extends Component {

  componentDidMount() {

  }

  resetStorage() {
    localStorage.clear();
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">

        <Slider {...settings}>
          <div className="row">
            <div className="col">
            <h3>Quize 1</h3>
              <Col quizeId="1" layout={Data.layout[0].slide1} />
            </div>
          </div>

          <div className="row">
            <div className="col">
            <h3>Quize 2</h3>
              <Col quizeId="2" layout={Data.layout[0].slide2} />
            </div>
          </div>

          <div className="row">
            <div className="col">
            <h3>Quize 3</h3>
              <Col quizeId="3" layout={Data.layout[0].slide3} />
            </div>
          </div>

          <div className="row">
            <div className="col">
            <h3>Quize 4</h3>
              <Col quizeId="4" layout={Data.layout[0].slide4} />
            </div>
          </div>


        </Slider>

        <button onClick={this.resetStorage} className="btn btn-primary">Clear Local Storage</button>

      </div>
    );
  }
}

export default App;
