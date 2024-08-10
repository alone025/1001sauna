import {  HStack, VStack } from "@chakra-ui/react";
import { Sauna } from "../types/cardType";
import CardUI from "../ui/card/card";

interface City {
    cityname: string;
    saunas: Sauna[];
  }

const Home_bez_gorod = () => {


    const data: City[] = [
        {
            cityname: "Сауны Воронежа",
            saunas: [
                {
                    img: [
                        {
                            img: ""
                        }
                    ],
                    name: "Сауна Глубина",
                    liked: 51,
                    unLiked: 25,
                    parnaya: "Сауна, хамам, финская, русская",
                    address: "Мира, 112, корпус 1",
                    hajm: " 6, до 30 чел.",
                    opportunity: "бассейн 4х2,5 метра, DVD, спутниковое ТВ, аудио-видео аппаратура",
                    price: "1600 - 2000 ₽/час",
                    chegirma:"15"
                }
            ]
        }
    ]


  return (
   <div className="home-page-city-unknown">
    <VStack
  spacing={4}
  align='stretch'
>
 {data.map((c, index)=> (
    <div className="gorods-map" key={index}>
        <div className="name-city">
            <h3 className="text-[30px] text-[#3B4255] font-OpenSans font-semibold mb-8" >{c.cityname}</h3>
        </div>
        <HStack spacing='24px'>
            {c.saunas.map((nm, ind)=>(
                <CardUI data={nm} key={ind} />
            ))}
        </HStack>
    </div>
 ))}
</VStack>
   </div>
  )
}

export default Home_bez_gorod