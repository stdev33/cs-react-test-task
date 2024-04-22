import React from 'react';
import EquipmentList from '../EquipmentList/EquipmentList';
import css from './Features.module.css';

const Features = ({ data }) => {
  return (
    <div className={css.featuresContainer}>
      <EquipmentList data={data} />
      <div className={css.vehicleDetails}>
        <p className={css.vehicleDetailsTitle}>Vehicle details</p>
        <div className={css.underLine}></div>
        <div></div>
      </div>
    </div>
  );
};

export default Features;
