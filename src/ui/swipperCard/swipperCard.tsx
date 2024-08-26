import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function IconLike() {
  return <Image src="/assets/like-icon.svg" alt="like-icon" />;
}

const SwipperCardBottom = () => {
  return (
    <Card
      overflow="hidden"
      bg="transparent"
      style={{ boxShadow: "none" }}
      className="items-baseline sm:items-center gap-6 sm:gap-0 !flex-col sm:!flex-row"
    >
      <Image
        objectFit="cover"
        src="/swipperPictures/swiper1.png"
        alt="Caffe Latte"
        rounded="8"
        boxShadow="none"
        className="max-w-[343px] w-full min-h-[262px] sm:max-w-[233px] sm:min-h-[205px] md:max-w-[302px] md:min-h-[231px]"
      />

      <Stack gap={0}>
        <CardBody paddingY={0} className="flex !px-0 sm:!pl-6 flex-col gap-4 sm:gap-2 md:gap-3 lg:gap-4">
          <p className="text-white font-OpenSans font-semibold text-xl md:text-2xl">
            Воронцовские бани
          </p>

          <div className="likee flex flex-col sm:flex-row justify-between">
            {" "}
            <Text className="text-white font-OpenSans font-normal text-[14px] sm:text-base flex gap-3">
              Автор: Алексей М. <IconLike />{" "}
            </Text>
            <p className="text-white mt-4 sm:mt-0 flex flex-row font-OpenSans font-normal text-[14px] sm:text-base">
            <svg className="block sm:hidden mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.3334 1.66699V5.00033" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.66663 1.66699V5.00033" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.5 8.33301H17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>    13.03.2024
            </p>
          </div>

          <p className="text-white font-OpenSans font-normal text-[14px] sm:text-base line-clamp-5 sm:line-clamp-4 md:line-clamp-5 max-w-[366px]">
            Эстетическое воздействие иллюстрирует культурный абстракционизм.
            Наряду с нейтральной лексикой верлибр текстологически нивелирует
            культурный скрытый смысл. Действительно, стихотворение нивелирует
            подтекст. Действительно, обсценная идиома интегрирует мифологический
            замысел. Эпитет приводит конструктивный одиннадцатисложник.
          </p>
        </CardBody>

        <CardFooter py={0} className="pl-6 sm:pl-0 !px-0 sm:!px-5">
          <Link
            to={"/#564654"}
            className="text-white font-OpenSans font-semibold text-[14px] sm:text-base pt-4"
          >
            Читать подробнее
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default SwipperCardBottom;
