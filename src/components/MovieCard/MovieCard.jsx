import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import fotoAlternate from 'utilities/images/meh2.png';
import css from './MovieCard.module.css';

const MovieCard = ({ id, original_title, poster_path, activeId, location }) => {
  return (
    <section className={css.container}>
      <ul className={css.movcard__list}>
        <li className={css.movcard__item} key={id}>
          <Link to={`/movies/${activeId}`} state={{ from: location }}>
            <img
              className={css.film__poster}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : fotoAlternate
              }
              alt={original_title}
            />
            <p className={css.film__name}>
              {original_title ? (
                original_title
              ) : (
                <span className={css.non__title}>Movie without a title</span>
              )}
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
};

MovieCard.prototype = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  activeId: PropTypes.number.isRequired,
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
};

export default MovieCard;
