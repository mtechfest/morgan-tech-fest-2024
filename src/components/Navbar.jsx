import { useState, useEffect, useRef } from 'react';
import Logo from '../assets/Logo.png';
import { Link as SmoothLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import Container from './Container';
import { IoChevronDown } from 'react-icons/io5';

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [flip, setFlip] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  function handleBurger() {
    setFlip(!flip);
    setMobileServicesOpen(false);
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav
    className={`fixed w-full h-24 z-50 flex items-center top-0 text-white ${
        scroll
          ? 'bg-[#1e3d76]/70 shadow-md transition-colors duration-300'
          : 'bg-transparent transition-colors duration-300'
      }`}
    >
      <Container className=' flex justify-between items-center'>
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-[120px] lg:w-[100px]" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className=' hidden lg:flex gap-8 lg:gap-4 xl:gap-8 items-center text-white uppercase text-sm font-semibold'>
            <SmoothLink to={'hero'} smooth='true' duration={500} className='cursor-pointer'>Home</SmoothLink>
            <SmoothLink to={'aboutUs'} smooth='true' duration={500} className='cursor-pointer'>About Us</SmoothLink>
            
            {/* Services Dropdown */}
            <div 
              ref={dropdownRef}
              className='relative'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className='cursor-pointer flex items-center gap-1 py-2'>
                Services
                <IoChevronDown className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className='absolute top-full left-0 pt-2'>
                  <div className='bg-[#1e3d76] rounded-lg shadow-xl py-2 min-w-[200px] border border-white/10'>
                    <SmoothLink 
                      to={'symposium'} 
                      smooth='true' 
                      duration={500} 
                      className='cursor-pointer block px-4 py-3 hover:bg-[#FC711B]/20 transition-colors'
                      onClick={() => setServicesOpen(false)}
                    >
                      Innovation Expo
                    </SmoothLink>
                    <SmoothLink 
                      to={'projectx'} 
                      smooth='true' 
                      duration={500} 
                      className='cursor-pointer block px-4 py-3 hover:bg-[#FC711B]/20 transition-colors'
                      onClick={() => setServicesOpen(false)}
                    >
                      ProjectX
                    </SmoothLink>
                  </div>
                </div>
              )}
            </div>
            
            <SmoothLink to={'schedule'} smooth='true' duration={500} className='cursor-pointer'>Schedule</SmoothLink>
            <SmoothLink to={'speakers'} smooth='true' duration={500} className='cursor-pointer'>Speakers</SmoothLink>
            <SmoothLink to={'sponsors'} smooth='true' duration={500} className='cursor-pointer'>Sponsors</SmoothLink>
            <SmoothLink to={'faqs'} smooth='true' duration={500} className='cursor-pointer'>FAQs</SmoothLink>
            <SmoothLink to={'news'} smooth='true' duration={500} className='cursor-pointer'>News</SmoothLink>
            <a href={'https://form.jotform.com/252798316140156'} target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-gradient-to-r from-[#FC711B] to-[#FC4608] rounded-3xl text-sm'>REGISTRATION FORM</a>
        </div>
        
        {/* Mobile Burger Menu */}
        <div className="burger-menu lg:hidden" onClick={handleBurger}>
            <div className="flex flex-col items-center justify-center w-[24px] h-[24px] cursor-pointer relative">
                <div
                    className={`${
                    flip && "top-bar"
                    } top w-[10px] h-[2px] bg-[#fff] absolute left-0 top-[4px]`}
                ></div>
                <div
                    className={`${
                    flip && "center-bar"
                    } center w-[20px] h-[2px] bg-[#fff]`}
                ></div>
                <div
                    className={`${
                    flip && "bottom-bar"
                    } bottom w-[10px] h-[2px] bg-[#fff] absolute right-0 bottom-[4px]`}
                ></div>
            </div>
        </div>
        
        {/* Mobile Menu */}
        <div
            className={`lg:hidden flex flex-col justify-between absolute top-[100%] left-0 right-0 bg-[#FC711B] overflow-hidden ${
            !flip ? "h-0" : mobileServicesOpen ? "h-[552px]" : "h-[456px]"
            }  ease-in-out duration-500`}
        >
            <ul className="flex flex-col lg:flex-row whitespace-nowrap lg:leading-[80px] font-medium  w-full lg:w-auto uppercase">
              <SmoothLink to={'hero'} smooth='true' duration={500} className='cursor-pointer px-2 lg:px-3 xl:px-4 py-4 lg:py-0' onClick={() => setFlip(!flip)}>Home</SmoothLink>
              <SmoothLink to={'aboutUs'} smooth='true' duration={500} className='cursor-pointer px-2 lg:px-3 xl:px-4 py-4 lg:py-0' onClick={() => setFlip(!flip)}>About Us</SmoothLink>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  className='cursor-pointer px-2 lg:px-3 xl:px-4 py-4 lg:py-0 w-full text-left flex items-center justify-between'
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <IoChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className='bg-[#ff8c42] pl-6'>
                    <SmoothLink 
                      to={'symposium'} 
                      smooth='true' 
                      duration={500} 
                      className='cursor-pointer block px-2 py-3' 
                      onClick={() => setFlip(!flip)}
                    >
                      Innovation Expo
                    </SmoothLink>
                    <SmoothLink 
                      to={'projectx'} 
                      smooth='true' 
                      duration={500} 
                      className='cursor-pointer block px-2 py-3' 
                      onClick={() => setFlip(!flip)}
                    >
                      ProjectX
                    </SmoothLink>
                  </div>
                )}
              </div>
              
              <SmoothLink to={'schedule'} smooth='true' duration={500} className='cursor-pointer px-2 lg:px-3 xl:px-4 py-4 lg:py-0' onClick={() => setFlip(!flip)}>Schedule</SmoothLink>
              <SmoothLink to={'speakers'} smooth='true' duration={500} className='cursor-pointer px-2 lg:px-3 xl:px-4 py-4 lg:py-0' onClick={() => setFlip(!flip)}>Speakers</SmoothLink>
              <SmoothLink to={'sponsors'} smooth='true' duration={500} className='cursor-pointer px-2 lg:px-3 xl:px-4 py-4 lg:py-0' onClick={() => setFlip(!flip)}>Sponsors</SmoothLink>
              <SmoothLink to={'faqs'} smooth='true' duration={500} className='cursor-pointer px-2 lg:px-3 xl:px-4 py-4 lg:py-0' onClick={() => setFlip(!flip)}>FAQs</SmoothLink>
              <SmoothLink to={'news'} smooth='true' duration={500} className='cursor-pointer px-2 lg:px-3 xl:px-4 py-4 lg:py-0' onClick={() => setFlip(!flip)}>News</SmoothLink>
            </ul>
            <a href={'https://form.jotform.com/252798316140156'} target="_blank" rel="noopener noreferrer" className="text-[#FC711B] font-semibold bg-[#fff] px-4 py-4 whitespace-nowrap text-sm lg:text-sm">
                INTEREST FORM
            </a>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
