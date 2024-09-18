import {  Modal, ModalBody,  ModalContent, ModalOverlay } from "@chakra-ui/react"
import NomerSContent from "./nomerSContent"

const NomerSauna = ({isOpen, onClose}:{isOpen:boolean, onClose:()=>void}) => {



  return (
    <Modal size='xl'  isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent className="!p-0 !py-6 sm:!p-8 !max-w-[700px] lg:!max-w-[860px]" my={{base:'0', sm:'4rem'}} >
    <div className="lg-tex flex px-4 sm:px-0 mb-3 flex-row justify-end gap-10">
     <svg onClick={onClose} className="cursor-pointer hover:rotate-180 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M24 8L8 24" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 8L24 24" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
     </div>
     <ModalBody className="!pt-0 !p-0 sm:!p-6" pt={0}>
        <NomerSContent/>
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default NomerSauna