import React from 'react';
import css from './Rating.module.css';

const Rating = ({ value, reviewsCount }) => {
  return (
    <div className={css.ratingWrapper}>
      <p className={css.rating}>{`${value}(${reviewsCount} Reviews)`}</p>
    </div>
  );
};

export default Rating;
