import Wrapper from '../../layout/wrapper'
import Main_banner from '../../ui/banner/main_banner'

function Main(): JSX.Element{
	return (
		<>
			<Wrapper>
				<div className='md:mt-[32px] md:mx-[20px] xl:mx-0'>
					<Main_banner />
				</div>
				<div></div>
			</Wrapper>
		</>
	)
}

export default Main
