import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    
    const payload = {
      ...formData,
      access_key: accessKey
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Web3Forms Error:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
    
    setTimeout(() => {
      setStatus(prev => prev === 'success' || prev === 'error' ? 'idle' : prev);
    }, 5000);
  };

  return (
    <div className="w-full max-w-2xl mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 tablet:p-10 rounded-3xl shadow-sm">
        
        <div className="flex flex-col tablet:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004aad] dark:focus:ring-white transition-all text-gray-900 dark:text-white"
              placeholder="John Doe"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004aad] dark:focus:ring-white transition-all text-gray-900 dark:text-white"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            required
            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004aad] dark:focus:ring-white transition-all text-gray-900 dark:text-white"
            placeholder="How can I help you?"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004aad] dark:focus:ring-white transition-all resize-none text-gray-900 dark:text-white"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className={`px-8 py-4 mt-2 rounded-xl text-white font-bold transition-all duration-300 flex items-center justify-center gap-2
            ${status === 'success' ? 'bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:text-white' : 
              status === 'error' ? 'bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:text-white' : 
              'bg-[#004aad] hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-gray-200'}
            disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {status === 'idle' && "Send Message"}
          {status === 'submitting' && (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          )}
          {status === 'success' && "Message Sent!"}
          {status === 'error' && "Error - Try Again"}
        </button>
        
        {/* Helper text for when the user hasn't set the API key yet */}
        {(!process.env.NEXT_PUBLIC_WEB3FORMS_KEY && status === 'error') && (
          <p className="text-red-500 text-xs text-center mt-2">
            Make sure to add your NEXT_PUBLIC_WEB3FORMS_KEY in .env.local
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
