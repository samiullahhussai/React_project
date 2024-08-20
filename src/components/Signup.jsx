import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login'
import { useForm } from "react-hook-form"
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <div>
    <div id="" className="flex justify-center items-center h-screen ">
        <div className="modal-box dark:text ">
            <form method="dialog"onSubmit={handleSubmit(onSubmit)}>
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><Link to="/" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link> </button>
            
            <h2 className="font-bold text-3xl mb-4">Signup</h2>

            <label htmlFor="name" className="">Name</label><br></br>
            <input type="text" name='name' id='name'
            {...register("text", { required: true })}
                className='w-[300px] px-3 py-1 rounded-lg my-3'
                placeholder='Enter your Name' /> <br></br>
                 {errors.text && <span className='text-sm text-red-500'>This field is required</span>}
                 <br></br>

            <label htmlFor="mail" className="">Email</label><br></br>
            <input type="email" name='mail' id='mail'
            {...register("email", { required: true })}
                className='w-[300px] px-3 py-1 rounded-lg my-3'
                placeholder='Enter your E-mail address' /><br></br>
 {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
 <br></br>
            <label htmlFor="password" className="">Password</label><br></br>
            <input type="password" name='password' id='password'
            {...register("password", { required: true })}
                className='w-[300px] px-3 py-1 rounded-lg my-3'
                placeholder='Enter your Password' /> <br></br>
                 {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                 <br></br>
                <div className='flex justify-between'>
           <button className='px-3 py-1 bg-pink-500 rounded-lg'>Signup</button>
           <p>Have Account? <span className='text-blue-500 underline'> <button
           onClick={()=>{document.getElementById('my_modal_3').showModal()}}
           
           >Login</button></span></p>
           <Login/>
           </div>
           </form>
        </div>
    </div>
</div>
  )
}

export default Signup