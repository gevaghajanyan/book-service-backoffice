import { useEffect, useState } from 'react';

export const useUsersBl = props => {

  const [users, setUsers] = useState([]);

  useEffect(() => {

  }, []);

  return {
    ...props
  }
};