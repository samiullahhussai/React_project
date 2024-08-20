import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div>
            <dialog id="my_modal_3" className="modal dark:text-black">
                <div className="modal-box ">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>                            
                            <Link to="/"> ✕</Link></button>
                            <h2 className="font-bold text-3xl mb-4">Login</h2>
                    <label htmlFor="mail" className="">Email</label><br></br>
                    <input type="email" name='mail' id='mail'
                    {...register("email", { required: true })}
                    
                        className='w-[300px] px-3 py-1 rounded-lg my-3'
                        placeholder='Enter your E-mail address' /><br></br>
                        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        <br></br>

                    <label htmlFor="password" className="">Password</label><br></br>
                    <input type="password" name='password' id='password'
                        className='w-[300px] px-3 py-1 rounded-lg my-3'
                        placeholder='Enter your Password'
                        {...register("password", { required: true })}
                        /> <br></br>
                         {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                         <br></br>
                        <div className='flex justify-between'>
                   <button className='px-3 py-1 bg-pink-500 rounded-lg'>Login</button>
                   <p>Not Registered? <span className='text-blue-500 underline'><Link to="/signup" >Sign-Up</Link></span></p>
                   </div>
                   </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login