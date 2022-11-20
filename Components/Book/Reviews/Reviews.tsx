import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { select, selectTitle } from '../../../Redux/BookSlice'
import styles from './Reviews.module.css'

function Reviews() {
    const [value, setValue] = useState<string>('')
    const [tileId, setTileId] = useState<number>(0)
    const dispatch = useDispatch()
    const selectedTile = useSelector(selectTitle)

    return (
        <div className={styles.Reviews}>
            <div className={styles.BookCard}>
                <div className={styles.Title}>
                    <h1>
                        <strong>
                            Book Your Appointment
                        </strong>
                    </h1>
                </div>
                <div className={styles.InputDiv}>
                    Email.
                    <input className={styles.Input} placeholder='YourEmail@gmail.com' type="text" onChange={(e) => setValue(e.target.value)} value={value} />
                </div>
                <div className={styles.InputDiv}>
                    Date.
                    <input className={styles.Input} placeholder='03/01/2022' type="date" onChange={(e) => setValue(e.target.value)} value={value} />
                </div>
                <div className={styles.InputDiv}>
                    Preferred Time.
                    <input className={styles.Input} placeholder='I would prefer around 3pm' type="text" onChange={(e) => setValue(e.target.value)} value={value} />
                </div>
                <div className={styles.InputDiv}>
                    Reason.
                    <input className={styles.Input} placeholder='I am having a tooth ache...' type="text" onChange={(e) => setValue(e.target.value)} value={value} />
                </div>
                <div className={styles.InputDiv}>
                    Emergency?
                    <div className={styles.EmergencyDiv}>
                        <button className={tileId === 1 ? styles.EmergencyButton : styles.EmergencyButtonHighlighted} onClick={() => setTileId(0)}>No</button>
                        <button className={tileId === 0 ? styles.EmergencyButton : styles.EmergencyButtonHighlighted} onClick={() => setTileId(1)}>Yes</button>
                    </div>
                </div>
                <div className={styles.InputDiv}>
                    <button className={styles.SubmitButton}>Submit</button>
                </div>

            </div>
        </div >
    )
}

export default Reviews