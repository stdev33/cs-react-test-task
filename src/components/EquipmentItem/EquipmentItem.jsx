import React from 'react';
import icons from '../../icons/icons.svg';
import css from './EquipmentItem.module.css';

const EquipmentItem = ({ data }) => {
  return (
    <li className={css.equipmentItem}>
      <svg width="20" height="20">
        <use xlinkHref={`${icons}#${data.icon}`}></use>
      </svg>
      <p className={css.equipmentName}>{data.description}</p>
    </li>
  );
};

export default EquipmentItem;
