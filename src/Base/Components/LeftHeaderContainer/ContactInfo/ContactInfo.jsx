import React from 'react'
import styles from './ContactInfo.module.css'

export default function ContactInfo({innertitle1,content2}) {
  return (
    <div className={styles.Content}>
          <p className={styles.yellow}>{innertitle1}</p>
          <p>{content2}</p>
    </div>
  )
}
