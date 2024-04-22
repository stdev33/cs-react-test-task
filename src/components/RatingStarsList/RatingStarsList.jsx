import React from 'react';
import icons from '../../icons/icons.svg';
import css from './RatingStarsList.module.css';

const RatingStarsList = ({ rating }) => {
  const stars = new Array(5).fill(0);

  return (
    <ul className={css.ratingStarsList}>
      {stars.map((_, index) => (
        <li key={`${index}`}>
          <svg
            width="16"
            height="16"
            className={
              index + 1 <= rating ? css.ratingStarOn : css.ratingStarOff
            }
          >
            <use xlinkHref={`${icons}#icon-star`}></use>
          </svg>
        </li>
      ))}
    </ul>
  );
};

export default RatingStarsList;
