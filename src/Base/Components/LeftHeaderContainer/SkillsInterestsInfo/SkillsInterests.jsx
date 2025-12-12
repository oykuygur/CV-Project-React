import React from 'react'
import styles from './SkillsInterestsInfo.module.css'

export default function Skills({value1,value2,value3}) {
  return (
    <div className={styles.skillsInfo}>
        <p>{value1}</p>
        <p>{value2}</p>
        <p>{value3}</p>
    </div>
  )
}
