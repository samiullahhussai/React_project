import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from "react-router-dom";

function Cource() {
// console.log(list)
  return (
    <div className='mx-4 mt-10 '>
      <div className='text-center  '>
        <p className='text-2xl'>We are delighted to see you <span className='text-pink-500'>here</span></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quae nisi repudiandae eligendi tempora fuga magnam deleniti explicabo asperiores distinctio incidunt dignissimos ullam reprehenderit nihil doloremque, debitis error rem tempore!</p>
      </div>
      <div className='text-center my-4 '>
      <button className='px-2 py-1 bg-pink-500 rounded-lg'><Link to="/">Back</Link> </button>
      </div>
      <div>
        <div className='grid md:grid-cols-3 grid-cols-1 space-x-4 mx-4 place-items-center'>
          {list.map(item=><Cards  key={item.id} item={item}/>)}
          </div>
      </div>
    </div>
  )
}

export default Cource