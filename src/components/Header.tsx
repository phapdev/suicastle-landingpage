import React from 'react';
import suicastleLogo from '../../public/images/suicastle_title.png';
const Header = () => {
  const handleAboutClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="h-[100px] text-white bg-[#545454] pl-20 pr-20">
      <div className="container mx-auto flex items-center h-full justify-between">
        <img src={`${process.env.PUBLIC_URL}/images/x_logo.png`} alt="logo" className="w-[40px] h-[40px] mr-20" />
        <h1 className="text-2xl">Documentation</h1>
        <img src={`${process.env.PUBLIC_URL}/images/suicastle_title.png`} alt="logo" className="w-[209px] h-full" />
        <a href="#about" className="text-2xl" onClick={handleAboutClick}>About us</a>
        <a href='#' className="bg-[#FF9D43]  rounded-md h-[34px]">
          <h1 className='text-black px-4 mt-1'>Play now</h1>
        </a>
      </div>
    </header>
  );
};

export default Header;
