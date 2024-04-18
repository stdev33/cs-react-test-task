import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/favorites/slice';
import icons from '../../icons/icons.svg';
import css from './FavoriteToggle.module.css';

const FavoriteToggle = ({ advert, width = 24, height = 24 }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favoriteItems);
  const isFavorite = favorites.some(item => item._id === advert._id);

  const handleToggle = () => {
    dispatch(toggleFavorite(advert));
  };

  return (
    <button className={css.favoritesButton} onClick={handleToggle}>
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
