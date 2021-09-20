import React from 'react'
import './aboutMe.css'
import person from '../../images/circle.png'

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
     <div>
      <img src={person} />
     </div>
     <div className="about__text">
       <h1>ABOUT ME</h1>
       <p> I’m Afia Raha, a freshly graduated web developer majoring in web and mobile application development from Victoria University. For me,
           programming and development are really the skill set to build anything you 
           dream up in your head, whether it's a website or mobile app. 
           That’s what attracted me while choosing my major after my 
           freshman year like how empowering it is to be able to build whatever
           you want. After discovering my passion for this sector, I couldn’t get enough. I made websites for my school's 
           project and brought my imaginations into reality while 
           learning and understanding User Interface which was an 
           opportunity for me to add value to anyone that will eventually
           use or visit the website that I create. </p>
     </div>
    </div>
  )
}

export default AboutMe
