import React from 'react'
import Html from '../assets/HTML.png'
import Css from '../assets/csslogo.png'
import JavaScript from '../assets/JavaScript.png'
import ReactLogo from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Asp from '../assets/asp.png'
import Sql from '../assets/sql.png'
import CSharp from '../assets/CSharp.png'
import Java from '../assets/Java.png'
import LoaderPage from './LoaderPage'
import Footer from './Footer'

function Experience() {

    const exp = [ //Array with all my current experience
        {
            id: 1,
            src: Html,
            title: "HTML",
            style: "shadow-orange-500",
            alt: "Logo for HTML",
            time: "2 Years of Experience"
        },
        {
            id: 2,
            src: Css,
            title: "CSS",
            style: "shadow-blue-500",
            alt: "Logo for CSS",
            time: "2 Years of Experience"
        },
        {
            id: 3,
            src: JavaScript,
            title: "JavaScript",
            style: "shadow-yellow-500",
            alt: "Logo for JavaScript",
            time: "2 Years of Experience"
        },
        {
            id: 4,
            src: ReactLogo,
            title: "React",
            style: "shadow-sky-400",
            alt: "Logo for React",
            time: "6 Months of Experience"
        },
        {
            id: 5,
            src: Tailwind,
            title: "Tailwind",
            style: "shadow-white",
            alt: "Logo for Tailwind",
            time: "5 Months of Experience"
        },
        {
            id: 6,
            src: Asp,
            title: "ASP.NET",
            style: "shadow-sky-500",
            alt: "Logo for ASP",
            time: "1 Year of Experience"
        },
        {
            id: 7,
            src: Sql,
            title: "SQL",
            style: "shadow-sky-400",
            alt: "Logo for SQL",
            time: "1 Year of Experience"
        },
        {
            id: 8,
            src: CSharp,
            title: "C#",
            style: "shadow-purple-800",
            alt: "Logo for C#",
            time: "2 Years of Experience"
        },
        {
            id: 9,
            src: Java,
            title: "Java",
            style: "shadow-orange-700",
            alt: "Logo for C#",
            time: "1 Year of Experience"
        },
    ]

  return (
    <div>
        <LoaderPage />
        <div name='experience' className='bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 w-full h-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='pb-4 mt-20 md:mt-32'>
                    <p className='text-5xl font-bold inline border-b-4 border-yellow-400 text-yellow-400 '>Experience.</p>
                </div>

                <p className='py-5 text-xl'>These are the technologies I have experience with</p>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-10 px-12 sm:px-0 ' >
                    {
                        exp.map(({id, src, title, style, alt, time}) => ( //This is where the array is fed
                            <div key={id} className={`shadow-md md:hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={alt} className='w-20 mx-auto' loading='eager'/>
                                <p className='mt-4'>{title}</p>
                                <p>{time}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Experience