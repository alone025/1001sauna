"use client";

type Props = {
  closeModal: () => void;
};

const CardModal = ({ closeModal }: Props) => {
  return (
    <div>
      <div className="bg-white relative rounded-[24px] w-full lg:w-[712px] border font-OpenSans px-4 sm:px-[32px]">
        <div className="flex items-center justify-between py-[32px]">
          <h2 className="text-[#3B4255] text-[20px] md:text-[24px] font-[600]">
            Оплатить картой
          </h2>
          <img
            src="/assets/close.png"
            alt="close"
            className="cursor-pointer absolute top-3 right-3 md:top-[8%] md:right-[5%]"
            onClick={closeModal}
          />
        </div>
        <div className="flex flex-col w-full gap-3 overflow-auto h-[30vh] 2xl:h-auto">
          <p className="text-[#3B4255] text-[14px] sm:text-[15px] md:text-base font-OpenSans font-normal leading-[140%]">
            Обращаем внимание, что бронь принимается только после того, как наш
            сотрудник свяжется с Вами. Просьба указывать правильный номер
            телефона и mail для связи.
          </p>
          <p className="text-[#3B4255] text-[14px] sm:text-[15px] md:text-base font-OpenSans font-normal leading-[140%]">
            Комиссия на пополнение через систему Яндекс деньги – отсутствует.
          </p>
          <p className="text-[#3B4255] text-[14px] sm:text-[15px] md:text-base font-OpenSans font-normal leading-[140%]">
            В Назначении платежа укажите ваш город и название заведения.{" "}
          </p>
          <p className="text-[#3B4255] text-[14px] flex flex-col sm:text-[15px] md:text-base font-OpenSans font-normal leading-[140%]">
            В Комментарии, напишите сообщение для менеджера или администратора
            сайта.
            <span>Далее укажите сумму платежа и нажмите оплатить.</span>
          </p>
          <p className="text-[#3B4255] text-[14px] sm:text-[15px] md:text-base font-OpenSans font-normal leading-[140%]">
            Вы перейдете на сайт платежного оператора Яндекс.Деньги и продолжите
            внесение оплаты.
          </p>
          <p className="text-[#3B4255] text-[14px] sm:text-[15px] md:text-base font-OpenSans font-normal leading-[140%]">
            После оплаты обязательно перезвоните своему менеджеру и уведомите о
            внесении средств по телефону 8 (800) 551-60-02 доб. 2 - звонок
            БЕСПЛАТНЫЙ по РФ.
          </p>
        </div>
        <div className="bg-div bg-[#4C4C4C] w-full h-[176px] md:h-[216px] rounded-2xl mb-8 mt-6 lg:h-[360px] xl:h-[300px]"></div>
      </div>
    </div>
  );
};

export default CardModal;
