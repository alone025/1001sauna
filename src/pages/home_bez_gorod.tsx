import { HStack, VStack } from "@chakra-ui/react";
import CardUI from "../ui/card/card";
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from "react";
import GorodModal from "../ui/modal/gorodModal";
import data from "../data/home_bez_gorod_data";


const Home_bez_gorod = () => {



  const [openModal, setOpenModal] = useState(false)


  const handleOpenModal = (): void => {
		setOpenModal(!openModal)
	}

  useEffect(()=> {
    setOpenModal(true)
  },[])

  return (
    <div className="home-page-city-unknown mt-8 sm:mt-0">
      <VStack spacing={12} align="stretch">
        {data.map((c, index) => (
          <div className="gorods-map" key={index}>
            <div className="name-city">
              <h3 className="text-[30px] text-[#3B4255] font-OpenSans font-semibold mb-8">
                {c.cityname}
              </h3>
            </div>
            <HStack className="!grid !gap-2 sm:!gap-5 lg:!gap-2 xl:!gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4" wrap="wrap" justifyContent='center'>
              {c.saunas.map((nm, ind) => (
                <CardUI accepted={true} nmd={ind} data={nm} key={ind} />
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
