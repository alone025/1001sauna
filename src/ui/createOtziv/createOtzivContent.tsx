
import {
  Checkbox,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const CreateOtzivContent = ({onOpenSuccess}: {onOpenSuccess: ()=> void}) => {

const [descV, setDescV] = useState('')

const [showMd, setShowMD]= useState(true)


  return (
    <div className="content-createOtziv">
      <div className="text-np">
        {
          showMd ? <p className="text-sm sm:text-base text-[#3B4255] font-OpenSans font-normal">
          Уважаемый читатель! Оставляя жалобу о - Сауна баня "На Нелидовской 18"
          и работниках заведения. Тем самым, вы поможете улучшить сервис и
          качество обслуживания. Указывайте свои контактные данные для
          скорейшего решения...
        </p>: <div className="flex flex-col gap-6">
        <p className="text-sm sm:text-base text-[#3B4255] font-OpenSans font-normal">
        Уважаемый читатель! Оставляя жалобу о - Сауна баня "На Нелидовской 18" и работниках заведения. Тем самым, вы поможете улучшить сервис и качество обслуживания. Указывайте свои контактные данные для скорейшего решения возникших вопросов. Все жалобы о Сауна баня "На Нелидовской 18" моментально попадают к руководству заведения. Конфиденциальность гарантируется.
        </p>
        <p className="text-sm sm:text-base text-[#3B4255] font-OpenSans font-normal">Обращаем внимание, что в связи с последними изменениями в российском законодательстве на сайте 101sauna.ru введена премодерация отзывов.</p>
        </div>
        }
        <div onClick={()=>setShowMD((prev)=> !prev)} className="down-up flex w-max flex-row gap-2 items-center mt-5 mb-8 cursor-pointer">
          <p className="text-[14px] sm:text-base font-OpenSans font-semibold text-[#3B4255]">
            {showMd ? "Показать полностью":"Скрыть описание"}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`${showMd ? "rotate-0": "rotate-180"} transition-transform`}
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#3B4255"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="inputs-content flex flex-col gap-5">
        <div className="simple flex flex-col sm:flex-row gap-5">
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
        <div className="choose w-full">
          <Menu>
            <MenuButton w="100%">
              <div className="choose flex flex-row justify-between items-center w-full px-3 py-[10px] border rounded border-[#CCCCCC]">
                <p>Выбрать номер</p>
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
              <MenuItem>
                <div className="lj flex flex-row items-center w-full justify-between gap-1">
                  <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                    1 Variant
                  </p>
                  <svg
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
                </div>
              </MenuItem>
              <MenuItem>
                <div className="lj flex flex-row items-center w-full justify-between gap-1">
                  <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                    1 Variant
                  </p>
                  <svg
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
                </div>
              </MenuItem>
              <MenuItem>
                <div className="lj flex flex-row items-center w-full justify-between gap-1">
                  <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                    1 Variant
                  </p>
                  <svg
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
                </div>
              </MenuItem>
              <MenuItem>
                <div className="lj flex flex-row items-center w-full justify-between gap-1">
                  <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                    1 Variant
                  </p>
                  <svg
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
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="input-text">
        <Textarea onChange={(e)=>setDescV(e.target.value)} rounded='4px' p='10px' maxLength={400} placeholder='Введите описание' className="focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]" />
     
          <p className="text-xs font-OpenSans font-normal text-[#4C4C4C] uppercase text-right mt-1" >{descV.length} / 400</p>

        </div>
      </div>
      <div className="baho mt-6">
        <p className="text-sm sm:text-base text-[#3B4255] font-OpenSans font-semibold">Ваша оценка</p>
        <RadioGroup defaultValue='2' className="mt-4">
  <Stack spacing={5} className="!flex-col sm:!flex-row">
    <Radio colorScheme='orange'  value='1'>
    Понравилось
    </Radio>
    <Radio colorScheme='orange'  value='2'>
    Не понравилось
    </Radio>
  </Stack>
</RadioGroup>
      </div>
      <div className="soglashaniya flex flex-row gap-4 items-start mt-6">
        <Checkbox colorScheme="orange" className="mt-1"/>
        <p className="text-base text-[#3B4255] font-OpenSans font-normal">Оставляя информацию на сайте 4bani, я подтверждаю, что согласен (согласна) на обработку персональных данных в соответствии
        с <span className="text-[#FF7A01] underline cursor-pointer" >пользовательским соглашением.</span></p>
      </div>
      <button onClick={onOpenSuccess} className="text-sm sm:text-base font-OpenSans font-semibold text-[#FFFFFF] px-16 py-[10px] rounded-xl bg-[#FF7A01] mt-6">Отправить</button>
    </div>
  );
};

export default CreateOtzivContent;
