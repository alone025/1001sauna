import { Button } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BankModal from "../ui/modal/bankModal";
import CardModal from "../ui/modal/cardModal";


const Payment = () => {

const priceDatas = [
    {
        name:`Подписка на год (12 месяцев)`,
        desc:`Размещение со скидкой на приоритетном месте в начале списка*`,
        price: '11 999',
    },
    {
        name:`Подписка на год (12 месяцев)`,
        desc:`Размещение со скидкой на приоритетном месте в начале списка*`,
        price: '11 999',
    },
    {
        name:`Подписка на год (12 месяцев)`,
        desc:`Размещение со скидкой на приоритетном месте в начале списка*`,
        price: '11 999',
    },
    {
        name:`Подписка на год (12 месяцев)`,
        desc:`Размещение со скидкой на приоритетном месте в начале списка*`,
        price: '11 999',
    },
    {
        name:`Подписка на год (12 месяцев)`,
        desc:`Размещение со скидкой на приоритетном месте в начале списка*`,
        price: '11 999',
    },
    {
        name:`Подписка на год (12 месяцев)`,
        desc:`Размещение со скидкой на приоритетном месте в начале списка*`,
        price: '11 999',
    },
    {
        name:`Подписка на год (12 месяцев)`,
        desc:`Размещение со скидкой на приоритетном месте в начале списка*`,
        price: '11 999',
    },
    {
        name:`Подписка на год (12 месяцев)`,
        desc:`Размещение со скидкой на приоритетном месте в начале списка*`,
        price: '11 999',
    },
]

const [opend, setOpend] = useState(false)
const [opendCard, setOpendCard] = useState(false)

const handleOpend = () =>  {
    setOpend(false)
}


const handleOpendCard = () =>  {
    setOpendCard(false)
}


const handleOpendOpend = () =>  {
    setOpend(true)
}

const handleOpendOpendCard = () =>  {
    setOpendCard(true)
}


  return (
    <div className="payment-content">
        <div className="top-content flex flex-col gap-4 text-base sm:text-[18px] text-[#3B4255] font-OpenSans font-normal">
            <p>Если возникли сложности с выбором места размещения или тарифом, позвоните по т. 8 (800) 551-60-02, доб. 2 (звонок бесплатный) и получите бесплатную консультацию.</p>
            <div className="imge-dive">
                <img src="/assets/visamaster.png" alt="visa-master" />
            </div>
            <p>При оплате заказа банковской картой, обработка платежа (включая ввод номера карты) происходит на защищенной странице процессинговой системы, которая прошла международную сертификацию. Это значит, что Ваши конфиденциальные данные (реквизиты карты, регистрационные данные и др.) не поступают в интернет-магазин, их обработка полностью защищена и никто, в том числе наш интернет-магазин, не может получить персональные и банковские данные клиента.</p>
            <p>При работе с карточными данными применяется стандарт защиты информации, разработанный международными платёжными системами Visa и MasterCard - Payment Card Industry Data Security Standard (PCI DSS), что обеспечивает безопасную обработку реквизитов Банковской карты Держателя. Применяемая технология передачи данных гарантирует безопасность по сделкам с Банковскими картами путем использования протоколов Secure Sockets Layer (SSL), Verified by Visa, Secure Code, и закрытых банковских сетей, имеющих высшую степень защиты.</p>
            <p>В случае возврата, денежные средства возвращаются на ту же карту, с которой производилась оплата.</p>
            <p>При оплате заказа банковской картой возврат денежных средств производится на ту карту, с которой был произведен платеж.</p>
        </div>
        <div className="contn mt-11 flex flex-col gap-2 sm:gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        
                {priceDatas.map((sm, na)=> (
                     <div key={na} className="carde-k flex flex-col gap-4 p-6 rounded-2xl bg-white">
                         <h4 className="text-[18px] lg:text-[21px] text-[#3B4255] font-OpenSans font-semibold" >{sm.name}</h4>
                     <p className="text-[14px] lg:text-base text-[#3B4255] font-OpenSans font-normal" >{sm.desc}</p>
                     <h3 className="text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold" >Цена: {sm.price} ₽</h3>
                     <hr className="my-1" />
                     <p className="text-[14px] sm:text-base text-[#3B4255] font-OpenSans font-normal" >Выберите способ оплаты:</p>
                     <div className="btns flex flex-col gap-2">
                     <Button bgColor='#FF7A01' color='#FFF' rounded='12px' className="!text-[14px] sm:!text-base !font-OpenSans !font-semibold hover:!text-[#FF7A01] !h-12" onClick={handleOpendOpendCard}  >Картой</Button>
                     <Button borderColor='#CCCCCC' bg='transparent' rounded='12px' className="!text-[14px] sm:!text-base !font-OpenSans !font-semibold !border !h-12" onClick={handleOpendOpend} >По счёту</Button>
                     </div>
                     </div>
                ))}
            
        </div>
        <AnimatePresence>
				{opend && (
					<motion.div
						className='fixed inset-0 w-screen h-screen bg-[#00000093] z-[999] flex justify-center items-center'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 50, opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<BankModal closeModal={handleOpend} />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

            <AnimatePresence>
				{opendCard && (
					<motion.div
						className='fixed inset-0 w-screen h-screen bg-[#00000093] z-[999] flex justify-center items-center'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 50, opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<CardModal closeModal={handleOpendCard} />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
    </div>
  )
}

export default Payment