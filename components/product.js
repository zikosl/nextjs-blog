import Image from "next/image";
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styles from '/styles/Product.module.css'

function Product({title,image,subtitle,colors}) {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    const size = windowSize.innerWidth / 4
    return (<div className={styles.container}>
        <div className={styles.image}>
            <Image src={image} width={220} height={300} style={{display:"flex"}} alt={title}/>
        </div>
        <div className={styles.flex}>
            <div className={styles.left}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <div className={styles.colors}>{
                    colors.map((v,i)=><i style={{background:v}} key={i}></i>)
                }</div>
            </div>
            <div className={styles.right}>
                <div className={styles.button}>Afficher</div>
            </div>
        </div>
    </div> );
}

Product.prototype = {
    title:PropTypes.string,
    image:PropTypes.string,
    subtitle:PropTypes.string,
    colors:PropTypes.arrayOf(PropTypes.string)
}
Product.defaultProps ={
    title:"Product",
    image:"/images/template.png",
    colors:["#5800FF","#AAFFDE","#FFFFFF","#000000"],
    subtitle:"Detaille",
}


function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

export default Product;