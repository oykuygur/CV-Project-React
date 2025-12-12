import React from 'react'
import styles from './ProfileInfo.module.css'

export default function ({profilecontent}) {
  return (
    <div className={styles.ProfileInfo}> 
        <p>{profilecontent}</p>
    </div>
  )
}
