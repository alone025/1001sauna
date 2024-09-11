import { Avatar, Button, Image } from "@chakra-ui/react";
import { useState } from "react";

function IconLike() {
  return <Image src="/assets/like-icon.svg" alt="like-icon" />;
}

function DisLike() {
  return <Image src="/assets/dislike-icon.svg" alt="like-icon" />;
}

const Otzivi = ({onOpenOtzivC}: {onOpenOtzivC: ()=>void}) => {

    const [commentOpen, setOpenComment] = useState<number | null>(null)

  const dataOtzivi = [
    {
        id: 1,
      ismi: "Олег",
      picksel:
        "Хорошие услуги оказывают в этом комплексе! Апартаменты хорошие, все качественно, все чисто, супер, все аккуратненько. Мы отдыхали семьей - я, супруга и ребенок. Администратор, опытная, увидела, что мы семейные, у нас все связанно, не стала предлагать банные принадлежности, у нас все с собой было и еда, и напитки тоже. Нас встретили, показали где находится наша комната, провели. Бассейн отличный, чистый. Хороших клиентов!",
      rasmi: "/assets/avatarOtziv.jpg",
      sana: "5 апреля 2024",
      liked: true,
      otzivIntoMkn: [
        {
          ismi: "Анастасия",
          picksel:
            "Я был впервые и мне понравилось. Мы с друзьями были в русской бане. В парилке чисто и температура воды в бассейне нормальная. Еду и напитки приносили с собой. Веники и банные принадлежности были тоже свои. Хорошая комната отдыха, с интерьером все нормально. В бильярд играли и музыку включали, все хорошо было. Мы были компанией, просто решили отдохнуть. Хорошее обслуживание. Баню нашли по интернету, нам понравилось обслуживание.",
          rasmi: "/assets/avatarOtziv2.jpg",
          sana: "5 апреля 2024",
          liked: true,
        },
      ],
    },
    {
        id: 2,
      ismi: "Андрей",
      picksel:
        "Я посещаю данный комплекс каждый месяц. Здесь чисто, нравится сервис, все хорошо. Обстановка достаточно уютная, хороший бассейн, с чистой, теплой водой. Парилка тоже отличная. Персонал внимательный и отзывчивый, девчонки симпатичные. Всегда предлагают полотенца и тапочки. Караоке, бильярдом не пользовался.",
      rasmi: "/assets/avatarOtziv1.jpg",
      sana: "1 апреля 2024",
      liked: true,
      otzivIntoMkn: [],
    },
  ];

  const handleToggle = (id: number) => {
    if (commentOpen === id) {
        setOpenComment(null); // Close if it's already open
    } else {
        setOpenComment(id);
    }
  };

  return (
    <div className="otzivi-contente p-6 rounded-2xl bg-white shadow-sm">
      <div className="topes flex flex-row justify-between items-center">
        <h3 className="text-xl sm:text-2xl font-OpenSans font-semibold text-[#3B4255]">
          Отзывы посетителей
        </h3>
        <button onClick={onOpenOtzivC} className="bg-[#FF7A01] hidden sm:block px-8 lg:px-12 py-3 rounded-xl text-base text-white font-OpenSans font-semibold hover:bg-[#ff7c01da]">
          Оставить отзыв
        </button>
      </div>
      <div className="otizivi-listes mt-6 hidden sm:flex flex-col gap-5">
        {dataOtzivi.map((km, mk) => (
          <>
            <div key={mk} className="otziv-div-mkna">
              <div className="otziv-mkn flex flex-row gap-5">
                <div className="lefte-ot">
                  <Avatar name={km.ismi} src={km.rasmi} />
                </div>
                <div className="righte">
                  <p className="text-[14px] sm:text-base font-OpenSans font-semibold text-[#3B4255]">
                    {km.ismi}
                  </p>
                  <p className="text-[14px] sm:text-base font-OpenSans font-normal text-[#3B4255] py-2">
                    {km.picksel}
                  </p>
                  <div className="otvetit flex flex-row justify-between items-center">
                    <Button
                      variant="ghost"
                      className="!text-[#FF7A01] !text-[14px] sm:!text-base !font-OpenSans relative -left-3 !font-semibold"
                    >
                      Ответить
                    </Button>
                    <div className="liked-mkj flex flex-row gap-3 items-center">
                      <p className="text-[14px] sm:text-base font-OpenSans font-normal text-[#4C4C4C]">
                        {km.sana}
                      </p>
                      {km.liked ? <IconLike /> : <DisLike />}
                    </div>
                  </div>
                </div>
              </div>
              {km.otzivIntoMkn.map((msk, kms) => (
                <div
                  key={kms}
                  className="otziv-mkn flex flex-row gap-4 mt-5 ml-[68px]"
                >
                  <div className="lefte-ot">
                    <Avatar name={msk.ismi} src={msk.rasmi} />
                  </div>
                  <div className="righte">
                    <p className="text-base font-OpenSans font-semibold text-[#3B4255]">
                      {msk.ismi}
                    </p>
                    <p className="text-base font-OpenSans font-normal text-[#3B4255] py-2">
                      {msk.picksel}
                    </p>
                    <div className="otvetit flex flex-row justify-between items-center">
                      <Button
                      onClick={onOpenOtzivC}
                        variant="ghost"
                        className="!text-[#FF7A01] !text-base !font-OpenSans relative -left-3 !font-semibold"
                      >
                        Ответить
                      </Button>
                      <div className="liked-mkj flex flex-row gap-3 items-center">
                        <p className="text-base font-OpenSans font-normal text-[#4C4C4C]">
                          {msk.sana}
                        </p>
                        {msk.liked ? <IconLike /> : <DisLike />}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
          </>
        ))}
      </div>
      <div className="otizivi-listes mt-6 flex sm:hidden flex-col gap-5">
        {dataOtzivi.map((km, mk) => (
          <>
            <div key={mk} className="otziv-div-mkna">
              <div className="otziv-mkn flex flex-col sm:flex-row gap-3 sm:gap-5">
                <div className="lefte-ot flex gap-4">
                  <Avatar name={km.ismi} src={km.rasmi} />
                 <div className="left-cont-avatar">
                 <p className="text-[14px] sm:text-base font-OpenSans font-semibold text-[#3B4255]">
                    {km.ismi}
                  </p>
                  <div className="like-date flex flex-row gap-3 items-center mt-1">
                  <p className="text-[14px] sm:text-base font-OpenSans font-normal text-[#4C4C4C]">
                        {km.sana}
                      </p>
                      {km.liked ? <IconLike /> : <DisLike />}
                  </div>
                 </div>
                </div>
                <div className="righte">
                 
                  <p className="text-[14px] sm:text-base font-OpenSans font-normal text-[#3B4255]">
                    {km.picksel}
                  </p>
                    {
                        km.otzivIntoMkn.length == 0 &&  <p className="text-sm text-[#3B4255] font-OpenSans font-semibold mt-3" >Ответить</p>
                    }
                    {
                        km.otzivIntoMkn.length !== 0 && <div className="down-up flex flex-row gap-2 items-center mt-3 cursor-pointer">
                        <p  onClick={()=> handleToggle(km.id)} className="text-[14px] sm:text-base font-OpenSans font-semibold text-[#3B4255]">
                        Комментарии ({km.otzivIntoMkn.length})
                        </p>
                        <svg
                         onClick={()=> handleToggle(km.id)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                         
                          className={`${commentOpen == km.id ? 'rotate-180':'rotate-0'} transition-transform`}
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
                    }
                </div>
              </div>
              {
                commentOpen == km.id && <>
                {km.otzivIntoMkn.map((msk, kms) => (
                <div
                  key={kms}
                  className="otziv-mkn flex flex-col gap-4 mt-5"
                >
                  
                  <div className="lefte-ot flex gap-4">
                  <Avatar name={msk.ismi} src={msk.rasmi} />
                 <div className="left-cont-avatar">
                 <p className="text-[14px] sm:text-base font-OpenSans font-semibold text-[#3B4255]">
                    {msk.ismi}
                  </p>
                  <div className="like-date flex flex-row gap-3 items-center mt-1">
                  <p className="text-[14px] sm:text-base font-OpenSans font-normal text-[#4C4C4C]">
                        {msk.sana}
                      </p>
                      {msk.liked ? <IconLike /> : <DisLike />}
                  </div>
                 </div>
                </div>
                <div className="righte">
                 
                  <p className="text-[14px] sm:text-base font-OpenSans font-normal text-[#3B4255]">
                    {msk.picksel}
                  </p>
                  <p className="text-sm text-[#3B4255] font-OpenSans font-semibold mt-3" onClick={onOpenOtzivC} >Ответить</p>
                </div>
                </div>
              ))}</>
              }
            </div>
     
          </>
        ))}
      </div>
      <div className="down-up flex flex-row gap-2 items-center mt-[26px] cursor-pointer">
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
      </div>
      <button onClick={onOpenOtzivC} className="bg-[#FF7A01] block sm:hidden w-full px-6 py-3 mt-5 rounded-xl text-base text-white font-OpenSans font-semibold hover:bg-[#ff7c01da]">
          Оставить отзыв
        </button>
    </div>
  );
};

export default Otzivi;
