import React, {useState} from 'react';

//===== Ресурсы =====//
import './Login.scss';

const Login = () => {
  
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

  const handleSubmit = (e) => {
    e.preventDefault();


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