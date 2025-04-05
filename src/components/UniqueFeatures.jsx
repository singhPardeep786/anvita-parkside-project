import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const UniqueFeatures = () => {

    useEffect(() => {
        function uniqueSlider() {
            // Clear any existing ScrollTrigger instances to prevent conflicts
            ScrollTrigger.getAll().forEach(st => st.kill());
            
            const translateValue = window.innerWidth > 992 ? "-503%" : "-510%";
            
            gsap.to('.unique_slider_content', {
                transform: `translateX(${translateValue})`,
                ease: "none",
                scrollTrigger: {
                    trigger: '.pin_container',
                    start: "top top",
                    end: `+=${window.innerHeight * 5}`,
                    scrub: 2,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });
        }
        
        // Initialize the slider
        uniqueSlider();
        
        // Add resize event listener to update animation on window resize
        window.addEventListener('resize', uniqueSlider);
        
        // Cleanup function
        return () => {
            window.removeEventListener('resize', uniqueSlider);
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);
    
  return (
    <>
        <section className="section_wrapper overflow-hidden my-5">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1">
                <div className="col">
                <div className="position-relative line_animation">
                    <h2 className="text-uppercase">unique <span className="maincolor ">features</span></h2>
                    <div className="heading_line"></div>
                </div>
                </div>
            </div>
        </section>
            <div className="container-fluid px-0 pin_container overflow-hidden">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1">
                <div className="col text-center">
                    <div className="unique_slider_main">
                        <div className="unique_slider">
                            <div className="unique_slider_content">
                                <div className="unique_image">
                                <img src="images/outdoors/Anvita Parkside_01 NEW.jpg" className="w-100 h-100 object-fit-cover" alt="first feature image" />
                                    <div className="text-white">
                                        <div className="feature_img" style={{backgroundColor: "var(--unique1transparent)"}}>
                                        <img src="./images/unique_features/1.jpg" alt="First feature" />
                                        <h5 className="mb-0 mt-2">75% Open spaces.</h5>
                                        <h5 className="mb-0">35 Acres out of 50 Acres</h5>
                                        <h5 className="mb-0">is open & landscaped spaces.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="unique_slider_content">
                                <div className="unique_image">
                                <img src="images/farming.jpg" className="w-100 h-100 object-fit-cover" alt="second feature image" />
                                <div className="text-white">
                                    <div className="feature_img" style={{backgroundColor: "var(--unique2transparent)"}}>
                                    <img src="./images/unique_features/2.jpg" alt="second feature" />
                                    <h5 className="mb-0 mt-2">Over 3.2 Acres</h5>
                                    <h5 className="mb-0">is reserved for</h5>
                                    <h5 className="mb-0">community farming.</h5>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="unique_slider_content">
                                <div className="unique_image">
                                <img src="images/outdoors/East Villa Evening View .jpg" className="w-100 h-100 object-fit-cover" alt="third feature image" />
                                <div className="text-white">
                                    <div className="feature_img" style={{backgroundColor: "var(--unique3transparent)"}}>
                                    <img src="./images/unique_features/3.jpg" alt="third feature" />
                                    <h5 className="mb-0 mt-2">800 Sq yards</h5>
                                    <h5 className="mb-0"> with 20 feet front yard</h5>
                                    <h5 className="mb-0">and 20 feet backyard.</h5>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="unique_slider_content">
                                <div className="unique_image">
                                <img src="images/outdoors/visitor Parking Day View .jpg" className="w-100 h-100 object-fit-cover" alt="fourth feature image" />
                                <div className="text-white">
                                    <div className="feature_img" style={{backgroundColor: "var(--unique4transparent)"}}>
                                    <img src="./images/unique_features/4.jpg" alt="fourth feature" />
                                    <h5 className="mb-0 mt-2">Over 200 dedicated</h5>
                                    <h5 className="mb-0"> Car Parking spaces </h5>
                                    <h5 className="mb-0">for visitors.</h5>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="unique_slider_content">
                                <div className="unique_image">
                                <img src="images/amenities.jpg" className="w-100 h-100 object-fit-cover" alt="fifth feature image" />
                                <div className="text-white">
                                    <div className="feature_img" style={{backgroundColor: "var(--unique5transparent)"}}>
                                    <img src="./images/unique_features/5.jpg" alt="fifth feature" />
                                    <h5 className="mb-0 mt-2">Over 75 Amenities,</h5>
                                    <h5 className="mb-0">including all outdoor sports</h5>
                                    <h5 className="mb-0">facilities are provided.</h5>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="unique_slider_content">
                                <div className="unique_image">
                                    <img src="images/clubhouse.jpg" className="w-100 h-100 object-fit-cover d-lg-block d-none" alt="sixth feature image" />
                                    <img src="images/mob_clubhouse.jpg" className="w-100 h-100 object-fit-cover d-lg-none d-block" alt="sixth feature image" />
                                    <div className="text-white">
                                        <div className="feature_img" style={{backgroundColor: "var(--unique6transparent)"}}>
                                        <img src="./images/unique_features/6.jpg" alt="sixth feature" />
                                        <h5 className="mb-0 mt-2">A Resort Like Clubhouse</h5>
                                        <h5 className="mb-0"> of Over 33,005 Sft. </h5>
                                        <h5>Spread Over 2.5 Acres.</h5>
                                        <p className="mb-0 futura">With 178 Car Parking Slots</p>
                                        <p className="mb-0 futura">and 148 two Wheeler Parking Slots</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UniqueFeatures