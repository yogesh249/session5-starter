import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import service1 from "../assets/img/services-1.jpg";
import service2 from "../assets/img/services-2.jpg"; 
import  service3 from "../assets/img/services-3.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from 'react-bootstrap';

function About() {
  return (
    <><div>
      <div id="tooplate_middle">
        <div className="mid_title d-flex justify-content-center bg-light">
          <h1 style={{padding:"20px"}} >
            About Us
          </h1>
        </div>

        <h2 className="d-flex float_l" style={{padding:"20px"}}>
          We Craft Exceptional Web Experiences
        </h2>
        <p className="font-weight-light" align="justify" style={{padding:"20px"}}>
          Welcome! We're DEWI, a passionate team dedicated to providing top-notch web servicing solutions that empower businesses to thrive online.
          We believe that a strong online presence is essential in today's digital landscape, and we're committed to helping our clients achieve their goals
          through innovative and effective web strategies.</p>
      </div>
      <div id="tooplate_main">
        <div className="col_w960">
          <section className="col_w450 float_l light-background">
            <h2 className="justify-content-center d-flex" style={{paddingBottom:"50px"}}>Our Mission</h2>
            <Row>
              <Col className="col-md-6">
            <img className="image_wrapper" src={service1} alt="Image 1" />
              </Col>
              <Col className="col-md-6">
              <img className="image_wrapper" src={service3} alt="Image 1" />
              </Col>
            </Row>
            <p><em>Experience & Expertise: We have a proven track record of delivering successful web solutions for businesses of all sizes.</em></p>
            <p align="justify">Our mission is simple: to deliver exceptional web services that drive growth and success for our clients.
              We strive to be a trusted partner, offering reliable, scalable, and cutting-edge solutions tailored to meet your unique needs.
              We're not just building websites; we're building lasting relationships.</p>

          </section>

          <section className="col_w450 float_r">
            <h2>Our Management</h2>
            <p><em>Vestibulum pharetra convallis libero ac luctus. Etiam in quam a urna aliquet imperdiet porta vitae nisl.</em></p>
            <p>Morbi velit dui, interdum non placerat id, rhoncus ac orci. Duis iaculis orci eu arcu vestibulum eu vestibulum orci ultrices. Ut ligula ipsum, gravida id euismod quis, faucibus vitae est. Validate <a href="http://validator.w3.org/check?uri=referer" rel="nofollow"><strong>XHTML</strong></a> and <a href="http://jigsaw.w3.org/css-validator/check/referer" rel="nofollow"><strong>CSS</strong></a>.</p>
            <ul className="tooplate_list padding-left-20">
              <li>Nulla facilisi. Maecenas ac odio ipsum. Donec cursus ante</li>
              <li>Fusce risus tortor, interdum in malesuada, ultricies at arcu</li>
              <li>Proin facilisis ullamcorper turpis, placerat dolor ultrices</li>
              <li>Sed vel justo quis ligula blandit commodo molestie</li>
              <li>Ut tristique sagittis arcu, vel laoreet imperdiet facilisis</li>
            </ul>
          </section>
        </div>
      </div>
    </div><section id="team" className="team section light-background">
        <div className="container section-title">
          <h2>Team</h2>
          <p>CHECK OUR TEAM</p>
        </div>

        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4 col-md-6">
              <div className="member">
                <div className="pic">
                  <img src="./src/assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="member">
                <div className="pic">
                  <img src="./src/assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="member">
                <div className="pic">
                  <img src="./src/assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter-x"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}

export default About;
