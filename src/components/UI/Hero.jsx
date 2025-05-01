import React from 'react';
import heroImg from '../../assets/images/hero.png';
import CountUp from 'react-countup';

const Hero = () => {

    return (
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/*Left side content hoem*/}
                    <div className='w-full md:basis-1/2'>
                        <h5
                            data-aos='fade-right'
                            data-aos-duration='1500'
                            className='text-headingColor font-[600] text-[21px]'>
                            Hello There!
                        </h5>
                        <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headingColor font-[800] text-[1.8rem]  sm:text-[40px] leading-[35px] mt-5'>
                            I am Saba N<br /></h1>
                        <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200' className='flex items-center gap-6 mt-7'>

                            <button onClick={() => {
                                const link = document.createElement('a');
                                link.href = 'https://drive.google.com/file/d/1i_MhPu03lH-dXaCTNCnIdVM3tafejegk/view?usp=sharing';
                                link.download = 'My Resume.pdf';
                                link.target = '_blank';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }} className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]' >

                                <i className="ri-eye-line text-[16px]"></i>
                                <span className="font-[600] text-[16px]">View Resume</span>

                            </button>

                            <a href="#portfolio"
                                className="relative text-smallTextColor font-[600] text-[16px] pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full">
                                See Portfolio
                            </a>


                        </div>
                        <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 mt-[17px] text-headingColor font-[500] text-[15px] leading-7 sm:pr-10'>Passionate and results-driven individual with a strong foundation in data-driven problem solving. Experienced in building and optimizing machine learning solutions across various domains. Complemented by a solid background in modern web development, enabling seamless integration of intelligent systems into scalable, user-friendly applications.</p>
                        <div className="flex items-center gap-9 mt-14">
                            <span>
                                <a href="https://www.linkedin.com/in/saba-n-3123b8242/" target="_blank"
                                    className="text-smallTextColor text-[28px] font-[400] transition-colors duration-300 hover:text-primaryColor">
                                    <i className="ri-linkedin-box-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href="https://github.com/SabaaN" target="_blank"
                                    className="text-smallTextColor text-[28px] font-[400] transition-colors duration-300 hover:text-primaryColor">
                                    <i className="ri-github-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href="mailto:sabanvd34@gmail.com" target="_blank"
                                    className="text-smallTextColor text-[28px] font-[400] transition-colors duration-300 hover:text-primaryColor">
                                    <i className="ri-mail-fill"></i>
                                </a>
                            </span>
                        </div>

                    </div>
                    {/*End of left side content*/}

                    {/* Hero Image */}
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img src={heroImg} alt='' />
                        </figure>
                    </div>
                    {/* Hero Image end*/}
                    {/* right side content home */}
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md"mt-0 md"flex-col md:justify-end md:text-end'>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={2} duration={2} suffix='+' />

                            </h2>
                            <h4 className='text-headingColor text-[18px] font-[600]'>
                                Years of Experience
                            </h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={50} duration={2} suffix='+' />

                            </h2>
                            <h4 className='text-headingColor text-[18px] font-[600]'>
                                Projects completed
                            </h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={20} duration={2} suffix='+' />

                            </h2>
                            <h4 className='text-headingColor text-[18px] font-[600]'>
                                satisfied clients
                            </h4>
                        </div>
                        <div className='mb-10'>
                            <h2 className='text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={99} duration={2} suffix='%' />

                            </h2>
                            <h4 className='text-headingColor text-[18px] font-[600]'>
                                success rate
                            </h4>
                        </div>
                    </div>


                    {/* right side content home end */}

                </div>

            </div>
        </section>
    )
}

export default Hero