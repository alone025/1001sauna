
import ContentCarta from "../components/createSauna/contentCarta"
import DobavitNomsauna from "../components/createSauna/dobavitNomsauna"
import KontaktD from "../components/createSauna/kontaktD"
import SenaStoimost from "../components/createSauna/senaStoimost"
import TextareaContent from "../components/createSauna/textareaContent"
import UploadIMage from "../components/createSauna/uploadIMage"
import UploadmainP from "../components/createSauna/uploadmainP"
import UslugiModalC from "../components/createSauna/uslugiModalC"
import SocialLinks from "./socialLinks"
import { Checkbox } from "@chakra-ui/react"


const CreateSauna = () => {
  return (
   <div className="createsaunacontent">
<div className="topes flex flex-col gap-4 text-base sm:text-[18px] font-OpenSans text-[#3B4255] font-semibold">
    <p>Уважаемые владельцы заведений, менеджеры по рекламе, ВЕБСТУДИИ! </p>
    <p>Очень приятно, что вы выбрали наш справочный каталог 4bani.ru для добавления своей организации!</p>
    <p className="font-normal text-sm sm:text-[18px]">Телефон службы поддержки клиентов:  8 (800) 551-60-02, добавочный 2  (звонок для вас бесплатный).</p>
</div>
<div className="contentnne mt-8">
    <KontaktD/>
    <TextareaContent/>
    <ContentCarta/>
    <SenaStoimost/>
    <UslugiModalC/>
    <UploadmainP/>
    <UploadIMage/>
    <DobavitNomsauna/>
    <SocialLinks/>
</div>
<div className="finale flex flex-row gap-4 mt-6 sm:mt-8">
<Checkbox size='md' w='20px' h='20px' colorScheme='orange' defaultChecked>
  </Checkbox>
<p className="font-OpenSans font-normal text-[#3B4255] text-sm sm:text-base">Оставляя информацию на сайте 4bani, я подтверждаю, что согласен (согласна) на обработку персональных данных
в соответствии с <span onClick={()=> window.open('/private-policy', '_bref')}  className="text-[#FF7A01] underline cursor-pointer" >пользовательским соглашением.</span></p>
</div>
<button className="text-sm w-full sm:w-auto sm:text-base font-OpenSans font-semibold text-white px-[64px] py-[10px] mt-6 sm:mt-8 bg-[#FF7A01] rounded-xl">Отправить</button>
   </div>
  )
}

export default CreateSauna