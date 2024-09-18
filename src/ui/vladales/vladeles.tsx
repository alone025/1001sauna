import {
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const Vladeles = ({
  isOpen,
  onClose,
  onOpenSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpenSuccess: () => void;
}) => {
  const [descV, setDescV] = useState("");
  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className="!px-4 !py-6 sm:!p-8 !max-w-[700px] lg:!max-w-[860px]" margin={{base:'0', sm:"auto"}}>
        <div className="lg-tex flex mb-3 flex-row justify-between gap-10">
          <h3 className="text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold">
            Это Ваше заведение?
          </h3>
          <svg
            onClick={onClose}
            className="cursor-pointer hover:rotate-180 transition-transform duration-500"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M24 8L8 24"
              stroke="#3B4255"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 8L24 24"
              stroke="#3B4255"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <ModalBody p={0}>
          <div className="content-body">
            <div className="uli">
              <p className="text-sm sm:text-base text-[#3B4255] font-OpenSans font-normal" >Теперь Вы можете:</p>
              <ul className="list-inside list-disc flex flex-col gap-4 mt-4">
            <li id="mdsa">
            получать онлайн заявки (бронирование);
            </li>
            <li id="mdsa">
            изменять информацию о вашем заведении, менять прайс;
            </li>
            <li id="mdsa">
            добавлять фотографии;
            </li>
            <li id="mdsa">
            получать отзывы и отвечать на них.
            </li>
          </ul>
            </div>
            <div className="inputss mt-8">
              <div className="inpute-tope flex flex-col sm:flex-row gap-5">
                <Input
                  placeholder="Имя"
                  required
                  type="text"
                  outline="#FF7A01"
                  borderRadius="4px"
                  className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
                />
                <Input
                  placeholder="E-mail"
                  required
                  type="email"
                  outline="#FF7A01"
                  borderRadius="4px"
                  className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
                />
                <Input
                  placeholder="Телефон"
                  required
                  type="tel"
                  outline="#FF7A01"
                  borderRadius="4px"
                  className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
                />
              </div>
              <div className="input-text mt-5">
                <Textarea
                  onChange={(e) => setDescV(e.target.value)}
                  rounded="4px"
                  p="10px"
                  maxLength={400}
                  placeholder="Введите описание"
                  className="focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
                />

                <p className="text-xs font-OpenSans font-normal text-[#4C4C4C] uppercase text-right mt-1">
                  {descV.length} / 400
                </p>
              </div>
            </div>
            <div className="soglashaniya flex flex-row gap-4 items-start mt-6">
              <Checkbox colorScheme="orange" className="mt-1" />
              <p  className="text-base text-[#3B4255] font-OpenSans font-normal">
                Оставляя информацию на сайте 4bani, я подтверждаю, что согласен
                (согласна) на обработку персональных данных в соответствии с{" "}
                <span onClick={()=> window.open('/private-policy', '_bref')} className="text-[#FF7A01] underline cursor-pointer">
                  пользовательским соглашением.
                </span>
              </p>
            </div>
            <button
              onClick={onOpenSuccess}
              className="text-sm sm:text-base font-OpenSans font-semibold text-[#FFFFFF] px-16 py-[10px] rounded-xl bg-[#FF7A01] mt-6"
            >
              Отправить
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Vladeles;
