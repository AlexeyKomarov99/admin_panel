import React, {useState} from 'react';

//===== Ресурсы =====//
import './Registration.scss';

const Registration = () => {
  
  const [formData, setFormData] = useState({
    telegram_id: '',
    password: '',
    repeatPassword: ''
  })

  const handleFormDataChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    
  }


  return (
    <form 
      className='Registration'
      onSubmit={handleSubmit}
    >
      <div className="Registration__content">
        
        <div className="Registration__input-groups">
          
          <input 
            type="text" 
            className="Registration__input-item"
            name='telegram_id'
            value={formData.telegram_id}
            onChange={handleFormDataChange}
            placeholder='Логин'
          />

          <input 
            type="password" 
            className="Registration__input-item"
            name='password'
            value={formData.password}
            onChange={handleFormDataChange}
            placeholder='Введите пароль'
          />

          <input 
            type="password" 
            className="Registration__input-item"
            name='repeatPassword'
            value={formData.repeatPassword}
            onChange={handleFormDataChange}
            placeholder='Повторите пароль'
          />

        </div>

        <div className="Registration__btn-wrapper">
          <button className='Registration__btn-submit' type="submit">Зарегистрироваться</button>
        </div>

      </div>
    </form>
  )
}

export default Registration;