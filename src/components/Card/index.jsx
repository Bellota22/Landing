import React from 'react'

function Card() {
  const dataCards = {
    '1': {
      title: 'Norway',
      description: 'The Kingdom of Norway',
      background: 'bg-norway'
    },
    '2': {
      title: 'New York',
      description: 'Concrete jungle',
      background: 'bg-newYork'
    },
    '3': {
      title: 'Yosemite',
      description: 'A break from the world',
      background: 'bg-yosemite'
    },
    '4': {
      title: 'Chicago',
      description: 'The windy city',
      background: 'bg-chicago'
    },
    '5': {
      title: 'Seattle',
      description: 'Big city, small town',
      background: 'bg-seattle'
    },
  }

  return (
    <div className='flex justify-center'>
    {Object.values(dataCards).map((card, index) => {
      const isEven = index % 2 === 0;
      const textColor = isEven ? 'text-secondary' : 'text-white';
      const bgColor = isEven ? 'bg-white' : 'bg-secondary';
      return (
        <div key={index} className='w-48 h-48 m-5 flex-none hover:-translate-y-5 transition lg:w-[370px] lg:h-[499px] shadow-xl'>
          <div className={`w-full h-3/5 ${card.background} bg-cover bg-center`}/>
          <div className={`rounded-b-lg w-full h-2/5 ${bgColor} flex flex-col items-start px-4 lg:h-2/5 lg:items-start lg:justify-start   `}>
            <p className={`text-xl text-center ${textColor} lg:text-2xl lg:m-2`}>{card.title}</p>
            <p className={`text-sm text-center ${textColor} lg:text-lg lg:m-2`}>{card.description}</p>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default Card