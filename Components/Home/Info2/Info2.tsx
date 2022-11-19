import Image from 'next/image'
import React from 'react'
import styles from './Info2.module.css'
import Logo from '../../../Assets/logo2.png'
import Image1 from '../../../Assets/office1.jpg'

function Info2() {
    return (
        <>
            <div className={styles.Info2}>
                <div className={styles.LeftSide}>
                    <Image className={styles.Logo} src={Logo} alt={''} />
                </div>

                <Image className={styles.Image1} src={Image1} alt={''} />

                <div className={styles.RightSide}>
                    <div className={styles.TextBox}>
                        <div className={styles.Header}>Dentistry Elevated</div>
                        While our all-inclusive dental services are great, what makes us stand out is our reimagination of the dentistry experience. From our advanced technology to our high-end interior and finishes, we have designed every detail to exceed your expectations of a clinical appointment. Additionally, BLVD Dental offers extended hours, virtual consultations and even massage chairs to improve the patient experience. Schedule your consultation today for luxe dental care that will change the way you view dentistry.
                    </div>
                </div>
            </div>
            <div className={styles.Info2}>
                <div className={styles.RightSide}></div>
                <div className={styles.LeftSide}>
                    <Image className={styles.Logo} src={Logo} alt={''} />
                </div>
            </div>
            <div className={styles.Info2}>
                <div className={styles.LeftSide}>
                    <Image className={styles.Logo} src={Logo} alt={''} />
                </div>
                <div className={styles.RightSide}>
                </div>
            </div>
        </>
    )
}

export default Info2