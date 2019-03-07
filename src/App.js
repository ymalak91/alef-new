import React, { Component } from 'react';

import Col from './components/Col';

import './index.css';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




class App extends Component {

  componentDidMount() {
    //console.log(Data.col1);
  }

  render() {


    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 200,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="container">
        <div className="row">

          <div className="col">
            <Slider {...settings}>
              <div>
                <Col />
              </div>
              <div>
                <Col />
              </div>
              <div>
                some content
              </div>
            </Slider>
          </div>


        </div>
      </div>
    );
  }
}

export default App;
