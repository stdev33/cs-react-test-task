import React from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import css from './Reviews.module.css';

const Reviews = ({ data }) => {
  return (
    <>
      <ul className={css.reviewsList}>
        {data.reviews.map((item, index) => (
          <ReviewItem key={`${index}`} review={item} />
        ))}
      </ul>
    </>
  );
};

export default Reviews;
