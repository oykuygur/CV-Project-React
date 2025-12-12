import React from 'react'
import styles from "./Page.module.css"
import Name from '../Base/Components/Name/Name'
import LeftHeaderContainer from '../Base/Components/LeftHeaderContainer/LeftHeaderContainer'
import RightHeaderContainer from '../Base/Components/RightHeaderContainer/RightHeaderContainer'
import { IoIosPhonePortrait } from "react-icons/io";
import { GoLightBulb } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { PiToolboxLight } from "react-icons/pi";
import { PiGraduationCap } from "react-icons/pi";
import { LiaClipboardListSolid } from "react-icons/lia";
import ContactInfo from '../Base/Components/LeftHeaderContainer/ContactInfo/ContactInfo'
import SkillsInterestsInfo from '../Base/Components/LeftHeaderContainer/SkillsInterestsInfo/SkillsInterests'
import Profile from '../Base/Components/RightHeaderContainer/Profile/Profile'
import ExperienceInfo from '../Base/Components/RightHeaderContainer/ExperienceInfo/ExperienceInfo'
import PortfolioInfo from '../Base/Components/RightHeaderContainer/PortfolioInfo/PortfolioInfo'
export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.leftcontainer}>

          <div className={styles.imagecontainer}>
            <img src='images/ninalane.png' className={styles.profilepicture} alt='Foto açılmadı'/>
          </div>
          <Name/>
          <LeftHeaderContainer icon={<IoIosPhonePortrait/>} title='Contact'> 
          <ContactInfo innertitle1='Email' content2='nina.lane@email.com'/>
          <ContactInfo innertitle1='Phone' content2='+1 234 567-8900'/>
          <ContactInfo innertitle1='Website' content2='ninalane.com'/>
          </LeftHeaderContainer>

          <LeftHeaderContainer icon={ <GoLightBulb/> } title='Skills' >
          <SkillsInterestsInfo value1='Photoshop' value2='Illustrator' value3='Web Design'/>
          </LeftHeaderContainer>

          <LeftHeaderContainer icon={<FaRegHeart/> }  title='Interests'>
          <SkillsInterestsInfo value1='Minimalist Art'value2='Urban Photography' value3='Art Installations'/>
          </LeftHeaderContainer>

        </div>
        <div className={styles.rightcontainer}>
          <RightHeaderContainer icon2={<ImProfile/> } title2='Profile'>
          <Profile profilecontent="Creative graphic designer with 5+ years' experience in impactful print and digital visuals. Skilled in brand identity, social media, and packaging design, with Adobe Creative Suite and Figma expertise. Focused on delivering fresh, aesthetic solutions."/>
          </RightHeaderContainer>

          <RightHeaderContainer icon2={<PiToolboxLight />} title2='Experience'> 
          <ExperienceInfo experienceinnertitle='Senior Graphic Designer' experiencecompany='Brightline Agency | New York, NY' time='June 2020 - Present' experiencecontent='Boosted engagement by 30% through brand compaigns and created identity packages for social media and print.'/>
          <ExperienceInfo experienceinnertitle='Graphic Designer' experiencecompany='Blue Horizon Media | New York, NY ' time='March 2017 - May 2020' experiencecontent='Boosted retention by 25% and developed ecofriendly packaging while mentoring designers.' />
          </RightHeaderContainer>

          <RightHeaderContainer icon2={<PiGraduationCap/>} title2='Education'>
          <ExperienceInfo  experienceinnertitle='Bachelor of Fine Arts in Graphic Design' experiencecompany='Parsons School of Design | New York, NY ' time=' Graduated: 2017'/>
          </RightHeaderContainer>

          <RightHeaderContainer icon2={<LiaClipboardListSolid/>} title2='Portfolio'>
          <PortfolioInfo work='Social Media Campaign' detail=' for Eco Wave Brand:' portfoliocontent='Transformed their social media presence with cohesive visual and engaging graphics.'/>
          <PortfolioInfo work='Event Branding' detail='for the annual NYC Art Expo: ' portfoliocontent='Developed event branding from logo to banners, enhancing attendee experience.'/>
          </RightHeaderContainer>
          
        </div>
      </div>
    </div>
  )
}
