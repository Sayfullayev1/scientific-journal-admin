import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../../context/LanguageContext';


import { IconAlignLeft2, IconNotes, IconInfoCircle, IconSettings, IconUsersGroup } from '@tabler/icons-react';

export default function LeftSidebar() {

  const [ i, setI ] = useState(0);

  const { language } = React.useContext(LanguageContext);

  const listData = [
      {
        name: {
          uz: "Boshqaruv paneli",
          ru: "Панель управления",
          en: "Control Panel"
        },
        icon: <IconAlignLeft2 />,
        path: `/`
      },
      {
        name: {
          uz: "Maqolalar",
          ru: "Статьи",
          en: "Articles"
        },
        icon: <IconNotes />,
        path: ``
      },
      {
        name: {
          uz: "Foydalanuvchilar",
          ru: "Пользователи",
          en: "Users"
        },
        icon: <IconUsersGroup />,
        path: ``
      },
      {
        name: {
          uz: "Taqrizlar",
          ru: "Рецензии",
          en: "Reviews"
        },
        icon: <IconInfoCircle />,
        path: ``
      },
      {
        name: {
          uz: "Sozlamalar",
          ru: "Настройки",
          en: "Settings"
        },
        icon: <IconSettings />,
        path: ``
      },
    ]

  return (
    <div>


      <div className='p-6 border-b-[0.8px] border-b-[#E8ECF0]'>

        <Link to={`/${language}`} className='flex gap-4 items-center'>

          <div className='w-10 h-10 flex justify-center items-center bg-[#2C5F7C] rounded-[5px]'>
            <h2 className='text-[22px] text-white font-semibold'>A</h2>
          </div>

          <div>
            <h2 className='text-[16px] text-[#2C5F7C] font-bold'>
              {
                language === 'uz' ? 'Boshqaruv paneli' : 
                language === 'ru' ? 'Админ Панель' : 
                'Admin panel'
              }
            </h2>
            <h3 className='text-[16px] text-[#85929E] font-normal'>
              {
                language === 'uz' ? 'Ilmiy jurnal' :
                language === 'ru' ? 'Научный журнал' :
                'Scientific Journal'
              }
            </h3>
          </div>
        
        </Link>

      </div>


      <div className='w-full p-4'>

        <ul>
          {listData.map((item, index) => (
            <li key={index} className={`mb-4 p-4  ${index === i ? 'bg-[#EBF3FD] rounded-[4px]' : ''}`}>
              <Link to={item.path} className='flex gap-3 items-center '>
                <div>
                  {item.icon}
                </div>
                <h2 className='text-[16px] text-[#2C5F7C] font-semibold hover:text-[#1A5276] transition-colors'>
                  {typeof item.name === 'object' ? item.name[language] : item.name}
                </h2>
              </Link>
            </li>
          ))}
        </ul>

      </div>


    </div>
  )
}
