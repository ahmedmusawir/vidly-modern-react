import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function TableMain({ data, columns, sortColumn, onSort, onLike, onDelete }) {
  return (
    <Table responsive hover striped bordered variant='dark' size='sm'>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody
        data={data}
        columns={columns}
        onLike={onLike}
        onDelete={onDelete}
      />
    </Table>
  );
}

TableMain.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  sortColumn: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TableMain;
