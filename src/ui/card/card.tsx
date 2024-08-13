import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Sauna } from '../../types/cardType'
import { PhoneIcon } from '@chakra-ui/icons'

type Props = {
    data: Sauna
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
export default function CardUI({data}: Props) {


  const [opnL, setOpnL] = useState<boolean>(false)




  return (
    <Card maxW='270' borderRadius='16'>
    <CardBody padding={0} >
      <div className="img relative">
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='16'
        borderBottomRadius={0}
      />
        <div className="absolute left-4 top-4 flex flex-col gap-2">
        <p className='bg-[#00000080] text-center rounded-2xl font-OpenSans font-semibold text-xs text-white px-[5px] py-1' >01</p>
        <p className='bg-[#F44747] rounded-2xl font-OpenSans font-semibold text-xs text-white px-[5px] py-1' >25-%</p>
        </div>
      </div>
      <Stack mt='29' spacing='2' paddingX={4} >
        <Heading size='md' className='mb-4 text-[#3B4255] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-OpenSans font-semibold leading-[120%] ' >{data.name}</Heading>
        <div className="liked-icons flex flex-row flex-wrap justify-between gap-2 items-center">
            <div className="like-dislike flex flex-wrap flex-row gap-3">
                <label htmlFor="icon-like" className='flex flex-row items-center relative -left-[7px]' >
                <IconButton aria-label='Search database' size="sm" icon={<IconLike/>}  variant='outline' style={{border: "none"}} />
                <p className="m-0 text-[#00D33B] text-base font-semibold font-OpenSans">115</p>
                </label>
                <label htmlFor="icon-like" className='flex flex-row items-center' >
                <IconButton aria-label='Search database' size="sm" icon={<DisLike/>}  variant='outline' style={{border: "none"}} />
                <p className="m-0 text-[#F44747] text-base font-semibold font-OpenSans">115</p>
                </label>
            </div>
            <div className="like-unlike">
            <IconButton aria-label='Search database' size="sm" onClick={()=>setOpnL(!opnL)} icon={<UnLiked opn={opnL}/>}  variant='outline' style={{border: "none"}} />
            </div>
        </div>
        <Text className='line-clamp-2 text-base font-OpenSans font-semibold text-[#3B4255]' >
        <span className='font-normal text-[#4C4C4C]' >Парная:</span> {data.parnaya}
        </Text>
        <Text className='line-clamp-2 text-base font-OpenSans font-semibold text-[#3B4255]' >
        <span className='font-normal text-[#4C4C4C]' >Адрес:</span> <span className='hover:underline hover:cursor-pointer' >{data.address}</span>
        </Text>
        <Text className='line-clamp-2 text-base font-OpenSans font-semibold text-[#3B4255]' >
        <span className='font-normal text-[#4C4C4C]' >Залов/номеров:</span> {data.hajm}
        </Text>
        <Text className='line-clamp-3 text-base font-OpenSans font-semibold text-[#3B4255]' >
        <span className='font-normal text-[#4C4C4C]' >Услуги:</span> {data.opportunity}
        </Text>

        <Text className='line-clamp-1 text-xl font-OpenSans font-semibold mt-1 text-[#3B4255]' >
       {data.price}
        </Text>
      </Stack>
    </CardBody>
    <CardFooter>
      <ButtonGroup spacing='2' width='100%' >
        <Button variant='outline' width='100%' borderColor='#FF7A01' textColor='#FF7A01' className='hover:!bg-[#f7f3ed]' >
        Подробнее
        </Button>
        <IconButton
   variant='outline'
  colorScheme='teal'
  aria-label='Call Segun'
  size='md'
  borderColor='#FF7A01'
  className='hover:!bg-[#f7f3ed]'
  icon={<PhoneIcon color='#FF7A01' />}
/>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}