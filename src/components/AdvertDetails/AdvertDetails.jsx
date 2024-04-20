import React from 'react';
import Rating from '../Rating/Rating';
import Location from '../Location/Location';
import icons from '../../icons/icons.svg';
import { formatPrice } from '../../helpers/helpers';
import css from './AdvertDetails.module.css';

const AdvertDetails = ({ data, onClose }) => {
  return (
    <div className={css.advertDetailsContainer}>
      <div className={css.header}>
        <div className={css.headerTop}>
          <p className={css.title}>{data.name}</p>
          <button className={css.closeButton} onClick={onClose}>
            <svg className={css.favoritesIcon} width="32" height="32">
              <use xlinkHref={`${icons}#icon-close`}></use>
            </svg>
          </button>
        </div>
        <div className={css.headerBottom}>
          <div className={css.ratingAndLocation}>
            <Rating value={data.rating} reviewsCount={data.reviews.length} />
            <Location value={data.location} />
          </div>
          <span className={css.price}>€{formatPrice(data.price)}</span>
        </div>
      </div>
      <div className={css.content}>
        <ul className={css.advertImages}>
          {data.gallery.map((imgUrl, imgIndex) => (
            <li key={imgIndex}>
              <div className={css.imageWrapper}>
                <img src={imgUrl} alt={data.name} className={css.image} />
              </div>
            </li>
          ))}
        </ul>
        <div className={css.card}>
          <p className={css.description}>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertDetails;
