import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// icons start 
import { MdOutlineEventNote } from "react-icons/md";
import { SlCallOut } from "react-icons/sl";
import { BsBoxSeam } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import { GiBubblingBowl } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { GiChickenOven } from "react-icons/gi";
import { IoBeer } from "react-icons/io5";
import { GiCupcake } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
// icons end 
import "./Home.css"
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>

      {/* header end  */}
      <header>
        <div className="col-12">
          <div className="header-main d-flex align-items-center">

            <div className="col-2">
              <div className="hedaer-img">
                <img src="https://craftohtml.themezaa.com/images/demo-restaurant-logo-white@2x.png" alt="" srcset="" width={"160px"} style={{ padding: "10px" }} />
              </div>
            </div>

            <div className="col-8">
              <div className="header-menu">
                <nav>
                  <ul className='d-flex'>
                    <li><Link to="/" style={{ color: "#aba5a3" }}>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/story">Story</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/chefs">Chefs</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-2 d-flex  justify-content-end align-items-end">
              <div className="header-button">
                <button>
                  <div className="default-btn">
                    <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="0" width="00"></svg>
                    <span> <MdOutlineEventNote style={{ fontSize: "20px" }} />&nbsp;&nbsp;Book A NOW </span>
                  </div>
                  <div className="hover-btn">
                    <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="0" width="0" viewBox="0 0 24 24"></svg>
                    <span> <MdOutlineEventNote style={{ fontSize: "20px" }} />&nbsp;&nbsp;visit today</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-main">
          <div className="round-box justify-content-center">
            <div className="round-banner-con">
              <h5>Experience the taste of italy</h5>
              <h1>Great dining</h1>
              <div class="banner-text">
                <div class="banner">
                  <div class="text-box">
                    <span class="text-1">restaurant</span>
                    <span class="text-2">experience</span>
                    <button><a href="/about">Authentic experience</a></button>
                  </div>
                </div>
              </div>
              <div className="original-food-taste">
                <img src="https://craftohtml.themezaa.com/images/demo-restaurant-home-01.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header start   */}


      {/* experience start  */}
      <div className="experience">
        <div className="experience-text">
          <h2>experience</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="experience-main d-flex">
                <div className="col-6">
                  <div className="experience-img">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-home-04.png" alt="" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="experience-con">
                    <h5>________ since 1988</h5>
                    <h2>Wonderful  dining <br /> experience & food.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> do eiusmod tempor incididunt ut labore et dolore <br /> magna minim veniam nostrud exercitation.</p>
                    <div className="experience-button-main d-flex">
                      <div className="experience-button1">

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
                      <div className="experience-button2">
                        <h6><i><SlCallOut /> </i> 1-800-222-000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience-position-img1">
                <img src="https://craftohtml.themezaa.com/images/demo-restaurant-home-02.jpg" alt="" srcset="" />
              </div>
              {/* <div className="experience-position-img2">
                <img src="https://craftohtml.themezaa.com/images/demo-restaurant-home-03.jpg" alt="" srcset="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* experience end  */}


      {/* components start  */}
      <div className="components">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="components-main d-flex ">

                <div className="col-4">
                  <div className="component-1-m  d-flex justify-content-center">
                    <div className="component-1-img">
                      <i><BsBoxSeam /></i>
                    </div>
                    <div className="component-1-con">
                      <h5>fast delivery</h5>
                      <h6>Within 30 minutes</h6>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="component-2-m d-flex justify-content-center">
                    <div className="component-2-img">
                      <i><BsAward /></i>
                    </div>
                    <div className="component-2-con">
                      <h5>absolute dining</h5>
                      <h6>Best buffet restaurant</h6>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="component-3-m d-flex justify-content-center">
                    <div className="component-3-img">
                      <i><IoBagCheckOutline /></i>
                    </div>
                    <div className="component-3-con">
                      <h5>pickup delivery</h5>
                      <h6>Grab your food order</h6>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* components end  */}


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


      {/* carousel start  */}
      <div class="container mt-5">
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <div class="carousel-inner" align="center">
            <div className="carousel-text-main">
              <h6>- Specials choice -</h6>
              <h2>Popular dishes</h2>
            </div>

            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-4">
                  <div class="card-carousel">
                    <div class="img-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-slider-01.jpg" class="card-img-top" alt="Item 1" />
                      <div class="price-overlay">JUST <br /> $35.00</div>
                      <div class="hover-overlay"></div>
                    </div>
                    <div class="special-text" align="center">
                      <h6>Chicken breast burger</h6>
                      <p>Cheese <span>◍</span> Capsicum <span>◍</span> Basil</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card-carousel">
                    <div class="img-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-slider-02.jpg" class="card-img-top" alt="Item 2" />
                      <div class="price-overlay">JUST <br /> $35.00</div>
                      <div class="hover-overlay"></div>
                    </div>
                    <div class="special-text" align="center">
                      <h6>Chicken breast rice</h6>
                      <p>Tomatoes <span>◍</span>Chicken<span>◍</span>Rice</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card-carousel">
                    <div class="img-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-slider-03.jpg" class="card-img-top" alt="Item 3" />
                      <div class="price-overlay">JUST <br /> $35.00</div>
                      <div class="hover-overlay"></div>
                    </div>
                    <div class="special-text" align="center">
                      <h6>Medium spicy chips</h6>
                      <p>Cheese <span>◍</span> Capsicum <span>◍</span> Bread</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <div class="card-carousel">
                    <div class="img-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-slider-04.jpg" class="card-img-top" alt="Item 4" />
                      <div class="price-overlay">JUST <br /> $35.00</div>
                      <div class="hover-overlay"></div>
                    </div>
                    <div class="special-text" align="center">
                      <h6>Appeteaser blatter</h6>
                      <p>Cheese <span>◍</span>Tomatoes <span>◍</span> Bolls</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card-carousel">
                    <div class="img-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-slider-05.jpg" class="card-img-top" alt="Item 5" />
                      <div class="price-overlay">JUST <br /> $35.00</div>
                      <div class="hover-overlay"></div>
                    </div>
                    <div class="special-text" align="center">
                      <h6>Appeteaser blatter</h6>
                      <p>Cheese <span>◍</span> Capsicum <span>◍</span> Lemon</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card-carousel">
                    <div class="img-container">
                      <img src="https://craftohtml.themezaa.com/images/demo-restaurant-slider-03.jpg" class="card-img-top" alt="Item 6" />
                      <div class="price-overlay">JUST <br /> $35.00</div>
                      <div class="hover-overlay"></div>
                    </div>
                    <div class="special-text" align="center">
                      <h6>Medium spicy chips</h6>
                      <p>Cheese <span>◍</span> Capsicum <span>◍</span> Basil</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* carousel end  */}

      {/* authentic start  */}
      <div className="authentic">
      <div className="about-page-marquee">
        <div class="marquee-home">
          <h6>
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
          
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
            Awesome <span>Experience</span> Cuisine <span>Delicious</span>&nbsp;
          </h6>
        </div>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className="authentic-main d-flex align-items-center">
                <div className="col-3">
                  <div className="authentic-img1 d-flex justify-content-start">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-home-07.jpg" alt="" srcset="" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="authentic-con" align="center">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-home-quotes-icon.jpg" alt="" />
                    <h5>Food for us comes from our relatives whether <br /> they have wings or fins or roots that is how we <br /> consider food has a culture It has history it <br /> has a story it has relationships.</h5>
                    <h6>Herman miller</h6>
                    <div className="authentic-chefs2 d-flex justify-content-center align-items-center">
                      <div className="authentic-chefs-1">
                        <img src="https://craftohtml.themezaa.com/images/avtar-33.jpg" alt="" srcset="" />
                      </div>
                      <img src="https://craftohtml.themezaa.com/images/avtar-34.jpg" alt="" />
                      <img src="https://craftohtml.themezaa.com/images/avtar-35.jpg" alt="" srcset="" />
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="authentic-img2 d-flex justify-content-start">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-home-08.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vistid-our d-flex align-items-center justify-content-center">
          <i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>&nbsp;&nbsp;
          <p> <span>25,000+ happy food lovers</span> visited our authentic restaurant.</p>
        </div>
      </div>
      {/* authentic end  */}

      {/* From our blog start  */}
      <div className="from-our-blog">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 align="center">-From our blog-</h6>
              <h2 align="center">Recent articles</h2>
              <div className="from-our-blog-main d-flex" align="center">
                <div className="col-4">
                  <div className="from-our-img1">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-blog-01.jpg" alt="" srcset="" />
                    <div className="from-our-con1" align="start">
                      <button> restaurant</button>
                      <h6>Never eat more <br /> than you can life.</h6>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="from-our-img2">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-blog-02.jpg" alt="" srcset="" />
                    <div className="from-our-con2" align="start">
                      <button> restaurant</button>
                      <h6>Life is uncertain <br /> Eat dessert first.</h6>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="from-our-img3">
                    <img src="https://craftohtml.themezaa.com/images/demo-restaurant-blog-03.jpg" alt="" srcset="" />
                    <div className="from-our-con3" align="start">
                      <button> restaurant</button>
                      <h6>Food simply isn't <br /> important to me.</h6>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* From our blog end  */}

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
export default Home