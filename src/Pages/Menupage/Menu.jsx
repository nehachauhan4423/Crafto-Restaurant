import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// icons 
import { FaRegPlayCircle } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { GiBubblingBowl } from "react-icons/gi";
import { IoBeer } from "react-icons/io5";
import { GiChickenOven } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
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
import "./Menu.css"


function Menu() {
  return (
    <div>
      <div className="menupage-header">
        {/* <div className="container">
          <div className="row"> */}
        <div className="col-12">
          <div className="menu-main d-flex align-items-center">

            <div className="col-2">
              <div className="menu-hedaer-img">
                <img src="https://craftohtml.themezaa.com/images/demo-restaurant-logo-black@2x.png" alt="" srcset="" />
              </div>
            </div>

            <div className="col-8">
              <div className="menu-menu align-items-center justify-content-center">
                <ul className='d-flex align-items-center justify-content-center'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/menu" style={{ color: "#888684" }}>Menu</Link></li>
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
          <h1>Our menu</h1>
          <h6>- Remarkable recipes -</h6>
        </div>
      </div>

      {/* Best quality food start  */}
      <div className="best-quality-food">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="best-quality-food-main d-flex align-items-center justify-content">
                <div className="col-6">
                  <div className="best-quality-food-img">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-menu-01.png" alt="" srcset="" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="best-quality-food-con">
                    <h6> _____   Best quality food</h6>
                    <h2>The greatest table <br /> luxury restaurant. </h2>
                    <p>Lorem ipsum dolor sit amet consectetur elit do <br /> eiusmod tempor incididunt ut labore et dolore <br /> magna minim veniam nostrud exercitation.</p>
                    <div className="best-quality-food-main-button d-flex">
                      <div className="best-quality-food1">

                        <button>
                          <div className="default-btn">
                            <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="0" width="00"></svg>
                            <span>About Restaurant </span>
                          </div>
                          <div className="hover-btn">
                            <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="0" width="0" viewBox="0 0 24 24"></svg>
                            <span>Book a table now</span>
                          </div>
                        </button>

                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="best-quality-food2">
                        <h6><i><FaRegPlayCircle /></i>&nbsp;Restaurant story</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Best quality food end  */}

      {/* Menu start  */}
      <div className="menu-m">
        <div class="container menu-section">
          <div className="row">

            <div class="menu-header">
              <h6>- Choose Delicious -</h6>
              <h2>Popular Menu</h2>
            </div>

            <div class="menu-categories">
              <a href="#" class="active" style={{ color: "#d39121" }}><i style={{ color: "#d39121" }}><GiNoodles /></i><br /><p style={{ color: "black" }}>Starters</p></a>
              <a href="#"><i><GiChickenOven /></i><br /><p>Nonvage</p></a>
              <a href="#"><i><GiBubblingBowl /></i><br /><p>Vegetarian</p></a>
              <a href="#"><i><GiCupcake /></i><br /><p>Dessert</p></a>
              <a href="#"><i><IoBeer /></i><br /><p>Drinks</p></a>
            </div>

            <div class="row g-4">
              <div class="col-md-6 d-flex justify-content-center">
                <div class="menu-item">
                  <img src="https://craftohtml.themezaa.com/images/demo-restaurant-tab-01.jpg" />
                  <div>
                    <h3>Boiled organic egg <span>  ------------------------------&nbsp;&nbsp;  </span>$12.00</h3>
                    <p>Lorem ipsum has been the industry.</p>
                  </div>

                </div>
              </div>
              <div class="col-md-6 d-flex justify-content-center">
                <div class="menu-item">
                  <img src="https://craftohtml.themezaa.com/images/demo-restaurant-tab-04.jpg" alt="Boiled Organic Egg" />
                  <div>
                    <h3>Boiled organic egg <span>-------------------------------------&nbsp;&nbsp;</span>$10.00</h3>
                    <p>Lorem ipsum has been the industry.</p>
                  </div>

                </div>
              </div>
              <div class="col-md-6 d-flex justify-content-center">
                <div class="menu-item">
                  <img src="https://craftohtml.themezaa.com/images/demo-restaurant-tab-02.jpg" alt="Chicken Breast Burger" />
                  <div>
                    <h3>Chicken breast burger <span>  -------------------------&nbsp;&nbsp;</span>$08.00</h3>
                    <p>Lorem ipsum has been the industry.</p>
                  </div>

                </div>
              </div>
              <div class="col-md-6 d-flex justify-content-center">
                <div class="menu-item">
                  <img src="https://craftohtml.themezaa.com/images/demo-restaurant-tab-05.jpg" alt="Chicken Breast Burger" />
                  <div>
                    <h3>Chicken breast burger<span>    ----------------------------&nbsp;&nbsp;</span>$12.00</h3>
                    <p>Lorem ipsum has been the industry.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex justify-content-center">
                <div class="menu-item">
                  <img src="https://craftohtml.themezaa.com/images/demo-restaurant-tab-03.jpg" alt="Medium Spicy Chips" />
                  <div>
                    <h3>Medium spicy chips<span>   -------------------------------&nbsp;&nbsp;</span>$11.00</h3>
                    <p>Lorem ipsum has been the industry.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex justify-content-center">
                <div class="menu-item">
                  <img src="https://craftohtml.themezaa.com/images/demo-restaurant-tab-06.jpg" alt="Medium Spicy Chips" />
                  <div>
                    <h3>Medium spicy chips<span>   --------------------------------&nbsp;&nbsp;</span>$10.00</h3>
                    <p>Lorem ipsum has been the industry.</p>
                  </div>

                </div>
              </div>
            </div>


            <div class="footer-note">
              <h6><span class="badge">Masterchef </span>Unique and delicious dishes from the worlds&nbsp;
                <a href="#">best masterchefs</a>.
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* Menu end  */}

      {/* Master chef's special start  */}
      <div className="master-ches-special">
        <div className="container">
          <div className="row">
            <h6 align="center">- Master chef's special -</h6>
            <h2 align="center">Special proposals</h2>
            <div className="col-12">
              <div className="master-ches-special-main d-flex align-items-center justify-content-center">

                <div className="col-4">
                  <div className="master-ches-special-img1 align-items-center justify-content-center">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-menu-02.jpg" alt="" srcset="" />
                    <div className="master-ches-special-star1 d-flex align-items-center justify-content-center">
                      <div className="master-ches-special-start1-star">
                        <h6><i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i></h6>
                      </div>
                      <div className="master-ches-special-start1-price">
                        <span>4.8</span>
                      </div>
                    </div>
                    <div className="master-ches-special-img1-con1" align="center">
                      <h2>Grilled steak marinades</h2>
                      <h5><span>$25.00</span>&nbsp;$20.00</h5>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="master-ches-special-img1 align-items-center justify-content-center">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-menu-03.jpg" alt="" srcset="" align="center" />
                    <div className="master-ches-special-star1 d-flex align-items-center justify-content-center">
                      <div className="master-ches-special-start1-star">
                        <h6><i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i></h6>
                      </div>
                      <div className="master-ches-special-start1-price">
                        <span>4.3</span>
                      </div>
                    </div>
                    <div className="master-ches-special-img1-con1" align="center">
                      <h2>Beef masala grill</h2>
                      <h5><span>$24.00</span>&nbsp;$18.00</h5>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="master-ches-special-img3 align-items-center justify-content-center">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-menu-04.jpg" alt="" srcset="" />
                    <div className="master-ches-special-star1 d-flex align-items-center justify-content-center">
                      <div className="master-ches-special-start1-star">
                        <h6><i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i></h6>
                      </div>
                      <div className="master-ches-special-start1-price">
                        <span>4.9</span>
                      </div>
                    </div>
                    <div className="master-ches-special-img1-con1" align="center">
                      <h2>Slow Cooker Potpourri</h2>
                      <h5><span>$29.00</span>&nbsp;$24.00</h5>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Master chef's special end  */}


   
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

  )
}

export default Menu