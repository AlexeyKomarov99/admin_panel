import React from 'react';

//===== Ресурсы =====//
import './NavbarAdminPanel.scss';

const sectionTitels = [
  {id: 1, sectionTitle: 'socials'},
  {id: 2, sectionTitle: 'quests'},
];

const NavbarAdminPanel = ({userData, activeSection, toggleSection}) => {
  
  // const userName = userData?.first_name;
  const userName = userData ? userData.first_name : 'no';
  
  return (
    <nav className='NavbarAdminPanel'>
      <div className="NavbarAdminPanel__wrapper">
        <div className="NavbarAdminPanel__container">
          <ul className="NavbarAdminPanel__group">
            <div className="NavbarAdminPanel__username">
              {userName}
            </div>
            <div className="NavbarAdminPanel__group-items">
              {sectionTitels.map((title) => (
                <li
                  key={title.id} 
                  className={`NavbarAdminPanel__item ${activeSection === title.sectionTitle ? 'active' : ''}`}
                  onClick={() => toggleSection(title.sectionTitle)}
                >
                  {title.sectionTitle}
                </li>
              ))}
            </div>
            <div
              className="NavbarAdminPanel__logout"
            >
              Выйти
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarAdminPanel