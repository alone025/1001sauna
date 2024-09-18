import { Checkbox, CloseButton, Input, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow,  PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import { useState } from 'react'
import CalendarPopover from '../calendar/calendar'

const OfferContent = ({onOpenSuccess}: {onOpenSuccess: ()=> void}) => {

  const [isPopover, setIsPopover] = useState(false)

  const [select1, setSelect1] = useState('Выбрать номер')

  const [select2, setSelect2] = useState('Используйте скидку')

  const [select3, setSelect3] = useState('Дата')

  const [select4, setSelect4] = useState(false)

  const [select5, setSelect5] = useState(false)

  const [select4T, setSelect4T] = useState('')

  const [select5T, setSelect5T] = useState('')



  const handleSelect1 = (e:string)=>{
    setSelect1(e)
  }
  const handleSelect2 = (e:string)=>{
    setSelect2(e)
  }

  const handleSelect3 = (e:string)=>{
    setSelect3(e)
  }

 

  return (
  <div className="offerSauna">
    <p className='text-sm sm:text-base text-[#3B4255] font-OpenSans font-normal'>Обращаем внимание, что бронь принимается только после того, как наш сотрудник свяжется с Вами. Просьба указывать правильный номер телефона и mail для связи.</p>
    <div className="inputs flex flex-col gap-5 mt-8">
        <div className="tope flex flex-col sm:flex-row gap-5">
        <Input
            placeholder="Имя"
            required
            type="text"
            outline="#FF7A01"
            borderRadius="4px"
            className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
          />
          <Input
            placeholder="E-mail"
            required
            type="email"
            outline="#FF7A01"
            borderRadius="4px"
            className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
          />
          <Input
            placeholder="Телефон"
            required
            type="tel"
            outline="#FF7A01"
            borderRadius="4px"
            className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
          />
        </div>
        <div className="choose w-full flex flex-col sm:flex-row gap-5">
          {/* <Menu> */}
           
          <Popover isOpen={isPopover} onClose={()=>setIsPopover(false)}>
  <PopoverTrigger>
  <label onClick={()=> setIsPopover(true)} className="choose flex flex-row justify-between text-sm font-OpenSans font-normal text-[#4C4C4C] items-center w-full px-3 py-[10px] border rounded border-[#CCCCCC]">
                <p>{select3}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#3B4255"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </label>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
   <div className="k flex flex-row justify-end pt-1">
   <CloseButton onClick={()=>setIsPopover(false)} />
   </div>
  
    <CalendarPopover onSelectDate={handleSelect3} onCloseP={()=>setIsPopover(false)} />
  </PopoverContent>
</Popover>
         
           
              <div onClick={()=>setSelect4((prev)=>!prev)} className="choose flex flex-row justify-between text-sm font-OpenSans font-normal text-[#4C4C4C] items-center w-full px-3 py-[10px] border rounded border-[#CCCCCC]">
                <p>С {select4T !== '' && ': ' +select4T} </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#3B4255"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

             {select4 &&  <Input type='time' onChange={(e)=>setSelect4T(e.target.value)}  />}
        
           
        
              <div onClick={()=>setSelect5((prev)=>!prev)} className="choose flex flex-row justify-between text-sm font-OpenSans font-normal text-[#4C4C4C] items-center w-full px-3 py-[10px] border rounded border-[#CCCCCC]">
                <p>До {select5T !== '' && ': ' +select5T}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#3B4255"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {select5 &&  <Input type='time' onChange={(e)=>setSelect5T(e.target.value)} />}
            
           
          <Input
            placeholder="Кол-во человек"
            required
            type="number"
            outline="#FF7A01"
            borderRadius="4px"
            className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
          />
        </div>
        <div className="chooses-2 flex flex-col sm:flex-row gap-5">
        <Menu>
            <MenuButton w="100%">
              <div className="choose flex flex-row justify-between items-center w-full px-3 py-[10px] border rounded border-[#CCCCCC]">
                <p>{select1}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#3B4255"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </MenuButton>
            <MenuList>
              {['1','2','3','4'].map((cnum, knum)=>(
                 <MenuItem key={knum} onClick={()=>handleSelect1(cnum)} >
                 <div className="lj flex flex-row items-center w-full justify-between gap-1">
                   <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                     {cnum} Variant
                   </p>
                    {
                      cnum === select1 &&  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.6666 5L7.49998 14.1667L3.33331 10"
                        stroke="#FF7A01"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    }
                 </div>
               </MenuItem>
              ))}
              
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton w="100%">
              <div className="choose flex flex-row justify-between items-center w-full px-3 py-[10px] border rounded border-[#CCCCCC]">
                <p>{select2}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#3B4255"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </MenuButton>
            <MenuList>
            {['1','2','3','4'].map((cnum, knum)=>(
                 <MenuItem key={knum} onClick={()=>handleSelect2(cnum)} >
                 <div className="lj flex flex-row items-center w-full justify-between gap-1">
                   <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                     {cnum} Variant
                   </p>
                    {
                      cnum === select2 &&  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.6666 5L7.49998 14.1667L3.33331 10"
                        stroke="#FF7A01"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    }
                 </div>
               </MenuItem>
              ))}
             
            </MenuList>
          </Menu>
        </div>
    </div>
    <div className="soglashaniya flex flex-row gap-4 items-start mt-6">
        <Checkbox colorScheme="orange" className="mt-1"/>
        <p  className="text-base text-[#3B4255] font-OpenSans font-normal">Оставляя информацию на сайте 4bani, я подтверждаю, что согласен (согласна) на обработку персональных данных в соответствии
        с <span onClick={()=> window.open('/private-policy', '_bref')} className="text-[#FF7A01] underline cursor-pointer" >пользовательским соглашением.</span></p>
      </div>
      <button onClick={onOpenSuccess} className="text-sm sm:text-base font-OpenSans font-semibold text-[#FFFFFF] px-16 py-[10px] rounded-xl bg-[#FF7A01] mt-6">Отправить</button>
  </div>
  )
}

export default OfferContent