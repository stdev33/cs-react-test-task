import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAdverts } from '../../redux/adverts/thunks';
import { selectIsLoading, selectError } from '../../redux/adverts/selectors';
import { selectVisibleAdverts } from '../../redux/filter/selectors';
import AdvertItem from '../AdvertItem/AdvertItem';
import css from './AdvertsList.module.css';

const AdvertsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleAdverts = useSelector(selectVisibleAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  console.log(visibleAdverts);

  return (
    <ul className={css.advertsList}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {visibleAdverts.map(itemData => (
        <AdvertItem
          key={itemData._id}
          data={itemData}
          onShowMore={id => console.log(`Show more: ${id}`)}
        />
      ))}
    </ul>
  );
};

export default AdvertsList;
