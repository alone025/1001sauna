
import Wrapper from '../../layout/wrapper'

const Footer = (): JSX.Element => {
	return (
		<>
			<div className='bg-[#343434] w-full py-[48px] font-OpenSans mt-[50px]'>
				<Wrapper>
					<div className='flex flex-col md:flex-row justify-between items-start mx-4 sm:mx-[20px] 2xl:mx-0'>
						<div className='flex flex-col'>
							<img
								src='/assets/logo.png'
								alt='logo'
								className='block lg:hidden md:block w-[172px] cursor-pointer'
								onClick={()=> window.location.href = '/'}
							/>

							<div className='flex flex-col mt-[32px] md:flex-col-reverse lg:flex-row md:mt-[48px] lg:mt-0 lg:gap-[50px] xl:gap-[80px] md:gap-0'>
								<div className='hidden md:block'>
									<img
										src='/assets/logo.png'
										alt='logo'
										className='hidden lg:block cursor-pointer'
										onClick={()=> window.location.href = '/'}
									/>
									<h4 className='text-[14px] text-white pt-[28px]'>
										© 2019-2024 Все права защищены.
									</h4>
									<h4 className='text-[14px] text-white'>
										Политика конфиденциальности
									</h4>
								</div>
								<div className='flex flex-col'>
									<h3 className='text-white text-[16px] md:text-[21px] font-[600]'>
										Полезные ссылки
									</h3>
									<div className='flex flex-col md:flex-row items-start md:items-center gap-[24px] md:gap-[55px] pt-[24px]'>
										<div className='flex flex-col gap-[24px] md:gap-[20px] text-white'>
											<a href='/about'>О нас</a>
											<a href='/vacancies'>Вакансии</a>
										</div>
										<div className='flex flex-col gap-[24px] md:gap-[20px] text-white'>
											<a href='/advertising'>Реклама</a>
											<a href='#'>Карта сайта</a>
										</div>
										<div className='flex flex-col gap-[24px] md:gap-[20px] text-white'>
											<a href='#'>Оплата</a>
											<a href='/our-contacts'>Контакты</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col items-start lg:gap-[50px] xl:gap-[100px] md:flex-col-reverse lg:flex-row w-full md:w-auto'>
							<div className='mt-[32px] md:mt-[40px] lg:mt-0'>
								<h3 className='text-[16px] md:text-[21px] font-[600] font-OpenSans text-white'>
									Мы в соц сетях
								</h3>
								<div className='flex items-center gap-[12px] pt-[24px]'>
									<img
										src='/assets/w.png'
										alt='404'
										className='cursor-pointer'
									/>
									<img
										src='/assets/telegram.png'
										alt='404'
										className='cursor-pointer'
									/>
									<img
										src='/assets/twiter.png'
										alt='404'
										className='cursor-pointer'
									/>
								</div>
							</div>
							<button className='flex mt-[32px] w-full md:w-auto md:mt-0 justify-center items-center h-[48px] flex-shrink-0 px-[24px] py-[8px] rounded-[12px] bg-[#FF7A01] text-white text-[16px] font-[600]'>
								Добавить заведение
							</button>
						</div>
						<div className='flex flex-col gap-[24px] md:hidden'>
							<h4 className='text-[14px] text-white pt-[28px]'>
								© 2019-2024 Все права защищены.
							</h4>
							<h4 className='text-[14px] text-white'>
								Политика конфиденциальности
							</h4>
						</div>
					</div>
				</Wrapper>
			</div>
		</>
	)
}

export default Footer
