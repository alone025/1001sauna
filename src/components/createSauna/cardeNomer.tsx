import { Input, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useState } from "react";


const CardeNomer = ({nm, delt, keyID}:{nm:number, keyID:number, delt: (id:number)=>void}) => {
    const Icon1 = ()=>{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_1677_15986)">
        <path d="M15.3359 2.6665V6.6665H11.3359" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M0.664062 13.3335V9.3335H4.66406" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.3374 5.99989C2.67551 5.04441 3.25015 4.19016 4.00771 3.51683C4.76526 2.84351 5.68104 2.37306 6.66959 2.14939C7.65813 1.92572 8.68723 1.95612 9.66086 2.23774C10.6345 2.51936 11.5209 3.04303 12.2374 3.75989L15.3307 6.66655M0.664062 9.33322L3.7574 12.2399C4.47389 12.9567 5.36031 13.4804 6.33394 13.762C7.30756 14.0437 8.33666 14.0741 9.32521 13.8504C10.3138 13.6267 11.2295 13.1563 11.9871 12.4829C12.7446 11.8096 13.3193 10.9554 13.6574 9.99989" stroke="#3B4255" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_1677_15986">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
        )
    }
    
    const Icon2 = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 4H3.33333H14" stroke="#3B4255" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.33594 4.00016V2.66683C5.33594 2.31321 5.47641 1.97407 5.72646 1.72402C5.97651 1.47397 6.31565 1.3335 6.66927 1.3335H9.33594C9.68956 1.3335 10.0287 1.47397 10.2787 1.72402C10.5288 1.97407 10.6693 2.31321 10.6693 2.66683V4.00016M12.6693 4.00016V13.3335C12.6693 13.6871 12.5288 14.0263 12.2787 14.2763C12.0287 14.5264 11.6896 14.6668 11.3359 14.6668H4.66927C4.31565 14.6668 3.97651 14.5264 3.72646 14.2763C3.47641 14.0263 3.33594 13.6871 3.33594 13.3335V4.00016H12.6693Z" stroke="#3B4255" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
        )
    }


    const [fileName, setFileName] = useState<string | null>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
  
  
      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.target.files?.[0];
          if (file) {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
              setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(file);
          }
        };
      
  
      const handledelet = (e:number) => {
          if(e == 1){
              setFileName(null)
              setImageSrc(null)
          }
          else{
              console.log('UploadMainP da xato');
              
          }
        }

        const [isClose, setIsClose] = useState(true)

  return (
   <div className={`cardNumber mt-6 transition-all ${isClose ? 'sm:h-[60px] h-auto sm:overflow-hidden transition-all overflow-auto':""} `}>
    <div className="tpos flex flex-row justify-between">
        <div onClick={()=> setIsClose((prev)=>!prev)} className="txts cursor-pointer flex flex-row gap-3 items-center">
        <svg className={`sm:block hidden p-1 bg-[#F8F8F8] rounded-[32px] ${isClose? "rotate-180 transition-transform":"transition-transform"}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M22.666 18.6667L15.9993 12.0001L9.33268 18.6667" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
        <p className="text-base sm:text-lg text-[#3B4255] font-OpenSans font-semibold">Номер {keyID}</p>
        </div>
        <div onClick={()=>delt(nm)} className="udalite cursor-pointer flex flex-row gap-3 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M3 6H5H21" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <p className="text-sm sm:text-base text-[#3B4255] font-OpenSans font-semibold">Удалить номер</p>
        </div>
    </div>
    <hr className={`mt-6 ${isClose ? "hidden sm:block": "hidden"}`} />
    <div className="inputes-gride grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 mt-6">
    <div className="otasi flex flex-col gap-1 w-full">
          <div className="pa flex flex-row gap-1 items-center">
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
              Тип заведения <span className="text-[#F44747]">*</span>
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
              <div className="choose flex flex-row justify-between items-center w-full px-3 py-[10px] border rounded border-[#CCCCCC]">
                <p className="text-sm font-OpenSans font-normal text-[#4C4C4C]">
                Выберите тип
                </p>
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
        <div className="otasi flex flex-col gap-1 w-full">
          <div className="pa flex flex-row gap-1 items-center">
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
            Название номера/зала <span className="text-[#F44747]">*</span>
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
          <Input
            placeholder="Название номера/зала"
            required
            type="text"
            outline="#FF7A01"
            borderRadius="4px"
            className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
          />
          <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
          пример – Зеленый, Охотничий, Царский, Зал 1, Домик 1
          </p>
        </div>
        <div className="otasi flex flex-col gap-1 w-full">
          <div className="pa flex flex-row gap-1 items-center">
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
            Вместимость номера/зала, до <span className="text-[#F44747]">*</span>
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
          <Input
            placeholder="Вместимость номера/зала"
            required
            type="number"
            outline="#FF7A01"
            borderRadius="4px"
            className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
          />
          <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
          максимальное количество гостей, включая людей с доплатой
          </p>
        </div>
        <div className="otasi flex flex-col gap-1 w-full">
          <div className="pa flex flex-row gap-1 items-center">
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
            Тип парной <span className="text-[#F44747]">*</span>
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
              <div className="choose flex flex-row justify-between items-center w-full px-3 py-[10px] border rounded border-[#CCCCCC]">
                <p className="text-sm font-OpenSans font-normal text-[#4C4C4C]">
                Тип парной
                </p>
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
        <div className="otasi flex flex-col gap-1 w-full">
          <div className="pa flex flex-row gap-1 items-center">
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
            Минимальная цена <span className="text-[#F44747]">*</span>
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
          <Input
            placeholder="Минимальная цена"
            required
            type="number"
            outline="#FF7A01"
            borderRadius="4px"
            className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
          />
          <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
          как правило в будни или по акции
          </p>
        </div>
        <div className="otasi flex flex-col gap-1 w-full">
          <div className="pa flex flex-row gap-1 items-center">
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
            Максимальная цена <span className="text-[#F44747]">*</span>
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
          <Input
            placeholder="Максимальная цена"
            required
            type="number"
            outline="#FF7A01"
            borderRadius="4px"
            className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
          />
          <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
          как правило в праздники и выходные
          </p>
        </div>
        <div className="otasi flex flex-col gap-1 w-full">
          <div className="pa flex flex-row gap-1 items-center">
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
            Минимальное время заказа (час:мин) <span className="text-[#F44747]">*</span>
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
          <Input
            placeholder="Минимальное время заказа"
            required
            type="time"
            outline="#FF7A01"
            borderRadius="4px"
            className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
          />
        </div>
    </div>
    <div className="otasi mt-5 flex flex-col gap-1 w-full">
          <div className="pa flex flex-row gap-1 items-center">
            <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
            Услуги <span className="text-[#F44747]">*</span>
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
          <Input
            placeholder="Перечень услуг (кратко)"
            required
            type="text"
            outline="#FF7A01"
            borderRadius="4px"
            className="!px-3 !py-[10px] focus-visible:shadow-[#FF7A01] focus-visible:!shadow-md focus-visible:!border-[#FF7A01] !border !border-[#CCCCCC] !text-sm font-OpenSans font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]"
          />
             <p className="text-sm text-[#4C4C4C] font-OpenSans font-normal">
             пример: бассейн, можно париться с веником, джакузи, купель, зона отдыха со столом для гостей, 2 комнаты отдыха, обливное ведро, ТВ, караоке, банные принадлежности, настольные игры, бар, банкетный зал
          </p>
        </div>
        <div className="textarea-ml mt-5 flex flex-col gap-1">
        <p className="text-sm text-[#4C4C4C] font-Inter font-normal">
        Описание номера / зала / сауны <span className="text-[#F44747]">*</span>
            </p>
            <textarea rows={8} name="opinion" id="opinion" className="focus-visible:shadow-[#FF7A01] sm:p-2 focus-visible:!shadow-md focus-visible:!border-[#FF7A01] outline-none rounded-[4px] !border !border-[#CCCCCC] !text-sm font-Inter font-normal !text-[#4C4C4C] placeholder:text-[#4C4C4C]" />
            <p className="font-Inter font-normal mt-3 sm:mt-0 text-sm text-[#4C4C4C]">укажите: весь перечень услуг, чтобы у посетителей было меньше вопросов к администраторам заведения. Обязательно укажите сумму доплаты за дополнительного человека если количество посетителей превышает номинал. Минимальный заказ. Разместите прайс по дням и часам.</p>

        </div>
        <div className="uploades mt-5">
            <h3 className="text-base text-[#3B4255] font-OpenSans font-semibold mb-4" >Добавить фото</h3>
            <div className="image-uploader w-full">
        {fileName && imageSrc ? (
          <button className="p-4 rounded-2xl bg-[#F8F8F8] flex flex-row gap-6 justify-between items-center w-full">
            <div className="lefte flex flex-row items-center gap-4">
                <img src={imageSrc || '/assets/buttonReplacePng.svg'} alt="img" className="h-10 sm:h-20 w-10 sm:w-20 rounded-lg" />
                <p className="text-sm sm:text-base max-w-[50%] line-clamp-1 font-OpenSans font-semibold text-[#3B4255]">{fileName || 'sauna.logo.png'}</p>
            </div>
            <div className="righte flex flex-row gap-1">
            <label htmlFor="uploadInpReplaceMageNomera" className="iconka1 cursor-pointer hover:opacity-70 transition-opacity p-3 rounded-[32px] border border-[#CCCCCC] w-max">
                    <Icon1/>
                    <input onChange={handleFileChange} type="file"  id="uploadInpReplaceMageNomera" className="hidden" />
                </label>
                <div onClick={()=> handledelet(1)} className="ikonka2 hover:opacity-70 transition-opacity p-3 rounded-[32px] border border-[#CCCCCC] w-max">
                    <Icon2/>
                </div>
            </div>
          </button>
          ): ( <><label htmlFor="uploadInpMageNomera" className="px-6 cursor-pointer hover:opacity-70 transition-opacity py-2 border h-[104px] w-full border-dashed rounded-2xl border-[#CCCCCC] flex flex-row gap-3 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 15L21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21L5 21C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19L3 15"
                stroke="#3B4255"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 7.5L12 3L7.5 7.5"
                stroke="#3B4255"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 3L12 15"
                stroke="#3B4255"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-base text-[#3B4255] font-OpenSans font-semibold">
              Выберите фото
            </p>
          </label>
          <input onChange={handleFileChange} type="file"  id="uploadInpMageNomera" className="hidden" /></>)}
          <p className="text-xs sm:text-sm text-start text-[#4C4C4C] font-OpenSans font-normal mt-4">
            Фотография (главная, не более 1024х768 пкс)*
          </p>
        </div>
        </div>
        <hr className="mt-6" />
   </div>
  )
}

export default CardeNomer