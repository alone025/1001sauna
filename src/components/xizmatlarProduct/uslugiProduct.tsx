const UslugiProduct = () => {
  const uslugData = [
    {
      h2: "Аквазона:",
      p: "маленький бассейн (до 5 кв.м.), средний бассейн (5-10 кв.м.), большой бассейн (10-20 кв.м.), очень большой бассейн (больше 20 кв.м.), подсветка, подогрев, противоток, фильтрация, джакузи, купель, гидромассаж, обливное ведро",
    },
    {
      h2: "Парная: ",
      p: "окно вентиляции, второе дыхание, принудительная вентиляция, открытая каменка, закрытая каменка, душ для облива в парной, выбор веников, услуги банщика, ароматы для парной, программы по телу, различные виды пропарок, СПА-терапия, турецкий пилинг, массаж вениками",
    },
    {
      h2: "Техника:",
      p: "ТВ (спутниковое/кабельное), аудио-видео аппаратура, караоке, кондиционеры, бесплатный Wi-Fi",
    },
    {
      h2: "Для отдыха:",
      p: "гостиная, бар/напитки, танцпол, поможем накрыть на стол",
    },
    {
      h2: "Кухня:",
      p: "русская, кавказская, европейская, бар с напитками, шашлык на мангале, пиво, лёгкие закуски",
    },
  ];

  return (
    <div className="uslugi-product p-6 bg-white rounded-2xl shadow-sm">
      <div className="tope">
        <h3 className="text-xl lg:text-2xl text-[#4C4C4C] font-OpenSans font-semibold">
          Перечень услуг
        </h3>
      </div>
   
      {uslugData.map((ms, sm) => (
        <div className="contente flex flex-col sm:flex-row gap-1 sm:gap-4 mt-5 sm:mt-6" key={sm}>
             <p className="text-[14px] max-w-[104px] sm:max-w-max sm:text-base font-OpenSans font-semibold sm:font-normal text-[#4C4C4C]">
            {ms.h2}
          </p>

          <div className="hidden sm:flex sm:flex-grow mx-3 sm:mt-4 h-[1px] border-t border-dashed border-[#CCCCCC]"></div>
          <p className="text-[14px] sm:text-base sm:w-[60%] font-OpenSans font-normal text-[#3B4255] sm:max-w-[600px]">
            {ms.p}
          </p>
        </div>
      ))}
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
  );
};

export default UslugiProduct;
