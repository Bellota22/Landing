import React from 'react'
import './cardList.css'

function CardList({children}) {
  return (
    <>
    <p id="recomendation" className='text-3xl font-semibold m-5 text-primary lg:text-5xl'>Recomendados</p>
    <div className=' custom-scrollbar flex overflow-x-auto scroll-off'>
      {children}
    </div>
    </>
    )
}

export default CardList