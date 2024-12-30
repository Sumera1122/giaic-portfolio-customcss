"use client"
import styles from "../contact/contact.module.css"
import React from 'react'
function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2> Contact <span> Me.</span></h2>
      </div>
      {/* .................................................. */}

      <div className={styles.content}>
        <div className={styles.namecontent}>
        <label htmlFor="name">Name:</label>
        <input type="text" required  placeholder='Name here'/>
        </div>
        

        <div className={styles.phone}>
        <label htmlFor="phone">Number:</label>
        <input type="number" required placeholder='Enter Number' />
        </div>

        <div className={styles.email}>
        <label htmlFor="email">Email:</label>
        <input type="email" required  placeholder='Email Address'/>
        </div>


        <div className={styles.message}>
        <label htmlFor="message">Message:</label>
        <input type="text"  placeholder='Your Feedback'/>
        </div>
      
      <div className={styles.buttoncontact}>
      <button>Submit here</button>
      </div>
        
      </div>

      
    </div>
  )
}

export default Contact