import React from 'react';
import { useBookBl } from './useBookBl';
import DataTable from '../../components/DataTable/DataTable';
import BookRow from '../../components/book/BookRow/BookRow';
import { TableCell } from '@material-ui/core';

const Books = ({ ...props }) => {
  const {
    books: {
      data: books,
      totalCount,
    },
    params: {
      page,
      count,
    },
    setParams,
  } = useBookBl(props);
  return (
    <DataTable
      columns={[
        { name: 'Title' },
        { name: 'Authors' },
        { name: 'Rate' },
        { name: 'Categories' },
        { name: 'Published' },
      ]}
      rows={books}
      page={page}
      rowsPerPage={count}
      onChangePage={(event, number) => setParams({
        page: number,
        count,
      })}
      onChangeRowsPerPage={({ target: { value } }) => setParams({
        page,
        count: value,
      })}
      totalCount={totalCount}
    >
      {book => (<BookRow key={book.id} {...book}/>)}
    </DataTable>
  );
};

Books.propTypes = {};

export default Books;