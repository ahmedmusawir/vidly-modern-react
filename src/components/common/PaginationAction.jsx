import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import _ from 'lodash';

function PaginationAction({ itemsCount, pageSize, currentPage, onPageChange }) {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  let items = [];

  pages.map((page) => {
    return items.push(
      <Pagination.Item
        key={page}
        active={currentPage === page}
        activeLabel=''
        style={{ margin: '.10rem' }}
        onClick={() => onPageChange(page)}
      >
        {page}
      </Pagination.Item>
    );
  });

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
}

PaginationAction.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationAction;
