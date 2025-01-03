import React from 'react'

export default function EmailVerification() {
  return (
    <>
    <section className='h-screen w-full flex justify-center items-center pt-32'>
    <div class="relative box-border max-w-sm text-[20px] rounded-[10px] bg-white dark:bg-dark  p-[1.4rem_0.5rem_0.3rem_4.5rem]">
  <div class="absolute border-l border-red border-2  h-full left-[3.3rem] top-0"></div>
  <h4 className='font-bold font-oswald text-4xl underline pb-5'>Email Verification</h4>
  <p class="m-0 indent-[1rem] pb-[1.2rem]  leading-7 font-chococooky font-bold">
    We have sent you a verification link to your email. Check spam message and find <i className='text-red'>GYM</i>. Click on the verification link to verify your account. Then after try to login.
  </p>
  <div class="absolute content-[''] bottom-[10px] left-[15px] w-[40%] h-[10px] shadow-[0_5px_14px_rgba(0,0,0,0.7)] z-[-1] transition-all duration-300 ease-linear skew-x-[-5deg] rotate-[-5deg] hover:shadow-[0_2px_14px_rgba(0,0,0,0.4)]"></div>
  <div class="absolute content-[''] bottom-[10px] right-[15px] w-[40%] h-[10px] shadow-[0_5px_14px_rgba(0,0,0,0.7)] z-[-1] transition-all duration-300 ease-linear skew-x-[5deg] rotate-[5deg] hover:shadow-[0_2px_14px_rgba(0,0,0,0.4)]"></div>
</div>

    </section>
    </>
  )
}
