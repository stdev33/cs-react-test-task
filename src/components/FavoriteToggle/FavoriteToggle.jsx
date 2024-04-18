import React from 'react';
import icons from '../../icons/icons.svg';
import css from './FavoriteToggle.module.css';

const FavoriteToggle = ({ isFavorite, onToggle, width = 24, height = 24 }) => {
  return (
    <button className={css.favoritesButton} onClick={onToggle}>
      <svg
        className={css.favoritesIcon}
        width={`${width}`}
        height={`${height}`}
      >
        <use
          xlinkHref={`${icons}#${
            isFavorite ? 'icon-heart-selected' : 'icon-heart'
          }`}
        ></use>
      </svg>
    </button>
  );
};

export default FavoriteToggle;
