import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "./Gallery.css";
//icons
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";

function Gallery() {
  return (
    <div>
      <div>

        <div className="gallerypage-header">
          {/* header start  */}
          <div className="col-12">
            <div className="gallery-main d-flex align-items-center">

              <div className="col-2">
                <div className="gallery-hedaer-img">
                  <img src="https://craftohtml.themezaa.com/images/demo-restaurant-logo-black@2x.png" alt="" srcset="" />
                </div>
              </div>

              <div className="col-8">
                <div className="gallery-menu align-items-center justify-content-center">
                  <ul className='d-flex align-items-center justify-content-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/story">Story</Link></li>
                    <li><Link to="/gallery" style={{ color: "#888684" }}>Gallery</Link></li>
                    <li><Link to="/chefs">Chefs</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-2">
                <div className="gallery-button1 d-flex justify-content-end ">
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
          <div className="gallery-banner-text" align="center">
            <h1>Photo gallery</h1>
            <h6>- Luxury restaurant -</h6>
          </div>
        </div>
        {/* header end  */}

        {/* gallery-navbar-start  */}
        <div className="gallery-navbar" align="center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav>
                  <div class="nav-nav-tabs-gallery d-flex align-items-center justify-content-center" id="nav-tab" role="tablist">

                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style={{ color: "#383632" }}>All</button>

                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Nonvage</button>

                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Vegetarian</button>

                    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Dessert</button>

                    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabl" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Drinks</button>

                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">

                  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-01.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-02.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-03.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-04.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-05.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-06.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-07.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-08.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-09.jpg" alt="" />
                    </div>
                    
                  </div>


                  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-01.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-04.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-06.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-07.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-08.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-09.jpg" alt="" />
                    </div>
                  </div>


                  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-02.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-03.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-04.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-05.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-06.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-07.jpg" alt="" />
                    </div>
                  </div>


                  <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-01.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-02.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-03.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-05.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-08.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-09.jpg" alt="" />
                    </div>
                  </div>

                  <div class="tab-pane fade" id="nav-disabl" role="tabpanel" aria-labelledby="nav-disabl-tab" tabindex="0">
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-01.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-04.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-05.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-06.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-08.jpg" alt="" />
                    </div>
                    <div class="image-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-gallery-09.jpg" alt="" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


      
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
    </div>
  )
}
export default Gallery