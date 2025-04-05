import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Icon } from '@iconify-icon/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {

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
    function circleRotate(){
      const centerLogo = document.querySelector('.center_logo');
      gsap.to(centerLogo,{
        rotation: 360,
        ease: "none",
        duration: 3,
        scrollTrigger: {
          scroller: "body",
          trigger: centerLogo,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          // markers:true
        }
      })
    }
    circleRotate()
  }, [])
  
  return (
    <>
      <section className="section_wrapper overflow-hidden my-lg-5 py-lg-5">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1">
          <div className="col mt-5">
            <div className="position-relative line_animation">
              <h2 className="text-uppercase">Experience the <span className="maincolor ">difference</span> you only get with <span className="maincolor"> Parkside</span></h2>
              <div className="heading_line"></div>
            </div>
          </div>
            <div className="col mt-5">
                <div className="intro_second_main">
                  <div className="d-lg-flex align-items-center h-100">

                    <div className="col-lg-6 d-none- d-lg-block"></div>

                    <div className="col-lg-6">
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="intro_second_content">
                          <p className="futura fw-bold">Step into a world of opulence, while still
                            being cocooned in nature. With
                            meticulously designed villaments that reflect
                            your taste, Anvita Parkside ensures
                            maximum privacy, unparalleled luxury,
                            allowing you to immerse yourself in the
                            idyllic surroundings.</p>
    
                            <Swiper
                              modules={[Pagination, EffectFade, Autoplay, Navigation]}
                              pagination={{
                                clickable: true,
                                type: 'bullets',
                                bulletElement: 'span',
                                bulletClass: 'swiper-pagination-bullet',
                                bulletActiveClass: 'swiper-pagination-bullet-active',
                              }}
                              navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                              }}
                              speed={1200}
                              className='mySwiper2 pb-3'
                              spaceBetween={10}
                              autoplay={{
                                delay: 2700,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                              }}
                              loop={true}
                            >
                              <SwiperSlide>
                                <div className="img_box">
                                  <img src="./images/outdoors/Entrance Gate Day View .jpg" className="w-100" alt="entrance" />
                                  <h5 className="mt-3 maincolor text-capitalize">NESTLE IN NATURE</h5>
                                  <h5>Imagine Anvita Parkside!</h5>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="img_box">
                                  <img src="./images/harvesting.jpg" className="w-100" alt="open spaces" />
                                  <h5 className="mt-3 maincolor">75% Open spaces. </h5>
                                  <h5>35 Acres out of 50 Acres is open & landscaped spaces.</h5>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="img_box">
                                  <img src="./images/outdoors/Backyard Day View .jpg" className="w-100" alt="Backyard Day view" />
                                  <h5 className="mt-3 maincolor">800 Sq yards</h5>
                                  <h5>with 20 feet front yard and 20 feet backyard.</h5>
                                </div>
                              </SwiperSlide>
                              <div className="intro_btns">
                                <div className="swiper-button-next">
                                  <Icon icon="bitcoin-icons:arrow-right-outline" className="intro_right_arrow" />
                                </div>
                                <div className="swiper-button-prev">
                                  <Icon icon="bitcoin-icons:arrow-left-outline" className="intro_left_arrow" />
                                </div>
                              </div>
                            </Swiper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 align-items-center">
          <div className="col mt-5">
            <div className="next_intro_content">
              <div className="anvita_intro_logo">
                <img src="./images/logo.png" className="w-100" alt="anvita parkside logo" />
              </div>
              <h3 className="mt-3">Experience the difference you only get with Parkside</h3>
              <p className="futura">Step into a world of opulence, while still being cocooned
                in nature. With meticulously designed villaments that
                reflect your taste, Anvita Parkside ensures maximum
                privacy, unparalleled luxury, allowing you to immerse
                yourself in the idyllic surroundings.</p>

               <div>
                <h3>What makes Anvita Parkside so unique?</h3>
                <ul className="px-4 list">
                  <li>Eco-friendly community with more than 75% open spaces</li>
                  <li>Only 270 unique Villaments spread over 50 acres.</li>
                  <li>Every Villament has a 20 Feet Front Yard and Backyard.</li>
                  <li>Solar Powered Homes.</li>
                  <li>2.4 acre Resort like Clubhouse with abundant parking.</li>
                  <li className="mb-0">Holistic, environmentally self-sustaining and health-centric Community.</li>
                </ul>
               </div> 
            </div>
          </div>
          <div className="col mt-5">
            <div className="percent">
              <img src="./images/75%.png" className="w-100" alt="75 percent" />
            </div>
            <img src="./images/intro_section_imgs/waiting_area.jpg" className="w-100 rounded-4" alt="waiting area" />
          </div>
        </div>

         {/* <!------------------CIRCLE---START------------------> */}

            <section className="section_wrapper overflow-hidden w-100 mt-5">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1">
                <div className="col">
                  <div className="circle_main">
                    <div className="circle position-relative d-flex align-items-center justify-content-center h-100">
                      <div className="center_logo"></div>
                      <img src="./images/logo.png" alt="Anvita Parkside Logo in circle" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
          {/* <!------------------CIRCLE---END------------------> */}
        
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 align-items-center">
          <div className="col mt-5 d-none d-lg-block">
            <img src="./images/outdoors/open_area.jpg" className="w-100 rounded-4" alt="waiting area" />
          </div>
          <div className="col mt-5">
            <div className="next_intro_content2">
              <h3 className="mt-3">From a warm welcome to enhanced comfort</h3>
              <p className="futura">Embrace avant-garde architectural elements that leave
                a lasting impression and feel instant peace the moment
                you enter the community. Creating a safe and
                accessible environment, the entrance is an embodiment
                of elegance, with its sleek lines, natural textures, and
                carefully curated artwork.</p>
            </div>
          </div>
          <div className="col mt-5 d-block d-lg-none">
            <img src="./images/outdoors/open_area.jpg" className="w-100 rounded-4" alt="waiting area" />
          </div>
        </div>
        <div id="overview"></div>
    </section>
    </>
  )
}

export default Intro