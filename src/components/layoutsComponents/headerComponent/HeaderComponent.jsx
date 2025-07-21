import React, { useContext } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


import { IconBellFilled , IconMenu2 } from '@tabler/icons-react';
import { LanguageContext } from '../../../context/LanguageContext';


export default function HeaderComponent() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const logOut = () => {
    
    Cookies.remove('token');       // удалить токен
    Cookies.remove('fingerprint'); // удалить fingerprint

    navigate(`${language}/login`); // перенаправить на страницу логина
  }

  return (
    <header className='w-full flex justify-between items-center shadow-[0px_2px_8px_0px_#0000001A] border-b-[1.6px] border-b-[#2C5F7C] p-6 bg-white'>
      
      <div className='flex gap-6 items-center'>

        <div>
          <IconMenu2 stroke={2.2} size={22} />
        </div>

        <h2 className='text-[24px] text-[#2C5F7C] font-bold uppercase'>Панель управления</h2>

      </div>

      <div className='flex justify-between items-center gap-6'>
        <div className="">
          <IconBellFilled  className="text-black" />
        </div>

        <div className='flex justify-between items-center gap-3'>
          {/* <div className="w-8 h-8 bg-[#2C5F7C] rounded-full flex items-center justify-center">
            <h3 className='text-[14px] text-white font-medium'>A</h3>
          </div>
          <h3 className='text-[14px] text-[#2C3E50] font-medium'>
            Администратор
          </h3> */}

          <div onClick={() => logOut()}>
            <h2 className='text-[14px] text-red-600 font-medium cursor-pointer'>
              {
                language === 'uz' ? 'Chiqish' : 
                language === 'ru' ? 'Выход' : 
                'Logout'
              }
            </h2>
          </div>

        </div>
      </div>

    </header>
  );
}