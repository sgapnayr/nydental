import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Nav.module.css'

function Nav() {
    return (
        <section className={styles.NavBar}>
            <div className={styles.Logo}>Logo</div>
            <div className={styles.Selectors}>
                <Link className={styles.Link} href={'/'}>Home</Link>
                <Link className={styles.Link} href={'/About'}>About</Link>
                <Link className={styles.Link} href={'/location'}>Location</Link>
            </div>
        </section>
    )
}

export default Nav