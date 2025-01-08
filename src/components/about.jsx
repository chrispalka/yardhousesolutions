import styles from '../assets/styles/About.module.css';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.content}>
        <span>
          At Yard House Transportation, we specialize in reliable and
          compassionate medical transportation services. Our team is dedicated
          to ensuring safe, comfortable, and timely transport for patients,
          providing peace of mind for families and caregivers. With modern
          vehicles and trained professionals, we're here to support your
          healthcare journey.
        </span>
      </div>
      <div className={styles.subContentContainer}>
        <p className={styles.subContent}>Serving the Greater Atlanta area</p>
        <p className={styles.subContent}>Hours of Operation</p>
        <div>
          <p className={styles.subContent}>Monday - Friday</p>
        </div>
        <div>
          <p className={styles.subContent}>5AM - 7PM</p>
        </div>
        <div>
          <p className={styles.subContent}>Weekends</p>
        </div>
        <div>
          <p className={styles.subContent}>7AM - 5PM</p>
        </div>
      </div>
    </div>
  );
}

export default About;
