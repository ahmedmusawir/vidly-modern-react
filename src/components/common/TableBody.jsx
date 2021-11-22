import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

function TableBody({ data, columns }) {
  const renderCell = (item, col) => {
    if (col.content) return col.content(item);

    return _.get(item, col.path);
  };

  const createKey = (item, col) => {
    return item._id + (col.path || col.key);
  };
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((col) => (
            <td key={createKey(item, col)}>{renderCell(item, col)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default TableBody;
