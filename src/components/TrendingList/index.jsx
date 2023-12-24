import React from 'react'

function TrendingList({ children }) {
  return (
    <>
    <p id="trending" className='text-3xl font-semibold m-5 text-primary lg:text-5xl'>Trending</p>
    <div className='flex overflow-y-auto flex-col '>
      {children}
    </div>
    </>
  )
}

export default TrendingList