import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

//===== Сервис =====//
import {login} from '../../services/AuthService';
import {UserData} from '../../services/UserService';

//===== Ресурсы =====//
import './Login.scss';

const Login = () => {
  
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    telegram_id: '',
    password: '',
  });

  const handleCredentialsChange = (e) => {
    const {name, value} = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(credentials);
      if(response) {
        console.log('Ответ от сервера:\n', response);
        navigate('/admin-panel');
      }
    } catch (error) {
      console.log('Ошибка процедуры входа', error);
    }

  }

  return (
    <form 
      className='Login'
      onSubmit={handleSubmit}
    >
      <div className="Login__content">
        
        <div className="Login__input-groups">
          
          <input 
            type="text" 
            className="Login__input-item"
            name='telegram_id'
            value={credentials.telegram_id}
            onChange={handleCredentialsChange}
            placeholder='Имя пользователя'
          />

          <input 
            type="password" 
            className="Login__input-item"
            name='password'
            value={credentials.password}
            onChange={handleCredentialsChange}
            placeholder='Пароль'
          />

        </div>

        <div className="Login__btn-wrapper">
          <button className='Login__btn-submit' type="submit">Войти</button>
        </div>

      </div>
    </form>
  )
}

export default Login;