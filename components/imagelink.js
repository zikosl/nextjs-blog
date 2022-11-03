import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import styles from '/styles/ImageLink.module.css'

function ImageLink(image=null) {
    return ( <div style={{backgroundImage:image}} className={styles.container}>
        <div className={styles.image}>
            <Image src={"/images/logo.png"} fill alt="ConcordalSPA" className={styles.img}/>
        </div>
        
    </div> );
}




export default ImageLink;