import { Modal, ModalBody,  ModalContent,   ModalOverlay } from "@chakra-ui/react"
import { fullDataLinks } from "../../data/linksFullData"
import CustomAccordion from "../accordion/accordion"


const UslugiAll = ({isOpen, onClose}:{isOpen:boolean, onClose:()=>void}) => {



  return (

         
      
            <Modal size='full'   isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent className="!p-0 !py-6 sm:!p-8 " >
              <div className="lg-tex flex px-4 sm:px-0 mb-3 flex-row justify-between gap-10">
                <h3 className="text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold">Полный перечень услуг</h3>
     <svg onClick={onClose} className="cursor-pointer hover:rotate-180 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M24 8L8 24" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 8L24 24" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
     </div>
                <ModalBody>
                    <div className="contente hidden lg:flex flex-wrap justify-between gap-x-10 gap-y-10">
                       {fullDataLinks.map((mk,km)=>(
                         <div key={km} className="list flex flex-col gap-3">
                         <h4 className="text-[21px] text-[#3B4255] font-OpenSans font-semibold">{mk.h4}</h4>
                         <ul className="text-sm sm:text-base text-[#3B4255] font-OpenSans font-normal flex flex-col gap-3">
                            {mk.lists.map((li,il)=>(
                                <li key={il} >{li.p}</li>
                            ))}
                         </ul>
                     </div>
                       ))}
                    </div>

                    <div className="contente flex lg:hidden flex-col justify-between">
                        
                       {fullDataLinks.map((mk,km)=>(
                         <div key={km} className="list flex flex-col gap-3">
                         <CustomAccordion section_title={mk.h4} description={
                            <ul className="text-sm sm:text-base text-[#3B4255] font-OpenSans font-normal flex flex-col gap-3">
                            {mk.lists.map((li,il)=>(
                                <li key={il} >{li.p}</li>
                            ))}
                         </ul>
                         } />
                     </div>
                       ))}
                    </div>

                </ModalBody>
      
              
              </ModalContent>
            </Modal>
   
       
  )
}

export default UslugiAll