import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {fetchSearchMovie} from 'services/api';
import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';
import SearchBar from 'components/SearchBar/SearchBar';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');

  const query = searchParams.get('query') ?? '';
  // const page = searchParams.get('page') ?? 1;

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchSearchMovie(query)
      .then(({ results }) => {
        setMovies([...results]);
      })
      .catch(error => toast.error(error.message, 'Something went wrong!'));
  }, [ query]);

  const getSearchRequest = value => {
    setSearchParams({ query: value  });
  };
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '30px',
        paddingLeft: '30px',
        paddingRight: '30px',
      }}
    >
      <SearchBar onSubmit={getSearchRequest} />
      {movies && <SearchMoviesList movies={movies} value={query} />}
    </div>
  );
};

export default MoviesPage;
