import React from 'react';
import css from './Location.module.css';

const Location = ({ value }) => {
  return (
    <div className={css.locationWrapper}>
      <svg width="16" height="16">
        <use xlinkHref="/icons/icons.svg#icon-map-pin"></use>
      </svg>
      <p className={css.location}>{`${value}`}</p>
    </div>
  );
};

export default Location;
