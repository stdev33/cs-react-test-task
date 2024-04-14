import React from 'react';
import AdvertsList from '../../components/AdvertsList/AdvertsList';
import css from './Catalog.module.css';

const Catalog = () => {
  return (
    <div className={css.catalogPage}>
      <aside className={css.filtersColumn}>
        {/* Тут будуть компоненти фільтрації */}
        <div className={css.searchArea}>
          <button className={css.searchButton}>Search</button>
        </div>
      </aside>
      <main className={css.advertsColumn}>
        <AdvertsList />
      </main>
    </div>
  );
};

export default Catalog;
