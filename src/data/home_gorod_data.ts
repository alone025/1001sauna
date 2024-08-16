import City from "../types/cityType";

// Consolidate all cities into a single object
const cityData: { [key: string]: City } = {
  Moskva: {
    cityname: "Сауны Москвы",
    saunas: [
      {
        img: [{ img: "" }],
        name: "Сауна Глубина",
        liked: 51,
        unLiked: 25,
        parnaya: "Сауна, хамам, финская, русская",
        address: "Мира, 112, корпус 1",
        hajm: "6, до 30 чел.",
        opportunity: "бассейн 4х2,5 метра, DVD, спутниковое ТВ, аудио-видео аппаратура",
        price: "1600 - 2000 ₽/час",
        chegirma: "15",
      },
      // boshqa cardlarni shu yerga qoshas
    ],
  },
  Vidnoe: {
    cityname: "Сауны Воронежа",
    saunas: [
      {
        img: [{ img: "" }],
        name: "Сауна Глубина",
        liked: 51,
        unLiked: 25,
        parnaya: "Сауна, хамам, финская, русская",
        address: "Мира, 112, корпус 1",
        hajm: "6, до 30 чел.",
        opportunity: "бассейн 4х2,5 метра, DVD, спутниковое ТВ, аудио-видео аппаратура",
        price: "1600 - 2000 ₽/час",
        chegirma: "15",
      },
         // boshqa cardlarni shu yerga qoshas
    ],
  },
    // boshqa shaharlarni tagidan tepadagilarni copy qilib shu yerga qoshas
};

export default cityData;
