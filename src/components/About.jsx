import React from 'react'
import Footer from './Footer'

function About() { //Nothing to really comment about here it's all standed HTML and CSS
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className='text-5xl font-bold inline border-b-4 border-yellow-400 text-yellow-400'>About Me.</p>
            </div>

            <p className='text-xl mt-5'>
                Hello There! I'm William Thompson, I'm an immigrant who moved to New Zealand from England when I was 10. I'm currently studying a Bachelors Degree in Information Technology. I started studying in 2022, I've been studying for 2 years and 
                I'm currently in my final year. I enjoy working on databases and web development either Front End or Back End.
            </p>

            <br/>

            <p className='text-xl mt-5'>
                When I'm not studying or at my computer, I'm usually binge watching a show, working out at the gym, hanging out with my friends, or trying to 100% whatever video game I'm playing.
            </p>
        </div>
        <Footer />
    </div>
  )
}

export default About