"use client"
import  styles from '../skills/skills.module.css';
import React from 'react'


export default function Skills
() {
  return (
    <div className={ styles.container}>
      <div className={ styles.skillwrap}>
      <h3 className={styles.heading}>Skills</h3>
    <div className={styles.competencies}>
      <h3>Core competencies</h3>
      <p><span>Front End Developement:</span>Crafting responsive and user-centered designs with clean, efficient code.</p>
      <p><span>Web Design:</span>Translating design ideas from Figma into dynamic web pages, maintaining consistency in user experience.</p>
      <p><span>Collaboration: </span>Working effectively in teams, whether through remote coordination or in-person communication</p>
      </div>
      <div className={styles.Technicalskills}>
        <h3>Technical Skills</h3>
      <div className={styles.progressbar}>
      <div className={styles.bar1}><span></span></div>
      <div className={styles.html}>Html<span>85%</span></div>
      </div>
      {/* ........................................................................... */}
      <div className={styles.progressbar1}>
      <div className={styles.bar2}><span></span></div>
      <div className={styles.css}>Css<span>65%</span></div>
      </div>

      {/* ............................................................................... */}
      <div className={styles.progressbar2}>
      <div className={styles.bar3}><span></span></div>
        <div className={styles.TypeScript}>Type-script<span>63%</span></div>
      </div>
      {/* .................................................................................. */}
      <div className={styles.progressbar3}>
      <div className={styles.bar4}><span></span></div>
        <div className={styles.nextjs}>next-js<span>on-going</span></div>
      </div>
      {/* ................................................................................... */}
      <div className={styles.progressbar4}>
      <div className={styles.bar5}><span></span></div>
        <div className={styles.javascript}>java-script<span>on-going</span></div>
      </div>
      {/* .................................................................................... */}
      <div className={styles.progressbar5}>
      <div className={styles.bar6}><span></span></div>
        <div className={styles.tailwindcss}> Tailwind-css <span> on-going </span></div>
        </div>
        {/* ................................................................................... */}
      
      <div className={styles.progressbar6}>
      <div className={styles.bar7}> <span></span> </div>
        <div className={styles.reactjs}>React-js<span>on-going</span></div>
        </div>
        {/* .................................................................................. */}

        <div className={styles.professionallife}>
          <h3>Professional Development & Training</h3>
          <p><span>Certifications and Courses</span>HTML, CSS, JavaScript, and TypeScript from Udemy; Advanced studies in React.js, Next.js, Tailwind CSS, and Web 3.0 at the Governor House</p>
          <p></p>
        </div>
      </div>
      </div>
    
    </div>
  )
}
