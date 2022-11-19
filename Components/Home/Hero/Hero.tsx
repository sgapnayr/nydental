import React from 'react'
import styles from '../../../styles/Hero.module.css'

function Hero() {
    return (
        <div className={styles.HeroContainer}>
            <div className={styles.Hero}>
                <div className={styles.HeroHead}>
                    Welcome to <strong>NYD</strong>
                </div>
                <p className={styles.HeroDesc}>New York Dental</p>
                <p className={styles.HeroLine}></p>
                <p className={styles.HeroDesc2}>The Premium Oral Choice</p>
            </div>
        </div>
    )
}

export default Hero