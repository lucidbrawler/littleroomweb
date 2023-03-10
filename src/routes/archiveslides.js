

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pincnictable from '../media/pincnictable.jpeg';
import reddoor from '../media/redGallery.JPG';
import triangleglass from '../media/kaleidescope1.JPG';
import logotxt from '../media/logotxt.png';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "tomato" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "tomato" }}
        onClick={onClick}
      />
    );
  }
  

export default class Archiveslides extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="App">
          <h2> Archive </h2>
          < Slider {...settings} className='App2'>
            <div>
              <h3><img className="navlink" src={pincnictable} alt=""/></h3>
            </div>
            <div>
              <h3><img className="navlink" src={reddoor} alt=""/></h3>
            </div>
            <div>
              <h3><img className="navlink" src={triangleglass} alt=""/></h3>
            </div>
            <div>
              <h3><img className="navlink" src={logotxt} alt=""/></h3>
            </div>
            <div>
              <h3><img className="navlink" src={reddoor} alt=""/></h3>
            </div>
            <div>
              <h3><img className="navlink" src={pincnictable} alt=""/></h3>
            </div>
            <div>
              <h3><img className="navlink" src={reddoor} alt=""/></h3>
            </div>
            <div>
              <h3><img className="navlink" src={triangleglass} alt=""/></h3>
            </div>
          </Slider>
        </div>
      );
    }
  }

