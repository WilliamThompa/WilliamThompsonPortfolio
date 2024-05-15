import React, { useRef } from 'react'
import Footer from './Footer'

function Contact(){

  return (
    <div name="contact" className='w-full  bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto w-full h-full'>
            <div className='pb-4 mt-20'>
                <p className='text-5xl font-bold inline border-b-4 border-yellow-400 text-yellow-400'>Contact.</p>
            </div>

            <p className='py-5 text-xl'>Submit a message below to message me</p>

            <div className='flex justify-center items-center'>
                <form name="myform" action='https://getform.io/f/ebpdxrxb' method='POST' className='flex flex-col w-full md:w-1/2'> {/* Form that handles all contact requests */}
                    <input type='text' name='name' placeholder='Who Are You?' className='p-2 bg-transparent border-2 border-yellow-400 rounded-md text-white focus:outline-none' required/> {/* Name input field set to required */}
                    <input type='text' name='email' placeholder='What is your Email?' className='my-4 p-2 bg-transparent border-2 border-yellow-400 rounded-md text-white focus:outline-none' required/> {/* Email input field set to required */}
                    <textarea name='message' rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 border-yellow-400 rounded-md focus:outline-none' required/> {/* Message input field set to required */}
                    <button className='text-slate-900 bg-yellow-400 px-6 py-3 mt-8 md:mb-44 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button> 
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact