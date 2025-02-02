import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Blog.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BlogSection() {
    const blogPosts = [
        {
            id: 1,
            image: 'assets/images/blog/blog1.jpg',
            title: 'Make A Statement Support Of The Eco green',
            date: '15 JUNE 2023',
        },
        {
            id: 2,
            image: 'assets/images/blog/blog2.jpg',
            title: 'Going green and reducing your carbon footprint are important',
            date: '15 JUNE 2023',
        },
        {
            id: 3,
            image: 'assets/images/blog/blog3.jpg',
            title: 'Addition to energy consumption and transportation, you can',
            date: '15 JUNE 2023',
        },
        {
            id: 4,
            image: 'assets/images/blog/blog4.jpg',
            title: 'Carbon footprint is about making conscious choices',
            date: '15 JUNE 2023',
        },
    ];

    return (
        <section className="blog-two pt-130">
            <div className="container">
                <div className="blog__head-wrp mb-65">
                    <div className="section-header m-0">
                        <h5>
                            <img src="assets/images/icon/leaf.svg" alt="image" /> LATEST NEWS
                        </h5>
                        <h2>Let’s checkout our all latest news</h2>
                    </div>
                    <a href="blog-2.html" className="btn-one mt-4 mt-md-0">
                        <span>View All News</span>
                    </a>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation
                    pagination={{ clickable: true }}
                    // autoplay={{ delay: 3000 }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                >
                    {blogPosts.map((post) => (
                        <SwiperSlide key={post.id} >
                            <div className="donation__item blog-two__item">
                                <div className="blog-two__image mb-85">
                                    <img src={post.image} alt="blog" />
                                    <div className="blog-two__info">
                                        <h4>{post.date.split(' ')[0]}</h4>
                                        <span>{post.date.split(' ')[1]}</span>
                                    </div>
                                </div>
                                <h3>
                                    <a href="blog-single.html">{post.title}</a>
                                </h3>
                                <a className="blog-two__item-arrow" href="blog-single.html">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
