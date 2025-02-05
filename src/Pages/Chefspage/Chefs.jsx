import React from 'react'
import { Link } from 'react-router-dom'
import "./Chefs.css"
// icons 
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaDribbble } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
// import { FaTwitter } from "react-icons/fa";

function Chefs() {
  return (
    <div>
      <div className="chefs-header-page">
        {/* chefs header start  */}
        <div className="col-12">
          <div className="chefs-main d-flex align-items-center">

            <div className="col-2">
              <div className="chefs-hedaer-img">
                <img src="https://craftohtml.themezaa.com/images/demo-restaurant-logo-black@2x.png" alt="" srcset="" />
              </div>
            </div>

            <div className="col-8">
              <div className="chefs-menu align-items-center justify-content-center">
                <ul className='d-flex align-items-center justify-content-center'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                  <li><Link to="/story">Story</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/chefs" style={{ color: "#888684" }}>Chefs</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-2">
              <div className="chefs-button1 d-flex justify-content-end ">
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
        <div className="chefs-banner-text" align="center">
          <h1>Best chef</h1>
          <h6>- Meet professionals -</h6>
        </div>
      </div>


      {/* chefs-img-section start  */}
      <div className="chefs-img-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="chefs-img-section-main d-flex align-items-center justify-content-center">
                <div className="col-7">
                  <div className="chefs-img-section-main-img d-flex align-items-center justify-content-center">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-07.jpg" alt="" />
                  </div>
                </div>
                <div className="col-5">
                  <div className="chef-img-section-main-con">
                    <h2>Herman miller</h2>
                    <h6>Head chef and owner</h6>
                    <p>Lorem ipsum amet consectetur pellentesque <br /> blandit  ultrices purus suspendisse iaculis <br /> ultricies sagittis. Proin vulputate eleifend cras <br /> lacinia iaculis feugiat egestas neque sodales.</p>
                    <div className="chef-img-section-sign">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-08.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* chefs-img-section end  */}


      {/* professional-chefs start  */}
      <div className="professional-chefs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 align="center">- Professional chef -</h6>
              <h2 align="center">Heart of kitchen</h2>

              <div class="profeccional-chefs-img-row-1">
                {/* <!-- Chef 1 --> */}
                <div class="chef-card">
                  <div class="image-wrapper">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-01.jpg" alt="John Richards" />
                    <div class="hover-content">
                      <div class="social-icons">
                        <a href="https://www.facebook.com/" target='_blank'><FaFacebookF /></a>
                        <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
                        <a href="https://x.com/?lang=en" target='_blank'><FaTwitter /></a>
                      </div>
                    </div>
                  </div>
                  <h4>John Richards</h4>
                  <h5>Indian cuisine</h5>
                </div>


                {/* <!-- Chef 2 --> */}
                <div class="chef-card">
                  <div class="image-wrapper">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-02.jpg" alt="Queen Ferrari" />
                    <div class="hover-content">
                      <div class="social-icons">
                        <a href="https://www.facebook.com/" target='_blank'><FaFacebookF /></a>
                        <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
                        <a href="https://x.com/?lang=en" target='_blank'><FaTwitter /></a>
                      </div>
                    </div>
                  </div>
                  <h4>Queen ferrari</h4>
                  <h5>Chinese cuisine</h5>
                </div>

                {/* <!-- Chef 3 --> */}
                <div class="chef-card">
                  <div class="image-wrapper">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-03.jpg" alt="Marta Warner" />
                    <div class="hover-content">
                      <div class="social-icons">
                        <a href="https://www.facebook.com/" target='_blank'><FaFacebookF /></a>
                        <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
                        <a href="https://x.com/?lang=en" target='_blank'><FaTwitter /></a>
                      </div>
                    </div>
                  </div>
                  <h4>Marta Warner</h4>
                  <h5>Italian Cuisine</h5>
                </div>
              </div>

              <div class="profeccional-chefs-img-row-1">
                {/* <!-- Chef 1 --> */}
                <div class="chef-card">
                  <div class="image-wrapper">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-04.jpg" alt="John Richards" />
                    <div class="hover-content">
                      <div class="social-icons">
                        <a href="https://www.facebook.com/" target='_blank'><FaFacebookF /></a>
                        <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
                        <a href="https://x.com/?lang=en" target='_blank'><FaTwitter /></a>
                      </div>
                    </div>
                  </div>
                  <h4>Lucky green</h4>
                  <h5>Greek cuisine</h5>
                </div>


                {/* <!-- Chef 2 --> */}
                <div class="chef-card">
                  <div class="image-wrapper">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-05.jpg" alt="Queen Ferrari" />
                    <div class="hover-content">
                      <div class="social-icons">
                        <a href="https://www.facebook.com/" target='_blank'><FaFacebookF /></a>
                        <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
                        <a href="https://x.com/?lang=en" target='_blank'><FaTwitter /></a>
                      </div>
                    </div>
                  </div>
                  <h4>Taylor habbant</h4>
                  <h5>Spanish cuisine</h5>
                </div>

                {/* <!-- Chef 3 --> */}
                <div class="chef-card">
                  <div class="image-wrapper">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-the-chefs-06.jpg" alt="Marta Warner" />
                    <div class="hover-content">
                      <div class="social-icons">
                        <a href="https://www.facebook.com/" target='_blank'><FaFacebookF /></a>
                        <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
                        <a href="https://x.com/?lang=en" target='_blank'><FaTwitter /></a>
                      </div>
                    </div>
                  </div>
                  <h4>Antony taylor</h4>
                  <h5>Indian cuisine</h5>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* professional-chefs end  */}


      {/* Once you start / */}
      <div className="once-you">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="once-you-main d-flex align-items-end justify-content-center">
                <div className="col-4">
                  <div className="once-you-img1 d-flex align-items-end justify-content-end">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-chefs-09.jpg" alt="" />
                  </div>
                </div>
                <div className="col-5">
                  <div className="once-you-con align-items-end justify-content-end">
                    <p>Once you understand the foundations of <br /> cooking whatever kind you link. whather it's <br /> <span>
                      french or italian or japanese you really don't <br /> need a cookbook anymore.</span></p>
                    <h5>Tomas burgess <br /> <span>Executive chef</span> </h5>
                  </div>
                </div>
                <div className="col-3">
                  <div className="once-you-img2 align-items-end justify-content-end">
                    <img src="https://craftohtml.themezaa.com/images/blockquote-right-icon.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Once you end  */}

      <div class="footer-note">
        <h6><span class="badge">Masterchef </span>Unique and delicious dishes from the worlds&nbsp;
          <a href="#">best masterchefs</a>.
        </h6>
      </div>
      <br /><br /><br />


    
    
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




    </div >

  )
}
export default Chefs