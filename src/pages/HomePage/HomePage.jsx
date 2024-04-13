import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate('/catalog');
  };

  return (
    <div className={css.homepage}>
      <section className={css.hero}>
        <h1 className={css.title}>Discover Ukraine in a new way!</h1>
        <p className={css.subtitle}>Rent campers for unforgettable trips</p>
        <button className={css.ctaButton} onClick={goToCatalog}>
          Learn more
        </button>
      </section>
      <section className={css.features}>
        <h2 className={css.featuresTitle}>Why choose us?</h2>
        <div className={css.featuresList}>
          <div className={css.featureItem}>
            <h3 className={css.featureTitle}>Comfort</h3>
            <p className={css.featureDescription}>
              Campers are equipped with everything necessary for a comfortable
              stay on wheels.
            </p>
          </div>
          <div className={css.featureItem}>
            <h3 className={css.featureTitle}>Freedom</h3>
            <p className={css.featureDescription}>
              Plan your route and stops to your liking, nothing limits your
              freedom.
            </p>
          </div>
          <div className={css.featureItem}>
            <h3 className={css.featureTitle}>Adventures</h3>
            <p className={css.featureDescription}>
              Discover incredible places and adventures that cannot be reached
              by conventional transport.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
