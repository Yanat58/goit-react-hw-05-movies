import {
  useParams,
  NavLink,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { toast } from 'react-toastify';
import fetchMovie from 'services/movieApi';
import Loader from 'components/Loader/Loader';
import fotoAlternate from 'utilities/images/meh2.png';
import css from './MovieCardDetails.module.css';

const MovieCardDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const id = params.movieId;

  const activeClass = ({ isActive }) =>
    isActive ? `${css.active}` : `${css.navLink}`;

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    fetchMovie(id)
      .then(
        ({
          id,
          genres,
          overview,
          poster_path,
          original_title,
          release_date,
          vote_average,
        }) => {
          const movie = {
            id,
            genres,
            overview,
            release_date,
            vote_average,
            original_title,
            poster_path,
          };

          return setMovie(movie);
        }
      )
      .catch(error => toast.error(error.message, 'Something went wrong!'))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      <div className={css.wrapper}>
        <section className={css.container}>
          <Link
            className={css.btn__back}
            to={
              location?.state?.from?.pathname + location?.state?.from?.search ??
              '/'
            }
          >
            Back
          </Link>
          <div className={css.card__container}>
            <img
              className={css.card__img}
              src={
                movie?.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : fotoAlternate
              }
              alt=""
            />
            <div className={css.card__detaile}>
              <div className={css.box__title}>
                <h2 className={css.card__title}>
                  {movie?.original_title
                    ? movie.original_title
                    : 'Movie without a title'}
                </h2>
                <p className={css.card__title}>
                  ({movie?.release_date.slice(0, 4)})
                </p>
              </div>
              <p className={css.text__title}>
                Overview:
                <span className={css.text__detaile}>{movie?.overview}</span>
              </p>
              <p className={css.text__title}>
                User score:
                <span className={css.text__detaile}>
                  {Math.round(movie?.vote_average * 10)} %
                </span>
              </p>
              <ul className={css.card__list}>
                <span className={css.text__title}>Genres:</span>

                {movie?.genres?.length > 0 &&
                  movie.genres.map((genre, index) => (
                    <li className={css.card__item} key={index}>
                      <p>{genre.name}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>
        <section className={css.container__info}>
          <h2 className={css.card__title__info}>Additional information</h2>
          <ul className={css.info__list}>
            <li>
              <NavLink
                className={activeClass}
                to="cast"
                state={location?.state ?? '/'}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeClass}
                to="reviews"
                state={location?.state ?? '/'}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>

        {isLoading && <Loader />}
      </div>
    </>
  );
};

export default MovieCardDetails;
