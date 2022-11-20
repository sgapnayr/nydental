import Image from 'next/image'
import React from 'react'
import styles from './Info2.module.css'
import Logo from '../../../Assets/logo2.png'
import Image1 from '../../../Assets/newyork4.jpg'
import Image2 from '../../../Assets/newyork1.jpg'
import Image3 from '../../../Assets/person2.jpg'
import Image4 from '../../../Assets/cNewYork2.jpg'
import Image5 from '../../../Assets/office2.jpg'
import Image6 from '../../../Assets/office1.jpg'
import Link from 'next/link'

function Info2() {
    return (
        <>
            <div className={styles.Info2}>
                <Image className={styles.Image4} loading='eager' src={Image4} alt={''} />
                <Image className={styles.Image5} loading='eager' src={Image5} alt={''} />
                <Image className={styles.Image6} loading='eager' src={Image6} alt={''} />
                <div className={styles.LeftSide}>
                    <Image className={styles.Logo} loading='lazy' src={Logo} alt={''} />
                </div>
                <div className={styles.RightSide}>
                    <div className={styles.TextBox}>
                        <div className={styles.Header}>
                            <strong>
                                Dentistry Elevated
                            </strong>
                        </div>
                        <div className={styles.TextDesc}>
                            While our all-inclusive dental services are great, what makes us stand out is our imagination of the dentistry experience. From our advanced technology to our high-end interior and finishes, we have designed every detail to exceed your expectations of a clinical appointment. Schedule your consultation today for luxe dental care that will change the way you view dentistry.
                        </div>
                        <Link href={'/About'} className={styles.LearnButton}>Learn More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info2