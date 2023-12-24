import React from 'react'
import sanFrancisco from '../../assets/sanFrancisco.png'
import { MoonIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Home() {
  return (
    <section id="home" className='lg:h-[809px]'>
        <figure className="relative w-full lg:h-full ">
            <div className='w-full h-full  lg:bg-sanFranciscoDesktop lg:bg-center bg-cover'>
              <img src={sanFrancisco} alt="San Francisco" className="w-full h-full object-cover lg:hidden " />
            </div>
            <div className='absolute w-full h-auto top-0 flex ' >
                <span className='flex justify-end w-full p-4 lg:hidden' >
                  <MoonIcon className="w-16 h-10 bg-white rounded-full p-2 text-primary" />
                </span>
                <div className='w-full flex justify-center absolute top-20  lg:hidden' >
                  <input type="text" placeholder="🔍 Sam Francisco" className="w-4/5 p-4 rounded-2xl  flex justify-center shadow-xl text-center" />
                </div>
                <div className=' absolute top-80  w-full flex justify-center lg:flex lg:justify-start lg:absolute lg:top-60 lg:px-20 lg:flex-col' >
                  <p className='hidden lg:block lg:text-6xl lg:mb-10 font-bold lg:w-[600px] lg:leading-tight'>Find more locations like this</p>
                  <button className='text-xl  text-primary font-semibold p-4 w-48 rounded-full bg-white  ease-in-out delay-150 hover:bg-primary hover:text-white hover:-translate-y-1 hover:scale-110 duration-300 lg:text-3xl lg:w-[450px]' >Explore More</button>
                </div>
            </div>
        </figure>
    </section>
  )
}


export default Home