import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { FilterLabel, FilterInput } from './SearchingFilter.styled';

export const SearchingFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value.trim()));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
};
