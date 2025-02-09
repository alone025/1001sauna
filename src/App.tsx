import Main from "./main-route/main";
import Navbar from "./components/navbar/navbar";
import Wrapper from "./layout/wrapper";
import Main_banner from "./ui/banner/main_banner";
import Footer from "./components/footer/footer";
import CustomSwiper from "./components/swipper/swipper";

import SwipperCardBottom from "./ui/swipperCard/swipperCard";
import TextFooter from "./components/textFooter/textFooter";
import Breadcromb from "./ui/breadcrumb/breadcromb";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ZavadeniyaOtzivModal from "./ui/zavadeniyaOtziv/zavadeniyaOtziv";

function App(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);

  const onClose = () => {
    setOpenModal(false);
  };

  const onOpen = () => {
    setOpenModal(true);
  };

  const slides = [
    <SwipperCardBottom openOkno={onOpen} />,
    <SwipperCardBottom openOkno={onOpen} />,
    <SwipperCardBottom openOkno={onOpen} />,
    <SwipperCardBottom openOkno={onOpen} />,
  ];

  // const path = window.location.pathname;

  const location = useLocation();
  const path = location.pathname;

  const isCategoryPage =
    path.startsWith("/category") && !path.includes("/product");

  return (
    <>
      <Navbar />

      <Wrapper>
        {path !== "/" && (
          <div className="bread hidden sm:block mx-4 mt-5 sm:mt-6 mb-6 sm:mb-0 sm:mx-5 2xl:mx-0">
            <Breadcromb />
          </div>
        )}
        <div className="sm:mt-[32px] sm:mx-[20px] 2xl:mx-0">
          <Main_banner />
        </div>

        {path !== "/" && isCategoryPage && (
          <div className="bread block sm:hidden mx-4 mt-5 sm:mt-6 mb-6 sm:mb-0 sm:mx-5 2xl:mx-0">
            <Breadcromb />
          </div>
        )}

        {path == "/" && (
          <div className="banner-idk block sm:hidden">
            <div
              className="bg pt-[92px] pb-6 flex flex-col w-full px-4 bg-cover  "
              style={{ backgroundImage: `url('/assets/mobile-bg.png')` }}
            >
              <div className="txt-azes flex items-center justify-center text-center mb-[112px]">
                <h2 className="text-[30px] font-OpenSans font-semibold text-white max-w-[204px]">
                  Бани и сауны Москвы
                </h2>
              </div>
              <div className="btns flex flex-col gap-2">
                <button className="w-full h-12 border-none text-[14px] font-OpenSans font-semibold text-[#FFF] py-2 rounded-2xl bg-[#FF7A01]">
                  Смотреть все
                </button>
                <button className="w-full h-12 border-none text-[14px] font-OpenSans font-semibold text-[#3B4255] py-2 rounded-2xl bg-[#FFF]">
                  Выбрать заведение
                </button>
              </div>
            </div>
          </div>
        )}
        <Main />
      </Wrapper>
      {(path === "/" || isCategoryPage) && (
        <>
          <div className="mnm block mt-8 sm:hidden ">
            <Main_banner />
          </div>
          <div className="swiper-time sm:mt-12 bg-[#343434] pt-[64px] pb-[55px]">
            <Wrapper>
              <h3 className="font-OpenSans text-[27px] font-semibold text-white mx-4 sm:mx-[20px] 2xl:mx-0 mb-12">
                Отзывы о саунах и банях Москвы
              </h3>
            </Wrapper>
            <CustomSwiper
              items={slides}
              autoPlay={true}
              autoPlayInterval={40000}
            />
          </div>
          <Wrapper>
            <div className="text-time mx-4 sm:mx-[20px] 2xl:mx-0 mt-12">
              <h3 className="font-OpenSans font-semibold text-2xl lg:text-[27px] text-[#3B4255]">
                Сауны и бани в Москве
              </h3>
              <TextFooter />
            </div>
          </Wrapper>
        </>
      )}
      <Footer />
      <ZavadeniyaOtzivModal isOpen={openModal} onClose={onClose} />
    </>
  );
}

export default App;
