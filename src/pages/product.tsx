import { useState } from "react";
import Advertiment from "../components/advertiment/advertiment";
import DrugiyRecomend from "../components/drugiyRecommend/drugiyRecomend";
import ThumbsGallery from "../components/imageSlider/imageSlider";
import MiniContent from "../components/miniContent/miniContent";
import NomerSauni from "../components/nomerSauni/nomerSauni";
import Otzivi from "../components/otzivi/otzivi";
import PolezniyM from "../components/polezniyMateriali/polezniyM";
import Statistic from "../components/statistic/statistic";
import TopBNINBT from "../components/topBannerInBottom/topBNINBT";
import Videoplayer from "../components/videPlayer/videoplayer";
import VkMb from "../components/vkMb/vkMb";
import UslugiProduct from "../components/xizmatlarProduct/uslugiProduct";
import BottomMenu from "../ui/bottommenu/bottomMenu";
import YandexMap from "../ui/map/map";
import ModileContent from "../ui/sliderModal/modileContent";
import SwiperShort from "../ui/swipperShort/swipperShort";
import NomerSauna from "../ui/nomerS/nomerSauna";


function Svgs() {
  return (
    <div className="svgse flex flex-row gap-2">
      <svg
        className="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white" />
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          rx="23.5"
          stroke="#CCCCCC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32.6576 31.4859L36.2685 31.4367C36.2685 31.4367 38.1533 31.3233 37.2594 29.8789C37.1878 29.7586 36.7387 28.8116 34.5774 26.8588C32.3165 24.8145 32.6211 25.1465 35.3437 21.6113C37.0025 19.4589 37.6678 18.143 37.4572 17.5854C37.2622 17.0456 36.0412 17.1919 36.0412 17.1919L31.9839 17.211C31.9839 17.211 31.6836 17.1714 31.459 17.3012C31.2415 17.4296 31.1026 17.7248 31.1026 17.7248C31.1026 17.7248 30.4598 19.392 29.6009 20.8091C27.7947 23.7977 27.0719 23.9562 26.7744 23.7704C26.0881 23.3372 26.258 22.0308 26.258 21.1043C26.258 18.2058 26.7113 16.9992 25.3808 16.6862C24.9387 16.5824 24.6146 16.5141 23.4848 16.5031C22.0379 16.4895 20.8113 16.5072 20.118 16.8393C19.6549 17.0579 19.297 17.5499 19.5159 17.5772C19.7826 17.6141 20.3931 17.7371 20.713 18.1648C21.1299 18.7169 21.1158 19.9523 21.1158 19.9523C21.1158 19.9523 21.3558 23.3659 20.5573 23.7882C20.0099 24.0765 19.2591 23.4889 17.6466 20.7722C16.8214 19.3852 16.1955 17.8478 16.1955 17.8478C16.1955 17.8478 16.0762 17.5608 15.8614 17.4091C15.6032 17.2219 15.2355 17.1632 15.2355 17.1632L11.3803 17.1864C11.3803 17.1864 10.8035 17.2028 10.5874 17.4488C10.3993 17.6647 10.5733 18.1184 10.5733 18.1184C10.5733 18.1184 13.5935 24.9976 17.0122 28.4672C20.1503 31.6444 23.7122 31.4367 23.7122 31.4367H25.3233C25.3233 31.4367 25.8145 31.3834 26.0615 31.1238C26.2902 30.8819 26.2818 30.4337 26.2818 30.4337C26.2818 30.4337 26.2523 28.3237 27.2544 28.0149C28.248 27.7074 29.5167 30.0524 30.8668 30.9543C31.8857 31.6362 32.6576 31.4859 32.6576 31.4859Z"
          fill="#CCCCCC"
        />
      </svg>
      <svg
        className="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          rx="23.5"
          stroke="#CCCCCC"
        />
        <path
          d="M34.7636 16.7995C35.8569 17.9112 36 19.6778 36 24C36 28.3222 35.8569 30.0887 34.7636 31.2005C33.6699 32.3122 32.5311 32.4 24 32.4C15.4689 32.4 14.3301 32.3122 13.2364 31.2005C12.1431 30.0887 12 28.3222 12 24C12 19.6778 12.1431 17.9112 13.2364 16.7995C14.3297 15.6878 15.4689 15.6 24 15.6C32.5311 15.6 33.6699 15.6878 34.7636 16.7995ZM22.056 27.5599L27.8859 24.1814L22.056 20.8559V27.5599Z"
          fill="#CCCCCC"
        />
      </svg>
      <div className="odnoklasnik cursor-pointer w-12 h-12 border border-[#CCCCCC] flex items-center justify-center rounded-[100px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_1826_20166)">
            <mask
              id="mask0_1826_20166"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path d="M24 0H0V24H24V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1826_20166)">
              <path
                d="M0 11.5192C0 6.09084 0 3.37667 1.68833 1.68833C3.37667 0 6.09084 0 11.5192 0H12.4808C17.9092 0 20.6233 0 22.3117 1.68833C24 3.37667 24 6.09084 24 11.5192V12.4808C24 17.9092 24 20.6233 22.3117 22.3117C20.6233 24 17.9092 24 12.4808 24H11.5192C6.09084 24 3.37667 24 1.68833 22.3117C0 20.6233 0 17.9092 0 12.4808V11.5192Z"
                fill="#CCCCCC"
              />
              <path
                d="M12 11.9359C13.1754 11.9359 14.2334 11.4658 15.0027 10.6964C15.7721 9.92706 16.2422 8.85849 16.2422 7.69374C16.2422 6.51831 15.7721 5.46043 15.0027 4.69107C14.2334 3.92171 13.1754 3.45154 12 3.45154C10.8246 3.45154 9.76673 3.92171 8.99738 4.69107C8.22802 5.46043 7.75781 6.51831 7.75781 7.69374C7.75781 8.86918 8.22802 9.92706 8.99738 10.6964C9.76673 11.4551 10.8246 11.9359 12 11.9359ZM10.643 6.32598C10.9956 5.97334 11.4765 5.75964 12 5.75964C12.5343 5.75964 13.0152 5.97334 13.3571 6.32598C13.7097 6.67862 13.9235 7.15946 13.9235 7.68306C13.9235 8.20665 13.7097 8.69818 13.3571 9.04014C13.0045 9.39278 12.5236 9.60648 12 9.60648C11.4658 9.60648 10.9849 9.39278 10.643 9.04014C10.2903 8.68749 10.0766 8.20665 10.0766 7.68306C10.0766 7.15946 10.2903 6.67862 10.643 6.32598Z"
                fill="white"
              />
              <path
                d="M17.7061 13.6456L16.4559 11.9466C16.381 11.8505 16.2528 11.8398 16.1566 11.9145C14.9812 12.919 13.5386 13.5601 11.9892 13.5601C10.4398 13.5601 8.99724 12.9083 7.82181 11.9145C7.73635 11.8398 7.59741 11.8505 7.5226 11.9466L6.28309 13.6456C6.21896 13.7311 6.24034 13.8486 6.31515 13.9128C7.36234 14.7676 8.58048 15.334 9.8521 15.6332L7.2234 20.2601C7.15932 20.3883 7.25546 20.5486 7.40509 20.5486H9.9803C10.0551 20.5486 10.1299 20.5058 10.162 20.431L11.9999 16.3277L13.8378 20.431C13.8699 20.5058 13.9447 20.5486 14.0195 20.5486H16.5947C16.7443 20.5486 16.8405 20.3883 16.7657 20.2601L14.137 15.6332C15.4086 15.334 16.6161 14.7676 17.6633 13.9128C17.7488 13.8486 17.7595 13.7311 17.7061 13.6456Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1826_20166">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <svg
        className="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white" />
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          rx="23.5"
          stroke="#CCCCCC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.864 23.7467C17.8605 20.6984 22.5259 18.6888 24.8603 17.7179C31.5253 14.9456 32.9103 14.4641 33.813 14.4482C34.0115 14.4447 34.4554 14.4939 34.743 14.7272C34.9858 14.9242 35.0526 15.1904 35.0845 15.3771C35.1165 15.5639 35.1563 15.9895 35.1247 16.322C34.7635 20.1169 33.2007 29.3263 32.4056 33.5767C32.0692 35.3752 31.4067 35.9783 30.7654 36.0373C29.3717 36.1655 28.3134 35.1162 26.9635 34.2314C24.8512 32.8467 23.6578 31.9848 21.6075 30.6336C19.2379 29.0721 20.774 28.2139 22.1244 26.8113C22.4778 26.4442 28.6186 20.8587 28.7374 20.352C28.7523 20.2886 28.7661 20.0524 28.6258 19.9277C28.4854 19.803 28.2783 19.8456 28.1289 19.8795C27.917 19.9276 24.5426 22.158 18.0055 26.5707C17.0477 27.2284 16.1801 27.5489 15.4028 27.5321C14.5459 27.5136 12.8975 27.0476 11.6721 26.6492C10.1691 26.1607 8.97456 25.9024 9.07858 25.0726C9.13276 24.6404 9.72791 24.1985 10.864 23.7467Z"
          fill="#CCCCCC"
        />
      </svg>
      <div className="whatsapp cursor-pointer transition-all hover:bg-[#F8F8F8] hover:border-none w-12 h-12 border border-[#CCCCCC] flex items-center justify-center rounded-[100px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M15.0141 3C8.40686 3 3.02818 8.37405 3.02578 14.9812C3.02458 17.0932 3.57776 19.1551 4.62656 20.9719L3 27L9.2789 25.5164C11.0297 26.4716 13.0006 26.973 15.007 26.9742H15.0117C21.6177 26.9742 26.994 21.599 26.9976 14.993C27 11.7902 25.7546 8.77888 23.4914 6.51328C21.2282 4.24888 18.2205 3.0012 15.0141 3ZM15.0117 5.4C17.5749 5.4012 19.9837 6.40055 21.7945 8.21015C23.6053 10.0222 24.6 12.4298 24.5976 14.9906C24.5952 20.2754 20.2966 24.5742 15.0094 24.5742C13.4098 24.573 11.8253 24.1714 10.4297 23.4094L9.62109 22.9687L8.72812 23.1797L6.36562 23.7375L6.94219 21.5953L7.20234 20.6344L6.70547 19.7719C5.86787 18.3223 5.42458 16.6648 5.42578 14.9812C5.42818 9.69885 9.72811 5.4 15.0117 5.4ZM10.7719 9.45C10.5715 9.45 10.2475 9.525 9.97265 9.825C9.69785 10.1238 8.92265 10.8475 8.92265 12.3211C8.92265 13.7947 9.99609 15.2191 10.1461 15.4195C10.2949 15.6187 12.2181 18.7383 15.2625 19.9383C17.7921 20.9355 18.3059 20.7387 18.8555 20.6883C19.4051 20.6391 20.6285 19.9652 20.8781 19.2656C21.1277 18.566 21.1283 17.9642 21.0539 17.8406C20.9795 17.7158 20.7797 17.6414 20.4797 17.4914C20.1809 17.3414 18.7084 16.6183 18.4336 16.5187C18.1588 16.4191 17.9578 16.3687 17.7586 16.6687C17.5594 16.9687 16.9869 17.6414 16.8117 17.8406C16.6365 18.041 16.4625 18.068 16.1625 17.918C15.8625 17.7668 14.8979 17.4497 13.7531 16.4297C12.8627 15.6365 12.2619 14.6578 12.0867 14.3578C11.9127 14.059 12.0703 13.8949 12.2203 13.7461C12.3547 13.6117 12.518 13.3963 12.668 13.2211C12.8168 13.0459 12.8684 12.9211 12.968 12.7219C13.0676 12.5227 13.0166 12.3469 12.9422 12.1969C12.8678 12.0469 12.2851 10.5678 12.0187 9.975C11.7943 9.477 11.5573 9.46543 11.3437 9.45703C11.1697 9.44983 10.9711 9.45 10.7719 9.45Z"
            fill="#CCCCCC"
          />
        </svg>
      </div>
    </div>
  );
}

const Product = () => {
  const images = [
    { id: 1, src: "/swipperPictures/slide-1.jpg", alt: "Image 1", seat: 0 },
    { id: 2, src: "/swipperPictures/slide-2.jpg", alt: "Image 2", seat: 1 },
    { id: 3, src: "/swipperPictures/slide-3.jpg", alt: "Image 3", seat: 2 },
    { id: 4, src: "/swipperPictures/slider-4.jpg", alt: "Image 4", seat: 3 },
    { id: 5, src: "/swipperPictures/slide-1.jpg", alt: "Image 1", seat: 4 },
    { id: 6, src: "/swipperPictures/slide-2.jpg", alt: "Image 2", seat: 5 },
    { id: 7, src: "/swipperPictures/slide-3.jpg", alt: "Image 3", seat: 6 },
    { id: 8, src: "/swipperPictures/slider-4.jpg", alt: "Image 4", seat: 7 },
    { id: 9, src: "/swipperPictures/slide-1.jpg", alt: "Image 1", seat: 8 },
    { id: 10, src: "/swipperPictures/slide-2.jpg", alt: "Image 2", seat: 9 },
    { id: 11, src: "/swipperPictures/slide-3.jpg", alt: "Image 3", seat: 10 },
    { id: 12, src: "/swipperPictures/slider-4.jpg", alt: "Image 4", seat: 11 },
  ];

  const dataOnash = [
    {
      p: `Раздолье – первые и единственные в Омске обустроенные уютные гостовые дворики патио с банями на дровах, саунах, хаммамом, бассейнами и водопадом`
    },
    {
      p:`Вашей компании будет комфортно разместиться в любом Гостевом дворе нашего комплекса , а также у сказочного озера, окруженного плакучими ивами. 
Что может быть прекрасней барбекю-party с видом на закат, когда можно помечтать, сидя у открытого огня с бокалом любимого напитка в компании друзей. Загадывайте желание, оно непременно сбудется.`
    },
    {
      p:`В лучших купеческих традициях представлена настоящая русская баня ИЗБА на березовых дровах. Ценителям восточной изящности непременно понравятся наши японская баня БАМБУК и греческий `
    },
    {
      p:`АФИНА. Утонченность ритуала, аутентичные интерьеры японской бани ОФУРО с чайной церемонией «ПИН-ЧА», горячая парная с великолепным сводчатым бассейном оставят неизгладимое впечатление в Вашей памяти надолго. Великолепные термы воссоздают в роскошном интерьере номера АФИНА эпоху великой Византии. Жаркая сауна двора ШАЛЕ с ароматами душистых трав и гималайской соли, которая в условиях сауны дает возможность обеспечить в помещении парилки климат, практически идентичный состоянию воздуха на морском или океаническом побережье. `
    },
  ]

  const [isOpen , setIsOpen] = useState(false)

  const onClose = () => {
      setIsOpen(false)
  }

  const onOpen = ()=>{
    setIsOpen(true)
  }

  const [isOpenNomer, setIsOpenNomer] = useState(false)

const onCloseNomer = ()=>{
  setIsOpenNomer(false)
}

const onOpenNomer = ()=>{
  setIsOpenNomer(true)
}

  return (
   <>
    <div className="product-main-page mt-8 flex flex-col lg:flex-row gap-5">
      <div className="mlkjnh block sm:hidden">
      <SwiperShort onOpen={onOpen} slides={images} />
      </div>
      <div className="left-cont lg:max-w-[300px] xl:max-w-none flex flex-col gap-5">
        <div className="mni-cona">
          <MiniContent/>
        </div>
        <div className="materiali hidden lg:block">
          <PolezniyM/>
        </div>
        <div className="statistika hidden lg:block">
          <Statistic/>
        </div>
        <div className="advertiments-pr hidden lg:block">
          <Advertiment/>
        </div>
      </div>
      <div className="right-cont">
        
        <div className="top-head hidden sm:flex flex-row gap-5">
          <div className="lth flex flex-col gap-5">
            <ThumbsGallery onOpen={onOpen} images={images} />
            <Videoplayer />
          </div>
          <div className="rth flex flex-col gap-5 max-w-[300px] xl:max-w-[350px]">
            <div className="card-skidki p-6 rounded-2xl bg-[#FF7A01] shadow-md flex flex-col gap-4 sm:gap-5 lg:gap-0">
              <div className="tope-m flex flex-col gap-5 lg:gap-0">
                <h3 className="text-xl lg:text-2xl font-OpenSans font-semibold text-white">
                  Скидки и акции
                </h3>
                <p className="text-[14px] sm:text-base font-OpenSans font-normal text-white flex flex-col lg:mb-[30px] lg:mt-[27px]">
                  При заказе 4-х часов, 2 часа в подарок!
                  <span>
                    (действует с понеделньника по пятницу с 09.00 до 17.00 и с
                    24.00 до 06.00)
                  </span>
                </p>
              </div>
              <hr className="opacity-30" />
              <p className="text-[14px] sm:text-base font-OpenSans font-normal text-white lg:my-[23px]">
                В воскресенье с 17.00 до 09.00 утра понедельника, скидка -50% на
                все номера!
              </p>
              <hr className="opacity-30" />
              <p className="text-[14px] sm:text-base font-OpenSans font-normal text-white lg:mt-5 lg:mb-1">
                Именинникам скидка -10% (действует 7 дней до и 7 дней после)
              </p>
            </div>
            <YandexMap />
          </div>
        </div>
        <div className="mobile-section-0 block sm:hidden bg-white rounded-2xl shadow-sm py-5">
          <h3 className="text-xl font-OpenSans font-semibold text-[#4C4C4C] mb-5 px-4" >Видео о заведении</h3>
        <Videoplayer />
        </div>
        <div className="bottom-head mt-5 flex flex-col gap-2 sm:gap-5">
          <UslugiProduct/>
          <div className="advertiments-pr hidden sm:flex lg:hidden">
          <Advertiment/>
        </div>
          <NomerSauni onOpenNomer={onOpenNomer}/>
          <div className="onash p-4 sm:p-6 rounded-2xl bg-white shadow-sm">
                <h3 className="text-xl lg:text-2xl font-OpenSans font-semibold text-[#4C4C4C]">О нас</h3>
                <div className="contentesh mt-5 sm:mt-6 flex flex-col gap-5">
                  {dataOnash.map((cs, sc)=>(
       <p key={sc} className="text-sm sm:text-base font-OpenSans font-normal text-[#3B4255]">{cs.p}</p>
                  ))}
               
                </div>
                <div className="down-up flex flex-row gap-2 items-center mt-6 cursor-pointer">
        <p className="text-[14px] sm:text-base font-OpenSans font-semibold text-[#3B4255]">
          Читать подробнее
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#3B4255"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

          </div>
          <div className="materiali block lg:hidden">
          <PolezniyM/>
        </div>
        <div className="social-icons block bg-white shadow-sm rounded-2xl px-4 py-5 sm:hidden">
          <p className="text-xl sm:text-base font-OpenSans font-semibold text-[#3B4255] mb-4">
            Соц сети заведения
          </p>
          <Svgs />
        </div>
        <div className="hidden sm:block">
          <Otzivi/>
          </div>
          <div className="hidden sm:block">
          <DrugiyRecomend  anything txt='Другие наши заведения' />
          </div>
          <VkMb/>
          <div className="block sm:hidden">
          <Otzivi/>
          </div>
          <div className="block sm:hidden">
          <DrugiyRecomend  anything txt='Другие наши заведения' />
          </div>
          <div className="mobile-section-0 block sm:hidden bg-white rounded-2xl shadow-sm py-5">
          <h3 className="text-xl font-OpenSans font-semibold text-[#4C4C4C] mb-5 px-4" >Заведение на карте</h3>
        <YandexMap />
        </div>
          <DrugiyRecomend anything={false} txt="Сауны и бани в Кировском районе" />
        </div>
      </div>
    </div>
    <TopBNINBT top10={true} verHor={false} lastHistory={true} topMounth={false} topWeek={false} mapView={false} />
    <BottomMenu/>
    <ModileContent isOpen={isOpen} onClose={onClose}/>
    <NomerSauna isOpen={isOpenNomer} onClose={onCloseNomer} />
   </>
  );
};

export default Product;
