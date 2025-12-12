import styles from './LeftHeaderContainer.module.css'
import React from 'react'

export default function LeftHeaderContainer({icon,title,children}) {
    
  return (
    <div className={styles.LeftHeaderContainer}>
        <div className={styles.iconcontainer}>
           <div className={styles.innericoncontainer}>{icon}</div>
        <div className={styles.Head}>
         <p><strong>{title}</strong></p> 

         <div className={styles.LineContainer}>
            <div className={styles.LineContaineryellow}></div>
        </div>  
        </div>

        </div>
    <div>{children}</div>
    </div>
  )
}
