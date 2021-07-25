import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../../redux/products/products_actions';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const SearchBar = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    console.log("search is ", search)
    dispatch(fetchProducts(`products?q=${search}`));
  }, [dispatch, search]);
  
  const handleOnSearch = (string, results) => {
    setSearch(string)
  }

  
  const handleOnClear = (result) => {
    setSearch("")
  }

  const handleOnSelect = (item) => {
    setSearch(item)
  }

  const formatResult = (item) => {
    return item;
  }

  return (
    <div className="pb-4">
      <ReactSearchAutocomplete
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            autoFocus
            onClear={handleOnClear}
            formatResult={formatResult}
          />
    </div>
  );
};

export default SearchBar;
