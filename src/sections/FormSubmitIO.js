"use client";

import { React, useState } from 'react'
import emailjs from '@emailjs/browser';

const FormSubmitIO = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State for showing popup

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Web Wizard',
            message: message,
            from_phoneNumber: phone,
            from_company: company,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
                setPhone('');
                setCompany('');
                setShowPopup(true); // Show popup on success
                setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    return (
        <div className='flex items-center justify-center h-screen gap-10'>
            <div className='grid'>
                <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl font-bold text-black dark:text-white">
                    Got Questions? <br />We’ve Got Answers –  <span className="bg-gradient-to-r from-cyan-400 to-indigo-600 bg-clip-text text-transparent">Connect With Us!</span> <br />
                </h2>
                <p className="text-sm text-gray-600 dark:text-neutral-400 lg:text-xl">
                    Empowering Your Career Journey with Opportunities and Expert Guidance!
                </p>
            </div>

            <form onSubmit={handleSubmit} className='grid gap-4 max-w-[340px] p-4 bg-white rounded-lg shadow-md'>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                    type="text"
                    placeholder="Your Email"
                    pattern="^[^@]+@[^@]+\.[^@]+$"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                    type="text"
                    placeholder="Your 10-digit Phone Number"
                    pattern="[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                    type="text"
                    placeholder="Your Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <textarea
                    cols="30"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button
                    type="submit"
                    className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                    Contact Us
                </button>
            </form>

            {showPopup && (
                <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-gray-100 text-black text-xl rounded-lg shadow-lg px-5 py-10'>
                    Thanks for contacting us!
                </div>
            )}
        </div>
    )
}

export default FormSubmitIO


