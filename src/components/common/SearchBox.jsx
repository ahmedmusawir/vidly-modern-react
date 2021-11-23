import React from 'react';
import PropTypes from 'prop-types';

function SearchBox({ value, onChange }) {
  return (
    <input
      className='form-control mb-1'
      type='text'
      name='search'
      value={value}
      id='search'
      placeholder='Search...'
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
}

SearchBox.propTypes = {};

export default SearchBox;
