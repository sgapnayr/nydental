import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.css'
import FooterImage from '../../Assets/texture4.jpg'

function Footer() {
    return (
        <div className={styles.Footer}>
            <Image className={styles.FooterImage} src={FooterImage} alt={''} />
            © 2022 NYD New York Dental. All rights Reserved. Website by <a className={styles.Link} href="https://www.transcendentalagency.com">Transcendental</a>
        </div>
    )
}

export default Footer