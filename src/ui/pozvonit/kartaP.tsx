import {
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
  } from "@chakra-ui/react";
import YandexMap from "../map/map";
  
  const KartaP = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {
 


    return (
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="">
          <div className="lg-tex !px-4 !pb-0 !py-6 sm:!p-8 sm:!pb-0 flex flex-row justify-between gap-10">
          <div className="txte flex flex-col gap-2">
            <p className="text-sm sm:text-base text-[#3B4255] font-OpenSans font-normal">Банный комплекс</p>
          <h3 className="text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold">
            Оставить жалобу
            </h3>
          </div>
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
            <div className="content-body mt-6 mb-6 !px-4 !py-0 sm:!px-8 ">
            <div className="map-textssa">
                <p className="text-sm sm:text-base font-OpenSans font-semibold text-[#3B4255] flex flex-row gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>г. Москва Воронцовский пер, 5/7 ст1</p>
            </div>
            
            </div>
            <YandexMap/>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default KartaP;
  