import { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import CustomAccordion from "../accordion/accordion";
import CheckboxUI from "../checkbox/checkbox";

const Filter = (): JSX.Element => {
  const [minPrice, setMinPrice] = useState(700);
  const [maxPrice, setMaxPrice] = useState(30000);

  return (
    <div className="font-OpenSans rounded-[16px] filter_comp p-[20px]">
      <div className="">
        <h4 className="text-[16px] text-[#3B4255] font-[600] pl-[15px] max-w-[155px] py-[20px]">
          Подобрать сауну или баню
        </h4>
        <div>
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
            description="Кол-во гостей"
          />
          <CustomAccordion
            section_title="Округ или район"
            description="Округ или район"
          />
          <CustomAccordion
            section_title="Остановка / метро"
            description="Остановка / метро"
          />

          <CustomAccordion
            section_title="Тип парной"
            description={
              <div className="flex flex-col gap-[13px]">
                <CheckboxUI checkbox_title="Не имеет значения" />
                <CheckboxUI checkbox_title="Русская" />
                <CheckboxUI checkbox_title="Русская на дровах" />
                <CheckboxUI checkbox_title="С веником" />
                <CheckboxUI checkbox_title="Соляная" />
                <CheckboxUI checkbox_title="Римская" />
                <CheckboxUI checkbox_title="Турецкая" />
                <CheckboxUI checkbox_title="Финская" />
                <CheckboxUI checkbox_title="Инфокрасная" />
                <CheckboxUI checkbox_title="Японская" />
              </div>
            }
          />

          <CustomAccordion section_title="Аквазона" description="Аквазона" />
          <CustomAccordion section_title="Услуги" description="Услуги" />
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
    </div>
  );
};

export default Filter;
