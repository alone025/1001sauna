import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const Breadcromb = () => {
  return (
    <Breadcrumb className="!text-xs sm:!text-[14px] !font-OpenSans !font-normal !text-[#3B4255]">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Главная</BreadcrumbLink>
      </BreadcrumbItem>

  
    </Breadcrumb>
  );
};

export default Breadcromb;
