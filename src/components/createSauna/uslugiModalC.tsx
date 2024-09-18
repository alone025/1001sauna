import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useState } from "react"

const UslugiModalC = () => {


    const SvgQuestion = () => {
     return(
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
     )
    }

    const dataMenues = [
        {
            nml:'Тип парной'
        },
        {
            nml:'Аквазона'
        },
        {
            nml:'Парная'
        },
        {
            nml:'Техника'
        },
        {
            nml:'Для отдыха'
        },
        {
            nml:'Кухня'
        },
        {
            nml:'Спорт и развлечения'
        },
        {
            nml:'Оздоровительные услуги'
        },
        {
            nml:'Гостиничные услуги'
        },
        {
            nml:'Дополнительные услуги'
        },
        {
            nml:'Виды расчёта'
        },
    ]

    const [isClose, setIsClose] = useState(true)

  return (
    <div className={`textAreaContent-k ${isClose ? 'h-[70px] sm:h-auto overflow-hidden transition-all sm:overflow-auto':""} flex transition-all flex-col gap-5 shadow p-5 sm:p-8 rounded-2xl bg-white mt-2 sm:mt-5 lg:mt-8`}>
       <h4 onClick={()=> setIsClose((prev)=>!prev)} className="text-lg lg:text-[21px] font-OpenSans text-[#3B4255] font-semibold mb-1 sm:mb-5 flex flex-row justify-between">Услуги <svg className={`block sm:hidden p-1 bg-[#F8F8F8] rounded-[32px] ${isClose? "rotate-180 transition-transform":"transition-transform"}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M22.666 18.6667L15.9993 12.0001L9.33268 18.6667" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </h4>
      <div className="menues-contente flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-8">
        {
            dataMenues.map((lg,gl)=>(
                <div key={gl} className="otasi flex flex-col gap-1 w-full">
                <div className="pa flex flex-row gap-[5px] items-center">
                  <p className="text-sm line-clamp-1 text-[#4C4C4C] font-OpenSans font-normal">
                  {lg.nml}
                  </p>
                  <SvgQuestion/>
                </div>
                <Menu>
                  <MenuButton w="100%">
                    <div className="choose flex flex-row justify-between items-center w-full px-3 py-[10px] border rounded border-[#CCCCCC]">
                      <p className="text-sm line-clamp-1 font-OpenSans font-normal text-[#4C4C4C]">
                      {lg.nml}
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
            ))
        }
      </div>
      </div>
  )
}

export default UslugiModalC