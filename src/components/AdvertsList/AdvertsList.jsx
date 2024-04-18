import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAdverts } from '../../redux/adverts/thunks';
import { selectIsLoading, selectError } from '../../redux/adverts/selectors';
import { selectVisibleAdverts } from '../../redux/filter/selectors';
import AdvertItem from '../AdvertItem/AdvertItem';
import css from './AdvertsList.module.css';

const ITEMS_PER_PAGE = 4;

const AdvertsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleAdverts = useSelector(selectVisibleAdverts);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdverts({ page: currentPage, limit: ITEMS_PER_PAGE }));
  }, [dispatch, currentPage]);


  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.advertsListWrapper}>
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
      <button onClick={handleLoadMore} className={css.loadMoreButton}>
        Load more
      </button>
    </div>
  );
};

export default AdvertsList;
