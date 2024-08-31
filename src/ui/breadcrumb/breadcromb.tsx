import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Breadcromb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    "": "Главная",
    "liked-card": "Избранное",
    "category": "Москва",
    "product": "Product",
    "about": "О нас",
    "advertising":"Реклама на сайте",
    "vacancies": "Вакансии",
    "private-policy": "Политика конфедициальности",
    "our-contacts": "Контакты",
    "payment-policy":"Оплата",
    "add-own-sauna": "Добавить заведение",
    "site-map":"Карта сайта"
  };



  return (
    <Breadcrumb className="!text-xs sm:!text-[14px] !font-OpenSans !font-normal !text-[#3B4255]">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Главная</BreadcrumbLink>
      </BreadcrumbItem>
      {pathnames.map((value, index) => {
          const decodedValue = decodeURIComponent(value);
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const breadcrumbLabel = breadcrumbNameMap[decodedValue] || decodedValue;
          return (
            <BreadcrumbItem key={to}>
              <BreadcrumbLink href={to}>{breadcrumbLabel}</BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
  
    </Breadcrumb>
  );
};

export default Breadcromb;
