import React, {useState, useEffect, useContext} from 'react';

//===== Ресурсы =====//
import './AdminPanel.scss';

//===== Компоненты =====//
import NavbarAdminPanel from '../NavbarAdminPanel/NavbarAdminPanel';
import SocialsData from '../SocialsData/SocialsData';
import QuestsData from '../QuestsData/QuestsData';

//===== Сервисы =====//
import { GetUserData } from '../../services/UserService';
import { Socials } from '../../services/SocialsService';

//===== Контексты =====//
import { AuthContext } from '../../context/AuthContext';

const AdminPanel = () => {
  
  const [userData, setUserData] = useState(null);
  const [questsList, setQuestsList] = useState(null);
  const [activeSection, setActiveSection] = useState('socials');
  const {tokens} = useContext(AuthContext);

  const toggleSection = (sectionName) => setActiveSection(sectionName);

  const loadUserData = async () => {
    if (!tokens || !tokens.access) {
      console.log('Токены не установлены');
      return;
    }
    
    try {
      const user = await GetUserData(tokens);
      const quests = await Socials(tokens);
      if(
        Object.keys(user).length > 0
      ) {
        setUserData(user);
        setQuestsList(quests);
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
      <div className="AdminPanel__container">
        <NavbarAdminPanel
          userData={userData}
          activeSection={activeSection}
          toggleSection={toggleSection}
        />
        {activeSection === 'quests' && <QuestsData questsList={questsList} />}
        {activeSection === 'socials' && <SocialsData />}
      </div>
    </div>
  )
}

export default AdminPanel;