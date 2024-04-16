import React from 'react';
import EquipmentItem from '../EquipmentItem/EquipmentItem';
import { generateEquipmentList } from '../../helpers/helpers';
import css from './EquipmentList.module.css';

const EquipmentList = data => {
  const equipmentList = generateEquipmentList(data['data']);
  return (
    <ul className={css.equipmentList}>
      {equipmentList.map((item, index) => (
        <EquipmentItem
          key={`${data['data']._id}_${index}`}
          id={`${data['data']._id}_${index}`}
          data={item}
        />
      ))}
    </ul>
  );
};

export default EquipmentList;
