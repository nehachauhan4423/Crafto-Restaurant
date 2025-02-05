import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// icon start
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import React from 'react'
import { Link } from 'react-router-dom'
import "./Story.css"
// style 


function Story() {
  return (
    <div>
      {/* story page header strat  */}
      <div>
        <div className="storypage-header">
          <div className="col-12">
            <div className="story-main d-flex align-items-center">

              <div className="col-2">
                <div className="story-hedaer-img">
                  <img src="https://craftohtml.themezaa.com/images/demo-restaurant-logo-black@2x.png" alt="" srcset="" />
                </div>
              </div>

              <div className="col-8">
                <div className="story-menu align-items-center justify-content-center">
                  <ul className='d-flex align-items-center justify-content-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/story" style={{ color: "#888684" }}>Story</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/chefs">Chefs</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-2">
                <div className="story-button1 d-flex justify-content-end ">
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
          <div className="story-banner-text" align="center">
            <h1>Our story</h1>
            <h6>- Restaurant success -</h6>
          </div>
        </div>
      </div>
      {/* story page header end  */}

      {/* Our story start  */}
      <div className="our-story-img">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="our-img-img-img d-flex align-itmes-center justify-content-center">
                <img src="https://craftohtml.themezaa.com/images/demo-restaurant-story-01.jpg" alt="" srcset="" />
              </div>
            </div>
            <div className="our-img-img-con">
              <h2>Our Story</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Our Story end  */}

      {/* our last 16 years start  */}
      <div className="our-last-16-years">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 align="center">- our last 16 years journey -</h6>
              <h2 align="center">We are aparte a young and beautiful team <br /> with a passion for tasty and traditional food <br /> Rediscovering and relieving traditional <br /> romanian delicacies.</h2>
              <div className="our-last-16-years-img d-flex align-items-center justify-content-center">
                <img src="https://craftohtml.themezaa.com/images/demo-restaurant-story-02.jpg" alt="" srcset="" />
                <img src="https://craftohtml.themezaa.com/images/demo-restaurant-story-03.jpg" alt="" srcset="" />
                <img src="https://craftohtml.themezaa.com/images/demo-restaurant-story-04.jpg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our last 16 years end  */}

      {/* Awards and honours strat  */}
      <div className="award-and-h">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 align="center">- Awards and honours -</h6>
              <h2 align="center">Achievements</h2>
              <div className="award-and-h-main d-flex align-items-center justify-content-center" align="center">

                <div className="col-3">
                  <div className="award-and-h-img1">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-award-01.jpg" alt="" />
                    <p>Restaurant choice <br /> award - <span>2017 </span> </p>
                  </div>
                </div>

                <div className="col-3">
                  <div className="award-and-h-img2">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-award-03.jpg" alt="" />
                    <p>Luxury restaurant <br /> award - <span>2019 </span> </p>
                  </div>
                </div>

                <div className="col-3">
                  <div className="award-and-h-img3">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-award-02.jpg" alt="" />
                    <p>British best kebab <br /> award - <span>2020</span> </p>
                  </div>
                </div>

                <div className="col-3">
                  <div className="award-and-h-img4">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-about-award-04.jpg" alt="" />
                    <p>Good food taste <br /> award   - <span>2021 </span> </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Awards and honours end  */}

      {/* tripadvisor start  */}
      <div className="tripadvisor">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tripadvisor-main d-flex align-items-center justify-content-center" align="center">
                <h6>25,000+ <span>happy food lovers</span> visited our restaurant.</h6>&nbsp;<img src="https://craftohtml.themezaa.com/images/demo-hotel-and-resort-client-01.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tripadvisor end  */}

      
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


      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
    </div>
  )
}
export default Story