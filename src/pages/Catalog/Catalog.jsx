import React from 'react';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import css from './Catalog.module.css';

const Catalog = () => {
  return (
    <div className={css.catalogPage}>
      <aside className={css.filtersColumn}>
        {/* Filtering components goes here */}
        <div className={css.searchArea}>
          <button type="button" className={css.searchButton}>
            Search
          </button>
        </div>
      </aside>
      <main className={css.advertsColumn}>
        <AdvertsList />
      </main>
    </div>
  );
};

export default Catalog;
