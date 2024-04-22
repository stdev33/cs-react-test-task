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
        <ul className={css.vehicleDetailsList}>
          <li className={css.vehicleDetailsListItem}>
            <p className={css.vehicleDetailsText}>Form</p>
            <p className={css.vehicleDetailsText}>{data.form}</p>
          </li>
          <li className={css.vehicleDetailsListItem}>
            <p className={css.vehicleDetailsText}>Length</p>
            <p className={css.vehicleDetailsText}>{data.length}</p>
          </li>
          <li className={css.vehicleDetailsListItem}>
            <p className={css.vehicleDetailsText}>Width</p>
            <p className={css.vehicleDetailsText}>{data.width}</p>
          </li>
          <li className={css.vehicleDetailsListItem}>
            <p className={css.vehicleDetailsText}>Height</p>
            <p className={css.vehicleDetailsText}>{data.height}</p>
          </li>
          <li className={css.vehicleDetailsListItem}>
            <p className={css.vehicleDetailsText}>Tank</p>
            <p className={css.vehicleDetailsText}>{data.tank}</p>
          </li>
          <li className={css.vehicleDetailsListItem}>
            <p className={css.vehicleDetailsText}>Consumption</p>
            <p className={css.vehicleDetailsText}>{data.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
