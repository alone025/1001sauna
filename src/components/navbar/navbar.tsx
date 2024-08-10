import Wrapper from '../../layout/wrapper'
import Banner from '../../ui/banner/banner'

function Navbar(): JSX.Element {
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

									<button className='bg-[#FF7A01] rounded-[12px] flex items-center justify-center text-[white] px-[56px] py-[8px] h-[48px]'>
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
							/>
							<img
								src='/assets/menu.png'
								alt='menu'
								className='md:hidden w-[25px]'
							/>
						</div>
					</div>
				</Wrapper>
			</div>
		</>
	)
}

export default Navbar
