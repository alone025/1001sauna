import { Checkbox, Input, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

const OfferContent = ({onOpenSuccess}: {onOpenSuccess: ()=> void}) => {
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
          <Menu>
            <MenuButton w="100%">
              <div className="choose flex flex-row justify-between items-center w-full px-3 py-[10px] border rounded border-[#CCCCCC]">
                <p>Дата</p>
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
          <Menu>
            <MenuButton w="100%">
              <div className="choose flex flex-row justify-between items-center w-full px-3 py-[10px] border rounded border-[#CCCCCC]">
                <p>С</p>
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
          <Menu>
            <MenuButton w="100%">
              <div className="choose flex flex-row justify-between items-center w-full px-3 py-[10px] border rounded border-[#CCCCCC]">
                <p>До</p>
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
    </div>
    <div className="soglashaniya flex flex-row gap-4 items-start mt-6">
        <Checkbox colorScheme="orange" className="mt-1"/>
        <p className="text-base text-[#3B4255] font-OpenSans font-normal">Оставляя информацию на сайте 4bani, я подтверждаю, что согласен (согласна) на обработку персональных данных в соответствии
        с <span className="text-[#FF7A01] underline cursor-pointer" >пользовательским соглашением.</span></p>
      </div>
      <button onClick={onOpenSuccess} className="text-sm sm:text-base font-OpenSans font-semibold text-[#FFFFFF] px-16 py-[10px] rounded-xl bg-[#FF7A01] mt-6">Отправить</button>
  </div>
  )
}

export default OfferContent