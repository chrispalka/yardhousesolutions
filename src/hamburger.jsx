import styles from './Hamburger.module.css';

export function Hamburger({ isOpen }) {
  return (
    <>
      <div className={styles.hamburger}>
        <div
          className={
            isOpen
              ? [styles.burger, styles.burger1active].join(' ')
              : [styles.burger, styles.burger1].join(' ')
          }
        />
        <div
          className={
            isOpen
              ? [styles.burger, styles.burger2active].join(' ')
              : [styles.burger, styles.burger2].join(' ')
          }
        />
        <div
          className={
            isOpen
              ? [styles.burger, styles.burger3active].join(' ')
              : [styles.burger, styles.burger3].join(' ')
          }
        />
      </div>
    </>
  );
}
