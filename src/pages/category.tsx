import { useEffect, useState } from "react";
import Filter from "../ui/filter/filter";
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react";
import CardUI from "../ui/card/card";
import cityData from "../data/home_gorod_data";
import { transliterate } from "../components/translater/translater";
import Main_banner from "../ui/banner/main_banner";
import TopBNINBT from "../components/topBannerInBottom/topBNINBT";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Links from "../ui/links/links";
import Discount from "../ui/discount/discount";
import HorizontalCard from "../ui/horizontalCard/horizontalCard";
import YandexMap from "../ui/map/map";

type IconProps = {
  isActive: boolean;
};

const TableIcon = ({ isActive }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M10 3H3V10H10V3Z"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 3H14V10H21V3Z"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 14H14V21H21V14Z"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14H3V21H10V14Z"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MapIcon = ({ isActive }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 2V18"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 6V22"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GridIcon = ({ isActive }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M8 6H21"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12H21"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 18H21"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H3.01"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12H3.01"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 18H3.01"
      stroke={isActive ? "#3B4255" : "#CCCCCC"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Category = () => {
  const [icon, setIcon] = useState<string | null>(null);
  const lotinHarf = transliterate("Москва");
  const selectedCity = cityData[lotinHarf];
  const [sort, setSort] = useState("popularity");
  const [sortMName, setSortMName] = useState("По популярности");

  const sorts = [
    {
      name: "популярности",
      value: "popularity",
      mname: "По популярности",
    },
    {
      name: "рейтингу",
      value: "rating",
      mname: "По рейтингу",
    },
    {
      name: "цене",
      value: "price",
      mname: "По цене",
    },
  ];

  

  useEffect(()=>{
    const handleResize = () => {
      const wiidht = window.innerWidth
      console.log(wiidht);
      if(768 > wiidht){
        // setIcon("table")
        handleActiveIcon('table')
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

    
  },[])

  const renderCards = () => {
    switch (icon) {
      case "table":
        return (
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing="24px">
            {selectedCity.saunas.map((nm, ind) => (
              <CardUI accepted={true} data={nm} nmd={ind} key={ind} />
            ))}
          </SimpleGrid>
        );
      case "grid":
        return (
          <SimpleGrid w='100%' columns={1} spacing="8px">
            {selectedCity.saunas.map((nm, ind) => (
              <HorizontalCard data={nm} nmd={ind} accepted={true} />
            ))}
          </SimpleGrid>
        );
      case "map":
        return (
          <SimpleGrid w='100%' columns={2} spacing="20px" className="!hidden md:!grid">
            <div className="left-cont">
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="20px" className="!gap-5 lg:!gap-2 xl:!gap-5">
            {selectedCity.saunas.map((nm, ind) => (
              <CardUI accepted={true} data={nm} nmd={ind} key={ind} />
            ))}
          </SimpleGrid>
            </div>
            <div className="right-cont">
              <div className="sticky top-2">
              <YandexMap/>
              </div>
            </div>
        </SimpleGrid>
        );
      default:
        return (
          <HStack
            spacing="24px"
            className="!grid !gap-2 sm:!gap-5 lg:!gap-2 xl:!gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4"
          >
            {selectedCity.saunas.map((nm, ind) => (
              <CardUI accepted={true} data={nm} nmd={ind} key={ind} />
            ))}
          </HStack>
        );
    }
  };


  useEffect(() => {
    const isActive = localStorage.getItem("iconActiveCategory");
    if (isActive) {
      setIcon(isActive);
    }
  }, []);

  const handleActiveIcon = (item: string) => {
    localStorage.setItem("iconActiveCategory", item);
    setIcon(item);
  };




  return (
    <div className="category mt-8">
      <h2 className="text-[30px] font-OpenSans font-semibold text-[#3B4255]">
        {selectedCity.cityname}
      </h2>
      <div className="content-mm mt-1 sm:mt-8">
      <div className="hidden sm:flex lg:hidden justify-between items-center w-full mb-3">
              <div className="text-[#3B4255] text-[14px] sm:text-[16px] font-[600] flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22 3.5H2L10 12.96V19.5L14 21.5V12.96L22 3.5Z" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              Фильтры
              </div>
              <div className="flex gap-[16px] items-center">
                <div
                  className="cursor-pointer"
                  onClick={() => handleActiveIcon("table")}
                >
                  <TableIcon isActive={icon === "table"} />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => handleActiveIcon("grid")}
                >
                  <GridIcon isActive={icon === "grid"} />
                </div>
                
                <div
                className="cursor-pointer hidden md:block"
                onClick={() => handleActiveIcon("map")}
              >
                <MapIcon isActive={icon === "map"} />
              </div>
              </div>
            </div>
      <div className="flex sm:hidden flex-col md:flex-row items-center gap-6 sm:gap-[30px]">
          <div className="md:hidden lg:block w-full md:w-auto">
            <Discount />
          </div>

          <div className="flex flex-col items-start mb-6 sm:mb-[32px]">
            <Links />

            <div className="flex justify-between items-center w-full">
            <div className="text-[#3B4255] text-[14px] sm:text-[16px] font-[600] flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22 3.5H2L10 12.96V19.5L14 21.5V12.96L22 3.5Z" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              Фильтры
              </div>
              <div className="flex gap-[16px] items-center">
                <div
                  className="cursor-pointer"
                  onClick={() => handleActiveIcon("table")}
                >
                  <TableIcon isActive={icon === "table"} />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => handleActiveIcon("grid")}
                >
                  <GridIcon isActive={icon === "grid"} />
                </div>
               
              </div>
            </div>
          </div>
        </div>
       <div className="flex flex-row gap-8">
       <div className="left-side hidden lg:flex flex-col gap-5">
          <Filter sticky={false} />
          <img src="/assets/reklama1.png" alt="" />
          <img src="/assets/reklama2.png" alt="" />
          <img src="/assets/reklama3.png" alt="" />
        </div>
        <div className="right-side w-full sm:mt-5">
          <div className="sort-div">
            <div className="sort hidden sm:flex flex-row gap-4 text-base font-OpenSans font-normal text-[#4C4C4C]">
              <p>Сортировать по:</p>
              {sorts.map((smd, kwd) => (
                <p
                  key={kwd}
                  className={`${
                    smd.value == sort && "text-[#FF7A01]"
                  } cursor-pointer`}
                  onClick={() => setSort(smd.value)}
                >
                  {smd.name}{" "}
                  {smd.value == sort && (
                    <span className="font-Inter font-semibold">↓</span>
                  )}
                </p>
              ))}
            </div>
            <div className="sort flex sm:hidden flex-row gap-4 text-base font-OpenSans font-normal text-[#4C4C4C]">
              
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      bg="#fff"
                      className="cursor-pointer !rounded-[4px] hover:!border-[#FF7A01] !py-[9px] !px-3 !line-clamp-1 !font-OpenSans !font-normal !text-[14px] !text-[#4C4C4C] !flex !items-center"
                      isActive={isOpen}
                      as={Button}
                      rightIcon={
                        !isOpen ? (
                          <ChevronDownIcon w={5} h={5} />
                        ) : (
                          <ChevronUpIcon w={5} h={5} />
                        )
                      }
                    >
                      {sortMName}
                    </MenuButton>
                    <MenuList>
                      {sorts.map((mi, mk) => (
                        <MenuItem
                          key={mk}
                          value={mi.value}
                          onClick={() => {
                            setSort(mi.value);
                            setSortMName(mi.mname);
                          }}
                          className="!line-clamp-1 !font-OpenSans !font-normal !text-[14px] !text-[#4C4C4C]"
                        >
                          {mi.mname}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </>
                )}
              </Menu>
            </div>
          </div>
          <div className="logo-text flex flex-row justify-between mt-6 sm:mt-8">
            <h3 className="text-2xl lg:text-[27px] font-OpenSans font-semibold text-[#3B4255]">
              Русская на дровах
            </h3>
            <div className="hidden lg:flex gap-[16px] items-center">
              <div
                className="cursor-pointer"
                onClick={() => handleActiveIcon("table")}
              >
                <TableIcon isActive={icon === "table"} />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleActiveIcon("grid")}
              >
                <GridIcon isActive={icon === "grid"} />
              </div>
              <div
                className="cursor-pointer hidden md:block"
                onClick={() => handleActiveIcon("map")}
              >
                <MapIcon isActive={icon === "map"} />
              </div>
            </div>
          </div>
          <div className="eminem flex justify-center flex-col items-center mt-8">
            {/* <HStack
              spacing="24px"
              className="!grid !gap-2 sm:!gap-5 lg:!gap-2 xl:!gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4"
            >
              {selectedCity.saunas.map((nm, ind) => (
                <CardUI accepted={true} data={nm} nmd={ind} key={ind} />
              ))}
            </HStack> */}
            {renderCards()}
            <Button className="mt-5 shadow-md w-full !bg-[#FFFFFF] text-[#3B4255] !rounded-xl">
              Показать ещё
            </Button>
            <div className="mt-12">
              <TopBNINBT
                verHor={icon === "grid" ? true : false}
                mapView={icon === "map" ? false : true}
                lastHistory={true}
                topMounth={false}
                topWeek={false}
              />
             <div className="mnn hidden sm:block">
             <Main_banner />
             </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Category;
