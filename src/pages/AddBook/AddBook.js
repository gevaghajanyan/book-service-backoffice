import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useAddBookBl } from './useAddBookBl';
import { Qxik } from '../../components/Qxik';

export const BookContext = React.createContext({});

const { Provider } = BookContext;

const AddBook = (props) => {

  const {
    published,
    categories,
    rate,
    setPublished,
    addBookSubmit,
  } = useAddBookBl(props);

  return (
    <Provider value={ { published }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form onSubmit={addBookSubmit}>
          <Grid
            container
            component='main'
            spacing={3}
          >
            <Grid item xs={6} m={1}>
              <TextField
                variant='outlined'
                required
                fullWidth
                label='Title'
                name='title'
                autoComplete='title'
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                label='Page Count'
                name='pageCount'
                autoComplete='title'
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                label='Authors'
                name='authors'
                autoComplete='authors'
                multiline
              />
            </Grid>
            <Grid item xs={6}>
              <KeyboardDatePicker
                format='mm/dd/yyyy'
                required
                fullWidth
                inputVariant='outlined'
                value={published}
                onChange={setPublished}
                label='Published Date'
                name='published'
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                autoFocus
                label='Short Description'
                name='shortDescription'
                autoComplete='shortDescription'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                autoFocus
                label='Long Description'
                name='longDescription'
                autoComplete='longDescription'
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl
                variant='outlined'
                required
                fullWidth
              >
                <InputLabel id='demo-simple-select-outlined-label'>Categories</InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  label='Categories'
                  name='categories'
                >
                  {categories.map(({ name, id }) => (
                    <MenuItem
                      key={id}
                      value={id}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                variant='outlined'
                required
                fullWidth
              >
                <InputLabel id='rate'>Rate</InputLabel>
                <Select
                  labelId='rate'
                  label='Rate'
                  name='rate'
                >
                  {rate.map((value) => (
                    <MenuItem
                      key={value}
                      value={value}
                    >
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant='contained'
                color='primary'
                type='submit'
              >
                Save

              </Button>
            </Grid>
          </Grid>
        </form>
      </MuiPickersUtilsProvider>
      <Qxik />
    </Provider>
  );
};

export default AddBook;