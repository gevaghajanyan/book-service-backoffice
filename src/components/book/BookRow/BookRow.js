import React, { memo } from 'react';
import moment from 'moment';
import { TableCell } from '@material-ui/core';

const BookRow = memo(({
  authors,
  imageUrl,
  title,
  categories,
  rate,
  pages,
  country,
  published,
  id,
}) => {
  return (
    <>
      <TableCell>{title}</TableCell>
      <TableCell>{authors?.join(' / ')}</TableCell>
      <TableCell>{rate}</TableCell>
      <TableCell>{categories?.map(({ name }) => name).join(' / ')}</TableCell>
      <TableCell>{moment(published).format('DD-MM-YYYY')}</TableCell>
    </>
  );
});

export default BookRow;