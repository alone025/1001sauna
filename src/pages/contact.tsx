
const Contact = () => {

    const cardsContact = [
        {
            nm: "Москва",
            lk: "Региональный фелиал",
            rayon: "Таганский",
            address: "ул. Немировича- Данченко, 104 (2-й этаж)",
            number: "8 (800) 551-60-02",
        },
        {
            nm: "Санкт-Петербург",
            lk: "Региональный фелиал",
            rayon: "Центральный",
            address: "ул. Нижегородская, 32 ст Б",
            number: "8 (800) 551-60-02",
        },
        {
            nm: "Барнаул",
            lk: "Региональный фелиал",
            rayon: "Центральный",
            address: "ул. Кутузова, 8А",
            number: "8 (800) 551-60-02",
        },
        {
            nm: "Краснодар",
            lk: "Региональный фелиал",
            rayon: "Центральный",
            address: "ул. Кутузова, 8А",
            number: "8 (800) 551-60-02",
        },
        {
            nm: "Новосибирск",
            lk: "Региональный фелиал",
            rayon: "Кировский",
            address: "ул. Немировича- Данченко, 104 (2-й этаж)",
            number: "8 (800) 551-60-02",
        },
        {
            nm: "Омск",
            lk: "Региональный фелиал",
            rayon: "Центральный",
            address: "ул. Декабристов, 116/1 (1-й этаж)",
            number: "8 (800) 551-60-02",
        },
        {
            nm: "Саратов",
            lk: "Региональный фелиал",
            rayon: "Ленинский",
            address: "ул. Ипподромная, 16",
            number: "8 (800) 551-60-02",
        },  {
            nm: "Сочи",
            lk: "Региональный фелиал",
            rayon: "Хостинский",
            address: "ул. Черноморская, 15",
            number: "8 (800) 551-60-02",
        },  {
            nm: "Томск",
            lk: "Региональный фелиал",
            rayon: "Кировский",
            address: "ул. Богдана Хмельницково, 43",
            number: "8 (800) 551-60-02",
        },
    ]


  return (
    <div className="contact-content">
        <div className="tope-ml flex flex-col gap-4 text-base sm:text-[18px] text-[#3B4255] font-OpenSans font-normal">
            <p>4bani - это компания, создающая и обслуживающая городские интернет-порталы. С 2010 года входит в группу порталов ООО "Т-Медиа Групп"</p>
            <p className="font-semibold mt-2" >Разместить рекламу или внести изменения вы можете</p>
            <p>
                <span className="font-semibold" >По телефону: </span>8 (800) 551-60-02 добавочный 2 - звонок бесплатный.
            </p>
            <p>
                <span className="font-semibold" >Часы работы: </span>8 ежедневно с 08.00 до 22.00 Мск, в праздники мы тоже работаем.
            </p>
        </div>
        <div className="btme mt-12">
            <h3 className="text-2xl sm:text-xl lg:text-[30px] text-[#3B4255] font-OpenSans font-semibold mb-6 sm:mb-8" >Где мы находимся</h3>
            <div className="cardse gap-2 sm:gap-5 flex flex-col md:grid md:grid-cols-3">
                {/* <div className="carde bg-white rounded-2xl p-5 sm:p-6">
                    <div className="mnb mb-4 sm:mb-5">
                        <h3 className="text-2xl sm:text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold" >Москва</h3>
                        <p className="text-[14px] sm:text-base text-[#3B4255] font-OpenSans font-normal" >(Региональный фелиал)</p>
                    </div>
                    <hr />
                    <div className="mnb my-4 sm:my-5 text-[14px] sm:text-base text-[#3B4255] font-OpenSans font-semibold">
                        <p><span className="font-normal" >Район:</span> Таганский</p>
                        <p><span className="font-normal" >Адрес:</span> ул. Немировича- Данченко, 104 (2-й этаж)</p>
                    </div>
                    <hr />
                    <div className="mnb mt-4 sm:mt-5">
                        <a href="tel:+8 (800) 551-60-02" className="text-2xl sm:text-[18px] lg:text-[21px] text-[#3B4255] font-OpenSans font-semibold" >8 (800) 551-60-02</a>
                        <p className="text-[14px] sm:text-base text-[#3B4255] font-OpenSans font-normal" >Звонок бесплатный</p>
                    </div>
                </div> */}
                {cardsContact.map((mc, cm)=> (
                    <div className="carde bg-white rounded-2xl p-5 sm:p-6" key={cm}>
                    <div className="mnb mb-4 sm:mb-5">
                        <h3 className="text-2xl sm:text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold" >{mc.nm}</h3>
                        <p className="text-[14px] sm:text-base text-[#3B4255] font-OpenSans font-normal" >({mc.lk})</p>
                    </div>
                    <hr />
                    <div className="mnb my-4 sm:my-5 text-[14px] sm:text-base text-[#3B4255] font-OpenSans font-semibold">
                        <p><span className="font-normal" >Район:</span> {mc.rayon}</p>
                        <p><span className="font-normal" >Адрес:</span> {mc.address}</p>
                    </div>
                    <hr />
                    <div className="mnb mt-4 sm:mt-5">
                        <a href={`tel:+${mc.number}`} className="text-2xl sm:text-[18px] lg:text-[21px] text-[#3B4255] font-OpenSans font-semibold" >{mc.number}</a>
                        <p className="text-[14px] sm:text-base text-[#3B4255] font-OpenSans font-normal" >Звонок бесплатный</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Contact