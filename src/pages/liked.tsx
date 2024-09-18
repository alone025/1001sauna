import { Box, CloseButton } from "@chakra-ui/react";
import data from "../data/home_bez_gorod_data";
import CardUI from "../ui/card/card";


export default function Liked() {
  return (
    <div className="likee-card-page mt-5 md:mt-8 lg:mt-12">
        <h2 className="text-[30px] hidden sm:block font-OpenSans font-semibold text-[#3B4255]">Избранное</h2>

        <div className="cards-list mt-6 sm:mt-8 flex flex-row flex-wrap gap-5 justify-center">
        {data[0].saunas.slice(0,5).map((item, keys) => (
        <Box key={keys} className="relative">
          <CardUI accepted={false} data={item} nmd={keys}/>

       
          <CloseButton w={8} h={8} color='#3B4255' className="absolute z-10 -right-4 -top-4 p-1 shadow-sm !rounded-full !bg-[#FFFFFF]" />

       
        </Box>
      ))}

        </div>
    </div>
  )
}