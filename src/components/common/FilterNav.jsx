import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

function FilterNav({
  data,
  selectedItem,
  onItemSelect,
  textProperty,
  valueProperty,
}) {
  return (
    <ListGroup>
      {data.map((item, indx) => (
        <ListGroup.Item
          action
          key={indx}
          //   key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className='mb-1'
          active={item === selectedItem}
        >
          {item[textProperty]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

FilterNav.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

FilterNav.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FilterNav;
