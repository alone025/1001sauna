import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "../../layout/wrapper";
import Banner from "../../ui/banner/banner";
import LoginModal from "../../ui/modal/loginModal";
import { CloseButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import MobNavbar from "./mobNavbar";
import City_regionsModal from "../../ui/modal/city_regionsModal";
import { useModalContextNew } from "../../context/modalContext";
import { Link } from "react-router-dom";

const Navbar: React.FC = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [searchBar, setSearchBar] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [city, setCity] = useState<string>('')
  // const [cityModal , setCityModal] = useState<boolean>(false)

  const { isNavbarModalOpen, closeNavbarModal, openNavbarModal } = useModalContextNew();


  const handleOpenModal = (): void => {
    setOpenModal(!openModal);
  };

  const saveDataToLocalStorage = (value: string) => {
    localStorage.setItem('cityGorod', value);
    setCity(value);
    window.location.reload()
  
  };



  const handleSetSearchBar = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const em = e.target.value;
    if (em.length > 0) {
      setSearchBar(true);
    } else if (em.length == 0) {
      setSearchBar(false);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem('cityGorod');
    if (storedData) {
      setCity(storedData);
    }
  }, []);


  const handleOpenNav = (): void => {
    setOpenNav(!openNav);
  };




  return (
    <>
      <Banner />
      <div className="nav bg-[#fff]">
        <Wrapper>
          <div className="font-OpenSans flex items-center gap-[20px] justify-between py-[15px] mx-[20px] 2xl:mx-0">
            <div className="flex justify-between md:w-full items-center gap-[20px]">
              <div className="flex items-center gap-[40px]">
                <img
                  src="/assets/logo.png"
                  alt=""
                  className="cursor-pointer w-[105px] md:w-[172px]"
                  onClick={()=> window.location.href = '/'}
                />
                <div className="md:flex items-center gap-2 cursor-pointer lg:w-[350px] hidden" onClick={()=>openNavbarModal()}>
                  <img src="/assets/map.png" alt="" />
                 
                  {
                    city ? ( <h4 className="text-[#3B4255] lg:w-full">{city}</h4>):( <h4 className="text-[#3B4255] lg:w-full">Выбрать город</h4>)
                  }
                </div>
              </div>
              <div className="relative w-full hidden lg:block">
                <input
                  type="text"
                  onChange={(e) => handleSetSearchBar(e)}
                  placeholder="Поиск по названию"
                  className="border outline-none border-[#CCC] px-[9px] py-[12px]  rounded-[4px] relative w-full pr-[50px]"
                />
                <img
                  src="/assets/search.png"
                  alt="search icon"
                  className="absolute top-3 right-3 cursor-pointer"
                />
                {searchBar && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bottom-searchBar max-h-[250px] w-full shadow-md bg-white absolute top-[60px] overflow-y-auto overscroll-contain"
                    >
                      <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                        <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                          100 градусов позитива, Сауна, банька
                        </p>
                      </div>
                      <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                        <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                          Escalada SPA, Баня
                        </p>
                      </div>
                      <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                        <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                          Labrehab, Банный дом
                        </p>
                      </div>
                      <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                        <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                          SIBERIA, банный комплекс
                        </p>
                      </div>
                      <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                        <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                          Silverpool, Баня с зоной отдыха
                        </p>
                      </div>
                      <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                        <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                          The Banya, банный комплекс
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
              <div className="md:flex items-center lg:gap-[50px] hidden">
                <Link to='/liked-card' className="lg:flex items-center gap-2 cursor-pointer hidden">
                  <img src="/assets/like.png" alt="like icon" />
                  <h4>Избранное</h4>
                </Link>
                <div className="flex items-center gap-[20px]">
                  <img
                    src="/assets/search.png"
                    alt="404"
                    className="lg:hidden"
                    onClick={() => setSearchOpen(!searchOpen)}
                  />
                <Link to='/liked-card'>
                <img src="/assets/like.png" alt="404" className="lg:hidden" /></Link>

                  <button
                    className="bg-[#FF7A01] rounded-[12px] flex items-center justify-center text-[white] px-[56px] py-[8px] h-[48px]"
                    onClick={handleOpenModal}
                  >
                    Войти
                  </button>
                </div>

                {searchOpen && (
                  <div className="fixed left-0 top-0 w-full h-screen bg-white z-30 block lg:hidden p-[30px]">
                    <div className="top-content mb-9 flex justify-between gap-2 items-center">
                      <h3 className="text-[20px] text-[#3B4255] font-OpenSans font-semibold">
                        Поиск бани/сауны
                      </h3>
                      <CloseButton
                        size="lg"
                        onClick={() => setSearchOpen(false)}
                      />
                    </div>
                    <input
                      type="text"
                      onChange={(e) => handleSetSearchBar(e)}
                      placeholder="Поиск по названию"
                      className="border outline-none border-[#CCC] px-[9px] py-[12px]  rounded-[4px] relative w-full pr-[50px]"
                    />
                    <img
                      src="/assets/search.png"
                      alt="search icon"
                      className="absolute top-[118px] right-11 cursor-pointer"
                    />
                    {searchBar && (
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, y: 3 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="bottom-searchBar max-h-[250px] w-full shadow-md bg-white mt-2 overflow-y-auto overscroll-contain"
                        >
                          <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                            <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                              100 градусов позитива, Сауна, банька
                            </p>
                          </div>
                          <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                            <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                              Escalada SPA, Баня
                            </p>
                          </div>
                          <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                            <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                              Labrehab, Банный дом
                            </p>
                          </div>
                          <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                            <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                              SIBERIA, банный комплекс
                            </p>
                          </div>
                          <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                            <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                              Silverpool, Баня с зоной отдыха
                            </p>
                          </div>
                          <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                            <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                              The Banya, банный комплекс
                            </p>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-[15px]">
              {/* <img
                src="/assets/search.png"
                alt="search"
				onClick={()=> setSearchOpen(true)} 
                className="w-[25px] md:hidden"
              /> */}
              <SearchIcon
                fontSize={20}
                onClick={() => setSearchOpen(true)}
                className="w-[25px] md:!hidden"
              />
              <img
                src="/assets/user.png"
                alt="user"
                className="w-[25px] md:hidden"
                onClick={handleOpenModal}
              />
              <img
                src="/assets/menu.png"
                alt="menu"
                onClick={() => setOpenNav(true)}
                className="md:hidden w-[25px]"
              />

              {searchOpen && (
                <div className="fixed left-0 top-0 w-full h-screen bg-white z-30 block md:hidden px-4 py-7">
                  <div className="top-content mb-7 flex justify-between gap-2 items-center">
                    <h3 className="text-[20px] text-[#3B4255] font-OpenSans font-semibold">
                      Поиск
                    </h3>
                    <CloseButton
                      size="lg"
                      onClick={() => setSearchOpen(false)}
                    />
                  </div>
                  <input
                    type="text"
                    onChange={(e) => handleSetSearchBar(e)}
                    placeholder="Поиск по названию"
                    className="border outline-none border-[#CCC] px-[9px] py-[12px]  rounded-[4px] relative w-full pr-[50px]"
                  />
                  <img
                    src="/assets/search.png"
                    alt="search icon"
                    className="absolute top-[108px] right-9 cursor-pointer"
                  />
                  {searchBar && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bottom-searchBar max-h-[250px] w-full bg-white mt-2 overflow-y-auto overscroll-contain"
                      >
                        <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                          <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                            100 градусов позитива, Сауна, банька
                          </p>
                        </div>
                        <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                          <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                            Escalada SPA, Баня
                          </p>
                        </div>
                        <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                          <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                            Labrehab, Банный дом
                          </p>
                        </div>
                        <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                          <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                            SIBERIA, банный комплекс
                          </p>
                        </div>
                        <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                          <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                            Silverpool, Баня с зоной отдыха
                          </p>
                        </div>
                        <div className="card hover:bg-[#F8F8F8] px-3 py-[9px] cursor-pointer ">
                          <p className="text-[14px] text-[#3B4255] font-Inter font-normal line-clamp-1 text-ellipsis">
                            The Banya, банный комплекс
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              )}
            </div>
          </div>
        </Wrapper>
      </div>
      <AnimatePresence>
        {openNav && (
          <motion.div
            className="fixed inset-0 w-screen h-screen bg-[#00000093] z-[998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleOpenNav}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-[100%] bg-[#343434] shadow-lg z-[1000]"
              onClick={(e) => e.stopPropagation()}
            >
              <MobNavbar closeNav={handleOpenNav} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 w-screen h-screen bg-[#00000093] z-[999] flex justify-center items-center"
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
              <LoginModal closeModal={handleOpenModal} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {isNavbarModalOpen && (
          <motion.div
            className="fixed inset-0 w-screen h-screen bg-[#00000093] z-[998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleOpenNav}
          >
            <motion.div
              initial={{ y: "0%" }}
              animate={{ y: 0 }}
              exit={{ y: "0%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-[100%] bg-[#343434] shadow-lg z-[1000]"
              onClick={(e) => e.stopPropagation()}
            >
            <City_regionsModal setCity={(e)=> saveDataToLocalStorage(e)} setModal={()=> closeNavbarModal()} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
