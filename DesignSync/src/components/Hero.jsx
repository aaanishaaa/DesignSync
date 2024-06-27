import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen text-white font-poppins">
      <h1 className="text-6xl font-bold mb-3 p-4 ">Our Imagination Fuels</h1>
      <h1 className="text-6xl font-bold mb-6">Your Success.</h1>
      <button className="border-violet-900 border-2 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-xl mb-10">
      Get Started
      </button>
      <div className='bg-white '>
        <div> 5k</div>
      </div>
      </div>
    </div>
  )
}

export default Hero