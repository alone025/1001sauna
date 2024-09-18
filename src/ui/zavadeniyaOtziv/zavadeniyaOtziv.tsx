import { Image, Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import the navigation styles

import { Pagination, Navigation } from 'swiper/modules'; // Import Navigation

function IconLike() {
  return (
    <Image src='/assets/like-icon.svg' alt='like-icon' />
  )
}

const ZavadeniyaOtzivModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const params = {
    modules: [Pagination, Navigation], // Add Navigation module here
    navigation: !isMobile ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } : false,
    pagination: isMobile ? { clickable: true } : false, // Make pagination clickable on mobile
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
  };

  return (
    <Modal size='xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className="!px-0 !py-6 sm:!p-8 " rounded='24px'>
        <div className="lg-tex flex px-4 sm:px-0 mb-6 flex-row justify-end gap-10">
          <svg onClick={onClose} className="cursor-pointer hover:rotate-180 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M24 8L8 24" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 8L24 24" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <ModalBody p={0}>
          <div className="tope-im relative">
            <Swiper id="pg-new-swipper" {...params} className="w-full h-auto max-h-[400px]">
              <SwiperSlide className="w-full">
                <img src="/moskov_pic/mars.png" alt="img" className="sm:rounded-2xl w-full h-auto max-h-[380px]" />
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <img src="/moskov_pic/mars.png" alt="img" className="sm:rounded-2xl w-full h-auto max-h-[380px]" />
              </SwiperSlide>
            </Swiper>

            {!isMobile && (
              <>
                <div className="swiper-button-next absolute after:!content-none w-10 h-10 right-6 p-1 bg-[#3B4255] rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M12 24L20 16L12 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className="swiper-button-prev absolute after:!content-none w-10 h-10 left-6 p-1 bg-[#3B4255] rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M20 24L12 16L20 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </>
            )}
          </div>
          <div className="bodye-md px-4 sm:px-0 mt-6 flex flex-col gap-3">
            <h3 className="text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold">Воронцовские бани</h3>
            <h5 className="text-base sm:text-lg text-[#3B4255] font-OpenSans font-semibold">Номер «Хамам»</h5>
            <div className="two-half flex flex-col gap-4 sm:gap-2 sm:flex-row justify-between">
              <p className="flex flex-row gap-3 items-center text-sm sm:text-base text-[#3B4255] font-OpenSans font-normal">
                <span>Город: <span className="font-semibold">Москва</span></span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="5" height="22" viewBox="0 0 5 22" fill="none">
                    <circle cx="2.5" cy="11.5" r="2.5" fill="#CCCCCC" />
                  </svg>
                </span>
                <span>Автор: <span className="font-semibold">Алексей М.</span></span> <IconLike />
              </p>
              <p className="text-sm sm:text-base text-[#3B4255] font-OpenSans font-normal flex flex-row gap-2">
                <svg className="block sm:hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15.8333 3.33325H4.16667C3.24619 3.33325 2.5 4.07944 2.5 4.99992V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99992C17.5 4.07944 16.7538 3.33325 15.8333 3.33325Z" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13.334 1.66675V5.00008" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.66602 1.66675V5.00008" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.5 8.33325H17.5" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg> 15.03.2024
              </p>
            </div>
            <p className="mt-3 text-sm sm:text-base text-[#3B4255] font-OpenSans font-normal">
            Правда с опозданием но хочу написать свое мнение. По роду деятельности часто приходится забывать о семье, себе. Нехватка времени думаю у всех проблема. День рождения супруга решила отменить в мармарисе. И если честно не ожидала настолько высокого уровня. Какие вы молодцы. Отдельно огромное спасибо Эльману. Супер позитивный, ответственный человек. С удовольствием буду рекомендовать своим знакомым, место, где отдыхаешь душой. Ни кто не достает, профессионалы персонал. Отношение безупречное. Чистота идеальная. И шашлык у вас ребята просто ах. Теперь мы ваши постоянные гости. Удачи и добра в новом году
            </p>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ZavadeniyaOtzivModal;
