import React from 'react'
import { Link } from 'react-router-dom'
import "./Blog.css";
// icons 
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";

function Blog() {
  return (
    <div>
      <div>
        <div className="blog-header">
          {/* <div className="container">
           <div className="row"> */}
          <div className="col-12">
            <div className="blog-main d-flex align-items-center">

              <div className="col-2">
                <div className="blog-hedaer-img">
                  <img src="https://craftohtml.themezaa.com/images/demo-restaurant-logo-black@2x.png" alt="" srcset="" />
                </div>
              </div>

              <div className="col-8">
                <div className="blog-menu align-items-center justify-content-center">
                  <ul className='d-flex align-items-center justify-content-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/story">Story</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/chefs">Chefs</Link></li>
                    <li><Link to="/blog" style={{ color: "#888684" }}>Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-2">
                <div className="blog-button1 d-flex justify-content-end ">
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
          <div className="blog-banner-text" align="center">
            <h1>Latest blog</h1>
            <h6>- Stories from restaurant -</h6>
          </div>
        </div>

        {/* blog our blog start  */}
        <div className="blog-our-blog">
          <div className="container">
            <div className="row">
              <div className="col-12">

                <div className="blog-our-blog-main1 d-flex" align="center">
                  <div className="col-4">
                    <div className="blog-our-img1">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-blog-01.jpg" alt="" srcset="" />
                      <div className="blog-our-con1" align="start">
                        <button> restaurant</button>
                        <h6>Never eat more <br /> than you can life.</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="blog-our-img2">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-blog-02.jpg" alt="" srcset="" />
                      <div className="blog-our-con2" align="start">
                        <button> Experience</button>
                        <h6>Life is uncertain <br /> Eat dessert first.</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="blog-our-img3">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-blog-03.jpg" alt="" srcset="" />
                      <div className="blog-our-con3" align="start">
                        <button>Dining</button>
                        <h6>Food simply isn't <br /> important to me.</h6>
                      </div>
                    </div>
                  </div>

                </div>


                <div className="blog-our-blog-main2 d-flex" align="center">
                  <div className="col-4">
                    <div className="blog-our-img4">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-blog-04.jpg" alt="" srcset="" />
                      <div className="blog-our-con4" align="start">
                        <button>Delicious</button>
                        <h6>Excite your <br /> taste buds now.</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="blog-our-img5">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-blog-05.jpg" alt="" srcset="" />
                      <div className="blog-our-con5" align="start">
                        <button>Breakfast</button>
                        <h6>Stories from <br /> the kitchen.</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="blog-our-img6">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-blog-06.jpg" alt="" srcset="" />
                      <div className="blog-our-con6" align="start">
                        <button>Healthy food</button>
                        <h6>World-class <br /> dining here.</h6>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="blog-our-blog-main3 d-flex" align="center">
                  <div className="col-4">
                    <div className="blog-our-img7">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-blog-07.jpg" alt="" srcset="" />
                      <div className="blog-our-con7" align="start">
                        <button>food time</button>
                        <h6>Experience the <br /> magic dine here.</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="blog-our-img8">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-blog-08.jpg" alt="" srcset="" />
                      <div className="blog-our-con8" align="start">
                        <button>breakfast</button>
                        <h6>Tales from <br /> the kitchen.</h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="blog-our-img9">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-blog-09.jpg" alt="" srcset="" />
                      <div className="blog-our-con9" align="start">
                        <button>Healthy food</button>
                        <h6>World-class <br /> dining here.</h6>
                      </div>
                    </div>
                  </div>

                </div>



              </div>
            </div>
          </div>
        </div>
        {/* blog our blog end  */}


       
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
export default Blog