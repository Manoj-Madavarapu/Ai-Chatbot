import React from "react";
let Features=()=>{
    return(
        <>
      <section className="features" id="features">
        <h2 className="text-[26px] font-bold ">Key Features</h2>
        <h2 className="text-[20px] font-bold -mt-2 mb-5">AI that simplifies every customer interaction.</h2>
        <div className="grid">
          <div className="card">
            <i className="fa-solid fa-comment"></i>
            <h3>Conversational AI</h3>
            <p>Respond intelligently with GPT-powered natural language understanding</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-brain"></i>
            <h3>Intelligent Lead Capture</h3>
            <p>Sync chat data with your CRM tools for better follow ups.</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-comment-nodes"></i>
            <h3>CRM Integration</h3>
            <p>Tailor conversations for a more engaging experience.</p>
          </div>
        </div>
      </section>
        </>
    )
}
export default Features;