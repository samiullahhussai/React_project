import React from 'react'

function Banner() {
  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center mt-24'>
      <div className='mx-16'>
        <h1 className='text-[32px] font-bold '>Hellow welcome here to learn something <span className='text-red-500'>new everyday </span></h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
        </p>
        {/* e mail */}
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <button className='bg-red-500 px-3 py-2 text-white rounded-lg border mb-4'>Get Started</button>
        
        
      </div>
      <div className='order-1 md:order-2'><img src='/Boooks.jpg' className='h-[300px] ' /></div>
      {/* input */}

    </div>
    
    </div>

  )
}

export default Banner