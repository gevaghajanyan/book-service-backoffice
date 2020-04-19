import React, { useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { useEditBookBl } from './useEditBookBl';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: 500,
    width: '100%',
  },
  field: {
    minWidth: 320,
    maxWidth: 500,
    width: '100%',
  },
}));

export default function EditBook(props) {
  const { book } = useEditBookBl(props);
  const classes = useStyles();
  if (!book) {
    return (
      <LinearProgress/>
    );
  }

  const { title, page, country, published } = book;


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FormControl className={classes.form}>
        <TextField
          className={classes.field}
          label="Title"
          variant="outlined"
          defaultValue={title}
        />
        <TextField
          className={classes.field}
          label="Page"
          variant="outlined"
          defaultValue={page}
        />
        <TextField
          className={classes.field}
          label="Country"
          variant="outlined"
          defaultValue={country}
        />
        <KeyboardDatePicker
          disableToolbar
          label="Date picker inline"
          inputValue={new Date().toDateString()}
        />
      </FormControl>
    </MuiPickersUtilsProvider>
  );
}