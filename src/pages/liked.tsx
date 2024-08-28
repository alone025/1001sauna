import { Box, CloseButton } from "@chakra-ui/react";
import data from "../data/home_bez_gorod_data";
import CardUI from "../ui/card/card";


export default function Liked() {
  return (
    <div className="likee-card-page mt-5 md:mt-8 lg:mt-12">
        <h2 className="text-[30px] hidden sm:block font-OpenSans font-semibold text-[#3B4255]">Избранное</h2>
        {/* <p className="text-xs block sm:hidden font-OpenSans font-normal text-[#3B4255]" >Главная / Избранное</p> */}
        <div className="cards-list mt-6 sm:mt-8 flex flex-row flex-wrap gap-5 justify-center">
        {data[0].saunas.map((item, keys) => (
        <Box key={keys} className="relative">
          {/* Render the CardUI component */}
          <CardUI accepted={false} data={item} nmd={keys}/>

          {/* Custom content for LikedPage */}
          <CloseButton size='sm' color='#3B4255' className="absolute -right-[6px] -top-3 p-1 shadow-sm !rounded-full !bg-[#FFFFFF]" />

          {/* You can add more custom elements here */}
        </Box>
      ))}

        </div>
    </div>
  )
}