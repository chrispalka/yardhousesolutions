import styles from '../assets/styles/About.module.css';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.content}>
        At Yard House Transportation, we specialize in reliable and
        compassionate medical transportation services. Our team is dedicated to
        ensuring safe, comfortable, and timely transport for patients, providing
        peace of mind for families and caregivers. With modern vehicles and
        trained professionals, we're here to support your healthcare journey.
      </h2>
      <div className={styles.subContentContainer}>
        <h2 className={styles.subContent}>Serving the Greater Atlanta area</h2>
        <h2 className={styles.subContent}>Hours of Operation</h2>
        <div>
          <p className={styles.subContent}>Monday - Friday</p>
        </div>
        <div>
          <p className={styles.subContent}>7AM - 5PM</p>
        </div>
      </div>
    </div>
  );
}

export default About;
