import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { useAddBookBl } from './useAddBookBl';
import { useAddBookStyles } from './useAddBookStyles';

export const BookContext = React.createContext({});

const AddBook = (props) => {

  const {
    published,
    categories,
    rate,
    image,
    file,
    setPublished,
    addBookSubmit,
    uploadImage,
    uploadFile,
  } = useAddBookBl(props);
  const classes = useAddBookStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={addBookSubmit}>
        <Grid
          container
          component='main'
          spacing={3}
        >
          <Grid item xs={12}>
            <input
              accept='image/*'
              className={classes.input}
              id='contained-button-file'
              type='file'
              name='image'
              onChange={uploadImage}
            />
            <label htmlFor='contained-button-file'>
              {!!image ? (
                <img
                  className={classes.image}
                  src={image}
                  alt='image'
                />
              ) : (
                <PhotoCameraIcon
                  color='primary'
                />
              )}
            </label>
          </Grid>
          <Grid item xs={12}>
            <input
              accept='application/pdf'
              className={classes.input}
              id='contained-button-pdf-file'
              type='file'
              name='file'
              onChange={uploadFile}
            />
            <label htmlFor='contained-button-pdf-file'>
              {!!file ? (
                file
              ) : (
                <PictureAsPdfIcon
                  color='primary'
                />
              )}
            </label>
          </Grid>
          <Grid item xs={6}>
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
              format='MM/dd/yyyy'
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
                {categories.map(({ name, _id: id }) => (
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
  );
};

export default AddBook;
