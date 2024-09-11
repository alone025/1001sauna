import {
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";

const Pazvoniy = ({
  isOpen,
  onClose,
  onOpenSuccess,
  onMap
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpenSuccess: () => void;
  onMap: ()=>void
}) => {
  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className="">
        <div className="lg-tex flex flex-row !px-4 !py-6 sm:!p-8 sm:!pb-0 justify-end sm:justify-between gap-10">
          <h3 className="text-xl hidden sm:block lg:text-2xl text-[#3B4255] font-OpenSans font-semibold">
            Воронцовские бани
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
          <div className="content-body !px-4 sm:!p-8 ">

            <p className="text-sm sm:hidden text-[#3B4255] font-OpenSans font-normal mb-2">Банный комплекс</p>
            <h3 className="text-xl block mb-6 sm:hidden lg:text-2xl text-[#3B4255] font-OpenSans font-semibold">Воронцовские бани</h3>
            <p className="text-sm sm:text-base text-[#3B4255] font-OpenSans font-normal">
              Скажите администратору, что нашли информацию на сайта 4бани и
              узнайте, как получить скидку.
            </p>

            <h2 className="text-2xl sm:text-[40px] my-6 sm:mt-11 sm:mb-10 text-[#3B4255] font-OpenSans font-bold">
              +7 (495) 154-040-81
            </h2>

            <p className="text-sm sm:text-base text-[#3B4255] font-semibold font-OpenSans flex flex-row gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="#3B4255"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#3B4255"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              г. Москва Воронцовский пер, 5/7 ст1
            </p>

            <p onClick={onMap} className="text-sm sm:text-base text-[#FF7A01] font-semibold font-OpenSans flex flex-row gap-4 mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z"
                  stroke="#FF7A01"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 2V18"
                  stroke="#FF7A01"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 6V22"
                  stroke="#FF7A01"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Показать на карте
            </p>

            <div className="btns-otz flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={onClose}
                className="text-sm sm:text-base font-OpenSans font-semibold text-[#FFFFFF] px-16 py-[10px] rounded-xl bg-[#FF7A01] mt-6"
              >
                В избранное
              </button>

              <button
                onClick={onOpenSuccess}
                className="text-sm sm:text-base font-OpenSans font-semibold text-[#F44747] px-16 py-[10px] rounded-xl bg-[#FFF] border-[#F44747] border sm:mt-6"
              >
                В Пожаловаться
              </button>
            </div>
          </div>
        </ModalBody>
        <ModalFooter p={0}>
        <div className="textse text-sm font-OpenSans mt-10 flex flex-col sm:flex-row gap-5 rounded-b-lg px-8 py-6 font-normal text-white bg-[#FF7A01]">
        <p>
            При заказе 4-х часов, 2 часа в подарок! (Действует с понеделньника
            по пятницу с 09.00 до 17.00 и с 24.00 до 06.00)
          </p>
          <Divider orientation='vertical' h='auto' className="hidden sm:flex"  />
          <Divider  h='auto' className="flex sm:hidden"  />
          <p>
            В воскресенье с 17.00 до 09.00 утра понедельника, скидка -50% на все
            номера!{" "}
          </p>
          <Divider orientation='vertical' h='auto' className="hidden sm:flex"  />
          <Divider  h='auto' className="flex sm:hidden"  />
          <p>Именинникам скидка -10% (действует 7 дней до и 7 дней после)</p>
        </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Pazvoniy;
