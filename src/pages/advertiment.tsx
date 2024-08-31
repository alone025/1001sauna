
const AdvertimentPage = () => {
  return (
   <div className="adversitment-content flex flex-col gap-8">
    <div className="contents--php flex flex-col gap-4 text-base sm:text-[18px] text-[#3B4255] font-OpenSans font-semibold">
        <p>Справочный каталог 4bani.ru — это идеальная реклама для вашей сауны</p>
      <p>Наша цель: привести клиентов (посетителей) в ваше заведение!</p>
      <p>Начнем!</p>
        <div className="content--childd">
            <ul className="list-inside list-disc pl-5 font-normal mt-1 flex flex-col gap-3" >
                <li id="mdsa">Заполните форму (добавить сауну) на сайте.</li>
                <li id="mdsa" >Пришлите максимальное количество фотографий заведения на электронный адрес 4bani.ru@mail.ru</li>
                <li id="mdsa" >Предоставьте полное описание ваших услуг (мы и посетители не можем их знать).</li>
                <li id="mdsa" >Дайте емкое предложение цен.</li>
            </ul>
        </div>
    </div>
    <div className="contents--php flex flex-col gap-4 text-base sm:text-[18px] text-[#3B4255] font-OpenSans font-normal">
        <p className="font-semibold">На сегодняшний день справочный каталог 4bani.ru как рекламная площадка, обладает следующими преимуществами:</p>
        <p>1. Наш справочный каталог имеет специализированную направленность (бани, сауны, гостиницы, центры отдыха, оздоровительные комплексы, массажные салоны).</p>
        <p className="font-semibold" >Огромный поток посетителей нашего справочного каталога - ваши 100% клиенты.
        Они выбирают заведение для отдыха с друзьями из того списка, что есть в нашем каталоге.</p>
        <p>2. Удобный поиск заведений. Поиск в 2 клика!</p>
        <p>3. Полная информация о заведениях. Вам не нужно тратиться на создание своего Веб сайта, потому, что всю подробную информацию и фотографии Вы можете разместить в нашем справочном каталоге, как это делают ваши многочисленные коллеги из разных городов. Если же у Вас есть собственный сайт, мы предложим рекламный баннер и с удовольствием поместим ссылку на страницах с информацией о городских заведениях.</p>
        <p>4. Мгновенное добавление и редактирование информации о вашем заведении.</p>
        <p>5. Качественная и своевременная техническая поддержка.</p>
        <p>6. Бесплатные консультации по улучшению вашего бизнеса и повышению доходности.</p>
        <p>7. Помощь в разработке, планировании и ведении рекламных кампаний в других СМИ
        (Интернет, ТВ, радио, печатные издания, телематические услуги, реклама в транспорте, наружная реклама, и мн. др.).</p>
    </div>
    <div className="contents--php flex flex-col gap-[18px] text-base sm:text-[18px] text-[#3B4255] font-OpenSans font-normal">
        <p className="font-semibold" >Как оценить работает реклама или нет?</p>
        <p className="flex flex-col"><span>29 июля 2014 года мы запустили функционал подсчета количества звонков нашим клиентам (заведениям) от посетителей сайта 4bani.ru
        </span><span>Данные предоставляются в открытом виде для всех посетителей сайта.</span><span>Найти СТАТИСТИКУ звонков вы можете на любой странице заведений города.</span></p>
        <div className="imgs-div">
            <img src="/assets/statistic 1.png" alt="" />
        </div>
    </div>
    <div className="contents--php flex flex-col gap-4 text-base sm:text-[18px] text-[#3B4255] font-OpenSans font-normal">
        <p className="font-semibold" >Вы можете самостоятельно разместить информацию о своей сауне в нашем справочном каталоге. Для это Вам необходимо заполнить форму, нажав на кнопку Добавить сауну на главной странице.</p>
        <p>После регистрации на ваш меил придет специальное предложение от одного из менеджеров по рекламе 101сауна.ру</p>
    </div>
    <div className="contents--php flex flex-col gap-4 text-base sm:text-[18px] text-[#3B4255] font-OpenSans font-semibold">
        <p>Если у Вас возникли затруднения с добавлением заведения в каталог, вышлите всю информацию на наш электронный адрес: 4bani@mail.ru отдел размещения сам внесет информацию и обязательно согласует с вами.</p>
        <p>Внесение информации в каталог в течение 3-5 минут. Ждите письмо на свой mail</p>
        <p className="font-normal" >(Если вы не получили письмо, пишите администратору сайта, звоните по телефону 8 (800) 551-60-02 добавочный 2 - звонок бесплатный</p>
    </div>
    <div className="contents--php flex flex-col gap-4 text-base sm:text-[18px] text-[#3B4255] font-OpenSans font-normal">
        <p>Оплатить рекламу можно заполнив форму по ссылке: оплатить рекламу / внести оплату</p>
    </div>
   </div>
  )
}

export default AdvertimentPage