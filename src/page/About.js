import React from 'react'
import pic from '../assets/profesh_pic/Profesh_pic.jpeg'

const About = () => {
  return (
    <>
    <div className='d-flex align-items-center'>
    <img src={pic} alt='pic of me'/>
    <p>Hey there! My name is Shanna, and I am a full-stack web developer based in Tucson, AZ. 
      I really enjoy challenging myself to learn new technologies so that I can further my coding knowledge
      and expand my skillset. While I have experience working with both back-end and front-end technologies, 
      my passion lies in translating the vision I have in my mind onto the screen. Playing around in CSS files
      is one of my new favorite hobbies. Check out my portfolio and send me a message through my contact page if
      you have any questions!
    </p>
    </div>
    </>
  )
}

export default About