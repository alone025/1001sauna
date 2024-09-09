import { Sauna } from "../../types/cardType";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  accepted: boolean;
  nmd: number;
  data: Sauna;
};

function IconLike() {
  return <Image src="/assets/like-icon.svg" alt="like-icon" />;
}

function DisLike() {
  return <Image src="/assets/dislike-icon.svg" alt="like-icon" />;
}

function UnLiked({ opn }: { opn: boolean }) {
  return (
    <>
      {!opn ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M21.3401 4.61012C20.8294 4.09912 20.2229 3.69376 19.5555 3.4172C18.888 3.14064 18.1726 2.99829 17.4501 2.99829C16.7276 2.99829 16.0122 3.14064 15.3448 3.4172C14.6773 3.69376 14.0709 4.09912 13.5601 4.61012L12.5001 5.67012L11.4401 4.61012C10.4084 3.57842 9.00915 2.99883 7.55012 2.99883C6.09109 2.99883 4.69181 3.57842 3.66012 4.61012C2.62843 5.64181 2.04883 7.04108 2.04883 8.50012C2.04883 9.95915 2.62843 11.3584 3.66012 12.3901L4.72012 13.4501L12.5001 21.2301L20.2801 13.4501L21.3401 12.3901C21.8511 11.8794 22.2565 11.2729 22.533 10.6055C22.8096 9.93801 22.9519 9.2226 22.9519 8.50012C22.9519 7.77763 22.8096 7.06222 22.533 6.39476C22.2565 5.7273 21.8511 5.12087 21.3401 4.61012Z"
            fill="#CCCCCC"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20.84 4.61012C20.3292 4.09912 19.7228 3.69376 19.0554 3.4172C18.3879 3.14064 17.6725 2.99829 16.95 2.99829C16.2275 2.99829 15.5121 3.14064 14.8446 3.4172C14.1772 3.69376 13.5708 4.09912 13.06 4.61012L12 5.67012L10.94 4.61012C9.90831 3.57842 8.50903 2.99883 7.05 2.99883C5.59096 2.99883 4.19169 3.57842 3.16 4.61012C2.1283 5.64181 1.54871 7.04108 1.54871 8.50012C1.54871 9.95915 2.1283 11.3584 3.16 12.3901L4.22 13.4501L12 21.2301L19.78 13.4501L20.84 12.3901C21.351 11.8794 21.7564 11.2729 22.0329 10.6055C22.3095 9.93801 22.4518 9.2226 22.4518 8.50012C22.4518 7.77763 22.3095 7.06222 22.0329 6.39476C21.7564 5.7273 21.351 5.12087 20.84 4.61012Z"
            fill="#F44747"
            stroke="#F44747"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
}

function HorizontalCard({ accepted, nmd, data }: Props) {
  const [opnL, setOpnL] = useState(false);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      rounded={16}
      gap={5}
      w="100%"
      className="justify-between !flex-col sm:!flex-row gap-3 sm:!gap-5"
    >
      <div className="img relative w-full sm:w-auto sm:py-5 sm:pl-5">
        <Image
          maxW={{  base:"100%", sm:'180px', lg: "260px" }}
          w='100%'
          objectFit="cover"
          src={data.img[0].img}
          alt="Green double couch with wooden legs"
          className="!max-w-full sm:!max-w-[180px] lg:!max-w-[260px] sm:rounded-xl"
        />
        <div className="absolute left-4 sm:left-8 top-4 sm:top-8 flex flex-col gap-2">
          {accepted && (
            <p className="bg-[#00000080] text-center rounded-2xl font-OpenSans font-semibold text-[10px] sm:text-[11px] md:text-xs text-white px-[5px] py-1">
              {nmd + 1 > 9 ? nmd + 1 : `0${nmd + 1}`}
            </p>
          )}
          <p className="bg-[#F44747] rounded-2xl font-OpenSans font-semibold text-[10px] sm:text-[11px] md:text-xs text-white px-[5px] py-1">
            {data.chegirma}-%
          </p>
        </div>
      </div>

      <CardBody px={0} className="!py-0 sm:!py-5 !px-4 sm:px-0 !mt-1 sm:!mt-0" maxW={490}>
        <h3 className="text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold">
          {data.name}
        </h3>
        <div className="like-dislike flex flex-wrap flex-row gap-3 my-3">
          <label
            htmlFor="icon-like"
            className="flex flex-row items-center gap-1 sm:gap-[6px] md:gap-0 relative left-[1px] md:-left-[7px]"
          >
            <IconButton
              aria-label="Search database"
              size="sm"
              className="!w-[16px] !h-[16px] sm:!w-[17px] sm:!h-[17px] md:w-auto md:h-auto !min-w-max md:!min-w-[32px]"
              icon={<IconLike />}
              variant="outline"
              style={{ border: "none" }}
            />
            <p className="m-0 text-[#00D33B] text-sm sm:text-base font-semibold font-OpenSans">
              115
            </p>
          </label>
          <label
            htmlFor="icon-like"
            className="flex flex-row gap-1 sm:gap-[6px] md:gap-0 items-center"
          >
            <IconButton
              aria-label="Search database"
              size="sm"
              icon={<DisLike />}
              className="!w-[16px] !h-[16px] sm:!w-[17px] sm:!h-[17px] md:w-auto md:h-auto !min-w-max md:!min-w-[32px]"
              variant="outline"
              style={{ border: "none" }}
            />
            <p className="m-0 text-[#F44747] text-sm sm:text-base font-semibold font-OpenSans">
              115
            </p>
          </label>
        </div>
        <p className="text-[14px] sm:text-base text-[#4C4C4C] font-OpenSans font-normal">
          Парная:{" "}
          <span className="font-semibold  text-[#3B4255]">{data.parnaya}</span>
        </p>
        <p className="text-[14px] sm:text-base my-2 text-[#4C4C4C] font-OpenSans font-normal">
          Адрес:{" "}
          <span className="font-semibold  text-[#3B4255] hover:underline cursor-pointer ">
            {data.address}
          </span>
        </p>
        <p className="text-[14px] sm:text-base mb-2 text-[#4C4C4C] font-OpenSans font-normal lg:line-clamp-1">
          Залов/номеров:{" "}
          <span className="font-semibold  text-[#3B4255]">{data.hajm}</span>
        </p>
        <p className="text-[14px] sm:text-base text-[#4C4C4C] font-OpenSans font-normal line-clamp-2">
          Услуги:{" "}
          <span className="font-semibold  text-[#3B4255]">
            {data.opportunity}
          </span>
        </p>
      </CardBody>

      <CardFooter pl={0} pr={5} className="flex flex-col gap-4 !pt-0 sm:!pt-5 !px-4 sm:!pr-5 sm:!pl-0">
        <h3 className="text-xl lg:text-2xl text-[#3B4255] font-OpenSans font-semibold text-start sm:text-right line-clamp-1 sm:line-clamp-2">
          {data.price}
        </h3>
        <ButtonGroup spacing={0} width="100%" className="flex flex-row sm:flex-col items-center gap-2">
          <Button
            variant="outline"
            width="100%"
            borderColor="#FF7A01"
            textColor="#FF7A01"
            _hover="none"
            className="!h-12 bg-[#FF7A01] active:!text-[#FF7A01] active:!bg-transparent !rounded-xl sm:!rounded-[10px] md:!rounded-[6px] !text-white !text-[14px] sm:!text-[15px] md:!text-[16px]"
          >
            Подробнее
          </Button>
          <Button
            variant="outline"
            width="100%"
            borderColor="#FF7A01"
            textColor="#FF7A01"
            className="hover:!bg-[#f7f3ed] hover:!text-[#FF7A01] !h-12 !rounded-xl sm:!rounded-[10px] md:!rounded-[6px] bg-transparent !text-[#FF7A01] !text-[14px] sm:!text-[15px] md:!text-[16px]"
          >
            Позвонить
          </Button>

          <IconButton
            aria-label="Search database"
            size="sm"
            onClick={() => setOpnL(!opnL)}
            icon={<UnLiked opn={opnL} />}
            variant="outline"
            className="!flex sm:!hidden"
            style={{ border: "none", backgroundColor: "#F8F8F8", height: "48px", width:"170px" }}
          />
        </ButtonGroup>
        <div className="like-unlike hidden sm:flex flex-row items-center justify-center gap-4">
          <IconButton
            aria-label="Search database"
            size="sm"
            onClick={() => setOpnL(!opnL)}
            icon={<UnLiked opn={opnL} />}
            variant="outline"
            style={{ border: "none" }}
          />
          <p
            onClick={() => setOpnL(!opnL)}
            className="text-base cursor-pointer text-[#3B4255] font-OpenSans font-semibold leading-[140%]"
          >
            {opnL ? "В избранном" : "В избранное"}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default HorizontalCard;
