import React from 'react'

const ChooseUs = () => {
  return (
    <div>
      <section className="why " id="why-choose-us">
        <h2 className='text-[26px] font-bold'>Why Choose Us</h2>
        <p className='text-[20px] font-bold  mb-5'>Seamless Solutions For Your Growing Business</p>
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
      
      {/* Pricing */}
      <section className="pricing" id="pricing">
        <h2 className="text-[26px] font-bold">Pricing Plans</h2>
        <p className="text-[20px] font-bold mb-5">Find The Perfect Plan For You</p>
        <div className="gri">
          <div className="card highlight">
            <h3>Basic</h3>
            <p className="price">$49 / month</p>
            <ul>
              <li>Up to 1,000 interactions</li>
              <li>Basic analytics</li>
              <li>Email support</li>
            </ul>
            <button className="btn secondary">Get Started</button>
          </div>
          <div className="card highlight">
            <h3>Pro</h3>
            <p className="price">$99 / month</p>
            <ul>
              <li>Up to 5,000 interactions</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
              <li>Custom branding</li>
            </ul>
            <button className="btn primary">Get Started</button>
          </div>
          <div className="card highlight">
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <ul>
              <li>Unlimited interactions</li>
              <li>Dedicated account manager</li>
              <li>Custom integrations</li>
              <li>24/7 support</li>
            </ul>
            <button className="btn primary">Get Started</button>
          </div>
        </div>
      </section>
      
       {/* Testimonials */}
      <section className="testimonials" id="testimonials">
        <h2 className="text-[26px] font-bold">Testimonials</h2>
        <p className="text-[20px] mb-4">Loved By Businesses Worldwide</p>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="reviews ">
            <h2>Forterra Developers (Real Estate)</h2>
            <p>
"The AI chatbot has streamlined our client interactions, saving time and improving lead capture."
            </p>
            <h4>— Ramakrishna</h4>
          </div>
          <div className="reviews">
            <h2>UpkeeProperty (Property Management)</h2>
            <p>"The chatbot handles tenant inquiries quickly, improving response time and client satisfaction."</p>
            <h4>— Neeraj Tripathi</h4>
          </div>
           <div className="reviews">
            <h2>Yardful (Lawn Services)</h2>
            <p>"Our AI chatbot provides fast responses to customer inquiries, enhancing efficiency and professionalism."</p>
            <h4>— Venkat</h4>
          </div>
          <div className="reviews">
           <h2>Allinsure (Insurance Company)</h2>
           <p>"The chatbot has transformed how we manage client queries, offering instant responses and better service."</p>
           <h4>— Nina</h4>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ChooseUs




