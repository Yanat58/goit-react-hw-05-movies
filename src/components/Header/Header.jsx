import { NavLink } from 'react-router-dom';
import logo from 'utilities/images/logo.png';
import css from './Header.module.css';

const Header = () => {
  const activeClass = ({ isActive }) =>
    isActive ? `${css.active}` : `${css.navLink}`;

  return (
    <header>
      <div className={css.container}>
        <img
          className={css.logo__img}
          src={logo}
          alt="logo"
          width={140}
          height={140}
        />

        <ul className={css.nav__list}>
          <li>
            <NavLink className={activeClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={activeClass} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
