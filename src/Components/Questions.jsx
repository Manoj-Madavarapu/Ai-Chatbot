import React, { useState } from "react";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the AI Chatbot work?",
      answer:"Once you provide your business information, we train the AI with relevant data, and it’s deployed on your website to handle customer queries and assist with lead generation.",
    },
    {
      question: "Can I customize the AI Chatbot for my business?",
      answer: "Yes! The AI Chatbot is fully customizable to reflect your brand’s voice, tone, and specific business needs.",
    },
    {
      question: "Is the AI Chatbot available 24/7?",
      answer: "Yes, the AI Chatbot is available round-the-clock, ensuring customer queries are answered anytime, even outside regular business hours.",
    },
    {
        question:"5. Will the AI Chatbot replace human agents?",
        answer:"While the AI Chatbot can handle common queries and tasks, human agents are still essential for complex issues. The chatbot helps by filtering and handling simple tasks, allowing agents to focus on more intricate matters."
    },
    {
        question:" How secure is the data handled by the AI Chatbot?",
        answer:"We prioritize security, and all customer interactions are handled using industry-standard encryption to protect sensitive data."
    },
    {
        question:"How do I integrate the AI Chatbot with my website?",
        answer:"The AI Chatbot is easy to integrate with your website. Once it's set up, our team will do it for you."
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex===index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  };

  return (
    <section className="faq py-16 max-w-3xl mx-auto px-6" id="faq">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{faq.question}</h3>
              <i className={`fa-solid ${openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} arrow`}></i>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;

