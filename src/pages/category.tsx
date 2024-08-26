import { useEffect, useState } from "react";
import Filter from "../ui/filter/filter";
import { HStack } from "@chakra-ui/react";
import CardUI from "../ui/card/card";
import cityData from "../data/home_gorod_data";
import { transliterate } from "../components/translater/translater";
import Main_banner from "../ui/banner/main_banner";

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
        Сауны Москвы
      </h2>
      <div className="content-mm mt-8 flex flex-row gap-8">
        <div className="left-side flex flex-col gap-5">
          <Filter />
          <img src="/assets/reklama1.png" alt="" />
          <img src="/assets/reklama2.png" alt="" />
          <img src="/assets/reklama3.png" alt="" />
        </div>
        <div className="right-side w-full mt-5">
          <div className="sort flex flex-row gap-4 text-base font-OpenSans font-normal text-[#4C4C4C]">
            <p>Сортировать по:</p>{" "}
            <p className="text-[#FF7A01]">
              популярности <span className="font-Inter font-semibold">↓</span>
            </p>{" "}
            <p>рейтингу</p> <p>цене</p>
          </div>
          <div className="logo-text flex flex-row justify-between mt-8">
            <h3 className="text-[27px] font-OpenSans font-semibold text-[#3B4255]">
              Русская на дровах
            </h3>
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
                className="cursor-pointer"
                onClick={() => handleActiveIcon("map")}
              >
                <MapIcon isActive={icon === "map"} />
              </div>
            </div>
          </div>
          <div className="eminem flex justify-center flex-col items-center mt-8">
            <HStack
              spacing="24px"
              className="!grid !gap-2 sm:!gap-5 lg:!gap-2 xl:!gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4"
            >
              {selectedCity.saunas.map((nm, ind) => (
                <CardUI accepted={true} data={nm} nmd={ind} key={ind} />
              ))}
            </HStack>
            <div className="mt-12">
              <Main_banner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
