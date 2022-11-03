import Image from "next/image";
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styles from '/styles/NewLetter.module.css'

function NewLetter({}) {
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
    const size = Math.max(windowSize.innerWidth/6,170)
    return (<div style={{background:"#143578"}} className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.text}>
                        <h1>Newsletter</h1>
                        <h2>Stay updated</h2>
                        <p>Subscribe to receive information new products on the product portal and commercial information </p>
                    </div>
                    <div className={styles.email}>
                        <input/>
                        <div className={styles.button}>Sign up</div>
                    </div>
                </div>
                <div className={styles.right}>
                    <Image src="/images/logo.png" width={size} height={size / 2.837} alt="ConcordalSPA"/>
                </div>
            </div> );
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
export default NewLetter;