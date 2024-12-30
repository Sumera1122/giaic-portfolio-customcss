"use client"
import React from "react"
import styles from "../about/about.module.css"

export default function About() {
  return (
    <div className={styles.container1}>
      <h3> ABOUT.</h3>
      <div className={styles.background}></div>
    <div className={styles.paragraph}>
      Hello! I am Sumera. 
      A dedicated front-end developer with a passion for creating visually appealing and user-friendly web experiences. I started my journey by mastering the fundamentals of <span>HTML, CSS, and JavaScript</span> through Udemy, which gave me a strong foundation in front-end development. Building on that, I expanded my skill set by learning <span>TypeScript</span> at the Governor House, which sharpened my approach to building scalable, type-safe applications.

       Currently, I am deepening my expertise with <span>React.js, Next.js, and Tailwind CSS</span> to enhance my ability to develop dynamic, responsive web applications. I am also exploring the future of the web through Web 3.0 at the Governor House, where I am gaining insights into decentralized technologies and their potential for transforming digital interactions.

       With every project, I strive for clean, efficient code and design solutions that prioritize the user experience. I am excited about the potential to innovate and grow in this ever-evolving field and look forward to connecting with other developers and learning from each new challenge.
    </div>

        <div className={styles.button}>
        <button><a href="\my pdf cv.pdf">check-resume</a></button>
        
      </div>
    </div>
  )
}
