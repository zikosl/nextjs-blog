import Image from "next/image";
import React from "react";
import PropTypes from 'prop-types';
import styles from '/styles/Colors.module.css'

function Colors({title,reference,subtitle,color}) {
    return (<div style={{background:color}} className={styles.container}>
        <div className={styles.empty}></div>
        <div className={styles.abs}>{reference}</div>
        <div className={styles.flex}>
            <div className={styles.left}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <div className={styles.right}>
                <div className={styles.button}>Afficher</div>
            </div>
        </div>
    </div> );
}

Colors.prototype = {
    title:PropTypes.string,
    reference:PropTypes.string,
    subtitle:PropTypes.string,
    color:PropTypes.string
}
Colors.defaultProps ={
    title:"Product",
    reference:"SE 783",
    color:"#A0DBFF",
    subtitle:"Detaille",
}
export default Colors;