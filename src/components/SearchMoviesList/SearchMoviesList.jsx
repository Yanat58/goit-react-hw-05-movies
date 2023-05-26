import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard/MovieCard';
import css from './SearchMoviesList.module.css';

const SearchMoviesList = ({ movies, value }) => {
  const location = useLocation();

  return (
    <>
      {movies && movies.length > 0 && (
        <ul className={css.movlist__list}>
          {movies?.map(({ id, original_title, poster_path, vote_average }) => {
            return (
              <MovieCard
                location={location}
                key={id}
                title={original_title}
                poster_path={poster_path}
                voteAverage={vote_average}
                activeId={id}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

SearchMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default SearchMoviesList;
