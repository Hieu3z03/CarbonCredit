import { useNavigate } from 'react-router-dom';
import './About.css';

export default function About() {
  const navigate = useNavigate();

  return (
    <section className='about-two md:pt-32 md:pb-32 pt-16 pb-16'>
      <div className='container 2xl:px-28 px-24'>
        <div className='grid grid-rows-1 grid-cols-2 gap-x-7'>
          <div className='image'>
            <img src='assets/images/about/about-two-inner.png' alt='about' />
          </div>

          <div className='about-two__right-item'>
            <div className='section-header mb-1'>
              <h5
                className='wow fadeInUp flex'
                data-wow-duration='1.2s'
                data-wow-delay='.2s'
              >
                <img src='assets/images/icon/leaf.svg' alt='leaf' />{' '}
                <span>protecting nature</span>
              </h5>
              <h2
                className='wow fadeInUp'
                data-wow-duration='1.4s'
                data-wow-delay='.4s'
              >
                Protecting Nature By Proper Waste Management!g
              </h2>
              <p
                className='wow fadeInUp'
                data-wow-duration='1.6s'
                data-wow-delay='.6s'
              >
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. It's
                important to note that tree planting should be carried out.
              </p>
            </div>
            <div className='grid grid-rows-1 grid-cols-2 gap-2'>
              <div
                className='wow fadeInUp'
                data-wow-duration='1.8s'
                data-wow-delay='.8s'
              >
                <div className='flex items-center'>
                  <img src='assets/images/about/about-info1.png' alt='info' />
                  <h4 className='ml-5'>Recycle Plastic</h4>
                </div>
              </div>
              <div
                className='wow fadeInUp'
                data-wow-duration='1.8s'
                data-wow-delay='.8s'
              >
                <div className='flex items-center'>
                  <img src='assets/images/about/about-info2.png' alt='info' />
                  <h4 className='ml-5'>Wastage Management</h4>
                </div>
              </div>
            </div>
            <ul
              className='wow mt-5 fadeInDown'
              data-wow-duration='1.2s'
              data-wow-delay='.2s'
            >
              <li className='mb-5 flex'>
                <img
                  className='pe-2.5'
                  src='assets/images/icon/leaf.svg'
                  alt='icon'
                />
                Elit ullamcorper dignissim cras tincidunt lobortis feugiat vibe
              </li>
              <li className='mb-5 flex'>
                <img
                  className='pe-2.5'
                  src='assets/images/icon/leaf.svg'
                  alt='icon'
                />
                Praesent id ligula et nibh bibendum hendrerit vel et mi.
              </li>
              <li className='flex'>
                <img
                  className='pe-2.5'
                  src='assets/images/icon/leaf.svg'
                  alt='icon'
                />
                Etiam auctor lacus quis justo porttitor lacinia.
              </li>
            </ul>
            <div
              className='about_info flex items-center pt-14 wow fadeInUp'
              data-wow-duration='1.9s'
              data-wow-delay='.9s'
            >
              <button onClick={() => navigate('/about')} className='btn-one'>
                <span>More About us</span>{' '}
                <i className='fa-solid fa-angles-right'></i>
              </button>
              <span className='bor-left hidden sm:block mx-6'></span>
              <div className='info flex flex-wrap items-center'>
                <i className='fa-solid fa-phone-volume ring-animation'></i>
                <div className='about_info_con'>
                  <span className='block capitalize'>call any time</span>
                  <a href='tel:+912659302003'>+91 2659 302 003</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-two__shape-right hidden md:block bobble__animation'>
        <img src='assets/images/shape/about-two-shape-right.png' alt='shape' />
      </div>
    </section>
  );
}
