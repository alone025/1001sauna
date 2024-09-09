"use client";

import { Select } from "@chakra-ui/react";

type Props = {
  closeModal: () => void;
  openCheck: ()=> void
};

const BankModal = ({ closeModal, openCheck }: Props) => {
  return (
    <div className="h-full">
      <div className="bg-white relative rounded-[24px] gap-6 flex flex-col w-full md:w-[712px] border font-OpenSans py-6 px-4 sm:!p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[#3B4255] text-[20px] md:text-[24px] font-[600]">
            Оплатить размещение через банк
          </h2>
          <img
            src="/assets/close.png"
            alt="close"
            className="cursor-pointer absolute top-3 right-3 md:top-[4%] md:right-[5%]"
            onClick={closeModal}
          />
        </div>

        <div className="inputs-base flex flex-col gap-6 max-h-[55vh] h-full 2xl:max-h-[680px] overflow-auto">
	

        <div className="content-1 flex flex-col gap-5">
          <h5 className="text-base sm:text-[18px] font-OpenSans font-semibold text-[#3B4255]">
            Имя
          </h5>
          <div className="inputs flex flex-col md:flex-row gap-5">
            <input
              type="text"
              placeholder="Директор ФИО"
              className="w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]"
            />
            <input
              type="text"
              placeholder="В лице ген. директора/ИП"
              className="w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]"
            />
          </div>
          <div className="inputs-2 flex flex-col md:flex-row gap-5">
            <input
              type="text"
              placeholder="Имя"
              className="w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]"
            />
            <Select
              placeholder="Выберите тип"
              _hover="none"
              className="focus-visible:!border-[#FF7A01] focus-visible:!shadow-[#FF7A01] !cursor-pointer"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
        </div>

        <div className="content-1 flex flex-col gap-5">
          <h5 className="text-base sm:text-[18px] font-OpenSans font-semibold text-[#3B4255]">
            Адрес
          </h5>
          <div className="inputs flex flex-col md:flex-row gap-5">
            <input
              type="text"
              placeholder="Адрес"
              className="w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]"
            />
            <input
              type="text"
              placeholder="Юридический адрес"
              className="w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]"
            />
          </div>
        </div>

        <div className="content-1 flex flex-col gap-5">
          <h5 className="text-base sm:text-[18px] font-OpenSans font-semibold text-[#3B4255]">
            Имя
          </h5>
          <div className="inputs flex flex-col md:flex-row gap-5">
            <input
              type="text"
              placeholder="БИК"
              className="w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]"
            />
            <input
              type="text"
              placeholder="ИНН"
              className="w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]"
            />
            <input
              type="text"
              placeholder="КПП"
              className="w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]"
            />
          </div>
          <div className="inputs-2 flex gap-5 w-full lg:max-w-[202px]">
            <input
              type="text"
              placeholder="ОГРН/ОГРНИП"
              className="w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]"
            />
          </div>
          <div className="inputs-3 flex flex-col md:flex-row gap-5">
            <input
              type="text"
              placeholder="Кор/счёт"
              className="w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]"
            />
            <input
              type="text"
              placeholder="Р/счёт"
              className="w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]"
            />
          </div>
        </div>
		</div>

        <div className="btns flex justify-between gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
          <button  onClick={() => {
              closeModal();
              openCheck();
            }} className="bg-[#FF7A01] transition-transform rounded-[12px] py-[8px] px-[64px] text-[14px] sm:text-[15px] md:text-[16px] hover:scale-[1.03] sm:max-w-[196px] w-full text-white flex justify-center items-center mt-[24px] h-[48px]">
            Оплатить
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default BankModal;
