import React, {useState, useEffect, useContext} from 'react';

//===== Ресурсы =====//

//===== Компоненты =====//

//===== Сервисы =====//
import { GetUserData } from '../../services/UserService';

//===== Контексты =====//
import { AuthContext } from '../../context/AuthContext';

const AdminPanel = () => {
  
  const [userData, setUserData] = useState(null);
  const {tokens} = useContext(AuthContext);

  const loadUserData = async () => {
    try {
      const response = await GetUserData(tokens);
      if(response) {
        setUserData(response);
        console.log('Данные пользователя');
        console.log(userData);
      }
    } catch (error) {
      console.log('Ошибка загрузки данных о пользователе', error);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);
  
  return (
    <div className='AdminPanel'>
      <span>
      </span>
    </div>
  )
}

export default AdminPanel;