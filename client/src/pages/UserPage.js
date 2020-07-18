import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const UserPage = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const logout = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };
  return (
    <div>
      <h1>UserPage</h1>
      <Link to="/" onClick={logout}>
        Выйти
      </Link>
    </div>
  );
};
