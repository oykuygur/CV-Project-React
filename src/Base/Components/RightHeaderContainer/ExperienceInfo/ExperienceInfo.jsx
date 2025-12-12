import React from 'react'
import styles from './ExperienceInfo.module.css'
import { MdMargin } from 'react-icons/md'

export default function ExperienceInfo({experienceinnertitle,experiencecompany,time,experiencecontent}) {
  return (
    <div className={styles.ExperienceInfo}>
        <p className={styles.innertitle}><strong>{experienceinnertitle}</strong></p>
        <p>{experiencecompany}</p>
        <p className={styles.timemargin}>{time}</p>
        <p >{experiencecontent}</p>
    </div>
  )
}
