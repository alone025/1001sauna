import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react"


const SuccesFul = ({isOpen, onClose}:{isOpen:boolean, onClose:()=>void}) => {
  return (
    <Modal size='xl'   isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent className="!p-0 !py-6 sm:!p-8 " >
    <div className="lg-tex flex px-4 sm:px-0 mb-3 flex-row justify-between gap-10">
      <h3 className="text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold">Номер забронирован</h3>
<svg onClick={onClose} className="cursor-pointer hover:rotate-180 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M24 8L8 24" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 8L24 24" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
      <ModalBody>
          
          <div className="contetnte flex flex-col gap-6 text-sm sm:text-base font-OpenSans font-normal text-[#3B4255]">
            <p>Вы, Алексей
отправили заявку брони Медуза, оздоровительный центр на 24.11.2019,
С 18:00 до 00:00.</p>
<p>Кол-во чел: 6. </p>
<p>Ждите звонка в течении минуты 
или перезвоните по тел. заведения: 
+7 (383) 273-50-04.</p>
<button onClick={()=> window.location.reload()} className="text-sm sm:text-base font-OpenSans font-semibold text-[#FFFFFF] px-16 py-[10px] rounded-xl bg-[#FF7A01] mt-6">Вернуться на сайт</button>
          </div>
          
      </ModalBody>

    
    </ModalContent>
  </Modal>
  )
}

export default SuccesFul