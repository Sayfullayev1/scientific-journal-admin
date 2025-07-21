import React, { useContext, useEffect } from 'react'
// import './dashboardLayout.scss'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


import LeftSidebar from '../../components/layoutsComponents/sidebars/leftSidebar/LeftSidebar';
import HeaderComponent from '../../components/layoutsComponents/headerComponent/HeaderComponent'
import { Outlet } from 'react-router-dom'
import { LanguageContext } from '../../context/LanguageContext';


export default function DashboardLayout() {

  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  useEffect(() => {

    const token = Cookies.get('token');

    // Получаем fingerprint (или создаём при первом запуске)
    function getFingerprint() {
      let fp = Cookies.get('fingerprint');
      if (!fp) {
        fp = crypto.randomUUID();
        Cookies.set('fingerprint', fp, { expires: 30 }); // храним 30 дней
      }
      return fp;
    }

    const fingerprint = getFingerprint();

    // Отправляем защищённый запрос с заголовками
    axios.get('http://localhost:3100/api/admin/auth', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'x-fingerprint': fingerprint
      }
    })
    .then(res => {
      // console.log('Успех:', res.data);
    })
    .catch(err => {
      // console.error('Ошибка авторизации:', err.response?.data || err.message);
      navigate(`${language}/login`)
    });

  }, []);

  
  return (
    <div className='flex h-[100vh]'>
      <div className='w-[300px] border-r-[1.6px] border-r-[#E8ECF0]'>
        <LeftSidebar/>
      </div>
      <div className="flex-1 flex flex-col bg-[#F5F7FA]">
        <HeaderComponent/>
        <Outlet/>
      </div>
    </div>
  )
}
