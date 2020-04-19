import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useBookBl } from './useBookBl';
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
  } = useBookBl(props);
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
        ]}
        onRowClick={({ id }) => history.push(`/book/${id}`)}
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
    </>
  );
};

Books.propTypes = {};

export default Books;