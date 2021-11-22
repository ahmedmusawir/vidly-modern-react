import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowBarUp, BsArrowBarDown } from 'react-icons/bs';

function TableHeader({ columns, sortColumn, onSort }) {
  const raiseSort = (path) => {
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    onSort(sortColumn);
  };

  const renderSortIcon = (col) => {
    if (col.path !== sortColumn.path) return null;

    if (sortColumn.order === 'asc') return <BsArrowBarDown />;
    return <BsArrowBarUp />;
  };

  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col.path || col.key} onClick={() => raiseSort(col.path)}>
            {col.label} {renderSortIcon(col)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
  sortColumn: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default TableHeader;
