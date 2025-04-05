import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Amenities = () => {

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

    // Set CSS variables for the slider
    const sliderList = document.querySelector('.slider_list');
    if (sliderList) {
      const sliderItems = sliderList.querySelectorAll('.slider_item');
      const itemWidth = 500; // Width of each slider item
      const itemCount = sliderItems.length;
      
      document.documentElement.style.setProperty('--width', `${itemWidth}px`);
      document.documentElement.style.setProperty('--quantity', `${itemCount}`);
      
      // Set position variables for each slider item
      sliderItems.forEach((item, index) => {
        item.style.setProperty('--position', `${index + 1}`);
      });
    }
  }, [])
  
  return (
    <>
      <section className="section_wrapper overflow-hidden my-5 py-lg-5">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1">
        <div className="col">
          <div className="position-relative line_animation">
            <h2 className="text-uppercase">Amenities</h2>
            <div className="heading_line"></div>
          </div>
        </div>
        <div className="col text-center mt-5">
          <div className="amenities_slider">
            <div className="slider_list">
              <div className="slider_item">
                <div className="item_content">
                  <h3>Greenery</h3>
                  <div className="m-auto d-inline-block">
                    <ul className="text-start">
                      <li>Herb / Medicinal Garden</li>
                      <li>Trellis</li>
                      <li>Aroma Garden</li>
                      <li>Putting Green</li>
                      <li>Tree Desk Area</li>
                      <li>Mandala Farming</li>
                      <li>Fruit Orchard</li>
                      <li>Vegetable Beds</li>
                    </ul>
                  </div>
                  <div className="d-flex gap-2 mt-2 align-items-center justify-content-center">
                    <div className="col-6">
                      <img src="./images/amenities/greenery_1.jpg" className="rounded-3"  alt="greenery 1" />
                    </div>
                    <div className="col-6">
                      <img src="./images/amenities/greenery_2.jpg" className="rounded-3"  alt="greenery 2" />
                    </div>
                  </div>
                  <div className="d-flex mt-2 gap-2 align-items-center justify-content-center">
                    <div className="col-6">
                      <img src="./images/amenities/greenery_3.jpg" className="rounded-3"  alt="greenery 3" />
                    </div>
                    <div className="col-6">
                      <img src="./images/amenities/greenery_4.jpg" className="rounded-3"  alt="greenery 4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider_item">
                <div className="item_content">
                  <h3 style={{backgroundColor: " var(--community_bg)"}}>Community</h3>
                  <div className="m-auto d-inline-block">
                    <ul className="text-start">
                      <li>Dine Space <br /> Family Dine / Community Dine</li>
                      <li>Seating Spaces</li>
                      <li>Temple Complex</li>
                      <li>Amphitheatre With Loft Nets</li>
                      <li>Gazebo</li>
                      <li>Pet Park</li>
                    </ul>
                  </div>
                  <div className="d-flex gap-2 mt-2 align-items-center justify-content-center">
                    <div className="col-6">
                      <img src="./images/amenities/community_1.jpg" className="rounded-3"  alt="community 1" />
                    </div>
                    <div className="col-6">
                      <img src="./images/amenities/community_2.jpg" className="rounded-3"  alt="community 2" />
                    </div>
                  </div>
                  <div className="d-flex mt-2 gap-2 align-items-center justify-content-center">
                    <div className="col-6">
                      <img src="./images/seating_spaces.jpg" className="rounded-3"  alt="community 3" />
                    </div>
                    <div className="col-6">
                      <img src="./images/amenities/community_4.jpg" className="rounded-3"  alt="community 4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider_item">
                <div className="item_content">
                  <h3 style={{backgroundColor: "var(--health_bg)"}}>Health</h3>
                  <div className="m-auto d-inline-block">
                    <ul className="text-start">
                      <li>Gym Arena</li>
                      <li>Fitness Trail</li>
                      <li>Yoga Decks</li>
                      <li>Meditation Lawn</li>
                      <li>Sensory Walkway</li>
                      <li>Pool</li>
                    </ul>
                  </div>
                  <div className="d-flex gap-2 mt-2 align-items-center justify-content-center">
                    <div className="col-6">
                      <img src="./images/amenities/health_1.jpg" className="rounded-3"  alt="health 1" />
                      <img src="./images/amenities/health_2.jpg" className="rounded-3 mt-2"  alt="health 2" />
                    </div>
                    <div className="col-6">
                      <img src="./images/amenities/health_3.jpg" className="rounded-3"  alt="health 3" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider_item">
                <div className="item_content">
                  <h3 style={{backgroundColor: "var(--sports_bg)"}}>Sports</h3>
                  <div className="m-auto d-inline-block">
                    <ul className="text-start">
                      <li>Tennis Court</li>
                      <li>Volley Ball Court</li>
                      <li>Pickle Ball</li>
                      <li>Half Basketball Court</li>
                      <li>Cricket Practice Nets</li>
                      <li>Adventure Play Area</li>
                      <li>Skating Rink / Skateboard Park</li>
                      <li>Trim Trail</li>
                      <li>Toddler's Play Area</li>
                    </ul>
                  </div>
                  <div className="d-flex gap-2 mt-2 align-items-center justify-content-center">
                    <div className="col-6">
                      <img src="./images/children_play_area.jpg" className="rounded-3"  alt="sports 1" />
                    </div>
                    <div className="col-6">
                      <img src="./images/amenities/sports_2.jpg" className="rounded-3"  alt="sports 2" />
                    </div>
                  </div>
                  <div className="d-flex mt-2 gap-2 align-items-center justify-content-center">
                    <div className="col-6">
                      <img src="./images/amenities/sports_3.jpg" className="rounded-3"  alt="sports 3" />
                    </div>
                    <div className="col-6">
                      <img src="./images/amenities/sports_4.jpg" className="rounded-3"  alt="sports 4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider_item">
                <div className="item_content">
                  <h3 style={{backgroundColor: "var(--leisure_bg)"}}>Leisure</h3>
                  <div className="m-auto d-inline-block">
                    <ul className="text-start">
                      <li>Retention Pond</li>
                      <li>Miyawaki Forest</li>
                      <li>Birds Watch Tower</li>
                      <li>Kund / Stepped Well Baoli</li>
                      <li>Machan / Labyrinth</li>
                      <li>Rain Garden</li>
                      <li>Solar Gazebo</li>
                    </ul>
                  </div>
                  <div className="d-flex gap-2 mt-2 align-items-center justify-content-center">
                    <div className="col-6">
                      <img src="./images/amenities/leisure_1.jpg" className="rounded-3"  alt="leisure 1" />
                    </div>
                    <div className="col-6">
                      <img src="./images/amenities/leisure_2.jpg" className="rounded-3"  alt="leisure 2" />
                    </div>
                  </div>
                  <div className="d-flex mt-2 gap-2 align-items-center justify-content-center">
                    <div className="col-6">
                      <img src="./images/amenities/leisure_3.jpg" className="rounded-3"  alt="leisure 3" />
                    </div>
                    <div className="col-6">
                      <img src="./images/amenities/leisure_4.jpg" className="rounded-3"  alt="leisure 4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="clubhouse"></div>
      </div>
    </section>
    </>
  )
}

export default Amenities