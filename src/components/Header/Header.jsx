import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink
              to="/"
              exact="true"
              className={({ isActive }) =>
                isActive ? css.activeLink : css.link
              }
            >
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? css.activeLink : css.link
              }
            >
              Catalog
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? css.activeLink : css.link
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
