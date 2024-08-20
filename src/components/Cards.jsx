import React from 'react'

function Cards({ item }) {
  // console.log()
  return (
    <>
    <div className='mt space'>
      <div className="card w-[300px] dark:border dark:border-white shadow-xl my-10 hover:scale-105 border-x-base-100 transition-all duration-1000">
        <figure>
          <img
        src={item.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline px-2 py-1 cursor-pointer hover:bg-pink-500 hover:text-white duration-300">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards