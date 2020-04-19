import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import TableBody from '@material-ui/core/TableBody';
import { TableFooter } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const DataTable = memo(({
  className,
  rows,
  columns,
  tableHeader,
  tableFooter,
  children,
  totalCount,
  renderColumn,
  onChangePage,
  rowsPerPage,
  page,
  onChangeRowsPerPage,
  onRowClick,
  ...props
}) => {
  return (
    <TableContainer component={Paper}>
      <Table
        className={className}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            {columns.map(column => renderColumn(column))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.id}
              onClick={() => onRowClick(row)}
              hover
            >
              {children(row)}
            </TableRow>
          ))}
        </TableBody>
        {tableFooter}
        {!!totalCount && (
          <TableFooter>
            <TableRow>
              <TablePagination
                onChangeRowsPerPage={onChangeRowsPerPage}
                onChangePage={onChangePage}
                count={totalCount}
                rowsPerPage={rowsPerPage}
                page={page}
              />
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </TableContainer>
  );
});

DataTable.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  renderColumn: PropTypes.func,
  onRowClick: PropTypes.func,
  className: PropTypes.string,
  totalCount: PropTypes.number,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
};

DataTable.defaultProps = {
  className: '',
  tableHeader: null,
  tableFooter: null,
  rowsPerPage: 10,
  page: 0,
  renderColumn: column => (<TableCell key={column.name}>{column.name}</TableCell>),
  onRowClick: () => {}
};

export default DataTable;
