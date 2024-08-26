import { useEffect, useState } from "react";

function TextFooter(): JSX.Element {

    const [open, setOpen] = useState<boolean>(false)

    const handleResize = () => {
        if (window.innerWidth > 640) {
          setOpen(false);
        }
      };
    
     
      useEffect(() => {
   
        handleResize();
    
       
        window.addEventListener('resize', handleResize);
    
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div className="main-content-start mt-8 flex flex-col sm:flex-row gap-5 justify-between">
      <div className="first-m text-[14px] sm:text-base font-OpenSans font-normal text-[#3B4255] flex flex-col gap-7 sm:gap-6 w-full sm:max-w-[340px] md:max-w-[360px] lg:max-w-[469px]">
        <div className="mtext-1">
          <ul className="list-inside list-decimal">
            <li>Лучшие сауны и бани: Люберцы (Рейтинг саун)</li>
            <li>Удобный Поиск сауны или бани: по району, остановке, цене</li>
            <li>Отзывы о саунах и банях города Люберцы</li>
          </ul>
        </div>
        <div className="mtext-2">
          <p className="flex flex-col gap-5 sm:gap-3">
            <span>
              Сауны в Люберцах — место, куда утомленный человек может прийти и
              расслабиться как со своей семьей, так и в компании друзей после
              активной трудовой недели. В такие момент не хочется утруждать себя
              тратой времени на поиски подходящей парной, а просто сказать
              знакомым, куда и во сколько приезжать.
            </span>
            <span>
              Наш сайт берет на себя эту функцию. Достаточно вывести результаты
              поиска в виде адресов на карте или же списком визиток и выбрать
              вариант по душе. Информация о каждой бане в Люберцах, содержащаяся
              в каталогах, призвана помочь за короткое время оценить парную и
              принять решение.
            </span>
            <span>
              На странице каждой парной указаны: цена за час, отзывы
              посетителей, оказываемые услуги, виды парных, фото помещений,
              действующие акции и скидки.
            </span>
          </p>
        </div>
                <div className={`mtext-3 ${open ? `sm:hidden md:block`: `hidden md:block`}`}>
          <p>На территории саун в Люберцах вы насладитесь:</p>
          <ul className="list-inside list-disc pl-4 mt-4">
            <li id="mdsa">
              финской баней — температура достигает 90 градусов, воздух сухой;
            </li>
            <li id="mdsa">
              турецкой парной — подходит при непереносимости жары.
            </li>
          </ul>
        </div>
      </div>
      <div className={`second-m text-[14px] sm:text-base font-OpenSans font-normal text-[#3B4255] ${open ? `flex mt-6`: `hidden sm:flex`} flex-col gap-7 sm:gap-6 w-full sm:max-w-[340px] md:max-w-[360px] lg:max-w-[469px]`}>
        <div className="mtext-0 hidden sm:block md:hidden">
          <p>На территории саун в Люберцах вы насладитесь:</p>
          <ul className="list-inside list-disc pl-4 mt-4">
            <li id="mdsa">
              финской баней — температура достигает 90 градусов, воздух сухой;
            </li>
            <li id="mdsa">
              турецкой парной — подходит при непереносимости жары.
            </li>
          </ul>
        </div>
        <div className="mtext-1 flex flex-col gap-4">
          <p>Как искать баню или сауну</p>
          <p className="flex flex-col gap-3">
            <span>
              Для поиска на нашем сайте нужно ввести в строку название района
              или станцию метро. После этого вы увидите визитки заведений,
              соответствующие наименованию. Затем останется выбрать
              понравившуюся баню и перейти на ее страницу. Также результаты
              можно вывести в виде схемы проезда на карте.
            </span>
            <span  >
              На странице ознакомьтесь с правилами брони и подробной информацией
              о заведении, отзывами посетителей. Затем перейдите на специальную
              форму и оставляйте заявку. После этого с вами свяжутся менеджеры
              парной для подтверждения правильности указанной информации.
            </span>
            <span className={`${open ? `sm:hidden md:block`: `hidden md:block`}`}>
              Если у вас остались вопросы или возникли проблемы, наши
              администраторы готовы помочь. Поскольку они работают в
              круглосуточном режим, ответы вы получите оперативно. Нужно только
              оставить свой телефон в специальной форме обратной связи на
              странице.
            </span>
          </p>
        </div>

        <div className={`mtext-3 flex-col gap-4 ${open ? `sm:hidden md:flex`: `hidden md:flex`}`}>
          <p>Поиск сауны или бани в г. Люберцы по названию</p>
          <p>
            Хочешь найти свои любимые сауны или бани? Просто напиши название в
            поле "Название" и мгновенно получи результат. Помоги другим
            посетителям в выборе, поставь заведению оценку!
          </p>
        </div>
      </div>
      <div className="third-m text-[14px] sm:text-base font-OpenSans font-normal text-[#3B4255] flex-col gap-7 hidden lg:flex sm:gap-6 max-w-[360px] lg:max-w-[469px]">
        <div className="mtext-1 flex flex-col gap-4">
          <p>Поиск сауны или бани по району</p>
          <p>
            Хочешь выбрать сауны или бани в своём районе? Удобный поиск поможет
            тебе с этим! Для удобства поиска вы можете использовать и выбрать
            Карты.Яндекс, Карты 2 ГИС и maps.google
          </p>
        </div>
        <div className="mtext-2 flex flex-col gap-4">
          <p>Фотографии интерьеров бани</p>
          <p>
            Оцени обстановку и уют бани или сауны не выходя из дома. В наш
            каталог собрано более 28000 фотографий интерьеров саун и бань (фото
            в сауне). Досуг в сауне - лучший городской отдых!
          </p>
        </div>
        <div className="mtext-3 flex flex-col gap-4">
          <p>Ранжирование поиска сауны</p>
          <p>
            Каждый из наших посетителей имеет возможность оставить свой отзыв
            или оценку той или иной сауне и бане, благодаря чему мы можем
            предложить Вам лучшее!
          </p>
        </div>
      </div>
      <p onClick={()=> setOpen(!open)} className="text-[14px] text-[#3B4255] font-OpenSans font-semibold flex sm:hidden flex-row gap-2 items-center">
        Читать подробнее{" "}
       {open ? ( <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="rotate-180 transition-transform"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#3B4255"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>):( <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="transition-transform"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#3B4255"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>)}
      </p>
    </div>
  );
}

export default TextFooter;
