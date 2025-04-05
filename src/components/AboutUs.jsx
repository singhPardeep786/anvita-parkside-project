import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Icon } from "@iconify-icon/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useEffect(() => {
    function headingLineAnimation() {
      const line = document.querySelectorAll(".heading_line");
      line.forEach((line) => {
        gsap.fromTo(
          line,
          {
            width: "0",
          },
          {
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
            },
          }
        );
      });
    }
    headingLineAnimation();
  }, []);

  return (
    <>
      <section className="section_wrapper overflow-hidden mb-5">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1">
          <div className="col mt-5">
            <div className="position-relative line_animation">
              <h2 className="text-uppercase">about us</h2>
              <div className="heading_line"></div>
            </div>
          </div>
          <div className="col text-center">
            <div className="d-lg-flex align-items-center justify-content-center position-relative">
              <div className="col-lg-6 mt-5 text-start">
                <div className="about rounded-4">
                  <div className="about_logo">
                    <img
                      src="./images/anvita_logo.png"
                      className="w-100"
                      alt="Anvita Logo"
                    />
                  </div>
                  <p className="futura mt-3">
                    Our leadership believes to lead by example, setting the
                    highest standards for integrity, transparency, and
                    accountability.
                  </p>
                  <p className="futura">
                    The leadership team is driven to provide exceptional service
                    to the clients, creating a culture of excellence, and
                    driving innovation and growth within the organization. The
                    leadership believes in staying ahead of the curve in terms
                    of technology, tools, techniques, and resources due to which
                    today, Anvita Group has evolved as prominent player in the
                    regional front and carved a niche for itself.
                  </p>
                  <p className="futura">
                    The leadership creates a culture of trust and respect, to
                    foster a collaborative environment that encourages
                    creativity and innovation.
                  </p>

                  <a
                    href="https://www.anvitagroup.com/"
                    target="_blank"
                    className="text-decoration-none know_more overflow-hidden futura"
                  >
                    Know More
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mt-5">
                <h5 className="text-uppercase">our other ongoing projects</h5>
                <Swiper
                  modules={[Pagination, EffectFade, Autoplay, Navigation]}
                  pagination={{
                    clickable: true,
                    type: "bullets",
                    bulletElement: "span",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  speed={1200}
                  className="mySwiper2 pb-3"
                  spaceBetween={10}
                  autoplay={{
                    delay: 2700,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                >
                  <SwiperSlide className="rounded-4 overflow-hidden">
                      <div className="more_projects position-relative">
                        <a href="https://anvitahigh9.com/" target="_blank">
                          <img
                            src="./images/high9.jpg"
                            className="w-100"
                            alt="high9 Image"
                          />
                        </a>
                        <img
                          src="./images/high9_logo.jpg"
                          className="more_projects_logo"
                          alt="high9 LOGO"
                        />
                      </div>
                  </SwiperSlide>
                  <SwiperSlide className="rounded-4 overflow-hidden">
                      <div className="more_projects position-relative">
                        <a href="https://anvitaivana.in/" target="_blank">
                          <img
                            src="./images/ivana.jpg"
                            className="w-100"
                            alt="ivana Image"
                          />
                        </a>
                        <img
                          src="./images/ivana_logo.jpg"
                          className="more_projects_logo"
                          alt="ivana LOGO"
                        />
                      </div>
                  </SwiperSlide>
                  <div className="about_btns">
                    <div className="swiper-button-next">
                      <Icon
                        icon="bitcoin-icons:arrow-right-outline"
                        className="intro_right_arrow"
                      />
                    </div>
                    <div className="swiper-button-prev">
                      <Icon
                        icon="bitcoin-icons:arrow-left-outline"
                        className="intro_left_arrow"
                      />
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact"></div>
    </>
  );
};

export default AboutUs;
