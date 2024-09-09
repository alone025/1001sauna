import { CheckCircleIcon } from "@chakra-ui/icons"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay } from "@chakra-ui/react"

type Props = {
isOpen: boolean
onClose: ()=> void
}

const CheckModal = ({isOpen , onClose}: Props) => {
  return (

    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton />
      <ModalBody className="flex flex-col items-center" >
       <CheckCircleIcon w={'120px'} h={'120px'} className="mt-[70px]" color='#00D33B'/>
       <h3 className="text-xl sm:text-2xl text-[#3B4255] font-OpenSans font-semibold text-center mt-8 max-w-[282px]" >Платёж отправлен. Спасибо!</h3>
      </ModalBody>

      <ModalFooter display='flex' justifyContent='center'>
        <Button _hover='none' className="!text-white !mr-0 mt-8 !text-[14px] sm:!text-base !font-OpenSans !font-semibold !w-full !h-12" rounded='12px' bg='#FF7A01' mr={3} onClick={onClose}>
        Вернуться на сайт
        </Button>
        
      </ModalFooter>
    </ModalContent>
  </Modal>
    )
}

export default CheckModal