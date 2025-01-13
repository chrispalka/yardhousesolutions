import HeroImg from '../assets/nursehelpelderly.jpeg';
import styles from '../assets/styles/Hero.module.css';

function Hero() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          <div className={styles.heroTitleContainer}>
            <div>
              <h2>YARD HOUSE</h2>
            </div>
            <div>
              <h2>SOLUTIONS</h2>
            </div>
          </div>
          <div className={styles.heroSubTextContainer}>
            <span>Your Health, Our Priority on the Road.</span>
          </div>
        </div>
        <div className={styles.gradient}>
          <img src={HeroImg} className={styles.heroImage} alt='' />
        </div>
      </div>
      <div className={styles.telephoneContainer}>
        <div>
          <h2>Hablamos español</h2>
        </div>
        <div style={'display: flex;'}>
          <h2 style={'margin-top: 0'}>
            <a href='tel:+1 (404) 772-5167'>CALL NOW</a>
            <a href='tel:+1 (404) 772-5167'>+1 (404) 772-5167</a>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Hero;
