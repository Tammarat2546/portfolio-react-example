import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://i.im.ge/2024/03/09/8G2WwT.what-is-teamwork.webp" alt="" />
            <p>Teamwork</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.im.ge/2024/03/09/8G29Bh.nano.webp" alt="" />
            <p>hunger</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.im.ge/2024/03/09/8G2Bw6.agile-in-the-digital.png" alt="" />
            <p>Adapt to the team style</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.im.ge/2024/03/09/8GSl7h.360-F-148218891-EX3tMBqrs1VjKAE4NrvubRILL4WmiXzn.jpg" alt="" />
            <p>punctual</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.im.ge/2024/03/09/8GS1w4.arts-education-STEAM.jpg" alt="" />
            <p>creativity</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.im.ge/2024/03/09/8GS2KC.problem-solving-1.webp" alt="" />
            <p>Problem solving</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio