import React, { useState } from 'react'
import styles from './Reviews.module.css'

function Reviews() {
    const [value, setValue] = useState<string>('')

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
                    <input
                        type="text"
                        id="roll"
                        name="roll"
                        required
                        minlength="10"
                        maxlength="20"
                    />
                </div>
                <div className={styles.InputDiv}>
                    Emergency?
                    <div className={styles.EmergencyDiv}>
                        <button className={styles.EmergencyButton}>No</button>
                        <button className={styles.EmergencyButton}>Yes</button>
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