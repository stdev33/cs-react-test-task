import React from 'react';
import RatingStarsList from '../RatingStarsList/RatingStarsList';
import css from './ReviewItem.module.css';

const ReviewItem = ({ review }) => {
  return (
    <li className={css.reviewItem}>
      <div className={css.reviewHeader}>
        <div className={css.avatarPlaceholder}>
          {review.reviewer_name.length > 0
            ? review.reviewer_name.charAt(0).toUpperCase()
            : 'G'}
        </div>
        <div className={css.nameAndRating}>
          <p className={css.reviewerName}>
            {review.reviewer_name.length > 0 ? review.reviewer_name : 'Guest'}
          </p>
          <RatingStarsList rating={review.reviewer_rating} />
        </div>
      </div>
      <p className={css.reviewText}>{review.comment}</p>
    </li>
  );
};

export default ReviewItem;
