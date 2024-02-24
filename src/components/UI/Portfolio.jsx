import React, { useEffect, useState } from 'react'
import data from '../../assets/data/portfolioData'
import Modal from './Modal'

const Portfolio = () => {
    const [selectTab, setSelectTab] = useState('all');
    const [portfolios, setPortfolios] = useState(data);
    const [showModal, setshowModal] = useState(false);
    const [activeID, setactiveID] = useState(null);


    const showModalHandler = id => {
        setshowModal(true)
        setactiveID(id)
    }
    
    useEffect(()=>{

        if(selectTab==='all'){
            setPortfolios(data)
        }
        if(selectTab==='ML'){
            const filteredData = data.filter(item=> item.category==='Machine Learning')
            setPortfolios(filteredData)
        }

        if(selectTab==='UI-design'){
            const filteredData = data.filter(item=> item.category==='UI')
            setPortfolios(filteredData)
        }

        if(selectTab==='web-dev'){
            const filteredData = data.filter(item=> item.category==='Web Development')
            setPortfolios(filteredData)
        }

    },[selectTab])


    return <section id="portfolio">

        <div className="container">
            <div className='flex items-center justify-between flex-wrap'>
                <div className='mb-7 sm:mb-0'>
                    <h3 className='text-headingColor text-[2rem] font-[700]'>
                        My Recent Projects
                    </h3>
                </div>

                <div className='flex gap-3'>
                    <button onClick={()=>setSelectTab('all')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                        All
                    </button>
                    <button onClick={()=>setSelectTab('ML')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                        ML
                    </button>
                    <button onClick={()=>setSelectTab('UI-design')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                        UI Design
                    </button>
                    <button onClick={()=>setSelectTab('web-dev')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                        Web Dev
                    </button>

                </div>


            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-9'>
                {portfolios?.map((Portfolio, index) => (
                    <div data-aos='fade-zoom-in'
                        data-aos-delay='50'
                        data-aos-duration='1000'
                        className='group relative z-[1] '>
                        <figure className='w-full '>
                            <img className='rounded-[8px] w-full h-auto' src={Portfolio.imgUrl} alt='' />
                        </figure>
                        <div className='w-full h-full bg-black bg-opacity-40  absolute top-0 left-0 z-[5] hidden group-hover:block ease-in duration-200'>
                            <div className='w-full h-full flex items-center justify-center '>
                                <button onClick={() => showModalHandler(Portfolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                                    Details
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

        
        {
            showModal && <Modal setshowModal ={setshowModal} activeID ={activeID} ></Modal> 
        }

    </section>
}

export default Portfolio