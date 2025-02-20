import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function About() {
  return (
    <div>
      <div id="tooplate_middle">
        <div className="mid_title d-flex justify-content-center bg-light">
          <h1>
            
            About Us
            </h1>
        </div>
          <h2 className="d-flex float_l">
            We Craft Exceptional Web Experiences
          </h2>
        <p className="font-weight-light" align="justify"> 
        Welcome! We're DEWI, a passionate team dedicated to providing top-notch web servicing solutions that empower businesses to thrive online. 
        We believe that a strong online presence is essential in today's digital landscape, and we're committed to helping our clients achieve their goals 
        through innovative and effective web strategies.</p>
      </div>

      <div id="tooplate_main">
        <div className="col_w960">
          <div className="col_w450 float_l">
            <h2>Our Mission</h2>
            <img className="image_wrapper image_fl" src="images/tooplate_image_05.jpg" alt="Image 1" />
            <p><em>Experience & Expertise: We have a proven track record of delivering successful web solutions for businesses of all sizes.</em></p>
            <p align="justify">Our mission is simple: to deliver exceptional web services that drive growth and success for our clients.
               We strive to be a trusted partner, offering reliable, scalable, and cutting-edge solutions tailored to meet your unique needs. 
              We're not just building websites; we're building lasting relationships.</p>
            
          </div>

          <div className="col_w450 float_r">
            <h2>Our Management</h2>
            <p><em>Vestibulum pharetra convallis libero ac luctus. Etiam in quam a urna aliquet imperdiet porta vitae nisl.</em></p>
            <p>Morbi velit dui, interdum non placerat id, rhoncus ac orci. Duis iaculis orci eu arcu vestibulum eu vestibulum orci ultrices. Ut ligula ipsum, gravida id euismod quis, faucibus vitae est. Validate <a href="http://validator.w3.org/check?uri=referer" rel="nofollow"><strong>XHTML</strong></a> and <a href="http://jigsaw.w3.org/css-validator/check/referer" rel="nofollow"><strong>CSS</strong></a>.</p>
            <ul className="tooplate_list">
              <li>Nulla facilisi. Maecenas ac odio ipsum. Donec cursus ante</li>
              <li>Fusce risus tortor, interdum in malesuada, ultricies at arcu</li>
              <li>Proin facilisis ullamcorper turpis, placerat dolor ultrices</li>
              <li>Sed vel justo quis ligula blandit commodo molestie</li>
              <li>Ut tristique sagittis arcu, vel laoreet imperdiet facilisis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
