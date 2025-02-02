import React from 'react'
import './TeamArea.css'
export default function TeamArea() {
    return (
        <section className="team team-two pb-48 sub-bg">
            <div className="team-two__shape sway__animation d-none d-lg-block">
                <img className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="1s"
                    src="assets/images/team2.png" alt="shape"
                />
            </div>
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s" >
                        OUR TEAM MEMBERS</h5>
                    <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">foresty awesome team</h2>
                </div>
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                        <div className="team-two__item team__item">
                            <div className="team__item-image">
                                <img src="assets/images/team/profile1.png" alt="images" />
                                <div className="team__item-image-icon social-icon">
                                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#0"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#0"><i className="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                            <h3><a href="team-single.html">Dana A. Hutchison</a></h3>
                            <span>Founder</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                        <div className="team__item team-two__item">
                            <div className="team__item-image">
                                <img src="assets/images/team/02.png" alt="images" />
                                <div className="team__item-image-icon social-icon">
                                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#0"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#0"><i className="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                            <h3><a href="team-single.html">Bonnie J. Britt</a></h3>
                            <span>Forest Officer</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">
                        <div className="team__item team-two__item">
                            <div className="team__item-image">
                                <img src="assets/images/team/03.png" alt="images" />
                                <div className="team__item-image-icon social-icon">
                                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#0"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#0"><i className="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                            <h3><a href="team-single.html">Francis A. Cote</a></h3>
                            <span>Garden Maker</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".8s">
                        <div className="team__item team-two__item">
                            <div className="team__item-image">
                                <img src="assets/images/team/04.png" alt="images" />
                                <div className="team__item-image-icon social-icon">
                                    <a href="#0"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#0"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#0"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#0"><i className="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                            <h3><a href="#0">Mario L. Lawhorn</a></h3>
                            <span>Co - Founder</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
