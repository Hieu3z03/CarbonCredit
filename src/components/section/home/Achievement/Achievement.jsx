import React from 'react'
import './achievement.css'
export default function Achievement() {
    return (
        <div className="achievement-two m-20" style={{ backgroundImage: "url(assets/images/achievement.jpg)" }}>
            <div className="md:container ">
                <div className="achievement p-5" data-background="assets/images/bg/achievement2.jpg" >
                    <div className="flex flex-row px-5 gap-24">
                        <div className="basis-1/2 achievement__bor-right wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s" >
                            <div className="achievement__item">
                                <h2 className="text-white py-3">Our trees
                                    have been monitored</h2>
                            </div>
                        </div>
                        <div className="basis-1/6 achievement__bor-right wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s" >
                            <div className="achievement__item ">
                                <img src="assets/images/achieve1.png" alt="icon" />
                                <h5>Trees planted</h5>
                                <span className="count">6,472,068</span>
                            </div>
                        </div>
                        <div className="basis-1/6 achievement__bor-right wow fadeInUp" data-wow-duration="1.6s" data-wow-delay=".6s">
                            <div className="achievement__item">
                                <img src="assets/images/achieve2.png" alt="icon" />
                                <h5>Families helped</h5>
                                <span className="count">38,768</span>
                            </div>
                        </div>
                        <div className="basis-1/6 wow fadeInUp" data-wow-duration="1.8s" data-wow-delay=".8s">
                            <div className="achievement__item ">
                                <img src="assets/images/achieve3.png" alt="icon" />
                                <h5>CO2 captured (tonne)</h5>
                                <span className="count">1,193,210</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
