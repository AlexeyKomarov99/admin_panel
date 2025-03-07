import React, {useState, useEffect, useContext} from 'react';

//===== Ресурсы =====//

//===== Компоненты =====//

//===== Сервисы =====//
import { 
  GetUserData,
  GetSocials,
} from '../../services/UserService';

//===== Контексты =====//
import { AuthContext } from '../../context/AuthContext';

const AdminPanel = () => {
  
  const [userData, setUserData] = useState(null);
  const [socialsList, setSocialsList] = useState(null);

  const {tokens} = useContext(AuthContext);

  const loadUserData = async () => {
    if (!tokens || !tokens.access) {
      console.log('Токены не установлены');
      return;
    }
    
    try {
      const user = await GetUserData(tokens);
      const socials = await GetSocials(tokens);
      if(
        Object.keys(user).length > 0
      ) {
        setUserData(user);
        setSocialsList(socials);
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
        {userData ? userData.last_name : 'null'}
        <br />
        {userData ? userData.last_login : 'null'}
      </span>
      <span>
        {socialsList && socialsList.length > 0 ? (
          socialsList.map((social) => (
            <div key={social.id}>
              {social.name}
            </div>
          ))
        ) : (
          <div>Список пуст!</div>
        )}
      </span>
    </div>
  )
}

export default AdminPanel;