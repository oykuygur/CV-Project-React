import React from 'react'
import styles from './PortfolioInfo.module.css'

export default function PortfolioInfo({work,detail,portfoliocontent}) {
  return (
    <div className={styles.PortfolioInfo}>
        <p><strong>{work}</strong> {detail}</p>
        <p className={styles.innerportfoliocontent}><i>{portfoliocontent}</i></p>
    </div>
  )
}
