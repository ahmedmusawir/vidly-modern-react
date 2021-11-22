import React from 'react';
import Like from './Like';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function TableBody({ data, onLike, onDelete }) {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          <td>{item.title}</td>
          <td>{item.genre.name}</td>
          <td>{item.numberInStock}</td>
          <td>{item.dailyRentalRate}</td>
          <td>
            <Like like={item.like} onLike={() => onLike(item._id)} />
          </td>
          <td>
            <Button
              onClick={() => onDelete(item._id)}
              variant='danger'
              size='sm'
            >
              X
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {};

export default TableBody;
