export default function Achivement() {
  return (
    <section
      className='achievement'
      data-background='assets/images/bg/achievement-bg2.jpg'
    >
      <div className='container '>
        <div className='row g-4 align-items-center justify-content-between'>
          <div
            className='col-lg-5 achievement__bor-right wow fadeInUp'
            data-wow-duration='1.2s'
            data-wow-delay='.2s'
          >
            <div className='achievement__item'>
              <h2 className='text-white pt-3 pb-3'>
                Our trees have been monitored
              </h2>
            </div>
          </div>
          <div
            className='col-lg-2 achievement__bor-right wow fadeInUp'
            data-wow-duration='1.4s'
            data-wow-delay='.4s'
          >
            <div className='achievement__item text-center'>
              <img src='assets/images/icon/achieve1.png' alt='icon' />
              <h5>Trees planted</h5>
              <span className='count'>6,472,068</span>
            </div>
          </div>
          <div
            className='col-lg-2 achievement__bor-right wow fadeInUp'
            data-wow-duration='1.6s'
            data-wow-delay='.6s'
          >
            <div className='achievement__item text-center'>
              <img src='assets/images/icon/achieve2.png' alt='icon' />
              <h5>Families helped</h5>
              <span className='count'>38,768</span>
            </div>
          </div>
          <div
            className='col-lg-2 wow fadeInUp'
            data-wow-duration='1.8s'
            data-wow-delay='.8s'
          >
            <div className='achievement__item text-center'>
              <img src='assets/images/icon/achieve3.png' alt='icon' />
              <h5>CO2 captured (tonne)</h5>
              <span className='count'>1,193,210</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
