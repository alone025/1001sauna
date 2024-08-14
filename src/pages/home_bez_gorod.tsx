import { HStack, VStack } from "@chakra-ui/react";
import { Sauna } from "../types/cardType";
import CardUI from "../ui/card/card";
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from "react";
import GorodModal from "../ui/modal/gorodModal";

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
              img: "",
            },
          ],
          name: "Сауна Глубина",
          liked: 51,
          unLiked: 25,
          parnaya: "Сауна, хамам, финская, русская",
          address: "Мира, 112, корпус 1",
          hajm: " 6, до 30 чел.",
          opportunity:
            "бассейн 4х2,5 метра, DVD, спутниковое ТВ, аудио-видео аппаратура",
          price: "1600 - 2000 ₽/час",
          chegirma: "15",
        },
        {
          img: [
            {
              img: "",
            },
          ],
          name: "Сауна Глубина",
          liked: 51,
          unLiked: 25,
          parnaya: "Сауна, хамам, финская, русская",
          address: "Мира, 112, корпус 1",
          hajm: " 6, до 30 чел.",
          opportunity:
            "бассейн 4х2,5 метра, DVD, спутниковое ТВ, аудио-видео аппаратура",
          price: "1600 - 2000 ₽/час",
          chegirma: "15",
        },
      ],
    },
    {
      cityname: "Сауны Москвы",
      saunas: [
        {
          img: [
            {
              img: "",
            },
          ],
          name: "Сауна Глубина",
          liked: 51,
          unLiked: 25,
          parnaya: "Сауна, хамам, финская, русская",
          address: "Мира, 112, корпус 1",
          hajm: " 6, до 30 чел.",
          opportunity:
            "бассейн 4х2,5 метра, DVD, спутниковое ТВ, аудио-видео аппаратура",
          price: "1600 - 2000 ₽/час",
          chegirma: "15",
        },
      ],
    },
  ];


  const [openModal, setOpenModal] = useState(true)


  const handleOpenModal = (): void => {
		setOpenModal(!openModal)
	}



  return (
    <div className="home-page-city-unknown">
      <VStack spacing={12} align="stretch">
        {data.map((c, index) => (
          <div className="gorods-map" key={index}>
            <div className="name-city">
              <h3 className="text-[30px] text-[#3B4255] font-OpenSans font-semibold mb-8">
                {c.cityname}
              </h3>
            </div>
            <HStack spacing="24px">
              {c.saunas.map((nm, ind) => (
                <CardUI data={nm} key={ind} />
              ))}
            </HStack>
          </div>
        ))}
      </VStack>

      <AnimatePresence>
				{openModal && (
					<motion.div
						className='fixed inset-0 w-screen h-screen bg-[#00000093] z-[999] flex justify-center items-center'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 50, opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<GorodModal closeModal={handleOpenModal} />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>


    </div>
  );
};

export default Home_bez_gorod;
