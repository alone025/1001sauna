import React from 'react'
import { motion } from 'framer-motion'

interface mobileNavProps {
	closeNav: () => void
}

const MobNavbar: React.FC<mobileNavProps> = ({ closeNav }): JSX.Element => {
	return (
		<motion.div
			initial={{ x: '100%' }}
			animate={{ x: 0 }}
			exit={{ x: '100%' }}
			transition={{ type: 'spring', stiffness: 300, damping: 30 }}
		>
			<div className='flex items-end justify-end'>
				<img
					src='/assets/white_close.png'
					alt='close'
					onClick={closeNav}
					className='m-3 '
				/>
			</div>
			<div className='p-4 font-OpenSans '>
				<div
					className='border-t border-b p-3 mt-[24px]'
					style={{ borderColor: 'rgba(255, 255, 255, 0.30)' }}
				>
					<div className='flex justify-between items-center '>
						<div className='flex items-center gap-[12px] text-[white]'>
							<img src='/assets/map.png' alt='map' />
							<p>Набереженые Челны</p>
						</div>
						<div>
							<img src='/assets/chevron-right.png' alt='chevron-right' />
						</div>
					</div>
				</div>

				<div className='mt-[130px]'>
					<ul className='flex flex-col gap-[40px] text-[20px] text-[white]'>
						<li>
							<a href='#'>Главная</a>
						</li>
						<li>
							<a href='#'>Акции</a>
						</li>
						<li>
							<a href='#'>Одобрено пармастерами</a>
						</li>
						<li>
							<a href='#'>Заведения члены НБО</a>
						</li>
						<li>
							<a href='#'>Озбранное</a>
						</li>
					</ul>
				</div>
			</div>
		</motion.div>
	)
}

export default MobNavbar
