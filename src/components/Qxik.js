import React, { useContext } from 'react';
import { BookContext } from '../pages/AddBook/AddBook';

export const Qxik = () => {
  const {
    published,
  } = useContext(BookContext);
  return (
    <div>
      {new Date(published).toDateString()}
    </div>
  );
};