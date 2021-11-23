import React from 'react';
import PropTypes from 'prop-types';
import Like from './common/Like';
import TableMain from './common/TableMain';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieTable({ movies, sortColumn, onSort, onLike, onDelete }) {
  const columns = [
    {
      path: 'title',
      label: 'Title',
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: (item) => (
        <Like like={item.like} onLike={() => onLike(item._id)} />
      ),
    },
    {
      key: 'delete',
      content: (item) => (
        <Button onClick={() => onDelete(item._id)} variant='danger' size='sm'>
          X
        </Button>
      ),
    },
  ];

  return (
    <TableMain
      data={movies}
      columns={columns}
      sortColumn={sortColumn}
      onSort={onSort}
      onLike={onLike}
      onDelete={onDelete}
    />
  );
}

MovieTable.propTypes = {
  movies: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MovieTable;
