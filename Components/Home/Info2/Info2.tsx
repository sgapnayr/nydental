import Image from 'next/image'
import React from 'react'
import styles from './Info2.module.css'
import Logo from '../../../Assets/logo2.png'
import Image1 from '../../../Assets/newyork2.jpg'
import Image2 from '../../../Assets/office2.jpg'
import Image3 from '../../../Assets/office1.jpg'
import Link from 'next/link'

function Info2() {
    return (
        <>
            <div className={styles.Info2}>

                <div className={styles.LeftSide}>
                    <Image className={styles.Logo} src={Logo} alt={''} />
                </div>


                <div className={styles.RightSide}>
                    <Image className={styles.Image1} src={Image1} alt={''} />
                    <Image className={styles.Image2} src={Image2} alt={''} />
                    <Image className={styles.Image3} src={Image3} alt={''} />
                    <div className={styles.TextBox}>
                        <div className={styles.Header}>
                            <strong>
                                Dentistry Elevated
                            </strong>
                        </div>
                        <div className={styles.TextDesc}>
                            While our all-inclusive dental services are great, what makes us stand out is our imagination of the dentistry experience. From our advanced technology to our high-end interior and finishes, we have designed every detail to exceed your expectations of a clinical appointment. Schedule your consultation today for luxe dental care that will change the way you view dentistry.
                        </div>
                        <Link href={'/About'} className={styles.Button}>Learn more</Link>
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