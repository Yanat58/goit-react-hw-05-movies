import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import fetchCast from 'services/castApi';
import Loader from 'components/Loader/Loader';
import fotoAlternate from 'utilities/images/not-found.png';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    setIsLoading(true);

    fetchCast(id)
      .then(({ cast }) => {
        cast.map(({ character, original_name, profile_path }) => ({
          character,
          original_name,
          profile_path,
        }));

        setCast(cast);
      })
      .catch(error => toast.error(error.message, 'Something went wrong!'))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div className={css.wrapper}>
      <section className={css.container}>
        {cast && cast.length > 0 ? (
          <ul className={css.actor__list}>
            {cast?.map(({ character, original_name, profile_path }, index) => {
              return (
                <li className={css.actor__item} key={index}>
                  <img
                    className={css.foto_actor}
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w300${profile_path}`
                        : fotoAlternate
                    }
                    alt={original_name}
                  />
                  <div className={css.actor__box}>
                    <p className={css.actor__name}>{original_name}</p>
                    <p className={css.actor__character}>
                      Character:{character}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className={css.span__text}>Cast not found</p>
        )}
        {isLoading && <Loader />}
      </section>
    </div>
  );
};

export default Cast;
