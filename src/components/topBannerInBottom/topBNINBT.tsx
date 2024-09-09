import { transliterate } from "../translater/translater";
import cityData from "../../data/home_gorod_data";
import CardUI from "../../ui/card/card";
import { HStack, SimpleGrid } from "@chakra-ui/react";
import YandexMap from "../../ui/map/map";
import HorizontalCard from "../../ui/horizontalCard/horizontalCard";


type Props = {
  verHor: boolean;
  lastHistory: boolean;
  topWeek: boolean;
  topMounth: boolean;
  mapView: boolean;
  top10: boolean
};

const TopBNINBT = ({
  verHor,
  lastHistory,
  topWeek,
  topMounth,
  mapView,
  top10
}: Props) => {
  const lotinHarf = transliterate("Москва");
  const selectedCity = cityData[lotinHarf].saunas.slice(0, 4);

  const renderCards = () => {
    switch (verHor) {
      case false:
        return (
          <SimpleGrid className="!grid !gap-2 sm:!gap-5 lg:!gap-2 xl:!gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4"   spacing="24px">
            {selectedCity.map((nm, ind) => (
              <CardUI accepted={true} data={nm} nmd={ind} key={ind} />
            ))}
          </SimpleGrid>
        );
      case true:
        return (
          <SimpleGrid columns={1} spacing="24px">
            {selectedCity.map((nm, ind) => (
             <HorizontalCard data={nm} nmd={ind} accepted={true} />
            ))}
          </SimpleGrid>
        );

      default:
        return (
          <HStack
            spacing="24px"
            className="!grid !gap-2 sm:!gap-5 lg:!gap-2 xl:!gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4"
          >
            {selectedCity.map((nm, ind) => (
              <CardUI accepted={true} data={nm} nmd={ind} key={ind} />
            ))}
          </HStack>
        );
    }
  };

  return (
    <div className="content-alls mb-8 sm:mb-12">
      {mapView && (
        <div className="map-content">
          <h3 className="text-2xl lg:text-[27px] font-OpenSans font-semibold text-[#3B4255] mb-6 sm:mb-8">
            Русские бани на дровах на карте
          </h3>
        
            <YandexMap/>
        </div>
      )}
      {topWeek && (
        <div className="topweek mt-8 sm:mt-12">
          <h3 className="text-2xl lg:text-[27px] font-OpenSans font-semibold text-[#3B4255] mb-6 sm:mb-8" >Популярные бани и сауны Москвы за неделю</h3>
          <div className="content-cards flex justify-center items-center">

            {renderCards()}
          </div>
        </div>
      )}

      {topMounth && (
        <div className="topMounth mt-8 sm:mt-12">
          <h3 className="text-2xl lg:text-[27px] font-OpenSans font-semibold text-[#3B4255] mb-6 sm:mb-8" >Популярные бани и сауны Москвы за месяц</h3>
          <div className="content-cards flex justify-center items-center">
         
            {renderCards()}
          </div>
        </div>
      )}

{top10 && (
        <div className="lasthistory mt-8 sm:mt-12">
          <h3 className="text-2xl lg:text-[27px] font-OpenSans font-semibold text-[#3B4255] mb-6 sm:mb-8" >ТОП-10:  Бани и сауны Москвы</h3>
          <div className="content-cards flex justify-center items-center">
      
            {renderCards()}
          </div>
        </div>
      )}

      {lastHistory && (
        <div className="lasthistory mt-8 sm:mt-12">
          <h3 className="text-2xl lg:text-[27px] font-OpenSans font-semibold text-[#3B4255] mb-6 sm:mb-8" >Вы смотрели ранее</h3>
          <div className="content-cards flex justify-center items-center">
      
            {renderCards()}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBNINBT;
