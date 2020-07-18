import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';

export const AuthPage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { loading, request } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // useEffect(() => {
  //   message(error);
  // clearError();
  // }, [error, message]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      setForm({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      setForm({ email: '', password: '' });
      console.log('auth ', auth);
      console.log('data.token ', data.token, 'data.userId ', data.userId);
      auth.login(data.token, data.userId);
      history.push('/user');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>MERN Auth</h1>
      <form>
        <label htmlFor="email">
          Email
          <br />
          <input
            placeholder="Email"
            id="email"
            value={form.email}
            type="text"
            onChange={changeHandler}
            name="email"
          />
        </label>

        <br />
        <br />
        <label htmlFor="password">
          Пароль
          <br />
          <input
            placeholder="Пароль"
            id="password"
            value={form.password}
            type="password"
            onChange={changeHandler}
            name="password"
          />
        </label>

        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '10px' }}>
            <button onClick={loginHandler} type="button" disabled={loading}>
              Авторизация
            </button>
          </div>

          <div>
            <button type="button" onClick={registerHandler} disabled={loading}>
              Регистрация
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
