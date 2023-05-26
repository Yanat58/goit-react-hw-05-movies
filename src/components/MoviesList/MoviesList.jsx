import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard/MovieCard';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.movies__list}>
      {movies?.map(({ id, original_title, poster_path }, index) => {
        return (
          <MovieCard
            location={location}
            key={index}
            id={id}
            original_title={original_title}
            poster_path={poster_path}
            activeId={id}
          />
        );
      })}
    </ul>
  );
};

MoviesList.propType = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default MoviesList;
