import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import ImageLink from "./imagelink";
import styles from '/styles/Carousel.module.css'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={styles.rightdot}
        onClick={onClick}
      >
        <ArrowRight2 size="32" color="#FFF"/>
      </div>
    );
  }
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={styles.leftdot}
        onClick={onClick}
        >
          <ArrowLeft2 size="32" color="#FFF"/>
          </div>
    );
}
  

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        customPaging:(i)=><div className={styles.dot}></div>, 
      };
      return (
        <section>
          <Slider {...settings}>
            <ImageLink/>
            <ImageLink/>
            <ImageLink/>
          </Slider>
        </section>
      );
}

export default Carousel;