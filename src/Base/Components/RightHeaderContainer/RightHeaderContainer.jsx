import React from 'react'
import styles from './RightHeaderContainer.module.css'

export default function RightHeaderContainer({icon2 , title2, children}) {
  return (
    <div className={styles.RightHeaderContainer}>
        <div className={styles.righticoncontainer}>
           <div className={styles.innerrighticoncontainer}>{icon2}</div>
        <div className={styles.RightHead}>
            <p><strong>{title2}</strong></p>
            <div className={styles.rightLineContainer}>
                <div className={styles.rightLineContaineryellow}></div>
            </div>
        </div>
        </div>
        <div className={styles.contentright}>{children}</div>
    </div>
  )
}
