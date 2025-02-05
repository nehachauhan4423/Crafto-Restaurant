import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// react icons 
import { BsChatQuote } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlCallOut } from "react-icons/sl";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
// style 
import React from 'react'
import { Link } from 'react-router-dom'
import "./About.css"


function About() {
  return (
    <div>

      {/* about header start  */}
      <div className="about-header">
        {/* <div className="container">
          <div className="row"> */}
        <div className="col-12">
          <div className="About-main d-flex align-items-center">

            <div className="col-2">
              <div className="about-hedaer-img">
                <img src="https://craftohtml.themezaa.com/images/demo-restaurant-logo-black@2x.png" alt="" srcset="" />
              </div>
            </div>

            <div className="col-8">
              <div className="about-menu align-items-center justify-content-center">
                <ul className='d-flex align-items-center justify-content-center'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about" style={{ color: "#888684" }}>About</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                  <li><Link to="/story">Story</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/chefs">Chefs</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-2">
              <div className="about-button1 d-flex justify-content-end ">
                <button>
                  <div className="default-btn">
                    <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="0" width="00"></svg>
                    <span>Book a table</span>
                  </div>
                  <div className="hover-btn">
                    <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="0" width="0" viewBox="0 0 24 24"></svg>
                    <span>Book a now</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="about-banner-text" align="center">
          <h1>About us</h1>
          <h6>- Luxury restaurant -</h6>
        </div>
      </div>
      {/* about header end  */}

      {/* about-img start  */}
      <div className="aboutpage-aimg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="aboutpage-ai-main d-flex">
                <div className="col-3">
                  <div className="aboutpage-ai-img-1 d-flex justify-content-center">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-01.jpg" alt="" srcset="" />
                  </div>
                </div>
                <div className="col-9">
                  <div className="aboutpage-ai-img-2 d-flex justify-content-start">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-02.jpg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about-img end */}

      {/* aboutpage-aimg-main2 start  */}
      <div className="aboutpage-aimg-main2 d-flex">
        <div className="aboutpage-aimg-main-img1">
          <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-03.jpg" alt="" srcset="" />
        </div>

        <div className="aboutpage-aimg-main-con-main d-flex align-items-center justify-content-center">
          <i><BsChatQuote /></i>
          <div className="aboutpage-aimg-main-con-1">
            <h6>The food you eat can be either the <br /> safest and most powerful medicine or <br /> the <span>slowest form of poison.</span></h6>
            <h5>- Alexander harvard</h5>
          </div>
        </div>

      </div>
      {/* aboutpage-aimg-main2 end  */}

      {/* experience original start  */}
      <div className="experience-original">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="experience-original-main d-flex justify-content-center align-items-center">
                <div className="col-5">
                  <div className="experience-original-con justify-content-center ">
                    <h6> ______&nbsp;&nbsp; About restaurant</h6>
                    <h2>experience original <br /> food teste of italy.</h2>
                    <p>Lorem ipsum dolor sit amet adipiscing elit do <br /> eiusmod tempor incididunt ut labore et dolore <br /> magna minim veniam nostrud exercitation.</p>

                    <div className="experience-original-con-box d-flex align-items-center">
                      <h2>4.8</h2>
                      <div className="experience-original-box-star">
                        <i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>
                        <h6>Review by Google</h6>
                      </div>
                    </div>

                    <h5><i><FaHeart /></i>&nbsp;Authentic cultural experience.</h5>
                  </div>
                </div>

                <div className="col-7">
                  <div className="experience-original-img align-items-center justify-content-center">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-05.jpg" alt="" />
                  </div>
                </div>
              </div>

              <div className="experience-pos-img-main">
                <div className="experience-pos-img-1">
                  <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-04.jpg" alt="" srcset="" />
                </div>
                <div className="experience-pos-img-2">
                  <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-11.png" alt="" srcset="" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* experience original end  */}

      {/* Restaurant facilities start  */}
      <div className="restaurant-facilities">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="restaurant-facilities-main" align="center">
                <h6>- Restaurant facilities -</h6>
                <h2>Restaurant special</h2>
                <div className="restaurant-facilities-img d-flex align-items-center justify-content-center">
                  <div className="col-4">
                    <div className="restaurant-facilities-img-1">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-06.jpg" alt="" srcset="" />
                      <div className="restaurant-facilities-img-con">
                        <h6>Private Dining</h6>
                        <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="restaurant-facilities-img-2">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-07.jpg" alt="" srcset="" />
                      <div className="restaurant-facilities-img-con">
                        <h6>The Raw Bar</h6>
                        <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="restaurant-facilities-img-3">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-08.jpg" alt="" srcset="" />
                      <div className="restaurant-facilities-img-con">
                        <h6>Outdoor catering</h6>
                        <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Restaurant facilities end  */}


      {/* Awesome dining start  */}
      <div className="about-page-marquee">
        <div class="marquee">
          <h6>
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
          </h6>
          <h6>
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
          </h6>
        </div>
      </div>
      <div className="awesome-dining">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="awsome-dining-main d-flex align-items-center">
                <div className="col-6">
                  <div className="awsome-dining-img">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-10.jpg" alt="" srcset="" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="awsome-dining-con">
                    <h6> _________ since 1988 restaurant </h6>
                    <h2>Awesome dining,<br /> Delicious food.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> do eiusmod tempor incididunt ut labore et dolore <br /> magna minim veniam nostrud exercitation.</p>

                    <div className="awsome-dining-button-main d-flex">
                      <div className="awsome-dining-button-1">
                        <button>
                          <div className="default-btn">
                            <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="0" width="00"></svg>
                            <span>Restaurant story</span>
                          </div>
                          <div className="hover-btn">
                            <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="0" width="0" viewBox="0 0 24 24"></svg>
                            <span>Restaurant book</span>
                          </div>
                        </button>
                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="awsome-dining-button-2">
                        <h6><i><SlCallOut /> </i> 1-800-222-000</h6>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="awsome-dining-position d-flex align-items-center justify-content-center">
                  <i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>&nbsp;&nbsp;
                  <p> <span>25,000+ happy food lovers</span> visited our authentic restaurant.</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* Awesome dining end  */}

      {/* Awards and honours start  */}
      <div className="awards-and-honours">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="award-and-honours-main d-flex align-items-center justify-content-center">
                <div className="col-4">
                  <div className="award-and-honours-con">
                    <h6>- Awards and honours</h6>
                    <h2>Achievements</h2>
                  </div>
                </div>
                <div className="col-8">
                  <div className="award-and-honours-img">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-award-01.jpg" alt="" srcset="" />
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-award-02.jpg" alt="" srcset="" />
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-award-03.jpg" alt="" srcset="" />
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-award-04.jpg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Awards and honours end  */}



      {/* Footer start */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-main d-flex align-items-center justify-content-center mt-3">
                <div className="col-3">
                  <div className="footer-c1" align="center">
                    <h5><MdOutlineMessage /></h5>
                    <h6>About restaurant</h6>
                    <p>Enjoy a wonderful cafe <br /> dining experience</p>
                  </div>
                </div>

                <div className="col-3">
                  <div className="footer-c2" align="center">
                    <h5><IoCallOutline /></h5>
                    <h6>Let's talk</h6>
                    <p>Phone: 1-800-222-000 <br />Fax: 1-800-222-002</p>
                  </div>
                </div>

                <div className="col-3">
                  <div className="footer-c3" align="center">
                    <h5><HiOutlineMailOpen /></h5>
                    <h6>Book a table</h6>
                    <a href="">info@yourdomain.com</a><br />
                    <a href="">hr@yourdomain.com</a>
                  </div>
                </div>

                <div className="col-3">
                  <div className="footer-c4" align="center">
                    <h5><IoLocationOutline /></h5>
                    <h6>Contact us</h6>
                    <p>Lorem ipsum consectetur <br /> adipiscing onsectetur.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="copy-write">
          <div className="copy-write-main d-flex align-items-center justify-content-center">
            <div className="col-4" align="center">
              <h6>© Copyright <span>2024</span></h6>
            </div>
            <div className="col-4" align="center">
              <img src="https://craftohtml.themezaa.com/images/demo-restaurant-logo-black@2x.png" alt="" />
            </div>
            <div className="col-4" align="center">
              <div className="footer-icons">
                <a href="https://www.facebook.com/" target='_blank'><FaFacebookF /></a>
                <a href="https://dribbble.com/"target='_blank'><FaDribbble /></a>
                <a href="https://x.com/?mx=2" target='_blank'><FaTwitter /></a>
                <a href="https://www.instagram.com/" target='_blank'><IoLogoInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end  */}



    </div>
    //   </div>
    // </div>
  )
}

export default About