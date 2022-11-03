import Image from "next/image";
import React from "react";
import PropTypes from 'prop-types';
import styles from '/styles/Description.module.css'

function Description({title,subtitle,detaille,color,image,rtl}) {
    return (<div style={{background:color,flexDirection:rtl ? "row" : "row-reverse"}} className={styles.container}>
                <div className={styles.left}>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{detaille}</p>
                    <div className={styles.button}>Afficher</div>
                </div>
                <div className={styles.right} style={{backgroundImage:"url("+image+")"}}>
                </div>
            </div> );
}

Description.prototype = {
    title:PropTypes.string,
    subtitle:PropTypes.string,
    detaille:PropTypes.string,
    image:PropTypes.string,
    color:PropTypes.string,
    rtl:PropTypes.bool
}
Description.defaultProps ={
    title:"Product",
    subtitle:"Engineered for preformance",
    detaille:"Engineered for preformance biplace for transparencies , coating. Sealavants Packaging Engineered for preformance biplace for transparencies , coating. Sealavants Packaging Saddened",
    image:"/images/test.png",
    color:"#143578",
    rtl:true
}
export default Description;