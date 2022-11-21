import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './/Nav.module.css'
import Logo from '../../Assets/logo2.png'

function Nav() {
    return (
        <section className={styles.NavBar}>
            <Image className={styles.Logo} src={Logo} alt={''} />
            <div className={styles.Selectors}>
                <Link className={styles.Link} href={'/'}>Home</Link>
                <Link className={styles.Link} href={'/About'}>About</Link>
            </div>
            <div className={styles.Logo} />
        </section>
    )
}

export default Nav