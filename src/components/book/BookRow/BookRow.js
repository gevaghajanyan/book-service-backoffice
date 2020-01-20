import React, { memo } from 'react';
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
      <TableCell>{categories?.join(' / ')}</TableCell>
      <TableCell>{new Date(published).toLocaleDateString().replace('/\//g', '-')}</TableCell>
    </>
  );
});

export default BookRow;