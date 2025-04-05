import React, { useEffect, useState } from 'react'
import {SlideshowLightbox} from 'lightbox.js-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AllPlans = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  useEffect(() => {
    function headingLineAnimation() {
      const lines = document.querySelectorAll('.heading_line');
      lines.forEach((line) => {
        gsap.fromTo(line, {
          width: "0",
        }, {
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
    headingLineAnimation();
  }, [])

  useEffect(() => {
    // Initial animation for first tab
    gsap.to('#tab1', {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, [])
  
  const switchTab = (tabId) => {
    // Remove active class from all contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
      content.classList.remove('active');
      gsap.set(content, { opacity: 0 });
    });

    // Add active class to corresponding content
    const activeContent = document.getElementById(tabId);
    activeContent.classList.add('active');

    // Animate the new content
    gsap.fromTo(activeContent,
      { 
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      }
    );

    // Update active tab state
    setActiveTab(tabId);
  }
  
  return (
    <>
      {/* <!------------------MASTER---PLAN---START------------------> */}

        <section className="section_wrapper overflow-hidden my-5 py-lg-5">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 pb-4">
            <div className="col">
              <div className="position-relative line_animation">
                <h2 className="text-uppercase">master plan</h2>
                <div className="heading_line"></div>
              </div>
            </div>
            <div className="col mt-5">
              <div className="master_plan shadow rounded-4 overflow-hidden">
                <SlideshowLightbox theme="lightbox" className="container grid grid-cols-3 gap-2 mx-auto">
                  <img src="./all_plans/master_plan/master_plan1.jpg" className="w-100 rounded-3" style={{cursor: "pointer"}} alt="Anvita Parkside Master Plan" />
                </SlideshowLightbox> 
              </div>
            </div>
          </div>
        </section>
      
      {/* <!------------------MASTER---PLAN---END------------------> */}

        <div id="floorplan"></div>


        {/* <!------------------FLOOR---PLAN---START------------------> */}

          <div className="container-fluid overflow-hidden py-5 bg-white">
            <section className="section_wrapper overflow-hidden">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1">
                <div className="col">
                  <div className="position-relative line_animation">
                    <h2 className="text-uppercase">Floor plans</h2>
                    <div className="heading_line"></div>
                  </div>
                </div>
                <div className="col">
                  <div className="tabs-container">
                    <div className="tabs-nav">
                        <button 
                          className={`tab-btn ${activeTab === 'tab1' ? 'active' : ''}`} 
                          onClick={() => switchTab('tab1')}
                        >
                          East Plan
                        </button>
                        <button 
                          className={`tab-btn ${activeTab === 'tab2' ? 'active' : ''}`} 
                          onClick={() => switchTab('tab2')}
                        >
                          West Plan
                        </button>
                        <button 
                          className={`tab-btn ${activeTab === 'tab3' ? 'active' : ''}`} 
                          onClick={() => switchTab('tab3')}
                        >
                          North Plan
                        </button>
                    </div>
                    
                    <div className="tab-content active" id="tab1">
                      <h5 className="total_built_up_area text-uppercase mb-3 mb-lg-0">Total Built-up Area: 4188 Sft.</h5>
                      <div className="d-lg-flex align-items-center gap-2">
                        <div className="col-lg-6">
                          <img src="./all_plans/east_facing/east_villa.jpg" className="w-100 rounded-4" alt="Anvita Parkside East Facing Villa" />
                        </div>
                        <div className="col-lg-6 text-center">
                          <SlideshowLightbox theme="lightbox">
                            <img src="./all_plans/east_facing/ground.jpg" style={{cursor: "pointer"}} className="w-100 rounded-4 shadow-sm" alt="East facing Ground FLoor Plan" />
                          </SlideshowLightbox>
                          <h5 className="futura fw-bold text-uppercase mt-2">Ground floor plan</h5>
                        </div>
                      </div>
                      <div className="d-lg-flex align-items-center gap-2">
                        <div className="col-lg-6 text-center">
                          <SlideshowLightbox theme="lightbox">
                            <img src="./all_plans/east_facing/firstFloor.jpg" style={{cursor: "pointer"}} className="w-100 rounded-4 shadow-sm" alt="East facing First FLoor Plan" />
                          </SlideshowLightbox>
                          <h5 className="futura fw-bold text-uppercase mt-2">first floor plan</h5>
                        </div>
                        <div className="col-lg-6 text-center">
                          <SlideshowLightbox theme="lightbox">
                            <img src="./all_plans/east_facing/secondFloor.jpg" style={{cursor: "pointer"}} className="w-100 rounded-4 shadow-sm" alt="East facing Second FLoor Plan" />
                          </SlideshowLightbox>
                          <h5 className="futura fw-bold text-uppercase mt-2">second floor plan</h5>
                        </div>
                      </div>
                    </div>
                
                    <div className="tab-content" id="tab2">
                      <h5 className="total_built_up_area text-uppercase mb-3 mb-lg-0">Total Built-up Area: 4188 Sft.</h5>
                      <div className="d-lg-flex align-items-center gap-2">
                        <div className="col-lg-6">
                          <img src="./all_plans/west_plan/west_villa.jpg" className="w-100 rounded-4" alt="Anvita Parkside West Facing Villa" />
                        </div>
                        <div className="col-lg-6 text-center">
                          <SlideshowLightbox theme="lightbox">
                            <img src="./all_plans/west_plan/ground.jpg" style={{cursor: "pointer"}} className="w-100 rounded-4 shadow-sm" alt="West facing Ground FLoor Plan" />
                          </SlideshowLightbox>
                            <h5 className="futura fw-bold text-uppercase mt-2">ground floor plan</h5>
                        </div>
                      </div>
                      <div className="d-lg-flex align-items-center gap-2">
                        <div className="col-lg-6 text-center">
                          <SlideshowLightbox theme="lightbox">
                            <img src="./all_plans/west_plan/firstFloor.jpg" style={{cursor: "pointer"}} className="w-100 rounded-4 shadow-sm" alt="West facing First FLoor Plan" />
                          </SlideshowLightbox>
                            <h5 className="futura fw-bold text-uppercase mt-2">first floor plan</h5>
                        </div>
                        <div className="col-lg-6 text-center">
                          <SlideshowLightbox theme="lightbox">
                            <img src="./all_plans/west_plan/secondFloor.jpg" style={{cursor: "pointer"}} className="w-100 rounded-4 shadow-sm" alt="West facing Second FLoor Plan" />
                          </SlideshowLightbox>
                            <h5 className="futura fw-bold text-uppercase mt-2">second floor plan</h5>
                        </div>
                      </div>
                    </div>
                
                    <div className="tab-content" id="tab3">
                      <h5 className="total_built_up_area text-uppercase mb-3 mb-lg-0">Total Built-up Area: 4201 Sft.</h5>
                      <div className="d-lg-flex align-items-center gap-2">
                        <div className="col-lg-6">
                          <img src="./all_plans/north_facing/north_villa.jpg" className="w-100 rounded-4" alt="Anvita Parkside North Facing Villa" />
                        </div>
                        <div className="col-lg-6 text-center">
                          <SlideshowLightbox theme="lightbox">
                            <img src="./all_plans/north_facing/ground.jpg" style={{cursor: "pointer"}} className="w-100 rounded-4 shadow-sm" alt="North facing Ground FLoor Plan" />
                          </SlideshowLightbox>
                            <h5 className="futura fw-bold text-uppercase mt-2">ground floor plan</h5>
                        </div>
                      </div>
                      <div className="d-lg-flex align-items-center gap-2">
                        <div className="col-lg-6 text-center">
                          <SlideshowLightbox theme="lightbox">
                            <img src="./all_plans/north_facing/firstFloor.jpg" style={{cursor: "pointer"}} className="w-100 rounded-4 shadow-sm" alt="North facing First FLoor Plan" />
                          </SlideshowLightbox>
                            <h5 className="futura fw-bold text-uppercase mt-2">first floor plan</h5>
                        </div>
                        <div className="col-lg-6 text-center">
                          <SlideshowLightbox theme="lightbox">
                            <img src="./all_plans/north_facing/secondFloor.jpg" style={{cursor: "pointer"}} className="w-100 rounded-4 shadow-sm" alt="North facing Second FLoor Plan" />
                          </SlideshowLightbox>
                            <h5 className="futura fw-bold text-uppercase mt-2">second floor plan</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="amenities"></div>
          {/* <!------------------FLOOR---PLAN---END------------------> */}
    </>
  )
}

export default AllPlans