import React from 'react'

import dev from '../../assets/images/Development.png'
import ml from '../../assets/images/Machine Learning.png'
import des from '../../assets/images/design.png'


const Services = () => {
    return (
        <section id='services'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
                        What Do I Do
                    </h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'
                    >
                        Following are the services that I provide
                    </p>
                </div>
                <div className='flex flex-col justify-center sm:py-12'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                        <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                            {/* vertical line going from between */}
                            <div className='hidden absolute w-1 sm:block bg-gray-200 h-full left-1/2 transform -translate-z-1/2'></div>
                            {/* left side */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group'>
                                                <h3 className='text-primaryColor font-[700] mb-3 text-2xl'>Web Development</h3>
                                                <p className='text-[15px] text-smallTextColor font-[500] mb-7 leading-7'>
                                                    I specialize in transforming concepts into fully functional websites.Responsive designs and seamless navigation, the websites deliver an engaging journey.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='rounded-full bg-primaryColor border-white border-4 w-[52px] h-[52px] absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={dev} alt="" />
                                        </figure>
                                    </div>

                                </div>
                            </div>
                            {/* right side */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos='fade-left' data-aos-duration='1200' className='bg-white p-4 rounded shadow group'>
                                                <h3 className='text-primaryColor font-[700] mb-3 text-2xl'>Machine Learning</h3>
                                                <p className='text-[15px] text-smallTextColor font-[500] mb-7 leading-7'>
                                                My expertise lies in developing intelligent algorithms that extract valuable insights from data,crafting algorithms that decipher complex data patterns, enabling informed predictions and strategic insights.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='rounded-full bg-primaryColor border-white border-4 w-[52px] h-[52px] absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={ml} alt="" />
                                        </figure>
                                    </div>
                                    

                                </div>
                            </div>
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group'>
                                                <h3 className='text-primaryColor font-[700] mb-3 text-2xl'>UI Design</h3>
                                                <p className='text-[15px] text-smallTextColor font-[500] mb-7 leading-7'>
                                                With a focus on user-centered aesthetics and intuitive interactions, I craft interfaces that not only visually inspire but also provide seamless and delightful experiences.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='rounded-full bg-primaryColor border-white border-4 w-[52px] h-[52px] absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={des} alt="" />
                                        </figure>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services