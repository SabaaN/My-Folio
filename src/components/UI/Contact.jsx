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
    <section id='contact'>
      <section className='container'>
        <div className='text-center'>
          <h2 className='text-headingColor font-[800] text-[2.4rem] mb-1'>
            Contact Me
          </h2>
          <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 mb-[36px]'
          >
            Get in touch with me
          </p>
        </div>
        <div className='contact_container container grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className="md:col-span-1">
          <div className='contact_information mb-[65px]'>
            <span className='text-primaryColor text-3xl font-bold'>
              <i className='ri-phone-fill'></i> Phone
            </span>
            <p>+923362370128</p>
          </div>
          <div className='contact_information mb-[65px]'>
            <span className='text-primaryColor text-3xl font-bold '>
              <i className='ri-mail-fill'></i> Email
            </span>
            <p>sabanvd34@gmail.com</p>
          </div>
          <div className='contact_information mb-[65px]'>
            <span className='text-primaryColor text-3xl font-bold'>
              <i className='ri-map-pin-5-fill'></i> Address
            </span>
            <p>Karachi, Pakistan</p>
          </div>
          </div>
          <form onSubmit={handleSubmit} className='contact-form'>
            <input
              type='text'
              value={formDetails.firstName}
              placeholder='First Name'
              onChange={(e) => onFormUpdate('firstName', e.target.value)}
              className='mb-6 mr-[50px] p-2 border border-headingColor rounded-[10px] bg-gray-100 bg-opacity-75'
            />
            <input
              type='text'
              value={formDetails.lastName}
              placeholder='Last Name'
              onChange={(e) => onFormUpdate('lastName', e.target.value)}
              className='mb-6 p-2 mr-[50px] border border-headingColor rounded-[10px] bg-gray-100 bg-opacity-75'
            />
            <input
              type='email'
              value={formDetails.email}
              placeholder='Email Address'
              onChange={(e) => onFormUpdate('email', e.target.value)}
              className='mb-6 p-2 mr-[50px] border border-headingColor rounded-[10px] bg-gray-100 bg-opacity-75'
            />
            <input
              type='tel'
              value={formDetails.phone}
              placeholder='Phone No.'
              onChange={(e) => onFormUpdate('phone', e.target.value)}
              className='mb-6 p-2 mr-[50px] border border-headingColor rounded-[10px] bg-gray-100 bg-opacity-75'
            />
            <textarea
              rows='6'
              value={formDetails.message}
              placeholder='Message'
              onChange={(e) => onFormUpdate('message', e.target.value)}
              className='mb-2 p-2 w-[478px] border border-headingColor rounded-[10px] resize-none bg-gray-100 bg-opacity-75'
            ></textarea>
            <button
              type='submit'
              className='bg-primaryColor hover:bg-blue-500 transition-all duration-300 text-white font-bold py-2 px-4 rounded'
            >
              {buttonText}
            </button>
            {status.message && (
              <div>
                <p className={status.success === false ? 'text-red-500' : 'text-green-500'}>
                  {status.message}
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </section>
  )
}


export default Contact