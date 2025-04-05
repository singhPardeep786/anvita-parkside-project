import React, { useEffect } from 'react'
import gsap from 'gsap'
import {SlideshowLightbox} from 'lightbox.js-react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Location = () => {

  useEffect(()=>{
    function headingLineAnimation(){
      const line = document.querySelectorAll('.heading_line');
      line.forEach((line)=>{
        gsap.fromTo(line,{
          width: "0",
        },{
          width: "100%",
          duration: 1,
          scrollTrigger: {
            scroller: "body",
            trigger: line,
            start: "top 80%",
            end: "top 40%",
            scrub: 2,
            // markers: true,
            toggleActions: "play none none reset",
          }
        })
      })
    }
    headingLineAnimation()
  }, [])
  
  return (
    <>
      <section className="section_wrapper overflow-hidden my-5">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 py-5">
        <div className="col">
          <div className="position-relative line_animation">
            <h2 className="text-uppercase">Where We Are</h2>
            <div className="heading_line"></div>
          </div>
        </div>
        <div className="col">
          <div className="d-lg-flex align-items-center justify-content-center gap-3">
            <div className="col-lg-6 mt-5">
              <SlideshowLightbox theme='lightbox'>
                <img src="./images/location/location.jpg" className="w-100 rounded-5" style={{cursor: "pointer"}} alt="Anvita parkside location map" />
              </SlideshowLightbox>
            </div>
            <div className="col-lg-6 mt-5">
              <div className="location_content">
                <h3>Medchal - from a lush, green area to a convenient location</h3>
                <p className="futura">Discover the enchanting allure of Ravalkole, located near Medchal, and
                  indulge in the exquisite 'luxury of nature’. Here, you will find a harmonious
                  fusion of pristine natural surroundings and vibrant and thriving neighborhood,
                  all well connected by exceptional infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 pb-5">
        <div className="col mt-5">
          <div className="position-relative line_animation">
            <h2 className="text-uppercase">proximities</h2>
            <div className="heading_line"></div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex flex-nowrap overflow-x-auto align-items-center justify-content-start justify-content-md-center justify-content-lg-center gap-3 gap-sm-2">
            <div className="col-lg-1 col-md-2 col-3 text-center mt-5">
              <div className="proximities_highlights">
                <img src="./images/location/education.png" className="w-100" alt="education" />
                <h6>Education</h6>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-3 text-center mt-5">
              <div className="proximities_highlights">
                <img src="./images/location/hospitals.png" className="w-100" alt="hospitals" />
                <h6>Hospitals</h6>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-3 text-center mt-5">
              <div className="proximities_highlights">
                <img src="./images/location/malls.png" className="w-100" alt="malls" />
                <h6>Malls</h6>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-3 text-center mt-5">
              <div className="proximities_highlights">
                <img src="./images/location/restaurant.png" className="w-100" alt="restaurant" />
                <h6>Restaurant</h6>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-3 text-center mt-5">
              <div className="proximities_highlights">
                <img src="./images/location/offices.png" className="w-100" alt="offices" />
                <h6>Offices</h6>
              </div>
            </div>
          </div>  

          <div className="metro_location text-center d-lg-flex align-items-center rounded-pill mt-5">
            <div className="metro_img mx-auto">
              <img src="./images/location/metro.png" className="w-100" alt="Metro image" />
            </div>
            <h2 className="mt-3 mt-lg-0">Paradise-Medchal (22 Kmts.) & JBS-Shamirpet (23 Kmts.) are part of Hyderabad Metro Rail Phase-2 expansion plan</h2>
          </div>

          <div className="proximities_main mt-5 rounded-5 overflow-hidden py-5">
            <div className="d-lg-flex align-items-center justify-content-center gap-2">
              <div className="col-lg-5">
                <div className="proximities shadow p-lg-5 p-3 rounded-4">
                  <h3>Nearby Educational Institutions</h3>
                  <h5>Schools</h5>
                  <ul>
                    <li>IVY League School</li>
                    <li>Geetanjali International School</li>
                    <li>Excellencia Infinitum School</li>
                  </ul>
                  <h5 className="mt-3">Professional colleges</h5>
                  <ul>
                    <li>NALSAR University</li>
                    <li>Malla Reddy University</li>
                    <li>Siva Sivani Institute of Management</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 mt-5 mt-lg-0">
                <div className="proximities shadow p-lg-5 p-3 rounded-4">
                  <div className="location_content">
                    <h3>Location Highlights</h3>
                    <ul>
                      <li>05 min. drive to Mediciti Medical College & Hospital</li>
                      <li>05 min. drive to Rajiv Rahadaari Road</li>
                      <li>10 min. drive from ORR Exit No. 6 & 7</li>
                      <li>10 min. drive to Medchal Check-post</li>
                      <li>10 min. drive to Shamirpet Lake</li>
                      <li>10 min. drive to Leonia, Alankrita & Celebrity Resorts</li>
                      <li>10 min. drive to the proposed IT Park at Kandlakoya</li>
                      <li>15 min. drive to Genome Valley</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      <div id="about"></div>
    </>
  )
}

export default Location