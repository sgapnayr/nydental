import Image from 'next/image'
import React from 'react'
import styles from './Technology.module.css'
import Office1 from '../../../Assets/office2.jpg'
import Office2 from '../../../Assets/office1.jpg'

function Technology() {
    return (
        <div className={styles.Technology}>
            <div className={styles.InfoCard1}>
                <h1 className={styles.Card1Header}>
                    Smile!
                </h1>
            </div>

            <div className={styles.InfoCard2}>
                <p>
                    Everyone’s smile demands and deserves regular care and attention, and the strongest and most stunning smiles undergo dental cleanings and checkups at least every six months. Teeth cleaning dentist Dr. Daniel Adelpour keeps smiles healthy through individualized dental care and many types of dental cleaning, including dental prophylaxis.
                </p>
            </div>
            <div className={styles.InfoCard3}>
                <div className={styles.CardFooter}>
                    Dr. Danielle Adelpour
                </div>
            </div>
            <Image className={styles.Office1} src={Office1} loading='lazy' alt='' />
            <Image className={styles.Office2} src={Office2} loading='lazy' alt='' />
        </div>
    )
}

export default Technology