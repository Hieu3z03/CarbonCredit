import './Testimonial.css';
import feedbackData from './feedbackData.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonial() {
  return (
    <section className='testimonial pt-32 pb-32 2xl:px-28 lg:px-24 md:px-16 '>
      <div className='container'>
        <div className='testimonial__head-wrp mb-4'>
          <div className='section-header m-0'>
            <h5
              className='wow fadeInUp inline-flex'
              data-wow-duration='1.2s'
              data-wow-delay='.2s'
            >
              <img src='assets/images/icon/leaf.svg' alt='leaf' /> our client’s
              feedback
            </h5>
            <h2
              className='wow fadeInUp'
              data-wow-duration='1.4s'
              data-wow-delay='.4s'
            >
              Foresty Loves People
            </h2>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          pagination={{
            el: '.dot-wrp', // Assign custom pagination container
            clickable: true,
            type: 'bullets', // Keep static bullet behavior
            renderBullet: function (index, className) {
              return `<div class="dot testimonial__dot ${className}"></div>`;
            },
          }}
          breakpoints={{
            // when window width is >= 320px (mobile)
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px (tablet)
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {feedbackData.map((feedback, index) => (
            <SwiperSlide key={index}>
              <div className='testimonial__item'>
                <div className='testimonial__item-head'>
                  <div className='testimonial__item-head-info'>
                    <div className='testimonial__item-head-info-image'>
                      <img src={feedback.image} alt='avatar' />
                    </div>
                    <div className='testimonial__item-head-info-con'>
                      <h3>{feedback.name}</h3>
                      <span>{feedback.job}</span>
                    </div>
                  </div>
                  <i className='fa-solid fa-quote-right'></i>
                </div>
                <div className='testimonial__item-content'>
                  <p>{feedback.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dot Wrapper */}
        <div
          className='dot-wrp wow fadeInUp mt-5 mt-sm-0'
          data-wow-duration='1.6s'
          data-wow-delay='.6s'
        ></div>
      </div>
    </section>
  );
}
