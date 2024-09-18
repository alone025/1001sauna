import { Input } from "@chakra-ui/react"
import { useState } from "react"


const SocialLinks = () => {


const InputSvg = ()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_4951_14983)">
    <path d="M10.0013 18.3337C14.6037 18.3337 18.3346 14.6027 18.3346 10.0003C18.3346 5.39795 14.6037 1.66699 10.0013 1.66699C5.39893 1.66699 1.66797 5.39795 1.66797 10.0003C1.66797 14.6027 5.39893 18.3337 10.0013 18.3337Z" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.57422 7.49999C7.77014 6.94304 8.15685 6.47341 8.66585 6.17426C9.17485 5.87512 9.7733 5.76577 10.3552 5.86558C10.9371 5.96539 11.4649 6.26792 11.8451 6.71959C12.2253 7.17126 12.4334 7.74292 12.4326 8.33332C12.4326 9.99999 9.93255 10.8333 9.93255 10.8333" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 14.1665H10.0083" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_4951_14983">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
    )
}

const inputDates = [
    {
        scl:"Instagram"
    },
    {
        scl:"Youtube"
    },
    {
        scl:"Одноклассники"
    },
    {
        scl:"WhatsApp"
    },
    {
        scl:"вКонтакте"
    },
    {
        scl:"Facebook"
    },
    {
        scl:"Telegram"
    },
]
const [isClose, setIsClose] = useState(true)

  return (
    <div className={`socialLinkse ${isClose ? 'h-[70px] sm:h-auto overflow-hidden transition-all sm:overflow-auto':""} flex transition-all flex-col gap-5 shadow p-5 sm:p-8 rounded-2xl bg-white mt-2 sm:mt-5 lg:mt-8`}>
     <h4 onClick={()=> setIsClose((prev)=>!prev)} className="text-lg lg:text-[21px] font-OpenSans text-[#3B4255] font-semibold mb-1 sm:mb-5 flex flex-row justify-between">Услуги <svg className={`block sm:hidden p-1 bg-[#F8F8F8] rounded-[32px] ${isClose? "rotate-180 transition-transform":"transition-transform"}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M22.666 18.6667L15.9993 12.0001L9.33268 18.6667" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </h4>
    <div className="content-linkes grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
  {inputDates.map((lk,kl)=>(
        <div key={kl} className="otasi flex flex-col gap-1 w-full">
        <div className="pa flex flex-row gap-1 items-center">
          <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
          Ссылка на {lk.scl}
          </p>
          <InputSvg />
        </div>
        <Input
          placeholder={`Ссылка на ${lk.scl}`}
          required
          type="text"
          outline="#FF7A01"
          borderRadius="4px"
          className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
        />
      </div>
  ))}
    </div>
</div>
  )
}

export default SocialLinks