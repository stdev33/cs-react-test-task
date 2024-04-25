import React, { useState } from 'react';
import FavoriteToggle from '../FavoriteToggle/FavoriteToggle';
import Rating from '../Rating/Rating';
import Location from '../Location/Location';
import EquipmentList from '../EquipmentList/EquipmentList';
import Modal from '../Modal/Modal';
import AdvertDetails from '../AdvertDetails/AdvertDetails';
import { formatPrice } from '../../helpers/helpers';
import css from './AdvertItem.module.css';

const AdvertItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
              <span className={css.price}>€{formatPrice(data.price)}</span>
              <FavoriteToggle advert={data} />
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
          type="button"
          className={css.showMoreButton}
          onClick={handleShowMore}
        >
          Show more
        </button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <AdvertDetails data={data} onClose={handleCloseModal} />
        </Modal>
      </div>
    </li>
  );
};

export default AdvertItem;
