import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

//===== Компоненты =====//
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

//===== Ресурсы =====//
import './Authorization.scss';

const Authorization = () => {
  
  const [activeSection, setActiveSection] = useState('Login');
  const toggleActiveSection = (section) => setActiveSection(section);
  
  return (
    <form className='Authorization'>
      <div className="Authorization__content">
        
        <div className="Authorization__header-wrapper">
          <div className="Authorization__header">
            <div 
              className={`Authorization__header-item ${activeSection === 'Login' ? 'active' : ''}`}
              onClick={() => toggleActiveSection('Login')}
            >
              Вход
            </div>
            <div 
              className={`Authorization__header-item ${activeSection === 'Registration' ? 'active' : ''}`}
              onClick={() => toggleActiveSection('Registration')}
            >
              Регистрация
            </div>
          </div>
        </div>
        
        <div className="Authorization__body-wrapper">
          <div className="Authorization__body">
            {activeSection === 'Login' && <Login />}
            {activeSection === 'Registration' && <Registration />}
          </div>
        </div>

      </div>

    </form>
  )
}

export default Authorization