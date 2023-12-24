import React from 'react'

function FAQs() {

    const data = {
        '1': {
            title: 'Payment Methods',
            content: 'We accept VISA, MasterCard, American Express, Paypal and Binance'
        },
        '2': {
            title: 'Cancellation Policy',
            content: 'We accept VISA, MasterCard, American Express, Paypal and Binance'
        },
        '3': {
            title: 'Long Stays ',
            content: 'We accept VISA, MasterCard, American Express, Paypal and Binance'
        },
    }

  return (
    <div id="faqs" className='w-full h-full p-6'>
        <p className='text-primary text-3xl font-semibold lg:text-5xl'>FAQS</p>
        {
            Object.keys(data).map((key) => {
                return (
                    <div key={key} className='mt-5'>
                        <p className='mb-3 text-primary text-2xl lg:text-4xl'>{data[key].title}</p>
                        <p className='lg:text-3xl'>{data[key].content}</p>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default FAQs