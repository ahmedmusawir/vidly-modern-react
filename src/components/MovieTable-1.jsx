import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './common/TableHeader';
import { Table } from 'react-bootstrap';
import TableBody from './common/TableBody';

function MovieTable({ movies, sortColumn, onSort, onLike, onDelete }) {
  const columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: 'like' },
    { key: 'delete' },
  ];

  return (
    <Table responsive hover striped bordered variant='dark' size='sm'>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody
        data={movies}
        columns={columns}
        onLike={onLike}
        onDelete={onDelete}
      />
    </Table>
  );
}

MovieTable.propTypes = {
  movies: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MovieTable;
