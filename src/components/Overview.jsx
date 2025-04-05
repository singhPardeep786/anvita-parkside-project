import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Overview = () => {

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

  useEffect(()=>{
    function counterAnimation(){
      // Animate counter boxes fade in
      gsap.utils.toArray('.counter-box').forEach(box => {
       gsap.fromTo(box, 
           { opacity: 0, y: 50 },
           {
               opacity: 1,
               y: 0,
               duration: 0.2,
               scrollTrigger: {
                   trigger: box,
                   start: "top 80%",
                   onEnter: () => {
                       // Start counting for both counters
                       const counters = box.querySelectorAll('.counter');
                       counters.forEach(counter => startCounting(counter));
                   }
               }
           }
       );
    });
    
    function startCounting(counter) {
       const target = parseInt(counter.getAttribute('data-target'));
       const display = counter.querySelector('.counter-number') || counter;
       
       gsap.fromTo(display, 
           { innerText: 0 },
           {
               innerText: target,
               duration: 2,
               snap: { innerText: 1 }, // Ensures whole numbers
               ease: "power1.inOut"
           }
       );
    }
    }
    counterAnimation();
  }, [])
  
  return (
    <>
      <section className="section_wrapper overflow-hidden my-5 py-lg-5">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1">
          <div className="col">
            <div className="position-relative line_animation">
              <h2 className="text-uppercase">Overview</h2>
              <div className="heading_line"></div>
            </div>
          </div>
          <div className="col mt-5">
            <div className="overview_main p-5 px-lg-0">
              <div className="d-lg-flex justify-content-center gap-3">
                <div className="col-lg-3 mt-lg-0">
                  <div className="overview">
                    <div className="counter-box mb-0">
                      <div className="counter-title text-capitalize">project area:</div>
                      <div>
                        <div className="counter" data-target="3"><span className="counter-number">0</span><span className="counter-text ms-2">Acres</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mt-lg-0">
                  <div className="overview">
                    <div className="counter-box mb-0">
                      <div className="counter-title text-capitalize">No. of Units:</div>
                      <div>
                        <div className="counter" data-target="270"><span className="counter-number">0</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mt-lg-0">
                  <div className="overview">
                    <div className="counter-box mb-0">
                      <div className="counter-title text-capitalize">Type:</div>
                      <div className="counter-title text-capitalize type_text"> East, West & North facing</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-lg-flex justify-content-center gap-3">
                <div className="col-lg-3">
                  <div className="overview">
                    <div className="counter-box mb-0">
                      <div className="counter-title text-capitalize">open space:</div>
                      <div>
                        <div className="counter" data-target="75"><span className="counter-number">0</span><span className="counter-text ms-2">%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="overview">
                    <div className="counter-box mb-0">
                      <div className="counter-title text-capitalize">Resort like Clubhouse of over</div>
                      <div>
                        <div className="counter" data-target="33"><span className="counter-number">0</span><span className="counter-text ms-2">,</span></div>
                        <div className="counter" data-target="0"><span className="counter-number">0</span></div>
                        <div className="counter" data-target="0"><span className="counter-number">0</span></div>
                        <div className="counter" data-target="5"><span className="counter-number">0</span><span className="counter-text ms-2">Sft.</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="masterplan"></div>
    </>
  )
}

export default Overview