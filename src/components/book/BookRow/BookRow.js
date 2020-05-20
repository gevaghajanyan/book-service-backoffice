import React, { memo } from 'react';
import moment from 'moment';
import { TableCell, IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { getFileUrl } from '../../../core/urls';

const BookRow = memo(({
  _id: id,
  authors,
  imageUrl,
  title,
  categories,
  rate,
  file,
  country,
  published,
  onDelete,
}) => {
  return (
    <>
      <TableCell>{title}</TableCell>
      <TableCell>{authors?.join(' / ')}</TableCell>
      <TableCell>{rate}</TableCell>
      <TableCell>{categories?.map(({ name }) => name).join(' / ')}</TableCell>
      <TableCell>{moment(published).format('DD-MM-YYYY')}</TableCell>
      <TableCell onClick={e => e.stopPropagation()}>
        <IconButton
          onClick={() => window.open(getFileUrl(file))}
        >
          <CloudDownloadIcon
            color='primary'
          />
        </IconButton>
        <IconButton
          onClick={event => onDelete(event, id)}
        >
          <DeleteForeverIcon
            color='secondary'
          />
        </IconButton>
      </TableCell>
    </>
  );
});

export default BookRow;
