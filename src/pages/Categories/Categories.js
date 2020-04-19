import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useCategoriesBl } from './useCategoriesBl';

import DataTable from '../../components/DataTable/DataTable';
import CategoriesRow from '../../components/categories/CategoriesRow/CategoriesRow';
import TextField from '@material-ui/core/TextField';

const Categories = (props) => {
  const {
    categories: {
      totalCount,
      data: categories,
    },
    setParams,
    params: {
      page,
      count,
    },
    modalState,
    toggleAddModalState,
    addCategory,
    deleteCategory,
  } = useCategoriesBl(props);

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
            <Button
              onClick={toggleAddModalState}
              variant='outlined'
              color='primary'
            >
              Add Category
            </Button>
          </Box>
        </Paper>
      </Box>
      <DataTable
        columns={[
          { name: 'Name' },
          { name: 'Id' },
          { name: 'Actions' },
        ]}
        rows={categories}
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
        {category => (
          <CategoriesRow
            key={category.id}
            onDelete={deleteCategory}
            {...category}
          />)}
      </DataTable>
      <Dialog
        open={modalState}
        onClose={toggleAddModalState}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <form
          onSubmit={addCategory}
        >
          <DialogTitle id='alert-dialog-title'>{'Use Google\'s location service?'}</DialogTitle>
          <DialogContent>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="email"
              autoFocus
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleAddModalState} color='primary'>
              Disagree
            </Button>
            <Button
              type='submit'
              color='primary'
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Categories;