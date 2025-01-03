import HeroImg from '../assets/nursehelpelderly.jpeg';
import styles from '../assets/styles/Hero.module.css';

function Hero() {
  return (
    <>
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
      <div className={styles.gradient}>
        <img src={HeroImg} className={styles.heroImage} alt='' />
      </div>
    </>
  );
}

export default Hero;
