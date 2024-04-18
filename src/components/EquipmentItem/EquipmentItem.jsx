import React from 'react';
import css from './EquipmentItem.module.css';

const EquipmentItem = ({ id, data }) => {
  return (
    <li key={id} className={css.equipmentItem}>
      <svg width="20" height="20">
        <use xlinkHref={`/icons/icons.svg#${data.icon}`}></use>
      </svg>
      <p className={css.equipmentName}>{data.description}</p>
    </li>
  );
};

export default EquipmentItem;
