import React from 'react'
import styles from './BookHero.module.css'

function Hero() {
    return (
        <div className={styles.HeroContainer}>
            <div className={styles.Hero}>
                <p className={styles.HeroHead}>
                    Cutting Edge Technology
                </p>
                <div className={styles.HeroLine}></div>
                <p className={styles.HeroDesc}>New York Dental</p>
            </div>
        </div>
    )
}

export default Hero