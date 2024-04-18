import React from 'react';
import icons from '../../icons/icons.svg';
import css from './Rating.module.css';

const Rating = ({ value, reviewsCount }) => {
  return (
    <div className={css.ratingWrapper}>
      <svg width="20" height="20">
        <use xlinkHref={`${icons}#icon-star`}></use>
      </svg>
      <p className={css.rating}>{`${value}(${reviewsCount} Reviews)`}</p>
    </div>
  );
};

export default Rating;