import './OurInfo.css';

function OurInfo() {
  return (
    <div className='our-info' data-background='assets/images/bg/our-info.jpg'>
      <div className='container 2xl:px28 px-24'>
        <div className='grid grid-cols-12 items-center gap-8'>
          <div
            className='col-span-3'
            data-wow-duration='1.4s'
            data-wow-delay='.4s'
          >
            <button
              href='index.html'
              className='our-info__logo mb-1 lg:mb-0'
              disabled={true}
            >
              <img src='assets/images/logo/logo-light.svg' alt='logo' />
            </button>
          </div>
          <div
            className='col-span-5 wow fadeInDown'
            data-wow-duration='1.6s'
            data-wow-delay='.6s'
          >
            <div className='our-info__input'>
              <input type='text' placeholder='Your email Address' />
              <i className='fa-regular fa-envelope our-info__input-envelope'></i>
              <i className='fa-solid fa-paper-plane our-info__input-plane'></i>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='our-info__social-icon lg:float-end float-none mt-1 lg:mt-0'>
              <a
                className='wow fadeInUp'
                data-wow-duration='1.2s'
                data-wow-delay='.2s'
                href='#0'
              >
                <i className='fa-brands fa-facebook-f'></i>
              </a>
              <a
                className='wow fadeInUp'
                data-wow-duration='1.3s'
                data-wow-delay='.3s'
                href='#0'
              >
                <i className='fa-brands fa-twitter'></i>
              </a>
              <a
                className='wow fadeInUp'
                data-wow-duration='1.4s'
                data-wow-delay='.4s'
                href='#0'
              >
                <i className='fa-brands fa-linkedin-in'></i>
              </a>
              <a
                className='wow fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='.5s'
                href='#0'
              >
                <i className='fa-brands fa-youtube'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurInfo;
