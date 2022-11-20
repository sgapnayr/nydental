/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import styles from './Info3.module.css'
import Person from '../../../Assets/person4.jpg'

function Info() {
    // TODO Make this a .map of DB
    return (
        <div className={styles.Info3}>
            <div className={styles.Carousel}>
                <div className={styles.Name}>
                    <strong>NYD</strong> Patient
                </div>
                <div className={styles.LineWrapper}>
                    <div className={styles.Line}>
                        <div className={styles.Line2}></div>
                    </div>
                </div>
                <div className={styles.ImageWrapper}>
                    <Image className={styles.Image} loading='lazy' src={Person} alt='' />
                    <div className={styles.StatsWrapper}>
                        <div className={styles.Stats}>
                            Age:
                        </div>
                        <div className={styles.Stats}>
                            Occupation:
                        </div>
                        <div className={styles.Stats}>
                            Star
                        </div>
                    </div>
                </div>

                <div className={styles.Desc}>
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius qui sint laborum voluptate consectetur, quibusdam blanditiis hic consequuntur, aliquid ea consequatur magnam, eveniet et nisi pariatur laboriosam explicabo iste saepe?"
                </div>
                <div className={styles.AppointmentCard}>
                    <div className={styles.AppointmentLine} />
                    <div className={styles.Appointment}>Ryan</div>
                </div>
            </div>
        </div>
    )
}

export default Info