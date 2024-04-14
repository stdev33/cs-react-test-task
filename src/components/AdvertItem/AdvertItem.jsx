import React from 'react';
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
              <span className={css.price}>€{data.price}</span>
              <button className={css.favoritesButton}>❤</button>
            </div>
          </div>
          <div className={css.ratingAndLocation}>
            <Rating value={data.rating} reviewsCount={data.reviews.length} />
            <div className={css.location}>{data.location}</div>
          </div>
        </div>

        <p className={css.description}>{data.description}</p>
        <div className={css.equipmentList}>
          {/* Оснащення буде компонентом EquipmentList або просто іконками, якщо компонент недоступний */}
        </div>
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
