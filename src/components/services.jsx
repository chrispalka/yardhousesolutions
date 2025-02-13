import styles from '../assets/styles/Services.module.css';
import { Card } from '../layout/index';
import WheelchairImg from '../assets/wheelchair_transport.webp';
import SpecialNeedsImg from '../assets/special_needs_service.webp';
import StretcherImg from '../assets/stretcher_service.webp';
import SeniorImg from '../assets/senior_service.webp';

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h1>SERVICES</h1>
      <div className={styles.grid}>
        <Card
          title='Wheelchair'
          alt='Senior person being transported in wheelchair via accessible van'
          content='Safe and reliable transportation for wheelchair-bound passengers, ensuring comfort and ease of access.'
          image={WheelchairImg}
        />
        <Card
          title='Stretcher'
          alt='Non-Emergency medical personnel transporting patient on stretcher'
          content='Specialized transportation services for patients requiring a stretcher, with experienced staff ensuring safe handling.'
          image={StretcherImg}
        />
        <Card
          title='Senior'
          alt='Senior or elderly person being transported to medical appointment by caring driver'
          content='Caring and professional transportation for seniors to medical appointments, social events, or errands.'
          image={SeniorImg}
        />
        <Card
          title='Special Needs'
          alt='Special Needs individual being transported to school by caring driver'
          content='Personalized transportation solutions for individuals with disabilities or special needs.'
          image={SpecialNeedsImg}
        />
      </div>
    </div>
  );
}

export default Services;
