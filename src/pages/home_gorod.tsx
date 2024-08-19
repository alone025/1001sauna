import { HStack, VStack } from "@chakra-ui/react";
import CardUI from "../ui/card/card";
import cityData from "../data/home_gorod_data";
import { transliterate } from "../components/translater/translater";

import Filter from "../ui/filter/filter";
import Discount from "../ui/discount/discount";

type Props = {
  city: string;
};

function Home_gorod({ city }: Props) {
  const lotin_harf = transliterate(city);
  const selectedCity = cityData[lotin_harf];

  if (!selectedCity) {
    return <p>City not found</p>;
  }

  return (
    <div>
      <h2>Home gorod</h2>
      <p>{city}</p>

      <VStack spacing={12} align="stretch">
        <div className="gorods-map">
          <div className="name-city">
            <h3 className="text-[30px] text-[#3B4255] font-OpenSans font-semibold mb-8">
              {selectedCity.cityname}
            </h3>
          </div>
          <div className="md:hidden lg:block">
            <Discount />
          </div>
          <div className="flex gap-[32px] justify-center">
            <div className="max-w-[232px] xl:max-w-[272px] hidden lg:block">
              <Filter />
            </div>
            <HStack
              spacing="24px"
              className="!grid !gap-2 sm:!gap-5 lg:!gap-2 xl:!gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
            >
              {selectedCity.saunas.map((nm, ind) => (
                <CardUI data={nm} nmd={ind} key={ind} />
              ))}
            </HStack>
          </div>
        </div>
      </VStack>
    </div>
  );
}

export default Home_gorod;
