import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[80px] leading-[80px] flex items-center sticky top-0 z-10 bg-white'>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/*logo*/}
          {/* <div className="flex items-center gap-[10px]">
            <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[12px] font-[700] rounded-full flex items-center justify-center'>
              SN
            </span>
            <div className='leading-[20px]'>
              <a href='#about'><h4 className='text-[19px] text-primaryColor font-[700]'>Saba</h4> </a>
            </div>
          </div> */}
          {/*logo end*/}
          {/*menu start*/}
          <div className='flex items-centergap-4'>
            <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[37px] hover:bg-primaryColor hover:text-white hover:font-[500] ease-in duration-300'>
            <a href="#contact"><i class='ri-send-plane-line'></i> Let's Talk</a>
            </button>
            <span className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
              <i class='ri-menu-line'></i>
            </span>
          </div>
          <div className='menu'>
            <ul className='flex items-center gap-10'>
              <li>
                <a className='text-smallTextColor font-[600]' href='#about'>About</a>
              </li>
              <li>
                <a className='text-smallTextColor font-[600]' href='#services'>Services</a>
              </li>
              <li>
                <a className='text-smallTextColor font-[600]' href='#skills'>Skills</a>
              </li>
              <li>
                <a className='text-smallTextColor font-[600]' href='#portfolio'>Portfolio</a>
              </li>
              <li>
                <a className='text-smallTextColor font-[600]' href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
          {/*menu end*/}
          {/*Menu button */}
          
          {/*Menu button end */}
        </div>
      </div>
    </header>

  )
}

export default Header