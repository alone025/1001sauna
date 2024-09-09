

const DrugiyRecomend = ({txt, anything}: {txt: string, anything: boolean}) => {

    const dataRecomend = [
        {
            h3t: "Сауна Глубина",
            pt:"Г. Омск, пр. Мира, 112А, корпус 1/2 ",
            imgL:"/assets/vaqtincha781.jpg"
        },
        {
            h3t: "Райская гавань",
            pt:"Г. Омск, шоссе Гагарина, 29",
            imgL:"/assets/vaqtincha782.jpg"
        },
        {
            h3t: "Сауна Кристалл",
            pt:"Г. Омск, ул. Домодедовская, 85",
            imgL:"/assets/vaqtincha783.jpg"
        },
        {
            h3t: "Villa San Remo",
            pt:"Г. Омск, шоссе Ленина, 67",
            imgL:"/assets/vaqtincha784.jpg"
        },
        {
            h3t: "Boutique and Spa",
            pt:"Г. Омск, ул. Гагарина, 12",
            imgL:"/assets/vaqtincha785.jpg"
        },
        {
            h3t: "Rai-Spa",
            pt:"Г. Омск, ул. Чехова, 42",
            imgL:"/assets/vaqtincha786.jpg"
        },
    ]

  return (
    <div className="drugi-recommend-mkn px-4 py-5 sm:p-6 rounded-2xl bg-white shadow-sm">
        <h3 className="text-xl sm:text-2xl font-OpenSans font-semibold text-[#3B4255]" >{txt}</h3>
        <div className="saunas-mikro-listas w-full max-w-[800px] mt-6 grid grid-cols-1 sm:grid-cols-2 justify-between sm:gap-x-5 lg:gap-x-6 gap-4 sm:gap-y-[13px]">
           {dataRecomend.map((klm, mlk)=> (
             <div key={mlk} className="sauna-mikro-snk flex flex-row gap-4 items-center">
             <div className="image-divmk overflow-hidden rounded-xl w-14 h-14">
             <img src={klm.imgL} alt="sauna" className="w-full h-full" />
             </div>
             <div className="text-divmk">
                 <h4 className="text-base sm:text-[18px] lg:text-[21px] font-OpenSans font-semibold text-[#3B4255] cursor-pointer">{klm.h3t}</h4>
                 <p className="text-sm sm:text-base font-OpenSans font-normal text-[#3B4255] mt-1">{klm.pt}</p>
             </div>
         </div>
           ))}
        </div>
       {anything &&  <div className="down-up flex flex-row gap-2 items-center mt-6 cursor-pointer">
        <p className="text-[14px] sm:text-base font-OpenSans font-semibold text-[#3B4255]">
        Показать ещё
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
      </div>}
    </div>
  )
}

export default DrugiyRecomend