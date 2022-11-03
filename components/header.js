import Image from "next/image";
import React, { useState } from "react";
import styles from '/styles/Header.module.css'
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Turn as Hamburger } from 'hamburger-react'





function Header() {
    const { t } = useTranslation("translation",{keyPrefix:"header"});
    const [isOpen, setOpen] = useState(false)
    
    return ( <header className={styles.header}>
        <div className={styles.image}>
            <Image src="/images/logo.png" fill
                   alt="ConcordalSPA"/>
        </div>
        <nav className={styles.nav1}>
            <div className={styles.navitem}>
                <p>{t("item1")}</p>
                <i/>
            </div>
            <div className={styles.navitem}>
                <p>{t("item2")}</p>
                <i/>
            </div>
            <div className={styles.navitem}>
                <p>{t("item3")}</p>
                <i/>
            </div>
            <div className={styles.navitem}>
                <p>{t("item4")}</p>
                <i/>
            </div>
            <div className={styles.navitem}>
                <p>{t("item5")}</p>
                <i/>
            </div>
           
        </nav>
        <div className={styles.animate}>
                <nav className={`${styles.nav2} ${isOpen && styles.active}`}>
                    <div className={styles.navitem}>
                        <p>{t("item1")}</p>
                        <i/>
                    </div>
                    <div className={styles.navitem}>
                        <p>{t("item2")}</p>
                        <i/>
                    </div>
                    <div className={styles.navitem}>
                        <p>{t("item3")}</p>
                        <i/>
                    </div>
                    <div className={styles.navitem}>
                        <p>{t("item4")}</p>
                        <i/>
                    </div>
                    <div className={styles.navitem}>
                        <p>{t("item5")}</p>
                        <i/>
                    </div>
                
                </nav>
                <Hamburger color={isOpen ? "#FFFFFF" : "#143578"} toggled={isOpen} toggle={setOpen} />
        </div>
    </header> );
}

export default Header;