import { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import CustomAccordion from "../accordion/accordion";
import CheckboxUI from "../checkbox/checkbox";
import { regions_districts } from "../../data/regionsMoskov";

interface stations {
  id: string;
  name: string;
  lat: number;
  lng: number;
  order: number;
}

interface LInes {
  id: string;
  hex_color: string;
  name: string;
  stations: stations[];
}

interface MetroData {
  id: string;
  name: string;
  lines: LInes[];
}

const Filter = ({ sticky }: { sticky: boolean }): JSX.Element => {
  const [minPrice, setMinPrice] = useState(700);
  const [maxPrice, setMaxPrice] = useState(30000);

  const [checkboxes, setCheckboxes] = useState(["all"]);

  const handleCheck = (nm: string) => {
    const ifChecked = checkboxes.find((nmd) => nmd === nm);
    if (ifChecked) {
      const findAll = checkboxes.find((findl) => findl === "all");
      if (!findAll) {
        const deleted = checkboxes.filter((eski) => eski !== nm);
        console.log(deleted);
        setCheckboxes(deleted);
      } else {
        const filterd = checkboxes.filter((cka) => cka !== "all");
        const deleted = filterd.filter((eski) => eski !== nm);
        console.log(deleted);
        setCheckboxes(deleted);
      }
    } else {
      const findAll = checkboxes.find((findl) => findl === "all");
      if (!findAll) {
        const newData = [...checkboxes, nm];
        console.log(newData);
        setCheckboxes(newData);
      } else {
        const filterd = checkboxes.filter((cka) => cka !== "all");
        const editedWout = [...filterd, nm];
        setCheckboxes(editedWout);
      }
    }
  };

  const [checkboxesOkrug, setCheckboxesOkrug] = useState(["all"]);
  const handleCheckOgrug = (nm: string) => {
    const ifChecked = checkboxesOkrug.find((nmd) => nmd === nm);
    if (ifChecked) {
      const findAll = checkboxesOkrug.find((findl) => findl === "all");
      if (!findAll) {
        const deleted = checkboxesOkrug.filter((eski) => eski !== nm);
        console.log(deleted);
        setCheckboxesOkrug(deleted);
      } else {
        const filterd = checkboxesOkrug.filter((cka) => cka !== "all");
        const deleted = filterd.filter((eski) => eski !== nm);
        console.log(deleted);
        setCheckboxesOkrug(deleted);
      }
    } else {
      const findAll = checkboxesOkrug.find((findl) => findl === "all");
      if (!findAll) {
        const newData = [...checkboxesOkrug, nm];
        console.log(newData);
        setCheckboxesOkrug(newData);
      } else {
        const filterd = checkboxesOkrug.filter((cka) => cka !== "all");
        const editedWout = [...filterd, nm];
        setCheckboxesOkrug(editedWout);
      }
    }
  };



  const [checkboxesMetro, setCheckboxesMetro] = useState(["all"]);
  const handleCheckMetro = (nm: string) => {
    const ifChecked = checkboxesMetro.find((nmd) => nmd === nm);
    if (ifChecked) {
      const findAll = checkboxesMetro.find((findl) => findl === "all");
      if (!findAll) {
        const deleted = checkboxesMetro.filter((eski) => eski !== nm);
        console.log(deleted);
        setCheckboxesMetro(deleted);
      } else {
        const filterd = checkboxesMetro.filter((cka) => cka !== "all");
        const deleted = filterd.filter((eski) => eski !== nm);
        console.log(deleted);
        setCheckboxesMetro(deleted);
      }
    } else {
      const findAll = checkboxesMetro.find((findl) => findl === "all");
      if (!findAll) {
        const newData = [...checkboxesMetro, nm];
        console.log(newData);
        setCheckboxesMetro(newData);
      } else {
        const filterd = checkboxesMetro.filter((cka) => cka !== "all");
        const editedWout = [...filterd, nm];
        setCheckboxesMetro(editedWout);
      }
    }
  };

  const [data, setData] = useState<MetroData>();

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
   
    try {
      const result = await fetch("https://api.hh.ru/metro/1");
      
      const resulted: MetroData = await result.json();
      console.log(resulted.lines);
      
      setData(resulted);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{ position: sticky ? "sticky" : "unset", top: "-18px" }}
      className="font-OpenSans rounded-[16px] filter_comp p-[20px]"
    >
      <div className="">
        <h4 className="text-[16px] text-[#3B4255] font-[600] pl-[15px] max-w-[155px] py-[20px]">
          Подобрать сауну или баню
        </h4>

        <div style={{ overflowY: "auto", maxHeight: "calc(-15rem + 100vh)" }}>
          <CustomAccordion
            section_title={"Стоимость"}
            description={
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center w-full gap-[8px]">
                  <InputGroup>
                    <InputLeftElement
                      children="От"
                      className="!text-[13px] !text-[#4C4C4C]"
                    />
                    <Input
                      type="number"
                      min={700}
                      max={30000}
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                      placeholder="От"
                      className="!text-[14px] !px-[31px] text-[#4C4C4C] !py-[9px]"
                    />
                    <InputRightElement
                      children="₽"
                      className="!text-[14px] !text-[#4C4C4C]"
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputLeftElement
                      children="До"
                      className="!text-[13px] !text-[#4C4C4C]"
                    />
                    <Input
                      type="number"
                      min={700}
                      max={30000}
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="!text-[14px] !px-[31px] text-[#4C4C4C] !py-[9px]"
                    />
                    <InputRightElement
                      children="₽"
                      className="!text-[14px] !text-[#4C4C4C]"
                    />
                  </InputGroup>
                </div>
              </div>
            }
          />

          <CustomAccordion
            section_title="Кол-во гостей"
            description={
              <div>
                <Input
                  placeholder="Кол-во гостей"
                  required
                  type="number"
                  outline="#FF7A01"
                  borderRadius="4px"
                  className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
                />
              </div>
            }
          />
          <CustomAccordion
            section_title="Округ или район"
            description={
              <div className="flex flex-col gap-[13px]">
                <CheckboxUI
                  handleCheck={handleCheckOgrug}
                  checkedVal={checkboxesOkrug}
                  checkbox_title="Не имеет значения"
                />
                {regions_districts.map((destrict) => (
                  <>
                    {destrict.districts.map((nameD, DName) => (
                      <CheckboxUI
                        key={DName}
                        handleCheck={handleCheckOgrug}
                        checkedVal={checkboxesOkrug}
                        checkbox_title={nameD}
                      />
                    ))}
                  </>
                ))}
              </div>
            }
          />
          <CustomAccordion
            section_title="Остановка / метро"
            description={
              <div className="flex flex-col gap-[13px]">
                <CheckboxUI
                  handleCheck={handleCheckMetro}
                  checkedVal={checkboxesMetro}
                  checkbox_title="Не имеет значения"
                />
                {data?.lines.slice(0,10).map((destrict) => (
                  <>
                  
                        {destrict.stations.slice(0,10).map((station, stK) => (
                          <CheckboxUI
                            key={stK}
                            handleCheck={handleCheckMetro}
                            checkedVal={checkboxesMetro}
                            checkbox_title={station.name}
                          />
                        ))}
                  
                  </>
                ))}
              </div>
            }
          />

          <CustomAccordion
            section_title="Тип парной"
            description={
              <div className="flex flex-col gap-[13px]">
                <CheckboxUI
                  handleCheck={handleCheck}
                  checkedVal={checkboxes}
                  checkbox_title="Не имеет значения"
                />
                <CheckboxUI
                  handleCheck={handleCheck}
                  checkedVal={checkboxes}
                  checkbox_title="Русская"
                />
                <CheckboxUI
                  handleCheck={handleCheck}
                  checkedVal={checkboxes}
                  checkbox_title="Русская на дровах"
                />
                <CheckboxUI
                  handleCheck={handleCheck}
                  checkedVal={checkboxes}
                  checkbox_title="С веником"
                />
                <CheckboxUI
                  handleCheck={handleCheck}
                  checkedVal={checkboxes}
                  checkbox_title="Соляная"
                />
                <CheckboxUI
                  handleCheck={handleCheck}
                  checkedVal={checkboxes}
                  checkbox_title="Римская"
                />
                <CheckboxUI
                  handleCheck={handleCheck}
                  checkedVal={checkboxes}
                  checkbox_title="Турецкая"
                />
                <CheckboxUI
                  handleCheck={handleCheck}
                  checkedVal={checkboxes}
                  checkbox_title="Финская"
                />
                <CheckboxUI
                  handleCheck={handleCheck}
                  checkedVal={checkboxes}
                  checkbox_title="Инфокрасная"
                />
                <CheckboxUI
                  handleCheck={handleCheck}
                  checkedVal={checkboxes}
                  checkbox_title="Японская"
                />
              </div>
            }
          />

          <CustomAccordion section_title="Аквазона" description="Аквазона" />
          <CustomAccordion section_title="Услуги" description="Услуги" />
        </div>
        <div className="flex flex-col items-center justify-center mt-[12px] gap-[12px] mb-[20px]">
          <button className="bg-[#FF7A01] text-white px-[24px] py-[8px] w-[212px] xl:w-[232px] h-[48px] flex justify-center items-center rounded-[12px]">
            Применить
          </button>
          <button className="bg-transparent text-[#3B4255] border border-[#CCC] px-[24px] py-[8px] w-[212px] xl:w-[232px] h-[48px] flex justify-center items-center rounded-[12px]">
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
