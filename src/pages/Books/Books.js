import React from 'react';
import { useBookBl } from './useBookBl';
import DataTable from '../../components/DataTable/DataTable';

const Books = ({ ...props }) => {
  const {
    books: {
      data: books,
      totalCount,
    },
  } = useBookBl(props);

  console.log(books, 'books');
  return (
    <DataTable
      columns={[]}
      rows={books}
      totalCount={totalCount}
    >
      {book => (book.title)}
    </DataTable>
  );
};

Books.propTypes = {};

export default Books;