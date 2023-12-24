import React from 'react'

function Footer() {
  const aboutUsList = [
    'Investors',
    'Jobs',
    'Privacy policy',
    'Terms and Conditions',
    'Follow Us'
  ]
  return (
    <div className='w-full h-full px-6 border text-[#CCCCCC] '>
        <p className='font-semibold mt-2 mb-4 lg:text-4xl' >About Us</p>
        {
            aboutUsList.map((item, index) => {
                return (
                    <p key={index} className='mb-2 lg:text-2xl'>{item}</p>
                )
            })  
        }
    </div>
  )
}

export default Footer