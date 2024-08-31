import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const Sidebar: React.FC = () => {
  const links = [
    { to: '/about', label: 'О нас' },
    { to: '/advertising', label: 'Реклама на сайте' },
    { to: '/vacancies', label: 'Наши вакансии' },
    { to: '/private-policy', label: 'Политика конфедициальности' },
    { to: '/our-contacts', label: 'Контакты' },
    { to: '/payment-policy', label: 'Оплата' },
    { to: '/add-own-sauna', label: 'Добавить заведение' },
    { to: '/site-map', label: 'Карта сайта' },
  ];

const pathname = window.location.pathname
const filtered = links.find((c)=> c.to === pathname)

  return (
    <div className="max-w-[334px] w-full lg:p-2 lg:bg-[#FFF] rounded-2xl">
      <ul className="space-y-4 gap-1 hidden lg:flex flex-col">
        {links.map((link) => (
          <li key={link.to} className='w-full'>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-[#FF7A01] font-semibold bg-[#F8F8F8] h-[56px] px-5 rounded-xl flex items-center transition-colors w-full text-base font-OpenSans'
                  : 'text-[#3B4255] hover:text-[#FF7A01] h-[56px] px-5 rounded-xl cursor-pointer flex items-center transition-colors w-full text-base font-OpenSans font-normal'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
        <div className="select-div block lg:hidden mb-8">
        <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button}  rightIcon={isOpen? <ChevronUpIcon />: <ChevronDownIcon />} className='sm:max-w-[274px] w-full text-start'>
        {filtered?.label}
      </MenuButton>
      <MenuList _hover='none' >
        {links.map((c, cm)=> (
           <Link to={c.to} key={cm}>
            <MenuItem _hover='none' className='text-[14px] line-clamp-1 font-OpenSans font-normal text-[#4C4C4C]' >{c.label}</MenuItem></Link>
        ))}
      </MenuList>
    </>
  )}
</Menu>
        </div>
    </div>
  );
};

export default Sidebar;
