/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from './Info3.module.css'
import Person1 from '../../../Assets/person4.jpg'
import Person2 from '../../../Assets/person2.jpg'
import Person3 from '../../../Assets/person3.jpg'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

function Info() {
    const [index, setIndex] = useState(0)

    let cards = [
        {
            id: 1,
            image: Person1,
            name: 'Brad S.',
            occupation: 'Student',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius qui sint laborum voluptate consectetur, quibusdam blanditiis hic consequuntur, aliquid ea consequatur magnam, eveniet et nisi pariatur laboriosam explicabo iste saepe?"
        },
        {
            id: 2,
            image: Person2,
            name: 'Jill B.',
            occupation: 'Marketing',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi cum praesentium, molestias at, eum asperiores ipsam, rerum officiis error nemo animi numquam nulla repellat eveniet eius voluptatem esse velit vitae?"
        },
        {
            id: 3,
            image: Person3,
            name: 'Sara K.',
            occupation: 'Engineer',
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptates ad non eligendi eos laborum unde. Voluptate ducimus veritatis soluta sit cupiditate quos doloribus rerum illum vel ab, quibusdam pariatur?"
        },
    ]

    const mod = (n: number, m: number) => {
        let result = n % m

        return result >= 0 ? result : result + m
    }

    const scrollLeft = () => {
        if (index === 0) {
            setIndex(2)
            return
        }
        setIndex(index => index - 1)
    }

    const scrollRight = () => {
        if (index === 2) {
            setIndex(0)
            return
        }
        setIndex(index => index + 1)
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         if (index === 2) {
    //             setIndex(0)
    //             return
    //         }
    //         setIndex(index => index + 1)
    //     }, 5000)
    // }, [index])

    // TODO Make this a .map of DB
    return (
        <div className={styles.Info3}>
            {/* <div className={styles.InfoTitle}>Previous Patients...</div> */}

            <div className={styles.CardList}>
                <div className={styles.IconDiv}>
                    <div className={styles.IconHover}>
                        <AiOutlineLeft className={styles.IconLeft} onClick={scrollLeft} />
                    </div>
                </div>

                {cards.map((card, i) => {
                    const leftIndex = mod(index - 1, cards.length)
                    const rightIndex = mod(index + 1, cards.length)


                    let className = ""
                    if (i === index) {
                        className = styles.Carousel
                    } else if (i === leftIndex) {
                        className = styles.CarouselLeft
                    } else if (i === rightIndex) {
                        className = styles.CarouselRight
                    }

                    return (
                        <>
                            <div className={className}>
                                <div className={styles.Name}>
                                    <strong>NYD</strong> Patient
                                </div>
                                <div className={styles.LineWrapper}>
                                    <div className={styles.Line}>
                                        <div className={styles.Line2}></div>
                                    </div>
                                </div>
                                <div className={styles.ImageWrapper}>
                                    <Image className={styles.Image} loading='lazy' src={card.image} alt='' />
                                    <div className={styles.StatsWrapper}>
                                        <div className={styles.Stats}>
                                            Name: {card.name}
                                        </div>
                                        <div className={styles.Stats}>
                                            Occupation: {card.occupation}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.Desc}>
                                    {card.description}
                                </div>
                                <div className={styles.AppointmentCard}>
                                    <div className={styles.AppointmentLine} />
                                    <div className={styles.Appointment}>{card.name.split(' ')[0]}</div>
                                </div>
                            </div>
                        </>
                    )
                })}

                <div className={styles.IconDiv}>
                    <div className={styles.IconHover}>
                        <AiOutlineRight className={styles.IconRight} onClick={scrollRight} />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Info