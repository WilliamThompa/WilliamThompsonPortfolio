import React from 'react'

function Home() {  
    return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white pb-2'>Under Construction</h2>
                <h2 className='text-lg sm:text-xl font-bold text-white pb-2 mx-auto'>Site Nearly Ready</h2>
                <progress className='' value={0.7} />
                <p className='text-white text-lg mx-auto'>Progress Bar</p>
            </div>
        </div>
    </div>
  )
}

export default Home