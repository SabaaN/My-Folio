import React from 'react'
import { useState } from "react";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section id='contact' className="py-8">
      <section className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-headingColor font-[800] text-[2.4rem] mb-4'>
            Contact Me
          </h2>
          <p className='max-w-[600px] mx-auto text-headingColor font-[500] text-[16px] leading-7'>
            Get in touch with me
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className="space-y-8">
            <div className='contact_information'>
              <span className='text-primaryColor text-3xl font-bold'>
                <i className='ri-phone-fill'></i> Phone
              </span>
              <p className='mt-2'>+923362370128</p>
            </div>
            <div className='contact_information'>
              <span className='text-primaryColor text-3xl font-bold'>
                <i className='ri-mail-fill'></i> Email
              </span>
              <p className='mt-2'>sabanvd34@gmail.com</p>
            </div>
            <div className='contact_information'>
              <span className='text-primaryColor text-3xl font-bold'>
                <i className='ri-map-pin-5-fill'></i> Address
              </span>
              <p className='mt-2'>Karachi, Pakistan</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className='w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
              <div>
                <input
                  type='text'
                  value={formDetails.firstName}
                  placeholder='First Name'
                  onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  className='w-full p-3 border border-headingColor rounded-lg bg-gray-100 bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primaryColor'
                />
              </div>
              <div>
                <input
                  type='text'
                  value={formDetails.lastName}
                  placeholder='Last Name'
                  onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  className='w-full p-3 border border-headingColor rounded-lg bg-gray-100 bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primaryColor'
                />
              </div>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
              <div>
                <input
                  type='email'
                  value={formDetails.email}
                  placeholder='Email Address'
                  onChange={(e) => onFormUpdate('email', e.target.value)}
                  className='w-full p-3 border border-headingColor rounded-lg bg-gray-100 bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primaryColor'
                />
              </div>
              <div>
                <input
                  type='tel'
                  value={formDetails.phone}
                  placeholder='Phone No.'
                  onChange={(e) => onFormUpdate('phone', e.target.value)}
                  className='w-full p-3 border border-headingColor rounded-lg bg-gray-100 bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primaryColor'
                />
              </div>
            </div>
            
            <div className='mb-6'>
              <textarea
                rows='6'
                value={formDetails.message}
                placeholder='Message'
                onChange={(e) => onFormUpdate('message', e.target.value)}
                className='w-full p-3 border border-headingColor rounded-lg resize-none bg-gray-100 bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primaryColor'
              ></textarea>
            </div>
            
            <div className='flex flex-col items-start space-y-4'>
              <button
                type='submit'
                className='bg-primaryColor hover:bg-blue-600 transition-all duration-300 text-white font-bold py-3 px-6 rounded-lg'
              >
                {buttonText}
              </button>
              
              {status.message && (
                <div className={`text-sm ${status.success === false ? 'text-red-500' : 'text-green-500'}`}>
                  {status.message}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </section>
  )
}

export default Contact