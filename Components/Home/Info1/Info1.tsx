import Image from 'next/image'
import React from 'react'
import styles from './Info1.module.css'
import image from '../../../Assets/person1.jpg'

function Info1() {
    return (
        <div className={styles.Info1}>
            <div className={styles.InfoCard1}>
                <h1 className={styles.Card1Header}>
                    Hello!
                </h1>
            </div>

            <div className={styles.InfoCard2}>
                <p>
                    At NYD, your dental visit will be curated from start to finish. With a combination of spa-like amenities and intentional, comprehensive care, we can help you feel more at ease in the dental chair and more confident with your smile.
                </p>
            </div>
            <div className={styles.InfoCard3}>
                <div className={styles.CardFooter}>
                    Dr. Danielle Adelpour
                </div>
            </div>
            <Image className={styles.InfoImage} src={image} alt={''} />
        </div >
    )
}

export default Info1