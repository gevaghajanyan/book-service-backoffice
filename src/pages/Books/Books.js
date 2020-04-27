import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useBooksBl } from './useBooksBl';
import DataTable from '../../components/DataTable/DataTable';
import BookRow from '../../components/book/BookRow/BookRow';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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
    deleteBook,
  } = useBooksBl(props);
  const history = useHistory();

  return (
    <>
      <Box
        mb={2}
      >
        <Paper>
          <Box
            display='flex'
            justifyContent='flex-end'
            p={2}
          >
            <NavLink
              to='/book/add'
            >
              <Button
                variant='outlined'
                color='primary'
              >
                Add Book
              </Button>
            </NavLink>
          </Box>
        </Paper>
      </Box>
      <DataTable
        columns={[
          { name: 'Title' },
          { name: 'Authors' },
          { name: 'Rate' },
          { name: 'Categories' },
          { name: 'Published' },
          { name: 'actions' },
        ]}
        onRowClick={({ _id: id }) => history.push(`/book/${id}`)}
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
        {book => (<BookRow
          key={book._id}
          {...book}
          onDelete={deleteBook}
        />)}
      </DataTable>
    </>
  );
};

Books.propTypes = {};

export default Books;