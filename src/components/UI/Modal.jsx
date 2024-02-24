import React from 'react'
import portfolios from '../../assets/data/portfolioData'

const Modal = ({activeID, setshowModal}) => {

  const portfolio = portfolios.find(portfolio=> portfolio.id ===activeID)


  return (
    <div className='w-full h-full fixed top-0 bottom-0 left-0 z-10 bg-headingColor bg-opacity-40'>
      <div className='max-w-[415px] mx-auto absolute top-1/2 left-1/2 z-20 rounded-[10px] transform -translate-x-1/2 -translate-y-1/2 p-4' style={{ background: 'linear-gradient(to right, #E0E0E0, #706F6F)'}}>
        <div>
          <figure>
            <img className='rounded-[8px]' src={portfolio.imgUrl} alt='' />
          </figure>
        </div>

        <div>
          <h2 className='text-2xl text-headingColor font-[900] my-5'>
            {portfolio.title}
          </h2>

          <p className='text-[13px] leading-5  text-black'>
            {portfolio.description}
          </p>
            <h4 className='text-headingColor text-[17px] font-[500] mt-2 mb-1'>
              Technologies Used:
            </h4>
            {portfolio.technologies.map((item, index) => (
              <span key={index} className='bg-gray-100 text-[13px] py-2 px-2 rounded-[8px] mr-2'>
                {item}
              </span>
            ))}
        </div>

        <a href={portfolio.siteUrl} target='blank'>
          <button className='bg-primaryColor text-white rounded-[8px] py-2 px-4 my-8 font-[500] hover:bg-headingColor ease-in duration-300'>
            Visit Source
          </button>
        </a>

        <button onClick={() =>setshowModal(false)} className='w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[4px] leading-0 cursor-pointer'>
          &times;
        </button>

        </div> 
    </div>

  )
}

export default Modal