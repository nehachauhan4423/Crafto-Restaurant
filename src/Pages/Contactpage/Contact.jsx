import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Contact.css";
// icon start
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaRegSmile, FaEnvelope, FaCommentDots } from "react-icons/fa";





function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Get existing records from localStorage or create an empty array
    const existingRecords = JSON.parse(localStorage.getItem("contactRecords")) || [];

    // Add new form data
    existingRecords.push(formData);

    // Save updated records to localStorage
    localStorage.setItem("contactRecords", JSON.stringify(existingRecords));

    alert("Form data saved!");

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>

      <div className="contactpage-header">
        <div className="col-12">
          <div className="contact-main d-flex align-items-center">

            <div className="col-2">
              <div className="contact-hedaer-img">
                <img src="https://craftohtml.themezaa.com/images/demo-restaurant-logo-black@2x.png" alt="" srcset="" />
              </div>
            </div>

            <div className="col-8">
              <div className="contact-menu align-items-center justify-content-center">
                <ul className='d-flex align-items-center justify-content-center'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about" >About</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                  <li><Link to="/story">Story</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/chefs">Chefs</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact" style={{ color: "#888684" }}>Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-2">
              <div className="contact-button1 d-flex justify-content-end ">
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
        <div className="contact-banner-text" align="center">
          <h1>Contact us</h1>
          <h6>- Delicious food -</h6>
        </div>
      </div>


      <div className="contact-form d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="contact-form-main">
              <h2>How we can help your food?</h2>
              <div className="contact-form-main-2">
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <FaRegSmile className="input-icon" />
                  </div>

                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <FaEnvelope className="input-icon" />
                  </div>

                  <div className="input-group">
                    <input
                      type="text"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <FaCommentDots className="input-icon" />
                  </div>

                  <div className="contact-button-main d-flex">
                    <div className="contact-button2">
                      <button type="submit">
                        <span>Send a Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reserve a Table start  */}
      <div className="reserve-table">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="reserve-table-main d-flex align-items-center justify-content-center">
                <div className="col-3">
                  <div className="reserve-table-1 align-items-center justify-content-center">
                    <h6>Need a private space?</h6>
                    <h2>Reserve a Table? <br /> <span>Let's talk us.</span>
                    </h2>
                  </div>
                </div>
                <div className="col-3">
                  <div className="reserve-table-2 align-items-center justify-content-center">
                    <h5>Write Us</h5>
                    <ul>
                      <li><a href="">info@yourdomain.com</a></li>
                      <li><a href="">hr@yourdomain.com</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-3">
                  <div className="reserve-table-3">
                    <h5>Follow Us</h5>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target='_blank'><span><FaFacebookF /></span> &nbsp;Crafto in facebook</a>
                      </li>
                      <li>
                        <a href="https://x.com/?lang=en" target='_blank'><span><FaTwitter /></span>&nbsp;
                          Crafto in twitter</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-3">
                  <div className="reserve-table-4">
                    <h5>Call Us</h5>
                    <ul>
                      <li><a href="">+1 234 567 8910</a></li>
                      <li><a href="">+1 567 234 8910</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reserve a Table end  */}

      {/* Footer start */}
      <footer>
        <div className="container">
          <div className="row g-4">
            <div className="col-12">
              <div className="footer-main d-flex align-items-center justify-content-center mt-3">
                <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
                  <div className="footer-c1" align="center">
                    <h5><MdOutlineMessage /></h5>
                    <h6>About restaurant</h6>
                    <p>Enjoy a wonderful cafe <br /> dining experience</p>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
                  <div className="footer-c2" align="center">
                    <h5><IoCallOutline /></h5>
                    <h6>Let's talk</h6>
                    <p>Phone: 1-800-222-000 <br />Fax: 1-800-222-002</p>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
                  <div className="footer-c3" align="center">
                    <h5><HiOutlineMailOpen /></h5>
                    <h6>Book a table</h6>
                    <a href="">info@yourdomain.com</a><br />
                    <a href="">hr@yourdomain.com</a>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
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
                <a href="https://dribbble.com/" target='_blank'><FaDribbble /></a>
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
export default Contact