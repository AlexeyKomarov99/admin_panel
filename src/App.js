import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

//===== Ресурсы =====//
import './App.css';

//===== Компоненты =====//
import AdminPanel from './components/AdminPanel/AdminPanel';
import Authorization from './components/Authorization/Authorization';

//===== Контексты =====//
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { handleLogin, isAuthenticated } = useContext(AuthContext);

  const sendCredentiaks = async (event, credentials, navigate) => {
    event.preventDefault();
    try {
      const loginSuccess = await handleLogin(credentials);
      if (loginSuccess) {
        console.log('Ответ от сервера:', loginSuccess);

        // Сохранение данных в localStorage login и password пользователя
        localStorage.setItem('login', credentials.telegram_id);
        localStorage.setItem('password', credentials.password);
        
        // Получаем доступ к navigate после использования Router
        navigate('/admin-panel');
      }
    } catch (error) {
      console.log('Ошибка процедуры входа', error);
    }
  };

  const AppContent = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
      const savedLogin = localStorage.getItem('login');
      const savedPassword = localStorage.getItem('password');

      if (!isAuthenticated && savedLogin && savedPassword) {
        const credentials = {
          telegram_id: savedLogin,
          password: savedPassword,
        };
        sendCredentiaks({ preventDefault: () => {}}, credentials, navigate);
      }
    }, [navigate, isAuthenticated]);

    return (
      <Routes>
        <Route path='/' element={<Authorization />} />
        <Route path='/admin-panel' element={<AdminPanel />} />
      </Routes>
    );
  };

  return (
    <div className='container'>
      <Router>
        <AppContent />
      </Router>
    </div>
  );
};

export default App;
