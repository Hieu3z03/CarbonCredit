import './Team.css';
import teamData from './team.json';

export default function Team() {
  return (
    <section className='team pt-8 pb-32'>
      <div className='container 2xl:px-28 px-24 mx-auto'>
        <div className='section-header text-center'>
          <h5
            className='wow fadeInUp inline-flex'
            data-wow-duration='1.2s'
            data-wow-delay='.2s'
          >
            <img src='assets/images/icon/leaf.svg' alt='leaf' />
            <span>OUR TEAM MEMBERS</span>
          </h5>
          <h2
            className='wow fadeInUp'
            data-wow-duration='1.4s'
            data-wow-delay='.4s'
          >
            foresty awesome team
          </h2>
        </div>
        {/* CEO */}
        <div className='grid sm:grid-cols-2 xl:grid-cols-4 place-items-center mb-8'>
          <div
            className='sm:col-span-2 xl:col-span-4 wow fadeInUp'
            data-wow-duration='1.2s'
            data-wow-delay='.2s'
          >
            <div className='team__item'>
              <div className='team__item-image'>
                <img src={teamData.ceo.image} alt='team' />
                <div className='team__item-image-icon social-icon'>
                  <a href='#0'>
                    <i className='fa-brands fa-facebook-f'></i>
                  </a>
                  <a href='#0'>
                    <i className='fa-brands fa-twitter'></i>
                  </a>
                  <a href='#0'>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                  <a href='#0'>
                    <i className='fa-brands fa-youtube'></i>
                  </a>
                </div>
              </div>
              <h3>
                <a href='team-single.html'>{teamData.ceo.name}</a>
              </h3>
              <span>{teamData.ceo.position}</span>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className='grid xl:grid-cols-4 grid-cols-2 gap-4'>
          {teamData.leadership.map((team, index) => (
            <div
              className='wow fadeInUp'
              data-wow-duration='1.2s'
              data-wow-delay='.2s'
              key={index}
            >
              <div className='team__item'>
                <div className='team__item-image'>
                  <img src={team.image} alt='team' />
                  <div className='team__item-image-icon social-icon'>
                    <a href='#0'>
                      <i className='fa-brands fa-facebook-f'></i>
                    </a>
                    <a href='#0'>
                      <i className='fa-brands fa-twitter'></i>
                    </a>
                    <a href='#0'>
                      <i className='fa-brands fa-linkedin-in'></i>
                    </a>
                    <a href='#0'>
                      <i className='fa-brands fa-youtube'></i>
                    </a>
                  </div>
                </div>
                <h3>
                  <a href='team-single.html'>{team.name}</a>
                </h3>
                <span>{team.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
