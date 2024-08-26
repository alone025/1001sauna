import {  HStack, VStack } from "@chakra-ui/react";
import CardUI from "../ui/card/card";
import cityData from "../data/home_gorod_data";
import { transliterate } from "../components/translater/translater";

import Filter from "../ui/filter/filter";
import Discount from "../ui/discount/discount";
import Main_banner from "../ui/banner/main_banner";
import Links from "../ui/links/links";

type Props = {
  city: string;
};

function Home_gorod({ city }: Props) {
  const lotin_harf = transliterate(city);
  const selectedCity = cityData[lotin_harf];

  if (!selectedCity) {
    return <p>Город не найден</p>;
  }

  


  return (
    <div>
      <VStack spacing={12} align="stretch">
        <div className="gorods-map">
          <div className="name-city">
            <h3 className="text-[30px] text-[#3B4255] font-OpenSans font-semibold mb-8">
              {selectedCity.cityname}
            </h3>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="md:hidden lg:block">
              <Discount />
            </div>

            <Links />
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
                <Main_banner />
              </div>
            </div>
          </div>
        </div>
      </VStack>
    </div>
  );
}

export default Home_gorod;
