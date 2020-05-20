import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const CategoriesRow = memo(({
  _id: id,
  name,
  onDelete = (
    event,
    id,
  ) => {
  },
}) => {
  return (
    <>
      <TableCell>{name}</TableCell>
      <TableCell>{id}</TableCell>
      <TableCell>
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

CategoriesRow.propTypes = {
  onDelete: PropTypes.func,
};

export default CategoriesRow;
