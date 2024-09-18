import React, { useState } from 'react'

interface LoginModalProps {
	closeModal: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }): JSX.Element => {

	const [typeModal, setTypeModal] = useState('sign')



	return (
		<div>

			{
				typeModal == "sign" ? (
					<div className='bg-white relative rounded-[24px] w-full sm:w-[468px] h-[408px] border font-OpenSans px-[32px]'>
					<div className='flex items-center justify-between py-[32px]'>
						<h2 className='text-[#3B4255] text-[20px] md:text-[24px] font-[600]'>
							Вход
						</h2>
						<img
							src='/assets/close.png'
							alt='close'
							className='cursor-pointer absolute top-3 right-3 md:top-[8%] md:right-[5%]'
							onClick={closeModal}
						/>
					</div>
					<div className='flex flex-col w-full gap-[20px]'>
						<input
							type='email'
							placeholder='Электронная почта или логин'
							className='w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]'
						/>
						<input
							type='password'
							placeholder='Пароль'
							className='w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]'
						/>
					</div>
					<div className='mt-[24px] gap-5 sm:gap-0 flex justify-between items-center'>
						<div className='flex items-center gap-2 sm:gap-[16px]'>
							<input type='checkbox' />
							<h4 className='text-[#3B4255] text-[14px] md:text-[16px]'>
								Запомнить меня
							</h4>
						</div>
						<a href='#' className='text-[#3B4255] text-[14px] md:text-[16px]' onClick={()=> setTypeModal("forget")}>
							Забыли пароль?
						</a>
					</div>
					<button className='bg-[#FF7A01] rounded-[12px] py-[8px] px-[64px] w-full text-white flex justify-center items-center mt-[24px] h-[48px]'>
						Войти
					</button>
					<div className='flex justify-center items-center mt-[24px] gap-1'>
						<p className='text-[#3B4255] text-[14px] md:text-[16px]'>
							Нет аккаунта?
						</p>
						<a href='#' className='text-[#FF7A01] text-[14px] md:text-[16px]' onClick={()=> setTypeModal("register")} >
							Зарегистрироваться
						</a>
					</div>
				</div>
				): typeModal == "register" ? (
					<div className='bg-white relative rounded-[24px] w-full sm:w-[468px] h-[544px] border font-OpenSans px-[32px]'>
					<div className='flex items-center justify-between py-[32px]'>
						<h2 className='text-[#3B4255] text-[20px] md:text-[24px] font-[600]'>
						 Регистрация
						</h2>
						<img
							src='/assets/close.png'
							alt='close'
							className='cursor-pointer absolute top-3 right-3 md:top-[8%] md:right-[5%]'
							onClick={closeModal}
						/>
					</div>
					<div className='flex flex-col w-full gap-[20px]'>
					<input
							type='text'
							placeholder='Имя пользователя'
							className='w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]'
						/>
						<input
							type='email'
							placeholder='Электронная почта или логин'
							className='w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]'
						/>
						<input
							type='password'
							placeholder='Пароль'
							className='w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]'
						/>
						<input
							type='password'
							placeholder='Подтверждение пароля'
							className='w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]'
						/>
					</div>
					<div className='mt-[24px] flex justify-between items-center'>
						<div className='flex items-center gap-[16px]'>
							<input type='checkbox' />
							<h4 className='text-[#3B4255] text-[14px] md:text-[16px]'>
								Запомнить меня
							</h4>
						</div>
				
					</div>
					<button className='bg-[#FF7A01] rounded-[12px] py-[8px] px-[64px] w-full text-white flex justify-center items-center mt-[24px] h-[48px]'>
					Зарегистрироваться
					</button>
					<div className='flex justify-center items-center mt-[24px] gap-1'>
						<p className='text-[#3B4255] text-[14px] md:text-[16px]'>
						Уже зарегистрированы?
						</p>
						<a href='#' className='text-[#FF7A01] text-[14px] md:text-[16px]' onClick={()=> setTypeModal("sign")}>
						Войти
						</a>
					</div>
				</div>
				) : (
					<div className='bg-white relative rounded-[24px] w-full sm:w-[468px] h-[294px] border font-OpenSans px-[32px]'>
					<div className='flex items-center justify-between py-[32px]'>
						<h2 className='text-[#3B4255] text-[20px] md:text-[24px] font-[600]'>
						Восстановление пароля
						</h2>
						<img
							src='/assets/close.png'
							alt='close'
							className='cursor-pointer absolute top-3 right-3 md:top-[8%] md:right-[5%]'
							onClick={closeModal}
						/>
					</div>
					<div className='flex flex-col w-full'>
					
						<input
							type='email'
							placeholder='Электронная почта или логин'
							className='w-full border outline-none border-[#CCCCCC] py-[9px] px-[12px] rounded-[4px] text-[14px] md:text-[16px]'
						/>
					
					</div>
					
					<button className='bg-[#FF7A01] rounded-[12px] py-[8px] px-[64px] w-full text-white flex justify-center items-center mt-[24px] h-[48px]'>
					Сбросить пароль
					</button>
					<div className='flex justify-center items-center mt-[24px] gap-1'>
						<p className='text-[#3B4255] text-[14px] md:text-[16px]'>
						Нет аккаунта? 						
						</p>
						<a href='#' className='text-[#FF7A01] text-[14px] md:text-[16px]' onClick={()=> setTypeModal("register")}>
						Зарегистрироваться
						</a>
					</div>
				</div>
				)
			}
		</div>
	)
}

export default LoginModal
