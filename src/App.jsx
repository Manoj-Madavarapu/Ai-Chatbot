import React from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Features from "./Components/Features";
import Working from "./Components/Working";
import ChooseUs from "./Components/ChooseUs";
import Questions from "./Components/Questions";

let App=()=>{
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <Features></Features>
      <Working></Working>
      <ChooseUs></ChooseUs>

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
        <p className="text-[20px]">Loved By Businesses Worldwide</p>
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

      <Questions></Questions>

      <section>
        <h2 className="text-[20px] font-bold">Ready to Improve Your Business with an AI Chatbot?</h2>
        <button className="btn primary big">Watch Video</button>
         <button className="btn primary big">Try Now</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>©2025 AI Chatbot. All rights reserved by Manoj Naidu Madavarapu <br />manojmadavarapu7@gmail.com, 9392710904</p>
      </footer>
    </div>
  );
}

export default App;
