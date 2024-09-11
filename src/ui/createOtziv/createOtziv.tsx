import { Modal, ModalBody,  ModalContent,   ModalOverlay } from "@chakra-ui/react"
import CreateOtzivContent from "./createOtzivContent"


const CreateOtziv = ({isOpen, onClose, onOpenSuccess}:{isOpen:boolean, onClose:()=>void, onOpenSuccess: ()=> void}) => {



  return (
            <Modal size='xl'   isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent className="!p-0 !py-6 sm:!p-8 " >
              <div className="lg-tex flex px-4 sm:px-0 mb-3 flex-row justify-between gap-10">
                <h3 className="text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold">Оставить отзыв</h3>
     <svg onClick={onClose} className="cursor-pointer hover:rotate-180 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M24 8L8 24" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 8L24 24" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
     </div>
                <ModalBody>
                    
<CreateOtzivContent onOpenSuccess={onOpenSuccess} />
                    
                </ModalBody>
      
              
              </ModalContent>
            </Modal>
   
       
  )
}

export default CreateOtziv