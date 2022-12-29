import React from 'react'
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAppDispatch } from '../../../redux/store/store';
import {registerUser}  from '../../../redux/slices/auth/authSlice';
const schema = yup.object().shape({
    username: yup.string().min(8).max(32).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required('First name is required'),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
})

export default function SignupForm() {
    const [formStep,setFormStep] = React.useState(0)
    const dispatch = useAppDispatch()
    const { register, handleSubmit,formState: { errors },reset,getValues  } = useForm({
        resolver: yupResolver(schema),
    });
    const submitForm = (data) => {
        dispatch(registerUser(data.username,data.email,data.password,data.confirmPassword))

        console.log(data.username,data.email,data.password,data.confirmPassword);
        console.log("form submitted");
    }
  return (
    <div>
        <section class="py-8 bg-white dark:bg-gray-900 lg:py-0">
  <div class="lg:flex">
      <div class="hidden w-full max-w-md p-12 lg:h-screen lg:block bg-primary-600">
          <div class="flex items-center mb-8 space-x-4">
              <a href="#" class="flex items-center text-2xl font-semibold text-white">
                  <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" />
                  Flowbite    
              </a>
              <a href="#" class="inline-flex items-center text-sm font-medium text-primary-100 hover:text-white">
                  <svg class="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  Go back
              </a>
          </div>
          <div class="block p-8 text-white rounded-lg bg-primary-500">
              <h2 class="mb-1 text-2xl font-semibold">Your selected plan</h2>
              <p class="mb-4 font-light text-primary-100 sm:text-lg">30-day free trial</p>
              <ul role="list" class="space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span class="font-semibold">1 developer</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span class="font-semibold">6 months</span></span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span class="font-semibold">6 months</span></span>
                  </li>
              </ul>
          </div>
      </div> 
      <div class="flex items-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
          <div class="w-full">
              <div class="flex items-center justify-center mb-8 space-x-4 lg:hidden">
                  <a href="#" class="flex items-center text-2xl font-semibold">
                      <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" />
                      <span class="text-gray-900 dark:text-white">Flowbite</span>
                  </a>
              </div>
              <ol class="flex items-center mb-6 text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:mb-12 sm:text-base">
                {formStep === 0 ? (
                    <>
                     <li class="flex items-center after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                      <div class="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                          <div class="mr-2 sm:mb-2 sm:mx-auto">1</div>
                          Personal <span class="hidden sm:inline-flex">Info</span>   
                      </div>
                  </li>
                    </>
                ):(
                    <>
                      <li class="flex items-center text-primary-600 dark:text-primary-500 sm:after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <div class="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                            <svg class="w-4 h-4 mr-2 sm:mb-2 sm:w-6 sm:h-6 sm:mx-auto shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            Personal <span class="hidden sm:inline-flex">Info</span>
                        </div>
                    </li>
                    </>
                )}
               {formStep === 1 || formStep === 0 ? (
                    <>
                        <li class="flex items-center after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                      <div class="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                          <div class="mr-2 sm:mb-2 sm:mx-auto">2</div>
                          Account <span class="hidden sm:inline-flex">Info</span>
                      </div>
                  </li>
                    </>
                    ):(
                        <>
                           <li class="flex items-center text-primary-600 dark:text-primary-500 after:content-[''] after:w-12 after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                        <div class="flex items-center sm:block after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                            <svg class="w-4 h-4 mr-2 sm:mb-2 sm:w-6 sm:h-6 sm:mx-auto shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            Account <span class="hidden sm:inline-flex">Info</span>
                        </div>
                    </li>
                        </>
                    )}


                    { formStep === 1 || formStep === 0 ? (
                        <>
                    <li class="flex items-center sm:block">
                                        <div class="mr-2 sm:mb-2 sm:mx-auto">3</div>
                                        Confirmation
                    </li>
                        </>
                    ):(
                        <>
                     <li class="flex items-center text-primary-600 dark:text-primary-500">
                        <div class="flex items-center sm:block">
                            <svg class="w-4 h-4 mr-2 sm:mb-2 sm:w-6 sm:h-6 sm:mx-auto shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            Confirmation
                        </div>
                    </li>
                    
                    </>
                    )}
              

              
                
              </ol>  
              <form onSubmit={handleSubmit(submitForm)}>
              {formStep === 0 &&  (
                <>
                <h1 class="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:mb-6 dark:text-white">Tell us about yourself</h1>
              <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">What is your profession?</p>
              <div >
              <div class="mb-6 space-y-4 sm:space-y-6 grid">
              <p className='text-red-500'>{errors.firstName?.message}</p>

             <input className="p-4 rounded-lg"  {...register('username')} placeholder="name" />
                <input {...register("email")} className="p-4 rounded-lg border-sky-600 border-2" placeholder='email'/>
             <button  onClick={() => setFormStep(formStep + 1)} class="w-full px-5 py-2.5 sm:py-3.5 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next: Account Info</button>

              </div>

              </div>
              <p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>.
              </p>
                </>
              )}
              
                {formStep === 1 &&  (
                <>
            <h1 class="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:mb-6 dark:text-white">Location</h1>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">What is your profession?</p>
                    <div>
                    <div class="mb-6 space-y-4 sm:space-y-6 grid">
                   

                    <input {...register("password")} className="p-4 rounded-lg" placeholder='pass'/>
                    <input {...register("confirmPassword")} className="p-4 rounded-lg" placeholder='confirm'/>

                    <button onClick={() => setFormStep(formStep - 1)}>Prev</button>
                    <button  type='submit' class="w-full px-5 py-2.5 sm:py-3.5 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next: Account Info</button>

                    </div>

                    </div>
                    <p class="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>.
                    </p>
                </>
                )}
            
                </form> 



            {formStep === 2 &&  (
                <>
                <svg class="w-12 h-12 mb-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <h1 class="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 leding-tight dark:text-white">Verified</h1>
                <p class="mb-4 font-light text-gray-500 dark:text-gray-400 md:mb-6">You have successfully verified your account.</p>
                <a href="#" class="block w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in to your Account</a>

                </>
                )}
        
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
