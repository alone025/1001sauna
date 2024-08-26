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
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      bg="transparent"
      style={{ boxShadow: "none" }}
    >
      <Image
        objectFit="cover"
        src="/swipperPictures/swiper1.png"
        alt="Caffe Latte"
        rounded="8"
        boxShadow="none"
      />

      <Stack gap={0}>
        <CardBody paddingY={0} pl={6} className="flex flex-col gap-4">
          <p className="text-white font-OpenSans font-semibold text-2xl">
            Воронцовские бани
          </p>

          <div className="likee flex flex-row justify-between">
            {" "}
            <Text className="text-white font-OpenSans font-normal text-base flex gap-3">
              Автор: Алексей М. <IconLike />{" "}
            </Text>
            <p className="text-white font-OpenSans font-normal text-base">
              13.03.2024
            </p>
          </div>

          <p className="text-white font-OpenSans font-normal text-base line-clamp-5 max-w-[366px]">
            Эстетическое воздействие иллюстрирует культурный абстракционизм.
            Наряду с нейтральной лексикой верлибр текстологически нивелирует
            культурный скрытый смысл. Действительно, стихотворение нивелирует
            подтекст. Действительно, обсценная идиома интегрирует мифологический
            замысел. Эпитет приводит конструктивный одиннадцатисложник.
          </p>
        </CardBody>

        <CardFooter py={0}>
          <Link
            to={"/#564654"}
            className="text-white font-OpenSans font-semibold text-xs pt-4"
          >
            Читать подробнее
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default SwipperCardBottom;
