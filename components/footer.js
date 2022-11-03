import Image from "next/image";
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styles from '/styles/Footer.module.css'
import { Facebook, Instagram, Link, Whatsapp } from "iconsax-react";

function Footer({}) {
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
    const size = windowSize.innerWidth/7
    return (<div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.empty}></div>
                    <div className={styles.text}>
                        <div>
                          <h1>Address</h1>
                          <h1>Address Siege: <br/>lot : 02 ilot n:°20 ain naadja sud, Djasr Kasentina</h1>
                          <h1>Address Usine: <br/>lot : 02 ilot n:°20 ain naadja sud, Djasr Kasentina</h1>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div>
                          <h1>Phone Number</h1>
                          <p>+ 213 560 95 57 91</p>
                          <p>+ 213 560 95 57 91</p>
                          <h1>Phone Number</h1>
                          <p>+ 213 560 95 57 91</p>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div>
                          <h1>Address</h1>
                          <h1>Address Siege: <br/>lot : 02 ilot n:°20 ain naadja sud, Djasr Kasentina</h1>
                          <h1>Address Usine: <br/>lot : 02 ilot n:°20 ain naadja sud, Djasr Kasentina</h1>
                        </div>
                    </div>
                    <div className={styles.logo}>
                      <Image src="/images/iconfooter.png" width={size} height={size/1.475} alt="ConcordalSPA"/>
                    </div>
                </div>
                <div className={styles.bottom}>
                  <p>Follow us in</p>
                </div>

                <div className={styles.icons}>
                  <Facebook size="32" color="#FFF"/>
                  <Instagram size="32" color="#FFF"/>
                  <Whatsapp size="32" color="#FFF"/>
                </div>
            </div> );
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
export default Footer;