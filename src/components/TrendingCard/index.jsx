import React, { useEffect, useState } from 'react'
import { trendingData } from '../const';

function TrendingCardMobile() {
  return (
    <div className='h-full w-full p-6 ' >
        {
          Object.keys(trendingData).map((key) => {
            const { title, description, background } = trendingData[key]
            return (
              <div key={key} className={`h-96 w-72 rounded-xl shadow-xl bg-cover bg-center ${background} m-4`} >
                <div className='h-full w-full flex flex-col justify-end p-4' >
                  <h3 className='text-white text-2xl font-bold' >{title}</h3>
                  <p className='text-white text-lg font-normal' >{description}</p>
                </div>
              </div>
            )
          })

        }
    </div>
  )
}

function TrendingCardDesktop() {
  return (
    <section className='h-full w-full p-20 text-right' >
        <div className='w-full h-[654px] bg-cover rounded-3xl bg-fixed bg-no-repeat bg-center bg-chicago mb-10'>
          <div className='h-full w-full flex flex-col items-end justify-start p-20' >
            <h3 className='text-white text-4xl font-bold mb-5 ' >Los angeles</h3>
            <div className='w-3/6' >
            <p className='text-white text-xl font-semibold' >4 rooms, 3 bathrooms and private pool</p>
            </div>
          </div>
        </div>
        <div className='w-auto flex' >
          <div className='w-5/6 h-auto bg-cover rounded-3xl bg-fixed bg-no-repeat bg-center bg-losAngeles mb-10 mr-10'>
            <div className='h-full w-full flex flex-col items-end justify-start p-20' >
              <h3 className='text-white text-4xl font-bold mb-5 ' >Los angeles</h3>
              <div className='w-3/6' >
              <p className='text-white text-xl font-semibold' >4 rooms, 3 bathrooms and private pool</p>
              </div>
            </div>
          </div>
          <div className='w-full' >
          <div className='w-full h-[405px] bg-cover rounded-3xl bg-fixed bg-no-repeat bg-center bg-miami mb-10'>
              <div className='h-full w-full flex flex-col items-end justify-start p-20' >
                <h3 className='text-white text-4xl font-bold mb-5 ' >Miami</h3>
                <div className='w-3/6' >
                <p className='text-white text-xl font-semibold' >1 room and 1 bathroom and amazing sea view</p>
              </div>
            </div>
            </div>
            <div className='w-full h-[405px] bg-cover rounded-3xl bg-fixed bg-no-repeat bg-center bg-bali mb-10'>
              <div className='h-full w-full flex flex-col items-end justify-start p-20' >
              <h3 className='text-white text-4xl font-bold mb-5 ' >Bali</h3>
              <div className='w-3/6' >
              <p className='text-white text-xl font-semibold' >'2 rooms, 2 bathroom, kitchen and private pool'</p>
              </div>
            </div>
            </div>
          </div>
        </div>
    </section>
  )

}


function TrendingCard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Agrega el listener
    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  return (
    <>
      {
        isMobile ? <TrendingCardMobile /> : <TrendingCardDesktop />
      }

    </>
  )
}

export default TrendingCard