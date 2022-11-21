import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { select, selectTitle } from '../../../Redux/BookSlice'
import styles from './Reviews.module.css'
import axios from 'axios'

function Reviews() {
    const [name, setName] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [reason, setReason] = useState<string>('')
    const [emergency, setEmergency] = useState<boolean | null>(null)
    const [modal, setModal] = useState<boolean>(false)
    const [firstName, setFirstName] = useState<string>('')

    const handleSubmit = () => {
        if (!name) return
        setName('')
        setDate('')
        setReason('')
        setEmergency(null)
        setModal(true)
        showFirstName()
    }

    const handleModal = () => {
        setModal(false)
    }

    const showFirstName = () => {
        if (!name) return
        const firstName = name.split(' ')[0].toLowerCase()
        const firstChar = firstName.split('')[0].toUpperCase()
        firstName.split('').shift()
        setFirstName(firstChar + firstName.substring(1))
    }

    const dispatch = useDispatch()
    const selectedTile = useSelector(selectTitle)

    return (
        <div className={styles.Wrapper}>
            <div className={styles.CarouselWrapper}>

                <div className={styles.Carousel}>

                    <div className={styles.Title}>
                        <h1>
                            Book Your Appointment
                        </h1>
                    </div>

                    <div className={styles.InputDiv}>
                        Name.
                        <input className={styles.Input} placeholder='John Smith' type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className={styles.InputDiv}>
                        Date.
                        <input className={styles.Input} placeholder='03/01/2022' type="date" onChange={(e) => setDate(e.target.value)} value={date} />
                    </div>
                    <div className={styles.InputDiv}>
                        Reason.
                        <input className={styles.Input} placeholder='I am having a tooth ache...' type="text" onChange={(e) => setReason(e.target.value)} value={reason} />
                    </div>
                    <div className={styles.InputDiv}>
                        Emergency?
                        <div className={styles.EmergencyDiv}>
                            <button className={emergency !== false && emergency !== true ? styles.EmergencyButton : !emergency ? styles.EmergencyButtonHighlighted : styles.EmergencyButton} onClick={() => setEmergency(false)}>No</button>
                            <button className={emergency !== false && emergency !== true ? styles.EmergencyButton : emergency ? styles.EmergencyButtonHighlighted : styles.EmergencyButton} onClick={() => setEmergency(true)}>Yes</button>
                        </div>
                    </div>
                    <div className={styles.InputDiv}>
                        <button onClick={handleSubmit} className={styles.SubmitButton}>Submit</button>
                    </div>

                </div>

                <div className={modal ? styles.UnHideModal : styles.HideModal}>
                    <div className={styles.Modal}>
                        <h2 className={styles.SubmissionText}>Thank you for your submission <span className={styles.FirstName}><strong>{firstName}</strong></span>!</h2>
                        <p className={styles.SubmissionText}> We will reach out to you soon...</p>
                        <button onClick={handleModal} className={styles.ModalButton}>Continue</button>
                    </div>
                </div>

            </div >
        </div >
    )
}

export default Reviews