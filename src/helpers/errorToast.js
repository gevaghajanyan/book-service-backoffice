import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { toast } from 'react-toastify';

export const errorToast = (error) => {
  try {
    const {
      statusCode,
      timestamp,
      path,
      message,
    } = JSON.parse(error.message);

    return toast(
      <Alert severity="error">
        <AlertTitle>{statusCode}</AlertTitle>
        <div>{message}</div>
        path: <strong>{path}</strong>
        <div>
          time: <time>{timestamp}</time>
        </div>
      </Alert>,
    );
  } catch (e) {
    toast.error(e);
  }
};
