import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {fetchReviews} from 'services/api';
import Loader from 'components/Loader/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    setIsLoading(true);

    fetchReviews(id)
      .then(({ results }) => {
        setResults(results);
      })
      .catch(error => toast.error(error.message, 'Something went wrong!'))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <section className={css.container}>
      {results && results.length > 0 ? (
        <ul className={css.author__list}>
          {results?.map(({ author, content, updated_at }, index) => {
            return (
              <li className={css.author__item} key={index}>
                <p className={css.author__name}>{author}</p>
                <p className={css.author__content}>{content}</p>
                <p className={css.text__data}>
                  {updated_at && updated_at.slice(0, 10)}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.non__reviews}>
          We don't have any reviews for this movie.
        </p>
      )}
      {isLoading && <Loader />}
    </section>
  );
};

export default Reviews;
