import { useNavigate } from 'react-router-dom';
import './PageBanner.css';

export default function PageBanner() {
  const navigate = useNavigate();

  return (
    <section className='page-banner bg-image pt-32 pb-32'>
      <div className='container'>
        <h2 className='wow fadeInUp' data-wow-duration='1.2s' data-wow-delay='.2s'>
          About Us
        </h2>
        <div
          className='breadcrumb-list wow fadeInUp'
          data-wow-duration='1.4s'
          data-wow-delay='.4s'
        >
          <button onClick={() => navigate('/')}>Home:</button>
          <span className='!text-primary'> About Us</span>
        </div>
      </div>
    </section>
  );
}
