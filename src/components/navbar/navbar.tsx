import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Wrapper from '../../layout/wrapper'
import Banner from '../../ui/banner/banner'
import LoginModal from '../../ui/modal/loginModal'
import MobNavbar from './mobNavbar'

const Navbar: React.FC = (): JSX.Element => {
	const [openModal, setOpenModal] = useState<boolean>(false)
	const [openNav, setOpenNav] = useState<boolean>(false)

	const handleOpenModal = (): void => {
		setOpenModal(!openModal)
	}

	const handleOpenNav = (): void => {
		setOpenNav(!openNav)
	}

	return (
		<>
			<Banner />
			<div className='nav'>
				<Wrapper>
					<div className='font-OpenSans flex items-center gap-[20px] justify-between py-[15px] mx-[20px] xl:mx-0'>
						<div className='flex justify-between md:w-full items-center gap-[20px]'>
							<div className='flex items-center gap-[40px]'>
								<img
									src='/assets/logo.png'
									alt=''
									className='cursor-pointer w-[105px] md:w-[172px]'
								/>
								<div className='md:flex items-center gap-2 cursor-pointer lg:w-[350px] hidden'>
									<img src='/assets/map.png' alt='' />
									<h4 className='text-[#3B4255] lg:w-full'>Выбрать город</h4>
								</div>
							</div>
							<div className='relative w-full hidden lg:block'>
								<input
									type='text'
									placeholder='Поиск по названию'
									className='border border-[#CCC] px-[9px] py-[12px]  rounded-[4px] relative w-full pr-[50px]'
								/>
								<img
									src='/assets/search.png'
									alt='search icon'
									className='absolute top-3 right-3 cursor-pointer'
								/>
							</div>
							<div className='md:flex items-center lg:gap-[50px] hidden'>
								<div className='lg:flex items-center gap-2 cursor-pointer hidden'>
									<img src='/assets/like.png' alt='like icon' />
									<h4>Избранное</h4>
								</div>
								<div className='flex items-center gap-[20px]'>
									<img
										src='/assets/search.png'
										alt='404'
										className='lg:hidden'
									/>
									<img src='/assets/like.png' alt='404' className='lg:hidden' />

									<button
										className='bg-[#FF7A01] rounded-[12px] flex items-center justify-center text-[white] px-[56px] py-[8px] h-[48px]'
										onClick={handleOpenModal}
									>
										Войти
									</button>
								</div>
							</div>
						</div>
						<div className='flex items-center gap-[15px]'>
							<img
								src='/assets/search.png'
								alt='search'
								className='w-[25px] md:hidden'
							/>
							<img
								src='/assets/user.png'
								alt='user'
								className='w-[25px] md:hidden'
								onClick={handleOpenModal}
							/>
							<img
								src='/assets/menu.png'
								alt='menu'
								className='md:hidden w-[25px]'
								onClick={handleOpenNav}
							/>
						</div>
					</div>
				</Wrapper>
			</div>

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
							<LoginModal closeModal={handleOpenModal} />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{openNav && (
					<motion.div
						className='fixed inset-0 w-screen h-screen bg-[#00000093] z-[998]'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={handleOpenNav}
					>
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', stiffness: 300, damping: 30 }}
							className='fixed inset-y-0 right-0 w-[100%] bg-[#343434] shadow-lg z-[1000]'
							onClick={e => e.stopPropagation()}
						>
							<MobNavbar closeNav={handleOpenNav} />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default Navbar
