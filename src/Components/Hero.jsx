import React from "react";
let Hero=()=>{
    return(
        <>
      <section className="hero" id="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="sm:text-[25px] text-[25px] lg:text-[40px] md:text-[30px] font-bold mt-10 lg:mt-20 md:mt-10 sm:mt-10">Customer Interactions with AI Chatbot</h1>
          <p className="text-[16px] mb-5 mt-5">A human-like AI Chatbot that acts as your customer support, answering queries 24/7.</p>
          <button className="btn primary big ">Watch Video</button>
          <button className="btn primary big">Try Now</button>
        </div>
      </section>
        </>
    )
}
export default Hero;