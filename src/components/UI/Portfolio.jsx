import React, { useEffect, useState } from 'react'
import data from '../../assets/data/portfolioData'
import Modal from './Modal'
import { FaRobot, FaBrain, FaBorderAll, FaCode, FaEthereum, FaGlobe, FaMusic, FaChartLine, FaDatabase } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Portfolio = () => {
    const [selectTab, setSelectTab] = useState('all');
    const [portfolios, setPortfolios] = useState(data);
    const [showModal, setshowModal] = useState(false);
    const [activeID, setactiveID] = useState(null);

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Machine Learning':
                return <FaBrain className="text-3xl text-primaryColor" />;
            case 'Web Development':
                return <FaCode className="text-3xl text-primaryColor" />;
            case 'Blockchain':
                return <FaEthereum className="text-3xl text-primaryColor" />;
            case 'other':
                return <FaGlobe className="text-3xl text-primaryColor" />;
            default:
                return <FaCode className="text-3xl text-primaryColor" />;
        }
    }

    const showModalHandler = id => {
        setshowModal(true)
        setactiveID(id)
    }

    useEffect(() => {
        if (selectTab === 'all') {
            setPortfolios(data)
        }
        if (selectTab === 'ML') {
            const filteredData = data.filter(item => item.category === 'Machine Learning')
            setPortfolios(filteredData)
        }
        if (selectTab === 'UI-design') {
            const filteredData = data.filter(item => item.category === 'Blockchain')
            setPortfolios(filteredData)
        }
        if (selectTab === 'web-dev') {
            const filteredData = data.filter(item => item.category === 'Web Development')
            setPortfolios(filteredData)
        }
    }, [selectTab])

    return (
        <section id="portfolio">
            <div className="container">
                <div className='flex items-center justify-between flex-wrap'>
                    <div className='mb-7 sm:mb-0'>
                        <h3 className='text-headingColor text-[2rem] font-[700]'>
                            My Projects
                        </h3>
                    </div>

                    <div className='flex gap-3'>
                        <button
                            onClick={() => setSelectTab('all')}
                            className='flex items-center gap-2 text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-primaryColor hover:text-white transition-all'
                        >
                            <FaBorderAll /> All
                        </button>
                        <button
                            onClick={() => setSelectTab('ML')}
                            className='flex items-center gap-2 text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-primaryColor hover:text-white transition-all'
                        >
                            <FaBrain /> ML
                        </button>
                        <button
                            onClick={() => setSelectTab('UI-design')}
                            className='flex items-center gap-2 text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-primaryColor hover:text-white transition-all'
                        >
                            <FaEthereum /> Blockchain
                        </button>
                        <button
                            onClick={() => setSelectTab('web-dev')}
                            className='flex items-center gap-2 text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-primaryColor hover:text-white transition-all'
                        >
                            <FaCode /> Web Dev
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-9'>
                    {portfolios?.map((Portfolio, index) => (
                        <div
                            key={index}
                            data-aos='fade-zoom-in'
                            data-aos-delay='50'
                            data-aos-duration='1000'
                            className='group relative bg-white rounded-xl shadow-lg p-6 min-h-[200px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:border hover:border-primaryColor'
                        >
                            <div className='mb-4'>
                                {getCategoryIcon(Portfolio.category)}
                            </div>
                            <h3 className='text-headingColor text-xl font-[600] mb-3 text-center group-hover:text-primaryColor'>
                                {Portfolio.title}
                            </h3>
                            <div className='flex flex-wrap gap-2 justify-center mb-4'>
                                <span className='bg-gray-100 text-sm px-3 py-1 rounded-full'>
                                    {Portfolio.type}
                                </span>
                            </div>
                            <button
                                onClick={() => showModalHandler(Portfolio.id)}
                                className='mt-auto text-white bg-primaryColor hover:bg-primaryColorDark py-2 px-6 rounded-lg font-medium transition-all transform group-hover:scale-105'
                            >
                                Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && <Modal setshowModal={setshowModal} activeID={activeID} />}
        </section>
    )
}

export default Portfolio