import React from 'react'
import styles from '../../../styles/Home.module.css'

function Info1() {
    return (
        <div className={styles.Info1}>
            <div className={styles.InfoCard1}>
                <h1 className={styles.Card1Header}>
                    Hello!
                </h1>
                <p>
                    At BLVD Dental Aesthetics, your dental visit will be curated from start to finish. In the heart of the Mid-Wilshire neighborhood in Los Angeles, we pride ourselves on our customer service and strive to make every patient feel welcome and comfortable when they’re in our office. With a combination of spa-like amenities and intentional, comprehensive care, we can help you feel more at ease in the dental chair and more confident with your smile.
                </p>
                <h4 className={styles.Card1Footer}>
                    Dr. Daniel Adelpour
                </h4>
            </div>
        </div>
    )
}

export default Info1