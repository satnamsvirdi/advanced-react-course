import { useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

const SearchBar = ({ store }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const doSearch = useMemo(
    () => debounce((term) => {
      store.setSearchTerm(term);
    }, 300),
    [store],
  );

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    doSearch(term);
  };

  return (
    <input
      value={searchTerm}
      type="search"
      placeholder="Enter search term"
      onChange={handleChange}
    />
  );
};

export default storeProvider()(SearchBar);
