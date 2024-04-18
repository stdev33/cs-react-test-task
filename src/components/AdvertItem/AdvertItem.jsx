import React from 'react';
import FavoriteToggle from '../FavoriteToggle/FavoriteToggle';
import Rating from '../Rating/Rating';
import Location from '../Location/Location';
import EquipmentList from '../EquipmentList/EquipmentList';
import css from './AdvertItem.module.css';

const AdvertItem = ({ data, onShowMore }) => {
  return (
    <li className={css.advertItem}>
      <div className={css.imageWrapper}>
        <img src={data.gallery[0]} alt={data.name} className={css.image} />
      </div>
      <div className={css.details}>
        <div className={css.header}>
          <div className={css.titleAndPrice}>
            <h3 className={css.title}>{data.name}</h3>
            <div className={css.priceAndFavorites}>
              <span className={css.price}>€{data.price.toFixed(2)}</span>
              <FavoriteToggle isFavorite={false} />
            </div>
          </div>
          <div className={css.ratingAndLocation}>
            <Rating value={data.rating} reviewsCount={data.reviews.length} />
            <Location value={data.location} />
          </div>
        </div>

        <p className={css.description}>{data.description}</p>
        <EquipmentList data={data} />
        <button
          className={css.showMoreButton}
          onClick={() => onShowMore(data._id)}
        >
          Show more
        </button>
      </div>
    </li>
  );
};

export default AdvertItem;
