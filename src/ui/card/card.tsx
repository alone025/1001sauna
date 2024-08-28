import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import  { useState } from 'react'
import { Sauna } from '../../types/cardType'
import { PhoneIcon } from '@chakra-ui/icons'

type Props = {
    data: Sauna
    nmd: number
    accepted: boolean
}

function IconLike (){
    return(
        <Image src='/assets/like-icon.svg' alt='like-icon' />
    )
}

function DisLike (){
    return(
        <Image src='/assets/dislike-icon.svg' alt='like-icon' />
    )
}

function UnLiked ({opn}: {opn: boolean}){
    return(
       <>
       {opn ? ( <Image src='/assets/liked.svg' alt='like-icon' className='w-6 h-6 text-[#CCCCCC]' />)
       :
       ( <Image src='/assets/unliked.svg' alt='like-icon' className='w-6 h-6 text-[#CCCCCC]' />)}

       </>
    )
}
export default function CardUI({data, nmd, accepted}: Props) {


  const [opnL, setOpnL] = useState<boolean>(false)




  return (
    <Card maxW='270' className='!max-w-[167px] sm:!max-w-[200px] md:!max-w-[241px] xl:!max-w-[270px]' borderRadius='16'>
    <CardBody padding={0} >
      <div className="img relative">
      <Image
        src={data.img[0].img}
        alt='Green double couch with wooden legs'
      borderRadius='16'
        borderBottomRadius={0}
      />
        <div className="absolute left-3 md:left-4 top-3 md:top-4 flex flex-col gap-2">
        {
          accepted && (<p className='bg-[#00000080] text-center rounded-2xl font-OpenSans font-semibold text-[10px] sm:text-[11px] md:text-xs text-white px-[5px] py-1' >{nmd+1 > 9 ? nmd+1 : `0${nmd+1}`}</p>)
        }
        <p className='bg-[#F44747] rounded-2xl font-OpenSans font-semibold text-[10px] sm:text-[11px] md:text-xs text-white px-[5px] py-1' >25-%</p>
        </div>
        <div className="likeee absolute right-3 top-3 block md:hidden">
        <IconButton aria-label='Search database' size="sm"  onClick={()=>setOpnL(!opnL)} icon={<UnLiked opn={opnL}/>}  variant='outline' style={{border: "none"}} />
        </div>
      </div>
      <Stack mt='29' spacing='2' paddingX={4} className='!px-3 sm:!px-[14px] md:!px-4' >
        <Heading size='md' className='mb-2 sm:mb-3 md:mb-4 text-[#3B4255] !text-[14px] sm:!text-[16px] md:!text-[18px] xl:!text-[20px] !font-OpenSans !font-semibold !leading-[120%] ' >{data.name}</Heading>
        <div className="liked-icons flex flex-row flex-wrap justify-between gap-2 items-center">
            <div className="like-dislike flex flex-wrap flex-row gap-3">
                <label htmlFor="icon-like" className='flex flex-row items-center gap-1 sm:gap-[6px] md:gap-0 relative left-[1px] md:-left-[7px]' >
                <IconButton aria-label='Search database' size="sm" className='!w-[16px] !h-[16px] sm:!w-[17px] sm:!h-[17px] md:w-auto md:h-auto !min-w-max md:!min-w-[32px]' icon={<IconLike/>}  variant='outline' style={{border: "none"}} />
                <p className="m-0 text-[#00D33B] text-[10px] sm:text-sm md:text-base font-semibold font-OpenSans">115</p>
                </label>
                <label htmlFor="icon-like" className='flex flex-row gap-1 sm:gap-[6px] md:gap-0 items-center' >
                <IconButton aria-label='Search database' size="sm" icon={<DisLike/>}  className='!w-[16px] !h-[16px] sm:!w-[17px] sm:!h-[17px] md:w-auto md:h-auto !min-w-max md:!min-w-[32px]' variant='outline' style={{border: "none"}} />
                <p className="m-0 text-[#F44747] text-[10px] sm:text-sm md:text-base font-semibold font-OpenSans">115</p>
                </label>
            </div>
            <div className="like-unlike hidden md:block ">
            <IconButton aria-label='Search database' size="sm" onClick={()=>setOpnL(!opnL)} icon={<UnLiked opn={opnL}/>}  variant='outline' style={{border: "none"}} />
            </div>
        </div>
        <Text className='line-clamp-2 text-[10px] sm:text-[14px] md:text-base font-OpenSans font-semibold text-[#3B4255]' >
        <span className='font-normal text-[#4C4C4C]' >Парная:</span> {data.parnaya}
        </Text>
        <Text className='line-clamp-2 text-[10px] sm:text-[14px] md:text-base font-OpenSans font-semibold text-[#3B4255]' >
        <span className='font-normal text-[#4C4C4C]' >Адрес:</span> <span className='hover:underline hover:cursor-pointer' >{data.address}</span>
        </Text>
        <Text className='line-clamp-2 text-[10px] sm:text-[14px] md:text-base font-OpenSans font-semibold text-[#3B4255]' >
        <span className='font-normal text-[#4C4C4C]' >Залов/номеров:</span> {data.hajm}
        </Text>
        <Text className='line-clamp-3 text-[10px] sm:text-[14px] md:text-base font-OpenSans font-semibold text-[#3B4255]' >
        <span className='font-normal text-[#4C4C4C]' >Услуги:</span> {data.opportunity}
        </Text>

        <Text className='line-clamp-1 text-[14px] sm:text-[17px] md:text-xl font-OpenSans font-semibold mt-1 text-[#3B4255]' >
       {data.price}
        </Text>
      </Stack>
    </CardBody>
    <CardFooter className='!px-3 sm:!px-[16px] md:!px-5' >
      <ButtonGroup spacing='2' width='100%' >
        <Button variant='outline' width='100%' borderColor='#FF7A01' textColor='#FF7A01' className='hover:!bg-[#f7f3ed] hover:!text-[#FF7A01] !h-8 sm:!h-9 md:!h-12 bg-[#FF7A01] !rounded-xl sm:!rounded-[10px] md:!rounded-[6px] sm:bg-transparent !text-white sm:!text-[#FF7A01] !text-[14px] sm:!text-[15px] md:!text-[16px]' >
        Подробнее
        </Button>
        <IconButton
        variant='outline'
        colorScheme='teal'
        aria-label='Call Segun'
        size='md'
        borderColor='#FF7A01'
        className='hover:!bg-[#f7f3ed] !rounded-xl md:!rounded-[6px] !w-8 !h-8 sm:!w-9 sm:!h-9 md:!w-12 md:!h-12 !min-w-[32px] md:!min-w-[40px]'
        icon={<PhoneIcon color='#FF7A01' />}
/>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}
