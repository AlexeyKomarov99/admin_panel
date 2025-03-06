import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//===== Ресурсы =====//
import './App.css';

//===== Компоненты =====//
import AdminPanel from './components/AdminPanel/AdminPanel';
import Authorization from './components/Authorization/Authorization';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Authorization />} />
          <Route path='/admin-panel' element={<AdminPanel />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App