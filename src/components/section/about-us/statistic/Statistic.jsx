import './Statistic.css';

export default function Statistic() {
  return (
    <section className='statistic-area bg-sub pt-32 pb-32 2xl:px-28 lg:px-24 md:px-16 '>
      <div className='container'>
        <div className='grid md:grid-cols-2 md:gap-7 grid-cols-1 gap-6'>
          <div className='image'>
            <img
              src='assets/images/service/statistic-image.jpg'
              alt='statistic'
            />
          </div>

          <div>
            <div className='section-header'>
              <h5
                className='wow fadeInUp inline-flex'
                data-wow-duration='1.2s'
                data-wow-delay='.2s'
              >
                <img src='assets/images/icon/leaf.svg' alt='leaf' /> Our
                Statistics
              </h5>
              <h2
                className='wow fadeInUp'
                data-wow-duration='1.4s'
                data-wow-delay='.4s'
              >
                Today's Environmental Protection Safeguards Tomorrow
              </h2>
              <p
                className='wow fadeInUp'
                data-wow-duration='1.6s'
                data-wow-delay='.6s'
              >
                It's important to note that tree planting should be carried out
                thoughtfully, considering factors such as the suitability of
                tree species to the local ecosystem
              </p>
            </div>
            <div className='grid md:grid-cols-2 md:gap-8 grid-cols-1 gap-4'>
              <div
                className='wow fadeInDown'
                data-wow-duration='1.2s'
                data-wow-delay='.2s'
              >
                <div className='statistic__item bg-white bor'>
                  <h2>
                    <span className='count'>25</span>%
                  </h2>
                  <p>
                    Canec sit amet porttitor massa leo porta maecenas reque.
                  </p>
                </div>
              </div>
              <div
                className='wow fadeInDown'
                data-wow-duration='1.4s'
                data-wow-delay='.4s'
              >
                <div className='statistic__item bg-white bor'>
                  <h2>
                    <span className='count'>19</span>%
                  </h2>
                  <p>
                    Canec sit amet porttitor massa leo porta maecenas reque.
                  </p>
                </div>
              </div>
              <div
                className='wow fadeInUp'
                data-wow-duration='1.2s'
                data-wow-delay='.2s'
              >
                <div className='statistic__item bg-white bor'>
                  <h2>
                    <span className='count'>55</span>%
                  </h2>
                  <p>
                    Canec sit amet porttitor massa leo porta maecenas reque.
                  </p>
                </div>
              </div>
              <div
                className='wow fadeInUp'
                data-wow-duration='1.4s'
                data-wow-delay='.4s'
              >
                <div className='statistic__item bg-white bor'>
                  <h2>
                    <span className='count'>85</span>K
                  </h2>
                  <p>
                    Canec sit amet porttitor massa leo porta maecenas reque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
