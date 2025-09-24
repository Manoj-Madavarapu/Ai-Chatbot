import React from 'react'

const ChooseUs = () => {
  return (
    <div>
      <section className="why " id="why-choose-us">
        <h2 className='text-[26px] font-bold'>Why Choose Us</h2>
        <p className='text-[20px] font-bold -mt-2 mb-5'>Seamless Solutions For Your Growing Business</p>
        <ul className='flex gap-10 justify-center flex-wrap'>
          <li>
            <strong>Fast and Efficient</strong><br /> Instant responses, multiple
            chats at once.
          </li>
          <li>
            <strong>Cost-Effective</strong><br /> Reduce support costs with
            automation.
          </li>
          <li>
            <strong>User-Friendly</strong><br /> Easy setup, no coding needed.
          </li>
          <li>
            <strong>Reliable & Secure</strong><br /> Robust security and compliance.
          </li>
        </ul>
        <button className="btn big bottom">Contact Us</button>
      </section>
    </div>
  )
}

export default ChooseUs




