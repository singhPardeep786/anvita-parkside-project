import React, { useEffect } from 'react'
import gsap from 'gsap'
import {SlideshowLightbox} from 'lightbox.js-react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Clubhouse = () => {

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
      {/* <!------------------CLUBHOUSE---AND---ITS---AMENITIES---START------------------> */}

      <section className="section_wrapper overflow-hidden my-5">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1">
          <div className="col">
            <div className="position-relative line_animation">
              <h2 className="text-uppercase">clubhouse</h2>
              <div className="heading_line"></div>
            </div>
          </div>
          <div className="col pb-lg-5">
            <div className="d-lg-flex align-items-center justify-content-center gap-3">
              <div className="col-lg-5 mt-5">
                <div className="clubhouse_content">
                  <h3>From embracing a natural to rened modern lifestyle</h3>
                  <p className="futura">Embark on a holistic journey towards improved well-being. Whether
                    you are seeking fitness, relaxation, or rejuvenation, Northridge has
                    something to offer for everyone. Every aspect has been meticulously
                    designed to provide a complete wellness experience, from the stateof-the-art pool to the invigorating outdoor fitness areas.</p>
                </div>
                <img src="./images/clubhouse_&_amenities/clubhouse.jpg" className="w-100 rounded-3" alt="Anvita Parkside clubhouse" />
              </div>
              <div className="col-lg-5 mt-5">
                <img src="./images/clubhouse_&_amenities/clubhouse_front_view.jpg" className="w-100 rounded-3" alt="Anvita Parkside clubhouse" />
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <div className="position-relative line_animation">
              <h2 className="text-uppercase">clubhouse amenities</h2>
              <div className="heading_line"></div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 p-lg-5">
          <div className="col text-center">
            <div className="clubhouse_amenities mt-lg-0 shadow">
              <div className="clubhouse_amenities_icon">
                <img src="./images/icons/swimmer.gif" className="w-100" alt="swimming pool icon" />
              </div>
              <div className="clubhouse_amenities_content">
                <h4 className="mt-3">From getting t <br /> to staying healthy</h4>
                <p className="futura mb-0">Embark on a holistic journey towards improved well-being. Whether
                  you are seeking fitness, relaxation, or rejuvenation, Northridge has
                  something to offer for everyone. Every aspect has been meticulously
                  designed to provide a complete wellness experience, from the stateof-the-art pool to the invigorating outdoor fitness areas.</p>
              </div>
              <SlideshowLightbox theme="lightbox">
                <img src="./images/swimming_pool.jpg" className="w-100 amenities_bg_img h-100" alt="swimming pool" />
              </SlideshowLightbox>
            </div>
          </div>
          <div className="col text-center">
            <div className="clubhouse_amenities mt-lg-0 shadow">
              <div className="clubhouse_amenities_icon">
                <img src="./images/icons/hall.gif" className="w-100" alt="hall icon" />
              </div>
              <div className="clubhouse_amenities_content">
                <h4 className="mt-3">From hosting celebrations <br /> to making connections</h4>
                <p className="futura mb-0">Celebrate special occasions and community events in a lavish setting
                  and make memories amidst nature. The banquet hall, with a cozy and
                  expansive setting, is a destination for every occasion and makes every
                  moment a celebration of indulgence and tranquility.</p>
              </div>
              <SlideshowLightbox theme="lightbox">
                <img src="./images/clubhouse_&_amenities/banquet_hall.jpg" className="w-100 amenities_bg_img h-100" alt="banquet hall" />
              </SlideshowLightbox>
            </div>
          </div>
          <div className="col text-center">
            <div className="clubhouse_amenities mt-lg-0 shadow">
              <div className="clubhouse_amenities_icon">
                <img src="./images/icons/restaurant.gif" className="w-100" alt="restaurant icon" />
              </div>
              <div className="clubhouse_amenities_content">
                <h4 className="mt-3">From savouring healthy <br /> bites to refreshing drinks</h4>
                <p className="futura mb-0">Refuel and refresh with a snack, beverage or indulge in a delightful feast with
                  your loved ones without leaving your home. The restaurant in the community
                  is a place to stop for a quick cup of coffee or fuel up on the way to work.</p>
              </div>
              <SlideshowLightbox theme="lightbox">
                <img src="./images/clubhouse_&_amenities/restaurant.jpg" className="w-100 amenities_bg_img h-100" alt="restaurant" />
              </SlideshowLightbox>
            </div>
          </div>
          <div className="col text-center">
            <div className="clubhouse_amenities shadow">
              <div className="clubhouse_amenities_icon">
                <img src="./images/icons/gym.gif" className="w-100" alt="gym icon" />
              </div>
              <div className="clubhouse_amenities_content">
                <h4 className="mt-3">From living <br /> a t to healthy lifestyle</h4>
                <p className="futura mb-0">Feel inspired to make a change in your life and set an example for all
                  of those around you. Stay with and live a healthy lifestyle with the stateof-the-art fitness center inside the clubhouse, offering weights,
                  machines, cardio equipment, and stunning resort like atmosphere.</p>
              </div>
              <SlideshowLightbox theme="lightbox">
                <img src="./images/clubhouse_&_amenities/gym.jpg" className="w-100 amenities_bg_img h-100" alt="Gym" />
              </SlideshowLightbox>
            </div>
          </div>
          <div className="col text-center">
            <div className="clubhouse_amenities shadow">
              <div className="clubhouse_amenities_icon">
                <img src="./images/icons/chess.gif" className="w-100" alt="indoor games icon" />
              </div>
              <div className="clubhouse_amenities_content">
                <h4 className="mt-3">From playing engaging <br /> to entertaining games</h4>
                <p className="futura mb-0">Fight the boredom of staying inside with fun and entertaining games
                  and activities for kids of all ages. Whether it is a rainy or sunny day
                  that keeps you stuck inside or you are looking for an indoor game for
                  a party, Northridge has all the fun ideas.</p>
              </div>
              <SlideshowLightbox theme="lightbox">
                <img src="./images/clubhouse_&_amenities/indoor_games.jpg" className="w-100 amenities_bg_img h-100" alt="indoor games" />
              </SlideshowLightbox>
            </div>
          </div>
          <div className="col text-center">
            <div className="clubhouse_amenities shadow">
              <div className="clubhouse_amenities_icon">
                <img src="./images/icons/yoga.gif" className="w-100" alt="Yoga icon" />
              </div>
              <div className="clubhouse_amenities_content">
                <h4 className="mt-3">From stretching to <br /> strengthening</h4>
                <p className="futura mb-0">Rediscover the purest kind of tranquillity and connection with your
                  inner self at Northridge. The Yoga Lawn creates the right atmosphere
                  that is essential to the journey of attaining equilibrium of the mind,
                  body and soul.</p>
              </div>
              <SlideshowLightbox theme="lightbox">
                <img src="./images/clubhouse_&_amenities/yoga.jpg" className="w-100 amenities_bg_img h-100" alt="Yoga" />
              </SlideshowLightbox>
            </div>
          </div>
          <div className="col text-center">
            <div className="clubhouse_amenities shadow">
              <div className="clubhouse_amenities_icon">
                <img src="./images/icons/spa.gif" className="w-100" alt="SPA icon" />
              </div>
              <div className="clubhouse_amenities_content">
                <h4 className="mt-3">From relaxing massages to <br /> rejuvenating body treatments</h4>
                <p className="futura mb-0">Spend the day relaxing in the comfort of your own personal haven.
                  The in-house Spa, with an array of beauty treatments and
                  massages tailored to your needs, will leave you feeling refreshed
                  and renewed everyday.</p>
              </div>
              <SlideshowLightbox theme="lightbox">
                <img src="./images/clubhouse_&_amenities/spa.jpg" className="w-100 amenities_bg_img h-100" alt="SPA" />
              </SlideshowLightbox>
            </div>
          </div>
          <div className="col text-center">
            <div className="clubhouse_amenities shadow">
              <div className="clubhouse_amenities_icon">
                <img src="./images/icons/doctor.gif" className="w-100" alt="doctor icon" />
              </div>
              <div className="clubhouse_amenities_content">
                <h4 className="mt-3">From personalized to <br /> community healthcare</h4>
                <p className="futura mb-0">Enjoy a dedicated space that addresses your healthcare needs whether it
                  is just a normal health check up or emergency service. Improving the
                  health of patients and residents, the clinic with an attached pharmacy
                  store cares for the community, every moment, every day.</p>
              </div>
              <SlideshowLightbox theme="lightbox">
                <img src="./images/clubhouse_&_amenities/consultant.jpg" className="w-100 amenities_bg_img h-100" alt="consultant" />
              </SlideshowLightbox>
            </div>
          </div>
          <div className="col text-center">
            <div className="clubhouse_amenities shadow">
              <div className="clubhouse_amenities_icon">
                <img src="./images/icons/children.gif" className="w-100" alt="children icon" />
              </div>
              <div className="clubhouse_amenities_content">
                <h4 className="mt-3">From tiny toddlers <br /> to playful preschoolers</h4>
                <p className="futura mb-0">Create a social setting that can inspire and nurture the growing
                  minds. Catering to the varying needs of working parents, the
                  dedicated creche helps the kids in their physical and mental growth
                  while giving the parents a feeling of comfort.</p>
              </div>
              <SlideshowLightbox theme="lightbox">
                <img src="./images/clubhouse_&_amenities/creche.jpg" className="w-100 amenities_bg_img h-100" alt="creche" />
              </SlideshowLightbox>
            </div>
          </div>
          <div className="col text-center">
            <div className="clubhouse_amenities shadow">
              <div className="clubhouse_amenities_icon">
                <img src="./images/icons/store.gif" className="w-100" alt="store icon" />
              </div>
              <div className="clubhouse_amenities_content">
                <h4 className="mt-3">From leisurely shopping to <br /> convenience of time</h4>
                <p className="futura mb-0">Shop for your daily needs and also save time while doing it.
                  Making groceries and essential supplies needed for your
                  home available, the convenience store brings comfort and
                  connection to the community.</p>
              </div>
              <SlideshowLightbox theme="lightbox">
                <img src="./images/clubhouse_&_amenities/store.jpg" className="w-100 amenities_bg_img h-100" alt="store" />
              </SlideshowLightbox>
            </div>
          </div>
          <div className="col text-center">
            <div className="clubhouse_amenities shadow">
              <div className="clubhouse_amenities_icon">
                <img src="./images/icons/sleep.gif" className="w-100" alt="sleep icon" />
              </div>
              <div className="clubhouse_amenities_content">
                <h4 className="mt-3">From creating <br /> privacy to a homelike feel</h4>
                <p className="futura mb-0">Give guests the opportunity to indulge in the best, feel at their best,
                  and relax in style. The guest cottages at Northridge are created
                  with a harmonious blend of comfort and style, with each room
                  exuding a sense of warmth and sophistication.</p>
              </div>
              <SlideshowLightbox theme="lightbox">
                <img src="./images/clubhouse_&_amenities/guest_room.jpg" className="w-100 amenities_bg_img h-100" alt="guest room" />
              </SlideshowLightbox>
            </div>
          </div>
        </div>
      </section>

      {/* <!------------------CLUBHOUSE---AND---ITS---AMENITIES---END------------------> */}
      <div id="location"></div>
    </>
  )
}

export default Clubhouse