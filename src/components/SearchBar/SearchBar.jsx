import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChangeInput = e => {
    setQuery(e.currentTarget.value.trim());
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter a search term.');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        className={css.input}
        type="text"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search film"
        onChange={onChangeInput}
      />
      <button className={css.btn__form} type="submit">
        Search
      </button>
    </form>
  );
};

SearchBar.propType = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
