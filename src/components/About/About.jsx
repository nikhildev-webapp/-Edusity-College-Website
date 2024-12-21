import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className='about-img'/>
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
            </div>


            <div className="about-right">
                <h3>ABOUT UNIVERSITIES</h3>
                <h2>Nuturing Tomorrow's Leaders Today</h2>
                <p>Embark on a transformative educational journey with our university's comperhensive education program. Our cutting-edge curriulum is designed to empowere students with the knowledge,skills and experience needed to excel in the dynamic field of education</p>
                <p>With a focus on innovation,hands-on learning and personalized meanigful impact in classroom,school and communication</p>
                <p>Whether your aspire to become a teacher,administrator,counselor,or educational leader,our diverse range of programs offer the perfect pathways to achieve your goals and unlock your full potentials in shaping the future of education</p>
            </div>
      </div>
  )
}


export default About
