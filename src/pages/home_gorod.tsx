import { HStack, VStack } from "@chakra-ui/react";
import CardUI from "../ui/card/card";
import cityData from "../data/home_gorod_data";
import { transliterate } from "../components/translater/translater";

import Filter from "../ui/filter/filter";
import Discount from "../ui/discount/discount";
import MainBanner from "../ui/banner/main_banner";
import Links from "../ui/links/links";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type Props = {
  city: string;
};

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

function HomeGorod({ city }: Props) {
  const lotinHarf = transliterate(city);
  const selectedCity = cityData[lotinHarf];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const location = useLocation();
  const [icon, setIcon] = useState<string | null>(null);

  useEffect(() => {
    const isActive = localStorage.getItem("iconActive");
    if (isActive) {
      setIcon(isActive);
    }
  }, []);

  const handleActiveIcon = (item: string) => {
    localStorage.setItem("iconActive", item);
    setIcon(item);
  };

  if (!selectedCity) {
    return <p>Город не найден</p>;
  }

  return (
    <VStack spacing={12} align="stretch">
      <div className="gorods-map">
        <div className="name-city">
          <h3 className="text-[30px] text-[#3B4255] font-OpenSans font-semibold mb-8">
            {selectedCity.cityname}
          </h3>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[30px]">
          <div className="md:hidden lg:block w-full md:w-auto">
            <Discount />
          </div>

          <div className="flex flex-col items-start mb-[32px]">
            <Links />

            <div className="flex justify-between items-center w-full">
              <div className="text-[#3B4255] text-[27px] font-[600]">
                ТОП-10:
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
                  className="cursor-pointer"
                  onClick={() => handleActiveIcon("map")}
                >
                  <MapIcon isActive={icon === "map"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[32px] justify-center">
          <div className="max-w-[232px] xl:max-w-[272px] hidden lg:block">
            <Filter />
          </div>
          <div className="eminem flex justify-center flex-col items-center">
            <HStack
              spacing="24px"
              className="!grid !gap-2 sm:!gap-5 lg:!gap-2 xl:!gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4"
            >
              {selectedCity.saunas.map((nm, ind) => (
                <CardUI accepted={true} data={nm} nmd={ind} key={ind} />
              ))}
            </HStack>
            <div className="mt-12">
              <MainBanner />
            </div>
          </div>
        </div>
      </div>
    </VStack>
  );
}

export default HomeGorod;
