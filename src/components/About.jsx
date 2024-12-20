import React from 'react'
import Footer from './Footer'

function About() { //Nothing to really comment about here it's all standed HTML and CSS
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-4 mt-20 md:mt-32'>
                <p className='text-5xl font-bold inline border-b-4 border-yellow-400 text-yellow-400 '>About Me.</p>
            </div>

            <p className='text-xl mt-5'>
            Hi, I’m William Thompson, a recent graduate with a Bachelor of Information Technology from the Southern Institute of Technology. I’m passionate about leveraging technology to solve real-world problems and creating innovative, user-focused software solutions.
            </p>

            <br/>

            <p className='text-xl mt-5'>
            Throughout my studies and experiences, I have developed strong skills in web and software development, specializing in technologies like React, ASP.NET, C#, SQL, and JavaScript. Alongside my development expertise, I have practical experience in hardware troubleshooting and help desk support, ensuring smooth and efficient resolution of technical issues for users. These skills have given me a well-rounded understanding of both the software and hardware aspects of IT systems.            
            </p>

            <br/>

            <p className='text-xl mt-5'>
            I thrive in collaborative environments where I can contribute to positive team dynamics and continuous improvement. Whether it’s assisting end-users with technical challenges, volunteering to improve local communities, or tackling complex coding tasks, I approach every opportunity with enthusiasm, reliability, and a problem-solving mindset.            
            </p>

            <br/>

            <p className='text-xl mt-5'>
            I’m currently seeking exciting opportunities where I can contribute my skills in software development, hardware support, and user assistance while learning from industry professionals in a supportive and dynamic environment. Feel free to explore my portfolio, and let’s connect to discuss how I can bring value to your team!            </p>
        </div>
        <Footer />
    </div>
  )
}

export default About