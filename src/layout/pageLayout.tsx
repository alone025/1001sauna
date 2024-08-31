import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import { useLocation } from 'react-router-dom';


const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const location = useLocation()
    const TextValue: { [key: string]: string } = {
        "/about": "О нас",
        "/advertising": "Реклама на сайте",
        "/vacancies": "Наши вакансии",
        "/private-policy": "Политика конфедициальности",
        "/our-contacts": "Контакты",
        "/payment-policy":"Внесение оплаты за рекламу на сайте 4bani.ru (города категории А)*",
        "/add-own-sauna": "Добавить сауну или баню в каталог",
        "/site-map":"Карта сайта"
      };
    
const pathSite = location.pathname

  return (
    <div className="flex flex-col mt-8 lg:mt-12">
        <div className="select-png block lg:hidden">
        <Sidebar />
        </div>
      <div className="top-e mb-8">
        <h1 className='text-[30px] text-[#3B4255] font-OpenSans font-semibold' >{TextValue[pathSite]}</h1>
      </div>
      <div className="bottom-e flex gap-8">
        <div className="mlkn hidden lg:block">
        <Sidebar />
        </div>
      <div className="">
        {children}
      </div>
      </div>
    </div>
  );
};

export default PageLayout;
