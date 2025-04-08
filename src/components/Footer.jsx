import React from 'react'
import { Icon } from '@iconify-icon/react';

const Footer = () => {
  return (
    <>
      <footer className="mt-5">
        <section className="section_wrapper overflow-hidden footer_row">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 align-items-center overflow-hidden px-lg-5 px-3">
            <div className="col">
              <div className="footer_anvita_logo">
                <img src="./images/anvita_logo.png" className="w-100" alt="Footer Logo" />
              </div>
              <h5 className="mt-3">ANVITA GROUP</h5>
              <p className="futura">6th Floor, G Square Near Wells Fargo Raidurg, Gachibowli Hyderabad - 500032 Telangana, India.</p>

              <div className="d-flex flex-column gap-2">
                <h5 className="mb-0 text-uppercase maincolor">Connect</h5>
                <a href="tel: 040 2955 5544" className="text-decoration-none text-black footer_link d-flex align-items-center gap-2"> 
                  <span className="mt-2"><Icon icon="line-md:phone-call-loop" /></span> 
                  <span> 040 2955 5544</span>
                </a>
                <a href="tel: 040 2955 4455" className="text-decoration-none text-black footer_link d-flex align-items-center gap-2"> 
                  <span className="mt-2"><Icon icon="line-md:phone-call-loop" /></span> 
                  <span>040 2955 4455</span>
                </a>
              </div>

              <div className="d-flex flex-column gap-2 mb-3">
                <a href="mailto: info@anvitagroup.com" className="text-decoration-none text-black footer_link d-flex align-items-center gap-2"> 
                  <span className="mt-2"><Icon icon="material-symbols:mail-rounded" /></span> 
                  <span> info@anvitagroup.com </span>
                </a>
              </div>

              <div className="d-flex flex-column gap-1 mt-4">
                <h5 className="mb-0 text-uppercase maincolor">Website</h5>
                <a href="https://www.anvitagroup.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-black footer_link d-flex align-items-center gap-2"> 
                  <span className="mt-2"><Icon icon="arcticons:emoji-web" /></span> 
                  <span> www.anvitagroup.com </span>
                </a>
              </div>
            </div>
              
            <div className="col mt-3 mt-lg-0">
              <div className="footer_parkside_logo">
                <img src="./images/logo.png" className="w-100" alt="Footer Logo" />
                <img src="./images/anvita_and_landspace.jpg" className="w-100 rounded-3 mt-3" alt="Footer Logo" />
              </div>
              <div className="d-flex flex-column gap-2 my-3">
                <h5 className="mb-0 text-uppercase maincolor">Connect</h5>
                <a href="tel: +91 98480 00092" className="text-decoration-none text-black footer_link d-flex align-items-center gap-2"> 
                  <span className="mt-2"><Icon icon="line-md:phone-call-loop" /></span> 
                  <span> +91 98480 00092</span>
                </a>
              </div>

              {/* <div className="d-flex flex-column gap-2 mb-3">
                <div className="scanner">
                  <img src="./images/scan_qr.jpg" className="w-100" alt="Footer scanner" />
                </div>
                <h5>Scan for location</h5>
              </div> */}
            </div>

            <div className="col">
              <div className="landscape_logo">
                <img src="./images/landspace_logo2.png" className="w-100" alt="Footer Logo" />
              </div>

              <h5 className="mt-3">LANDSPACE PROJECTS LLP</h5>
              <p className="futura">5th Floor, Gar 71, Liberty Place, Bhagath, Phase-2, Uppal, Hyderabad - 500039 Telangana, India.</p>

              <div className="d-flex flex-column gap-2">
                <h5 className="mb-0 text-uppercase maincolor">Connect</h5>
                <a href="tel: +91 828282 6766" className="text-decoration-none text-black footer_link d-flex align-items-center gap-2"> 
                  <span className="mt-2"><Icon icon="line-md:phone-call-loop" /></span> 
                  <span> +91 828282 6766</span>
                </a>
              </div>
    
              <div className="d-flex flex-column gap-2 mb-3">
                {/* <h5 className="mb-0 text-uppercase maincolor">Social</h5> */}
                <a href="mailto: info@landspaceprojects.com" className="text-decoration-none text-black footer_link d-flex align-items-center gap-2"> 
                  <span className="mt-2"><Icon icon="material-symbols:mail-rounded" /></span> 
                  <span> info@landspaceprojects.com </span>
                </a>
              </div>
    
              <div className="d-flex flex-column gap-1 mt-4">
                <h5 className="mb-0 text-uppercase maincolor">Website</h5>
                <a href="https://landspaceprojects.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-black footer_link d-flex align-items-center gap-2"> 
                  <span className="mt-2"><Icon icon="arcticons:emoji-web" /></span> 
                  <span> www.landspaceprojects.com </span>
                </a>
              </div>
            </div>
          </div>
          
          <hr className="mt-5" style={{color: "var(--black)"}} />
          
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
            <div className="col mt-4">
              <p className="p-3 rounded-4" style={{width: "fit-content", backgroundColor: "var(--green)"}}>&copy;2025 copyright All rights reserved by ANVITA GROUP</p>
            </div>
            <div className="col mt-4 d-flex align-items-center justify-content-lg-end">
              <p className="p-3 rounded-4" style={{width: "fit-content", backgroundColor: "var(--green)"}}>TS RERA APPROVED NO: P02200009326</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer