import React from 'react';
import { useSelector } from 'react-redux';
import AdvertItem from '../../components/AdvertItem/AdvertItem';
import css from './Favorites.module.css';

const Favorites = () => {
  const favoriteItems = useSelector(state => state.favorites.favoriteItems);

  return (
    <>
      <h1 className={css.title}>Favorites</h1>
      <ul className={css.favoritesListContainer}>
        {favoriteItems.map(item => (
          <AdvertItem key={item._id} data={item} />
        ))}
      </ul>
    </>
  );
};

export default Favorites;
