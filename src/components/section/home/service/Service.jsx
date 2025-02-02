import React, { useState } from "react";
import "./Service.css";

export default function Service() {
    const [hoveredImage, setHoveredImage] = useState("assets/images/service/01.jpg");

    const [isFading, setIsFading] = useState(false);

    const handleMouseEnter = (image) => {
        setIsFading(true);
        setTimeout(() => {
            setHoveredImage(image);
            setIsFading(false);
        }, 400);
    };


    return (
        <section className="service service-two pt-48 pb-48">
            <div
                className="service-two__shape-left wow slideInLeft d-none d-xl-block"
                data-wow-duration="1.4s"
                data-wow-delay="1.4s"
                style={{
                    visibility: "visible",
                    animationDuration: "1.4s",
                    animationDelay: "1.4s",
                    animationName: "slideInLeft",
                }}
            >
                <img src="assets/images/shape/service-left.png" alt="shape" />
            </div>
            <div
                className="service-two__shape-right wow slideInRight d-none d-xl-block"
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
                <img src="assets/images/shape/service-right.png" alt="shape" />
            </div>
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s">
                        OUR SERVICE
                    </h5>
                    <h2 className="wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                        Preserving The Earth For Future <br />
                        Generations
                    </h2>
                </div>
                <div className="row g-4">
                    <div className="col-xl-6">
                        <div className="service-two__item">
                            <a
                                href="service-single.html"
                                className="changeImage2 wow fadeInUp pt-0 clicked"
                                data-wow-duration="1.2s"
                                data-wow-delay=".2s"
                                onMouseEnter={() => handleMouseEnter("assets/images/service/01.jpg")}
                            >
                                Carbon Offsetting
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                            <a
                                href="service-single.html"
                                className="changeImage2 wow fadeInUp"
                                data-wow-duration="1.3s"
                                data-wow-delay=".3s"
                                onMouseEnter={() => handleMouseEnter("assets/images/service/02.jpg")}
                            >
                                E-Waste Recycling
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                            <a
                                href="service-single.html"
                                className="changeImage2 wow fadeInUp"
                                data-wow-duration="1.4s"
                                data-wow-delay=".4s"
                                onMouseEnter={() => handleMouseEnter("assets/images/service/03.jpg")}
                            >
                                Awareness Creation
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                            <a
                                href="service-single.html"
                                className="changeImage2 wow fadeInUp"
                                data-wow-duration="1.5s"
                                data-wow-delay=".5s"
                                onMouseEnter={() => handleMouseEnter("assets/images/service/01.jpg")}
                            >
                                Cleaning Environment
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInDown" data-wow-duration="1.8s" data-wow-delay=".4s">
                        <div className="image">
                            <img
                                id="myImage2"
                                src={hoveredImage}
                                alt="service"
                                className={isFading ? "fade-out" : "fade-in"} // Thêm lớp fade-in/fade-out
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
