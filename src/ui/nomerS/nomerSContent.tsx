import SwiperSaunaNomer from "./shortSwipper"

const NomerSContent = () => {
    const slidesPerWait = [
        {
            id:1,
            src:"/moskov_pic/glubina.png",
            alt:"glubina"
        },
        {
            id:2,
            src:"/moskov_pic/bountique.png",
            alt:"bountique"
        },
        {
            id:3,
            src:"/moskov_pic/kristall.png",
            alt:"kristall"
        },
        {
            id:4,
            src:"/moskov_pic/mars.png",
            alt:"mars"
        },
    ]

    const uslugiShort = [
      {
        h2: "Вместимость:",
        p: "До 6 человек",
      },
      {
        h2: "Тип парной",
        p: "Русская, с веником, турецкая, хамам",
      },
      {
        h2: "Услуги:",
        p: "Бассейн 4х4 с подсветкой и гидромассажем, большая зона отдыха, большое меню для вашего праздника. Различные виды напитков",
      },
      {
        h2: "Для отдыха:",
        p: "гостиная, бар/напитки, танцпол, поможем накрыть на стол",
      },
      {
        h2: "Минимальный заказ",
        p: "2 часа",
      },
    
    ]
  return (
    <div className="nomerSContent-km">
        <div className="tope-s">
            <SwiperSaunaNomer slides={slidesPerWait} />
        </div>
        <div className="bottome px-4 sm:px-0">
            <h3 className="text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold mt-6 mb-4">Хамам</h3>
            <h3 className="text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold" >1350 ₽/чаc</h3>
            <div className="contentss-mn">
              {
                uslugiShort.map((lk,lj)=>(
                  <div key={lj} className="contente flex flex-row gap-3 sm:gap-4 mt-5 sm:mt-6" >
          <p className="text-[14px] sm:text-base font-OpenSans font-normal text-[#4C4C4C]">
          {lk.h2}
          </p>
          <div className="flex flex-row gap-[6px] mt-4">
            <div className="div-chiziq w-[3px] h-[1px] bg-[#CCCCCC]"></div>
            <div className="div-chiziq hidden sm:block w-[5px] h-[1px] bg-[#CCCCCC]"></div>
            <div className="div-chiziq hidden sm:block w-[6px] h-[1px] bg-[#CCCCCC]"></div>
            <div className="div-chiziq hidden lg:block w-[6px] h-[1px] bg-[#CCCCCC]"></div>
            <div className="div-chiziq hidden lg:block w-[6px] h-[1px] bg-[#CCCCCC]"></div>
            <div className="div-chiziq hidden lg:block w-[6px] h-[1px] bg-[#CCCCCC]"></div>
            <div className="div-chiziq hidden lg:block w-[6px] h-[1px] bg-[#CCCCCC]"></div>
            <div className="div-chiziq hidden sm:block w-[6px] h-[1px] bg-[#CCCCCC]"></div>
            <div className="div-chiziq w-[5px] h-[1px] bg-[#CCCCCC]"></div>
            <div className="div-chiziq w-[3px] h-[1px] bg-[#CCCCCC]"></div>
          </div>
          <p className="text-[14px] sm:text-base font-OpenSans font-normal text-[#3B4255] max-w-[686px]">
            {lk.p}
          </p>
        </div>
                ))
              }
            </div>
            <div className="btns flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6">
            <button className="bg-[#FF7A01] outline-none h-12 w-full sm:max-w-[298px] lg:max-w-none rounded-xl px-6 py-2 text-[14px] sm:text-base text-white font-OpenSans font-semibold">
            Позвонить
          </button>
          <button className="bg-[#FFF] border h-12 border-[#CCCCCC] w-full sm:max-w-[298px] lg:max-w-none rounded-xl px-6 py-2 text-[14px] sm:text-base text-[#3B4255] hover:bg-[#FFF3DE] hover:border-[#FFF3DE] transition-colors font-OpenSans font-semibold">
            Забронировать
          </button>
            </div>
            <div className="recommend mt-6 flex flex-row gap-4 px-4 py-5 bg-[#F8F8F8] rounded-xl items-start">
          <div className="svge w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#3B4255"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 8V12"
                stroke="#3B4255"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16H12.01"
                stroke="#3B4255"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm sm:text-base font-normal text-[#3B4255] font-OpenSans">
          Рекомендуем заранее бронировать и вносить предоплату за cауны на праздники. В противном случае бронь будет снята.
          </p>
        </div>
        <div className="finale mt-6">
            <h3 className="text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold mb-4" >Описание номера</h3>
            <div className="text text-sm sm:text-base font-OpenSans font-normal text-[#3B4255] flex flex-col gap-3">
              <p>Парная комната в бане "Кристалл" отделана натуральным деревом, а печь топится настоящими дровами, что привносит особую атмосферу естественности, и само собой, добавляет жару. После парилки вы сможете окунуться в прохладный бассейн с чистой водой и испытать истинное наслаждение.</p>
              <p>В бане имеется гостиная комната с великолепным интерьером. Она идеально подходит для посиделок больших и веселых компаний. Для тех, кто желает уединиться в бане "Кристалл" имеется комната отдыха с большой красивой кроватью.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NomerSContent