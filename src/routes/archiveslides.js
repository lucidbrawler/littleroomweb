

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LeapYearDanceParty from '../media/archive pt 1/2020 Leap Year Dance Party.JPG';
import OrangeShowSpectrumSeries from '../media/archive pt 1/2020 Orange Show_ Spectrum Series.JPG';
import RedShowSpectrumSeries from '../media/archive pt 1/2020 Red Show_ Spectrum Series.JPG';
import GreenShowSpectrumSeries from '../media/archive pt 1/2020_ Green Show_ Spectrum Series.JPG';
import OrangeShowSpectrumSeries2 from '../media/archive pt 1/2020_ Orange Show_ Spectrum Series.png';
import RedShowSpectrumSeries2 from '../media/archive pt 1/2020_ Red Show, Spectrum Series.JPG';
import ALittleBitInfiniteInstallation from '../media/archive pt 1/2021 _A Little Bit Infinite_ Installation.JPG';
import AlleyWayGeetDown from '../media/archive pt 1/2021 Alley Way Geet Down.jpg';
import AlleyWayGeetDown2 from '../media/archive pt 1/2021 Alley Way Get Down.jpeg';
import BlueShowSpectrumSeries from '../media/archive pt 1/2021 Blue Show_ Spectrum Series.JPG';
import CostumeTrashPickup from '../media/archive pt 1/2021 Costume Trash Pickup.JPG';
import PopupGalleryatALovelyTimeMusicandArtsFestival from '../media/archive pt 1/2021 Pop-up 2021_Gallery at A Lovely Time Music and Arts Festival.JPG';
import UVShowSpectrumSeries from '../media/archive pt 1/2021 UV Show_ Spectrum Series.JPG';
import UVShowSpectrumSeries2 from '../media/archive pt 1/2021_ UV Show_ Spectrum Series_.JPG';
import YurtInstallationatALovelyTimeMusicandArtsFestival from '../media/archive pt 1/2021_ Yurt Installation at A Lovely Time Music and Arts Festival.JPG';
import AlleyWayGetDown3 from '../media/archive pt 1/2021_Alley Way Get Down.jpg';
import ReAwakaneInstallation from '../media/archive pt 1/2022 _Re-Awakane_ Installation.JPG';
import ReAwakenInstallation from '../media/archive pt 1/2022 _Re-Awaken_ Installation.JPG';
import AlleyWayGetDown4 from '../media/archive pt 1/2022 AlleyWay Get Down.JPG';
import ExperimentalSoundShow from '../media/archive pt 1/2022 Experimental Sound Show.JPG';
import SpringArtMarket from '../media/archive pt 1/2022 Spring. Art Market.JPG';
import TheBeginnings from '../media/archive pt 1/The Beginnings 2019.JPG';


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
            breakpoint: 700,
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
        <div className="">
          <h2> Archives </h2>
          < Slider {...settings} className=''>
            <div  className="archives1">
              <div><p className="link3" >2020</p><h3><img  className="archives1" src={LeapYearDanceParty} alt=""/></h3>
              <div className="link2">
              Leap Year Dance Party
              </div>
            </div>
            </div>
            <div className="archives1">
            <div><p className="link3">2020</p><h3><img className="archives1"  src={OrangeShowSpectrumSeries} alt=""/></h3>
            <div className="link2">
            Orange Show Spectrum Series
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2020</p> <div >
              <h3><img className="archives1"  src={RedShowSpectrumSeries} alt=""/></h3>
              <div className="link2">
              Red Show Spectrum Series
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2020</p> <div >
              <h3><img className="archives1" src={GreenShowSpectrumSeries} alt=""/></h3>
              <div className="link2">
              Green Show Spectrum Series
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2020</p> <div >
              <h3><img className="archives1" src={OrangeShowSpectrumSeries2} alt=""/></h3>
              <div className="link2">
              Orange Show Spectrum Series
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2020</p> <div >
              <h3><img className="archives1" src={RedShowSpectrumSeries2} alt=""/></h3>
              <div className="link2">
              Red Show Spectrum Series
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2021</p> <div >
              <h3><img className="archives1" src={ALittleBitInfiniteInstallation} alt=""/></h3>
              <div className="link2">
              A Little Bit Infinite Installation
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2021</p> <div >
              <h3><img className="archives1" src={AlleyWayGeetDown} alt=""/></h3>
              <div className="link2">
              Alley Way Get Down
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2021</p> <div >
              <h3><img className="archives1" src={AlleyWayGeetDown2} alt=""/></h3>
              <div className="link2">
              Alley Way Get Down
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2021</p> <div >
              <h3><img className="archives1" src={BlueShowSpectrumSeries} alt=""/></h3>
              <div className="link2">
              Blue Show Spectrum Series
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2021</p> <div >
              <h3><img className="archives1" src={CostumeTrashPickup} alt=""/></h3>
              <div className="link2">
              Costume Trash Pickup
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2021</p> <div >
              <h3><img className="archives1" src={PopupGalleryatALovelyTimeMusicandArtsFestival} alt=""/></h3>
              <div className="link2">
              Pop up Gallery at A Lovely Time Music and Arts Festival
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2021</p> <div >
              <h3><img className="archives1" src={UVShowSpectrumSeries} alt=""/></h3>
              <div className="link2">
              UV Show Spectrum Series
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2021</p> <div >
              <h3><img className="archives1" src={UVShowSpectrumSeries2} alt=""/></h3>
              <div className="link2">
              UV Show Spectrum Series
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2021</p> <div >
              <h3><img className="archives1" src={YurtInstallationatALovelyTimeMusicandArtsFestival} alt=""/></h3>
              <div className="link2">
              Yurt Installation at A Lovely Time Music and Arts Festival
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2021</p> <div >
              <h3><img className="archives1" src={AlleyWayGetDown3} alt=""/></h3>
              <div className="link2">
              Alley Way Get Down
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2022</p> <div >
              <h3><img className="archives1" src={ReAwakaneInstallation} alt=""/></h3>
              <div className="link2">
              Re-Awakane Installation
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2022</p> <div >
              <h3><img className="archives1" src={ReAwakenInstallation} alt=""/></h3>
              <div className="link2">
              Re-Awaken Installation
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2022</p> <div >
              <h3><img className="archives1" src={AlleyWayGetDown4} alt=""/></h3>
              <div className="link2">
              Alley Way Get Down4
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2022</p> <div >
              <h3><img className="archives1" src={ExperimentalSoundShow} alt=""/></h3>
              <div className="link2">
              Experimental Sound Show
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2022</p> <div >
              <h3><img className="archives1" src={SpringArtMarket} alt=""/></h3>
              <div className="link2">
              Spring Art Market
              </div>
            </div>
            </div>
            <div className="archives1"><p className="link3" >2019</p> <div >
              <h3><img className="archives1" src={TheBeginnings} alt=""/></h3>
              <div className="link2">
              The Beginnings
              </div>
            </div>
            </div>
            
          </Slider>
        </div>
      );
    }
  }

