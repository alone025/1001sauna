import Main from "./main-route/main";
import Navbar from "./components/navbar/navbar";
import Wrapper from "./layout/wrapper";
import Main_banner from "./ui/banner/main_banner";
import Footer from "./components/footer/footer";
import CustomSwiper from "./components/swipper/swipper";

import SwipperCardBottom from "./ui/swipperCard/swipperCard";

function App(): JSX.Element {

  const slides = [
   <SwipperCardBottom/>,
   <SwipperCardBottom/>,
   <SwipperCardBottom/>,
   <SwipperCardBottom/>
  ];



  return (
    <>
      <Navbar />

      <Wrapper>
        <div className="sm:mt-[32px] sm:mx-[20px] 2xl:mx-0">
          <Main_banner />
        </div>
        <Main />
      </Wrapper>
      <div className="swiper-time mt-12 bg-[#343434] pt-[64px] pb-[55px]">
       <Wrapper>
       <h3 className="font-OpenSans text-[27px] font-semibold text-white mx-4 sm:mx-[20px] 2xl:mx-0 mb-12" >Отзывы  о саунах и банях Москвы</h3></Wrapper>?
      <CustomSwiper items={slides} autoPlay={true} autoPlayInterval={40000000} />
      </div>
      <Footer />
    </>
  );
}

export default App;
