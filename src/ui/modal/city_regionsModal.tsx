import { CloseIcon } from "@chakra-ui/icons";
import Wrapper from "../../layout/wrapper";
import { Tag, TagLabel } from "@chakra-ui/react";
import { cityData } from "../../cityData";

type Props = {
  setCity: (e: string) => void;
  setModal: (e: boolean) => void;
};

const City_regionsModal = ({ setCity, setModal }: Props) => {
  const cities = [
    {
      lk: "Москва",
    },
    {
      lk: "Видное",
    },
    {
      lk: "Долгопрудный",
    },
    {
      lk: "Королев",
    },
    {
      lk: "Люберцы",
    },
    {
      lk: "Мытищи",
    },
    {
      lk: "Наро-Фоминск",
    },
    {
      lk: "Ногинск",
    },
    {
      lk: "Подольск",
    },
    {
      lk: "Реутов",
    },
    {
      lk: "Солнечногорск",
    },
    {
      lk: "Химки",
    },
    {
      lk: "Чехов",
    },
    {
      lk: "Шатура",
    },
    {
      lk: "Электросталь",
    },
  ];

  return (
    <div className="main-div">
      <div className="content bg-[#343434] pt-[34px] pb-3">
        <Wrapper>
          <div id="noscroll" className="items-cont mx-5 h-[90vh] overflow-y-auto overscroll-contain">
            <div className="tp flex flex-row justify-between gap-3 items-center">
              <p className="text-xl md:text-2xl text-[#FFF] font-OpenSans font-semibold">
                Выберите город или регион
              </p>
              <CloseIcon
                onClick={() => setModal(false)}
                color="white"
                fontSize={20}
                className="cursor-pointer"
              />
            </div>
            <div className="cities mt-[30px] flex flex-wrap flex-row gap-2">
              {cities.map((c, cm) => (
                <Tag
                  size="lg"
                  key={cm}
                  variant="subtle"
                  colorScheme="cyan"
                  className="!px-5 !py-3 cursor-pointer"
                  borderRadius={12}
                  backgroundColor="#4E4E4E"
                >
                  <TagLabel
                  onClick={() => {
                    setCity(c.lk);
                    setModal(false);
                  }}
                    fontSize={16}
                    fontWeight={400}
                    className="font-OpenSans  !text-[14px] md:!text-base "
                    color="#FFFF"
                    
                  >
                    {c.lk}
                  </TagLabel>
                </Tag>
              ))}
            </div>
            <div className="regions grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-between flex-wrap gap-10 mt-8">
              {/* <div className="region flex flex-row gap-4 items-start">
                <div className="letter">
                  <p className="text-[21px] font-OpenSans font-semibold text-white">
                    A
                  </p>
                </div>
                <div className="regions-ul-li">
                  <ul className="!pt-[3px] p-0 flex flex-col gap-1">
                    <li className="text-base font-OpenSans transition-all font-normal cursor-pointer text-white hover:text-[#FF7A01] hover:font-semibold">
                      Абакан
                    </li>
                  </ul>
                </div>
              </div> */}

              {Object.keys(cityData).map((letter) => (
                <div
                  className="region flex flex-row gap-4 items-start"
                  key={letter}
                >
                  <div className="letter">
                    <p className="text-[18px] md:text-[21px] font-OpenSans font-semibold text-white">
                      {letter}
                    </p>
                  </div>
                  <div className="regions-ul-li">
                    <ul className="!pt-[3px] p-0 flex flex-col gap-1">
                      {cityData[letter].map((city) => (
                        <li
                          key={city}
                          onClick={() => {
                            setCity(city);
                            setModal(false);
                          }}
                          className="text-[14px] md:text-base font-OpenSans transition-all font-normal cursor-pointer text-white hover:text-[#FF7A01] hover:font-semibold"
                        >
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default City_regionsModal;
