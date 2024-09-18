import { Box, CloseButton, SimpleGrid } from "@chakra-ui/react";
import data from "../data/home_bez_gorod_data";
import CardUI from "../ui/card/card";


export default function Liked() {
  return (
    <div className="likee-card-page mt-5 md:mt-8 lg:mt-12">
        <h2 className="text-[30px] hidden sm:block font-OpenSans font-semibold text-[#3B4255]">Избранное</h2>

        <div className="cards-list mt-6 sm:mt-8 flex flex-row flex-wrap gap-5 justify-center">
      
           <SimpleGrid columns={{ base: 2, sm:3, md: 3, lg: 4, xl:5 }} spacing={{base: '12px', sm:'15px', lg:'20px'}}>
           {data[0].saunas.slice(0,5).map((nm, keys) => (
              <Box key={keys} className="relative">
             <CardUI accepted={true} data={nm} nmd={keys} key={keys} />
             <CloseButton w={{base: 6, md:8}} h={{base: 6, md:8}} color='#3B4255' className="absolute z-10 -right-3 md:-right-4 -top-3 md:-top-4 p-1 shadow-sm !rounded-full !bg-[#FFFFFF]" />
             </Box>
           ))}
         </SimpleGrid>
    
        </div>
    </div>
  )
}