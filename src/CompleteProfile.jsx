import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import CompanyLogo from './assets/logo/company-logo.svg'
import InsuranceLogo from './assets/logo/insurance-logo.svg'

function CompleteProfile() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [userInfo, setUserInfo] = useState();
    
    const onSubmit = (data) => {
        setUserInfo(data);
        console.log(data);
    };



  return (
    <div className="flex flex-col items-center">
        
        <pre className="">{ JSON.stringify(userInfo, undefined, 2) }</pre>
        
        <div className="p-8 border-zinc-300 bg-white mx-auto items-center rounded-2xl border-2">
            <div className="flex flex-col items-center mb-6">
                <img className="w-[170px] h-10" src={InsuranceLogo} alt="Logo SVG" />
            </div>
            <div className="flex flex-col items-start mb-8">
                <h2 className="text-slate-800 text-[25px] font-semibold leading-10 ">Complete your profile</h2>
            </div>

            <form onSubmit={ handleSubmit (onSubmit) }>
                <div className="grid grid-cols-2 gap-3">
                   <div>
                        <input 
                            type="text"
                            name="FirstName"
                            placeholder="First Name"
                            {...register("FirstName", {
                            required: "First Name is required",
                            })} 
                        />
                        <p className="flex text-red-500">{errors.FirstName?.message}</p>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="LastName"
                            placeholder="Last Name"
                            {...register("LastName", {
                            required: "Last Name is required",
                            })} 
                        />
                        <p className="flex text-red-500">{errors.LastName?.message}</p>
                    </div>                   
                </div>
                
                
                <div className="mt-5">
                    <input 
                        type="text"
                        name="Company Name"
                        placeholder="Company Name"
                        {...register("CompanyName", {
                            required: "Company Name is required",
                        })} 
                    />
                    <p className="flex text-red-500">{errors.CompanyName?.message}</p>
                </div>
                <div className="mt-5">
                    <select 
                        name="Industry" 
                        placeholder="Industry"
                        {...register("Industry", {
                            required: "Select your prefered Industry",
                        })} 
                    >
                        <option value="">Industry</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Technology">Technology</option>
                        <option value="Transportation">Transportation</option>

                        
                    </select>
                    <p className="flex text-red-500">{errors.Industry?.message}</p>
                </div>
                
                <div className="mt-5">
                    <input 
                        type="password"
                        name="Password"
                        placeholder="Create Password"
                        {...register("Password", {
                            required: "Password is required",
                        })} 
                    />
                    <p className="flex text-red-500">{errors.Password?.message}</p>
                </div>
                
                <div className="text-left mt-3">
                    <span className='font font-normal'>By tapping on “Create Account”, you agree to our <a href="/" className="text-blue-500 hover:text-blue-500">Terms and <br /> Conditions</a> and <a href="/" className="text-blue-500 hover:text-blue-500">Privacy Policy</a> </span>
                </div>

                <div className="flex flex-col items-end mt-4">
                    <button className="py-2.5 px-5 bg-sky-500 rounded justify-center items-center text-white text-[18px] font-medium leading-normal hover:bg-sky-600">Create Account</button>
                </div>
                
            </form>
        </div>
        <div className="flex flex-container mx-auto gap-8 mt-5" >
            <span className="text-sm"><a href="/">Contact</a></span>
            <span className="text-sm"><a href="/">Privacy</a></span>
            <span className="text-sm"><a href="/">Terms & Conditions</a></span>
        </div>

        <div className="flex flex-col items-center mt-10" >
            <span className="mb-2 text-sm">PoweredBy</span>
            <img src={CompanyLogo} alt="Company SVG" />
        </div>        
        

    </div>
  )
}

export default CompleteProfile