import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify-icon/react';
import AOS from 'aos';
import '../../public/aos-master/dist/aos.css'

const Header = () => {

  const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
        });

        function onscrollNavAnimate(){
            let lastScrollY = window.scrollY;
            
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                const logo = document.querySelector('.logo');
                const currentScrollY = window.scrollY;
                const isMobile = window.innerWidth <= 991;
          
                if (currentScrollY === 0) {
                    // At the top
                    navbar.style.top = "0";
                    navbar.style.backdropFilter = 'blur(0px)';
                    navbar.style.backgroundColor = isMobile ? 'var(--lightgreen2)' : 'transparent';
                    logo.style.scale = '1';
                } else if (currentScrollY < lastScrollY) {
                    // Scrolling up
                    navbar.style.top = "0";
                    navbar.style.backdropFilter = 'blur(10px)';
                    navbar.style.backgroundColor = isMobile ? 'var(--lightgreen2)' : 'transparent';
                    logo.style.scale = '1';
                } else {
                    // Scrolling down
                    navbar.style.top = "-100px";
                    navbar.style.backdropFilter = 'blur(0px)';
                    navbar.style.backgroundColor = isMobile ? 'var(--lightgreen2)' : 'transparent';
                    logo.style.scale = '0.3';
                }
                lastScrollY = currentScrollY;
            });
        }
        
        onscrollNavAnimate();
        
        // Cleanup function
        // return () => {
        //     window.removeEventListener('scroll', onscrollNavAnimate);
        // };
    }, []);

    useEffect(() => {
      if (window.innerWidth < 992) {
        const navLinks = document.querySelectorAll('.navbar a');
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const toggler = document.querySelector('.toggler');

        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            const isTogglerVisible = navbarToggler.offsetParent !== null;
            if (isTogglerVisible) {
              navbarCollapse.classList.remove('show');
              toggler.classList.remove('active');
              setIsActive(false);
            }
          });
        });
      }
    }, []);

  return (
    <>
      {/* <!--------------------FIXED---ICONS---START------------------> */}
      
      <div className="fixed_icons_main">
        <div className="fixed_icons">
          <a href="./brochure/Anvita Parkside Web Brochure.pdf" target="_blank" className="d-flex align-items-center justify-content-end text-white text-decoration-none rounded-pill text-uppercase gap-2"><span className=""> brochure</span>  <span><Icon icon="gala:brochure" className="brochure" /></span></a>
        </div>
        <div className="fixed_icons">
          <a href="./brochure/Anvita Parkside Leaflet.pdf" target="_blank" className="d-flex align-items-center justify-content-end text-white text-decoration-none rounded-pill text-uppercase gap-2"><span className="">leaflet</span> <span><Icon icon="file-icons:leaflet" className="brochure" /></span></a>
        </div>
        <div className="mt-1 fixed_icons">
          <a href="#" className="d-flex align-items-center justify-content-end text-white text-decoration-none rounded-pill text-uppercase gap-2"><span className="">walkthrough</span> <span><Icon icon="tdesign:film" className="brochure" /></span></a>
        </div>
      </div>
      
      {/* <!--------------------FIXED---ICONS---END------------------> */}
      
      <div id="intro"></div>
    
      {/* <!-----------------NAVBAR---START-----------------> */}
    
      <nav className="navbar navbar-expand-lg fixed-top pt-0 nav_bg" style={{transition: "all ease .3s"}}>
        <div className="container">
          <a className="navbar-brand logo d-block d-lg-none rounded-pill" href="https://www.anvitagroup.com" target="_blank" rel="noopener noreferrer"><img src="images/anvita_logo.png" className="w-100 rounded-3" style={{transition: "all ease .3s"}} alt="Anvita Logo" /></a>
          <button className="navbar-toggler rounded-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div className={`toggler ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">  
            <ul className="navbar-nav ms-auto mb-lg-0 ul_bg px-lg-2">
              {/* <!-- <li class="nav-item nav_animation">
                <a class="nav-link links" href="https://www.anvitagroup.com" target="_blank">Home</a>
              </li> --> */}
              <li className="nav-item nav_animation" data-aos="zoom-in">
                <a className="nav-link links ms-lg-2" href="#intro">Introduction</a>
              </li>
              <li className="nav-item nav_animation" data-aos="zoom-in" data-aos-delay="150">
                <a className="nav-link links ms-lg-2" href="#overview">Overview</a>
              </li>
              <li className="nav-item nav_animation" data-aos="zoom-in" data-aos-delay="200">
                <a className="nav-link links ms-lg-2" href="#masterplan">All Plans</a>
              </li>
              {/* <li className="nav-item nav_animation" data-aos="zoom-in" data-aos-delay="250">
                <a className="nav-link links ms-lg-2" href="#floorplan">floor plans</a>
              </li> */}
              <li className="nav-item nav_animation" data-aos="zoom-in" data-aos-delay="300">
                <a className="nav-link links ms-lg-2" href="#amenities">Amenities</a>
              </li>
            </ul>
    
            <a className="navbar-brand logo d-lg-block d-none mx-2 rounded-pill" href="https://www.anvitagroup.com" target="_blank" rel="noopener noreferrer"><img src="images/anvita_logo.png" className="w-100 rounded-3" style={{transition: "all ease .3s"}} alt="Anvita Logo" /></a>
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul_bg">
              <li className="nav-item nav_animation" data-aos="zoom-in" data-aos-delay="350">
                <a className="nav-link links ms-lg-2" href="#clubhouse">Clubhouse</a>
              </li>
              {/* <li className="nav-item nav_animation" data-aos="zoom-in" data-aos-delay="400">
                <a className="nav-link links ms-lg-2" href="#homes">Luxury Homes</a>
              </li> */}
              <li className="nav-item nav_animation" data-aos="zoom-in" data-aos-delay="450">
                <a className="nav-link links ms-lg-2" href="#location">Location</a>
              </li>
              <li className="nav-item nav_animation" data-aos="zoom-in" data-aos-delay="500">
                <a className="nav-link links ms-lg-2" href="#about">About Us</a>
              </li>
              <li className="nav-item nav_animation" data-aos="zoom-in" data-aos-delay="550">
                <a className="nav-link links ms-lg-2" href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header