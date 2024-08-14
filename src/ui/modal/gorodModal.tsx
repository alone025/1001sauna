import React from 'react'

type Props = {
    closeModal : ()=> void
}

const GorodModal = ({closeModal}: Props) => {
  return (
    <div>
        <div className='bg-white relative rounded-[24px] w-full sm:w-[468px] h-[310px] sm:h-[275px] border font-OpenSans px-[32px]'>
					<div className='flex items-center justify-between py-[32px]'>
						<h2 className='text-[#3B4255] text-[20px] md:text-[24px] font-[600]'>
						Выберите город
						</h2>
						<img
							src='/assets/close.png'
							alt='close'
							className='cursor-pointer absolute top-3 right-3 md:top-[8%] md:right-[5%]'
							onClick={closeModal}
						/>
					</div>
					<div className='flex flex-col w-full gap-[20px]'>
					
						<p className='text-[#3B4255] text-[14px] sm:text-[15px] md:text-base font-OpenSans font-normal leading-[140%]' >Мы определили Ваш регион как <span className='text-[#FF7A01]' >Москва</span>.</p>
					</div>
					<div className='mt-[24px] flex justify-between items-center'>
                        <p className='text-[#3B4255] text-[20px] sm:text-[22px] md:text-[24px] font-OpenSans font-semibold leading-[120%]' >Всё верно?</p>
					</div>
				<div className="btns flex justify-between gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
                <button className='bg-[#FF7A01] transition-transform rounded-[12px] py-[8px] px-[64px] text-[14px] sm:text-[15px] md:text-[16px] hover:scale-[1.03] sm:max-w-[196px] w-full text-white flex justify-center items-center mt-[24px] h-[48px]'>
                Да
					</button>
                    <button className='border-[#FF7A01] border transition-colors hover:bg-[#fde6c58a] text-[14px] sm:text-[15px] md:text-[16px] text-[#FF7A01] rounded-[12px] py-[8px] px-[24px] w-full sm:max-w-[196px] flex justify-center items-center sm:mt-[24px] h-[48px]'>
					Выбрать регион
					</button>
                </div>
				</div>
    </div>
  )
}

export default GorodModal