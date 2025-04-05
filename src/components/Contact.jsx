import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {

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
      <section className="section_wrapper overflow-hidden">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1">
        <div className="col mt-5">
          <div className="position-relative line_animation">
            <h2 className="text-uppercase">Let's talk</h2>
            <div className="heading_line"></div>
          </div>
        </div>
      </div>
      </section>

      <div className="container-fluid px-0 overflow-hidden contact_bg mt-5 py-5">
        <section className="section_wrapper overflow-hidden">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1">
            
            <div className="col">
              <div className="form-container">
                <form>
                    <div className="form-inputs">
                        <input type="text" id="name" placeholder=" " required />
                        <label for="name">Enter your name</label>
                    </div>
                    <div className="form-inputs">
                        <input type="email" id="email" placeholder=" " required />
                        <label for="email">Enter your email</label>
                    </div>
                    <div className="form-inputs">
                        <input type="number" id="phone" placeholder=" " />
                        <label for="phone">Phone number</label>
                    </div>
                    <div className="form-inputs">
                        <textarea id="message" placeholder=" " required></textarea>
                        <label for="message">Your message</label>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact