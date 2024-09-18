import { Input, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import InputMask from "react-input-mask";
import YandexMap from "../../ui/map/map";

const ContentCarta = () => {
  const SvgIcon = () => {
    return (
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
    );
  };

  const Checksvg = () => {
    return (
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
    );
  };

  const QestionIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_4889_15901)">
          <path
            d="M10.0013 18.3334C14.6037 18.3334 18.3346 14.6025 18.3346 10.0001C18.3346 5.39771 14.6037 1.66675 10.0013 1.66675C5.39893 1.66675 1.66797 5.39771 1.66797 10.0001C1.66797 14.6025 5.39893 18.3334 10.0013 18.3334Z"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.57422 7.49999C7.77014 6.94304 8.15685 6.47341 8.66585 6.17426C9.17485 5.87512 9.7733 5.76577 10.3552 5.86558C10.9371 5.96539 11.4649 6.26792 11.8451 6.71959C12.2253 7.17126 12.4334 7.74292 12.4326 8.33332C12.4326 9.99999 9.93255 10.8333 9.93255 10.8333"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 14.1666H10.0083"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4889_15901">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

  
  const [isClose, setIsClose] = useState(true)

  const handleInputChange = (id: number, value: string) => {
    setPhoness((prevPhoness) =>
      prevPhoness.map((phone) =>
        phone.id === id ? { ...phone, number: value } : phone
      )
    );
  };

  const [phoness, setPhoness] = useState([
    {
      id:1,
      number:''
    },
    {
      id:2,
      number:''
    },
  ])

  const [idN, setIdN] = useState(phoness.length)

  const handleAdd = () => {
    if(phoness.length !== 5){
      const newData = {id: idN + 1, number:''}
      const achieved = [...phoness, newData]
     
      setIdN(idN + 1)
      setPhoness(achieved)
    }
  }

  const handleDelet = (e:number) => {
    if(phoness.length > 1){
      const findDelete = phoness.filter((lm)=> lm.id !== e )
     
      
      setPhoness(findDelete)
    }
  }

  return (
    <div className={`textAreaContent-k ${isClose ? 'h-[70px] sm:h-auto overflow-hidden transition-all sm:overflow-auto':""} flex transition-all flex-col gap-5 shadow p-5 sm:p-8 rounded-2xl bg-white mt-2 sm:mt-5 lg:mt-8`}>
       <h4 onClick={()=> setIsClose((prev)=>!prev)} className="text-lg lg:text-[21px] font-OpenSans text-[#3B4255] font-semibold mb-1 sm:mb-5 flex flex-row justify-between">Расположение <svg className={`block sm:hidden p-1 bg-[#F8F8F8] rounded-[32px] ${isClose? "rotate-180 transition-transform":"transition-transform"}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M22.666 18.6667L15.9993 12.0001L9.33268 18.6667" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </h4>
      <div className="contente hidden lg:flex flex-col gap-5">
        <div className="tope-inpute flex flex-row gap-8">
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Ваш город <span className="text-[#F44747]">*</span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_4889_15901)">
                  <path
                    d="M10.0013 18.3334C14.6037 18.3334 18.3346 14.6025 18.3346 10.0001C18.3346 5.39771 14.6037 1.66675 10.0013 1.66675C5.39893 1.66675 1.66797 5.39771 1.66797 10.0001C1.66797 14.6025 5.39893 18.3334 10.0013 18.3334Z"
                    stroke="#CCCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.57422 7.49999C7.77014 6.94304 8.15685 6.47341 8.66585 6.17426C9.17485 5.87512 9.7733 5.76577 10.3552 5.86558C10.9371 5.96539 11.4649 6.26792 11.8451 6.71959C12.2253 7.17126 12.4334 7.74292 12.4326 8.33332C12.4326 9.99999 9.93255 10.8333 9.93255 10.8333"
                    stroke="#CCCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14.1666H10.0083"
                    stroke="#CCCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4889_15901">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Menu>
              <MenuButton w="100%">
                <div className="choose flex flex-row justify-between items-center w-full px-3 py-[7px] border rounded border-[#CCCCCC]">
                  <p className="text-sm font-OpenSans font-normal text-[#4C4C4C]">
                    Москва
                  </p>
                  <SvgIcon />
                </div>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <div className="lj flex flex-row items-center w-full justify-between gap-1">
                    <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                      1 Variant
                    </p>
                    <Checksvg />
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="lj flex flex-row items-center w-full justify-between gap-1">
                    <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                      1 Variant
                    </p>
                    <Checksvg />
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="lj flex flex-row items-center w-full justify-between gap-1">
                    <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                      1 Variant
                    </p>
                    <Checksvg />
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="lj flex flex-row items-center w-full justify-between gap-1">
                    <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                      1 Variant
                    </p>
                    <Checksvg />
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Район/Округ <span className="text-[#F44747]">*</span>
              </p>
              <QestionIcon />
            </div>
            <Input
              placeholder="Поиск районов/округов"
              required
              type="email"
              outline="#FF7A01"
              borderRadius="4px"
              className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
            />
          </div>
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Улица <span className="text-[#F44747]">*</span>
              </p>
              <QestionIcon />
            </div>
            <Input
              placeholder="Улица"
              required
              type="text"
              outline="#FF7A01"
              borderRadius="4px"
              className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
            />
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
              пример: Неглинная
            </p>
          </div>
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Дом <span className="text-[#F44747]">*</span>
              </p>
              <QestionIcon />
            </div>
            <Input
              placeholder="Дом"
              required
              type="text"
              outline="#FF7A01"
              borderRadius="4px"
              className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
            />
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
              пример: 14 строение 3-7
            </p>
          </div>
        </div>
        <div className="centere-inpute flex flex-row gap-8">
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Ближайшее метро
              </p>
              <QestionIcon />
            </div>
            <Input
              placeholder="Ближайшее метро (если есть)"
              required
              type="text"
              outline="#FF7A01"
              borderRadius="4px"
              className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
            />
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
              пример: Таганская, Марксистская
            </p>
          </div>
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Ближайшая остановка{" "}
              </p>
              <QestionIcon />
            </div>
            <Input
              placeholder="Ближайшая остановка (если есть)"
              required
              type="text"
              outline="#FF7A01"
              borderRadius="4px"
              className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
            />
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
              пример: Марксистская
            </p>
          </div>
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Координаты{" "}
              </p>
              <QestionIcon />
            </div>
            <Input
              placeholder="37.620393,55.75396"
              required
              type="text"
              outline="#FF7A01"
              borderRadius="4px"
              className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
            />
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
              Долгота, Широта
            </p>
          </div>
        </div>
        <div className="bottome-inputes-kartea flex flex-row gap-8">
          <div className="lefter-kartae">
            <div className="otasi flex flex-col gap-1 w-full">
              <div className="pa flex flex-row gap-1 items-center">
                <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                  Телефоны (максимум: 5){" "}
                </p>
                <QestionIcon />
              </div>
              <div className="inputes flex flex-row gap-3 items-center">
                <InputMask
                  mask="+7 (999) 999-99-99"
                  value={phoness[0].number}
                  onChange={(e) => handleInputChange(phoness[0].id, e.target.value)}
                  className="!px-3 !py-[10px] outline-[#FF7A01] rounded-[4px] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
                  placeholder="+7 (495) 912-45-93"
                />
                <button onClick={handleAdd} className="p-2 bg-[#FF7A01] rounded-[32px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 2.3999V13.5999"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.39844 8H13.5984"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {phoness.slice(1).map((lh)=>(
              <div key={lh.id} className="masks mt-5">
              <InputMask
                mask="+7 (999) 999-99-99"
                value={lh.number}
                onChange={(e) => handleInputChange(lh.id, e.target.value)}
                className="!px-3 !py-[10px] outline-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] max-w-[144px] !text-sm font-OpenSans rounded-[4px] font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
                placeholder="+7 (495) 663-99-01"
              />
              <button onClick={handleAdd} className="p-2 bg-[#FF7A01] rounded-[32px] ml-3 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 2.3999V13.5999"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.39844 8H13.5984"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button onClick={()=> handleDelet(lh.id)} className="p-2 rounded-[32px] border border-[#CCCCCC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 4L3.33333 4L14 4"
                    stroke="#CCCCCC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.33203 3.99992L5.33203 2.66659C5.33203 2.31296 5.47251 1.97382 5.72256 1.72378C5.9726 1.47373 6.31174 1.33325 6.66537 1.33325L9.33203 1.33325C9.68565 1.33325 10.0248 1.47373 10.2748 1.72378C10.5249 1.97382 10.6654 2.31296 10.6654 2.66658L10.6654 3.99992M12.6654 3.99992L12.6654 13.3333C12.6654 13.6869 12.5249 14.026 12.2748 14.2761C12.0248 14.5261 11.6857 14.6666 11.332 14.6666L4.66537 14.6666C4.31174 14.6666 3.97261 14.5261 3.72256 14.2761C3.47251 14.026 3.33203 13.6869 3.33203 13.3333L3.33203 3.99992L12.6654 3.99992Z"
                    stroke="#CCCCCC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            ))}
          </div>
          <div className="righter w-full">
            <YandexMap />
          </div>
        </div>
      </div>
      <div className="contente-mobiled flex flex-col sm:grid lg:hidden sm:grid-cols-2 gap-5">
      <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Ваш город <span className="text-[#F44747]">*</span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_4889_15901)">
                  <path
                    d="M10.0013 18.3334C14.6037 18.3334 18.3346 14.6025 18.3346 10.0001C18.3346 5.39771 14.6037 1.66675 10.0013 1.66675C5.39893 1.66675 1.66797 5.39771 1.66797 10.0001C1.66797 14.6025 5.39893 18.3334 10.0013 18.3334Z"
                    stroke="#CCCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.57422 7.49999C7.77014 6.94304 8.15685 6.47341 8.66585 6.17426C9.17485 5.87512 9.7733 5.76577 10.3552 5.86558C10.9371 5.96539 11.4649 6.26792 11.8451 6.71959C12.2253 7.17126 12.4334 7.74292 12.4326 8.33332C12.4326 9.99999 9.93255 10.8333 9.93255 10.8333"
                    stroke="#CCCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14.1666H10.0083"
                    stroke="#CCCCCC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4889_15901">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Menu>
              <MenuButton w="100%">
                <div className="choose flex flex-row justify-between items-center w-full px-3 py-[7px] border rounded border-[#CCCCCC]">
                  <p className="text-sm font-OpenSans font-normal text-[#4C4C4C]">
                    Москва
                  </p>
                  <SvgIcon />
                </div>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <div className="lj flex flex-row items-center w-full justify-between gap-1">
                    <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                      1 Variant
                    </p>
                    <Checksvg />
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="lj flex flex-row items-center w-full justify-between gap-1">
                    <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                      1 Variant
                    </p>
                    <Checksvg />
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="lj flex flex-row items-center w-full justify-between gap-1">
                    <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                      1 Variant
                    </p>
                    <Checksvg />
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="lj flex flex-row items-center w-full justify-between gap-1">
                    <p className="text-sm font-OpenSans font-normal text-[#3B4255]">
                      1 Variant
                    </p>
                    <Checksvg />
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Район/Округ <span className="text-[#F44747]">*</span>
              </p>
              <QestionIcon />
            </div>
            <Input
              placeholder="Поиск районов/округов"
              required
              type="email"
              outline="#FF7A01"
              borderRadius="4px"
              className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
            />
          </div>
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Улица <span className="text-[#F44747]">*</span>
              </p>
              <QestionIcon />
            </div>
            <Input
              placeholder="Улица"
              required
              type="text"
              outline="#FF7A01"
              borderRadius="4px"
              className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
            />
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
              пример: Неглинная
            </p>
          </div>
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Дом <span className="text-[#F44747]">*</span>
              </p>
              <QestionIcon />
            </div>
            <Input
              placeholder="Дом"
              required
              type="text"
              outline="#FF7A01"
              borderRadius="4px"
              className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
            />
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
              пример: 14 строение 3-7
            </p>
          </div>
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Ближайшее метро
              </p>
              <QestionIcon />
            </div>
            <Input
              placeholder="Ближайшее метро (если есть)"
              required
              type="text"
              outline="#FF7A01"
              borderRadius="4px"
              className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
            />
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
              пример: Таганская, Марксистская
            </p>
          </div>
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Ближайшая остановка{" "}
              </p>
              <QestionIcon />
            </div>
            <Input
              placeholder="Ближайшая остановка (если есть)"
              required
              type="text"
              outline="#FF7A01"
              borderRadius="4px"
              className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
            />
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
              пример: Марксистская
            </p>
          </div>
         

          <div className="lefter-kartae hidden sm:block">
            <div className="otasi flex flex-col gap-1 w-full">
              <div className="pa flex flex-row gap-1 items-center">
                <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                  Телефоны (максимум: 5){" "}
                </p>
                <QestionIcon />
              </div>
              <div className="inputes w-full flex flex-row gap-3 items-center">
                <InputMask
                  mask="+7 (999) 999-99-99"
                  value={phoness[0].number}
                  onChange={(e) => handleInputChange(phoness[0].id, e.target.value)}
                  className="!px-3 !py-[10px] !w-full outline-[#FF7A01] rounded-[4px] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
                  placeholder="+7 (495) 912-45-93"
                />
                <button className="p-2 bg-[#FF7A01] rounded-[32px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 2.3999V13.5999"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.39844 8H13.5984"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {phoness.slice(1).map((ml)=>(
              <div className="masks flex flex-row items-center mt-5">
              <InputMask
                mask="+7 (999) 999-99-99"
                value={ml.number}
                onChange={(e) => handleInputChange(ml.id, e.target.value)}
                className="!px-3 !py-[10px] !w-full max-w-[314px] outline-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans rounded-[4px] font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
                placeholder="+7 (495) 663-99-01"
              />
              <button onClick={handleAdd} className="p-2 bg-[#FF7A01] rounded-[32px] ml-3 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 2.3999V13.5999"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.39844 8H13.5984"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button onClick={()=> handleDelet(ml.id)} className="p-2 rounded-[32px] border border-[#CCCCCC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 4L3.33333 4L14 4"
                    stroke="#CCCCCC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.33203 3.99992L5.33203 2.66659C5.33203 2.31296 5.47251 1.97382 5.72256 1.72378C5.9726 1.47373 6.31174 1.33325 6.66537 1.33325L9.33203 1.33325C9.68565 1.33325 10.0248 1.47373 10.2748 1.72378C10.5249 1.97382 10.6654 2.31296 10.6654 2.66658L10.6654 3.99992M12.6654 3.99992L12.6654 13.3333C12.6654 13.6869 12.5249 14.026 12.2748 14.2761C12.0248 14.5261 11.6857 14.6666 11.332 14.6666L4.66537 14.6666C4.31174 14.6666 3.97261 14.5261 3.72256 14.2761C3.47251 14.026 3.33203 13.6869 3.33203 13.3333L3.33203 3.99992L12.6654 3.99992Z"
                    stroke="#CCCCCC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            ))}
          </div>
          <div className="righter w-full flex flex-col gap-5">
          <div className="otasi flex flex-col gap-1 w-full">
            <div className="pa flex flex-row gap-1 items-center">
              <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                Координаты{" "}
              </p>
              <QestionIcon />
            </div>
            <Input
              placeholder="37.620393,55.75396"
              required
              type="text"
              outline="#FF7A01"
              borderRadius="4px"
              className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
            />
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
              Долгота, Широта
            </p>
          </div>
            <YandexMap />
          </div>
          <div className="lefter-kartae block sm:hidden">
            <div className="otasi flex flex-col gap-1 w-full">
              <div className="pa flex flex-row gap-1 items-center">
                <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
                  Телефоны (максимум: 5){" "}
                </p>
                <QestionIcon />
              </div>
              <div className="inputes w-full flex flex-row gap-3 items-center">
                <InputMask
                  mask="+7 (999) 999-99-99"
                  value={phoness[0].number}
                  onChange={(e) => handleInputChange(phoness[0].id, e.target.value)}
                  className="!px-3 !py-[10px] !w-full outline-[#FF7A01] rounded-[4px] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
                  placeholder="+7 (495) 912-45-93"
                />
                <button onClick={handleAdd} className="p-2 bg-[#FF7A01] rounded-[32px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 2.3999V13.5999"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.39844 8H13.5984"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {
              phoness.slice(1).map((lk)=>(
                <div key={lk.id} className="masks flex flex-row items-center mt-5">
              <InputMask
                mask="+7 (999) 999-99-99"
                value={lk.number}
                onChange={(e) => handleInputChange(lk.id, e.target.value)}
                className="!px-3 !py-[10px] !w-full outline-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans rounded-[4px] font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
                placeholder="+7 (495) 663-99-01"
              />
              <button onClick={handleAdd} className="p-2 bg-[#FF7A01] rounded-[32px] ml-3 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 2.3999V13.5999"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.39844 8H13.5984"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button onClick={()=> handleDelet(lk.id)} className="p-2 rounded-[32px] border border-[#CCCCCC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 4L3.33333 4L14 4"
                    stroke="#CCCCCC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.33203 3.99992L5.33203 2.66659C5.33203 2.31296 5.47251 1.97382 5.72256 1.72378C5.9726 1.47373 6.31174 1.33325 6.66537 1.33325L9.33203 1.33325C9.68565 1.33325 10.0248 1.47373 10.2748 1.72378C10.5249 1.97382 10.6654 2.31296 10.6654 2.66658L10.6654 3.99992M12.6654 3.99992L12.6654 13.3333C12.6654 13.6869 12.5249 14.026 12.2748 14.2761C12.0248 14.5261 11.6857 14.6666 11.332 14.6666L4.66537 14.6666C4.31174 14.6666 3.97261 14.5261 3.72256 14.2761C3.47251 14.026 3.33203 13.6869 3.33203 13.3333L3.33203 3.99992L12.6654 3.99992Z"
                    stroke="#CCCCCC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
              ))
            }
          </div>
      </div>
    </div>
  );
};

export default ContentCarta;
