// import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import {clsx} from 'clsx';

const Navigation = () => {
  const buildLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.activeLink);
  }
  return (
    <nav className={css.wrapper_links}>
      <NavLink className={buildLinkClass} to="/">Home</NavLink>
      <NavLink className={buildLinkClass} to="/movies">Movies</NavLink>
    </nav>
  );
}

export default Navigation;
