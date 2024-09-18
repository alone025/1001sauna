// Станции метро и автобусные остановки Москвы
export const under_stop: { type: "metro" | "bus", name: string, district: string }[] = [
    // Станции метро
    { type: "metro", name: "Охотный Ряд", district: "Тверской" },
    { type: "metro", name: "Библиотека имени Ленина", district: "Хамовники" },
    { type: "metro", name: "Краснопресненская", district: "Пресненский" },
    { type: "metro", name: "Киевская", district: "Дорогомилово" },
    { type: "metro", name: "Комсомольская", district: "Красносельский" },
    { type: "metro", name: "Таганская", district: "Таганский" },
    { type: "metro", name: "Белорусская", district: "Тверской" },
    { type: "metro", name: "Смоленская", district: "Арбат" },
    { type: "metro", name: "Сокольники", district: "Сокольники" },
    { type: "metro", name: "Парк Культуры", district: "Хамовники" },
    { type: "metro", name: "Проспект Мира", district: "Мещанский" },
    { type: "metro", name: "Щукинская", district: "Щукино" },
    { type: "metro", name: "Митино", district: "Митино" },
    { type: "metro", name: "Текстильщики", district: "Текстильщики" },
    { type: "metro", name: "Новокосино", district: "Новокосино" },

    // Автобусные остановки
    { type: "bus", name: "Тверская площадь", district: "Тверской" },
    { type: "bus", name: "Пушкинская площадь", district: "Тверской" },
    { type: "bus", name: "Кутузовский проспект", district: "Дорогомилово" },
    { type: "bus", name: "Ленинградский проспект", district: "Беговой" },
    { type: "bus", name: "Красная Пресня", district: "Пресненский" },
    { type: "bus", name: "Фили", district: "Фили-Давыдково" },
    { type: "bus", name: "Парк Сокольники", district: "Сокольники" },
    { type: "bus", name: "Белорусский вокзал", district: "Тверской" },
    { type: "bus", name: "Киевский вокзал", district: "Дорогомилово" },
    { type: "bus", name: "Савёловский вокзал", district: "Савёловский" },
];
