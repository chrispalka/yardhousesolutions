import React from 'react';
import styles from '../assets/styles/Card.module.css';

const Card = ({ title, content, image, alt }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={alt} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{content}</p>
      </div>
    </div>
  );
};

export default Card;
