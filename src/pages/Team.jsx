import React from "react";

function Team() {
    return(
        <div>

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
    <section id="team" className="team section light-background">
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
      </section>
        </div>
    )

}

export default Team;