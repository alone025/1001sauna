import {  Modal, ModalBody,  ModalContent,  ModalOverlay } from "@chakra-ui/react"


const GlobalCheck = ({isOpen, onClose}: {isOpen: boolean, onClose: ()=> void}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalOverlay />
              <ModalContent className="!p-0 !py-6 sm:!p-8 " >
              <div className="lg-tex flex px-4 sm:px-0 mb-3 flex-row justify-end gap-10">
     <svg onClick={onClose} className="cursor-pointer hover:rotate-180 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M24 8L8 24" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 8L24 24" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
     </div>
                <ModalBody>
                   <div className="conte flex flex-col justify-center items-center gap-8">
                   <div className="ic p-3 rounded-full bg-[#00D33B] w-min">
                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
  <path d="M80 24L36 68L16 48" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                    <h3 className="text-2xl text-[#3B4255] text-center max-w-[280px] font-OpenSans font-semibold">Отзыв отправлен. Спасибо!</h3>
                    <button onClick={()=> window.location.reload()} className="text-sm outline-none sm:text-base text-white font-OpenSans font-semibold px-16 py-[9px] rounded-xl bg-[#FF7A01]">Вернуться на сайт</button>
                   </div>


                    
                </ModalBody>
      
              
              </ModalContent>
  </Modal>
  )
}

export default GlobalCheck