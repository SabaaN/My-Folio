import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='w-full h-[80px] leading-[80px] flex items-center sticky top-0 z-10 bg-white'>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/* Left side - Let's Talk button (visible on all screens) */}
          <div className='flex items-center'>
            <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[37px] hover:bg-primaryColor hover:text-white hover:font-[500] ease-in duration-300'>
              <a href="#contact"><i className='ri-send-plane-line'></i> Let's Talk</a>
            </button>
          </div>

          {/* Right side - Desktop menu (hidden on mobile) */}
          <div className='hidden md:flex menu'>
            <ul className='flex items-center gap-10'>
              <li>
                <a className='text-smallTextColor font-[600] hover:text-primaryColor transition-colors' href='#about'>About</a>
              </li>
              <li>
                <a className='text-smallTextColor font-[600] hover:text-primaryColor transition-colors' href='#services'>Services</a>
              </li>
              <li>
                <a className='text-smallTextColor font-[600] hover:text-primaryColor transition-colors' href='#skills'>Skills</a>
              </li>
              <li>
                <a className='text-smallTextColor font-[600] hover:text-primaryColor transition-colors' href='#portfolio'>Portfolio</a>
              </li>
            </ul>
          </div>

          {/* Hamburger menu button - visible only on mobile */}
          <div className='md:hidden flex items-center'>
            <button 
              onClick={toggleMenu}
              className='text-2xl text-smallTextColor cursor-pointer focus:outline-none'
              aria-label="Toggle menu"
            >
              <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
            </button>
          </div>

          {/* Mobile menu - slides in from the side */}
          <div 
            className={`fixed top-[80px] right-0 w-full h-[calc(100vh-80px)] bg-white z-50 transition-all duration-300 ease-in-out transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
          >
            <ul className='flex flex-col items-center justify-center h-full gap-8'>
              <li>
                <a 
                  className='text-smallTextColor font-[600] text-xl hover:text-primaryColor transition-colors' 
                  href='#about'
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  className='text-smallTextColor font-[600] text-xl hover:text-primaryColor transition-colors' 
                  href='#services'
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  className='text-smallTextColor font-[600] text-xl hover:text-primaryColor transition-colors' 
                  href='#skills'
                  onClick={toggleMenu}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  className='text-smallTextColor font-[600] text-xl hover:text-primaryColor transition-colors' 
                  href='#portfolio'
                  onClick={toggleMenu}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  className='text-smallTextColor font-[600] text-xl hover:text-primaryColor transition-colors' 
                  href='#contact'
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;