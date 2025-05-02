import React from 'react'
import { FaBrain, FaDatabase, FaEthereum } from 'react-icons/fa';

const Services = () => {
    return (
        <section id='services'>
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
                        What Do I Do
                    </h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                        The areas where I bring value through my skills and experience.
                    </p>
                </div>
                <div className='flex flex-col justify-center sm:py-12'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                        <div className='relative text-gray-700 antialiased text-sm font-semibold'>

                            {/* vertical line */}
                            <div className='hidden absolute w-1 sm:block bg-gray-200 h-full left-1/2 transform -translate-z-1/2'></div>

                            {/* Machine Learning */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group'>
                                                <h3 className='text-primaryColor font-[700] mb-3 text-2xl'>Machine Learning</h3>
                                                <p className='text-[15px] text-smallTextColor font-[500] mb-7 leading-7'>
                                                    I build intelligent systems that analyze data, learn patterns, and make accurate predictions. My experience spans from data preprocessing and model training to deploying scalable ML solutions in real-world applications.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='rounded-full bg-primaryColor border-white border-4 w-[52px] h-[52px] absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <FaBrain className='text-white text-[20px]' />
                                    </div>
                                </div>
                            </div>

                            {/* Full-Stack Development */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos='fade-left' data-aos-duration='1200' className='bg-white p-4 rounded shadow group'>
                                                <h3 className='text-primaryColor font-[700] mb-3 text-2xl'>Web Development</h3>
                                                <p className='text-[15px] text-smallTextColor font-[500] mb-7 leading-7'>
                                                    From dynamic frontends to robust backends, I design and build responsive, scalable web and app solutions that deliver performance and a great user experience. I handle everything from UI development to server-side logic and APIs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='rounded-full bg-primaryColor border-white border-4 w-[52px] h-[52px] absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <FaDatabase className='text-white text-[20px]' />
                                    </div>
                                </div>
                            </div>

                            {/* Blockchain Development */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className='flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className='w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group'>
                                                <h3 className='text-primaryColor font-[700] mb-3 text-2xl'>Blockchain Dev</h3>
                                                <p className='text-[15px] text-smallTextColor font-[500] mb-7 leading-7'>
                                                    As a beginner in blockchain, I'm currently exploring smart contracts, decentralized apps (dApps), and Web3 development. I'm passionate about learning how blockchain can bring transparency and trust to digital systems.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='rounded-full bg-primaryColor border-white border-4 w-[52px] h-[52px] absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                        <FaEthereum className='text-white text-[20px]' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
