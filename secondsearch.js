// База данных отелей
const hotelsByCategory = {
    "Новогодние туры": [
        {
            id: 101,
            name: "Winter Fairy Tale Resort",
            image: "https://i.pinimg.com/originals/0c/fd/7a/0cfd7a3a2ef10c1245d79def09a024b9.jpg",
            category: "Новогодние туры",
            description: "Уединение и магия зимы: камин, лес и тишина заснеженного парка",
            price: 189000,
            stars: 5, // Только stars, без rating
            features: ["Новогодний банкет", "Дед Мороз", "Детская анимация", "Каток"]
        },
        {
            "id": 102,
            "name": "Alpine Star Retreat",
            "image": "https://avatars.mds.yandex.net/i?id=98893dd5c95519d9ad3b42d94d757b7b_l-6209271-images-thumbs&n=13",
            "category": "Новогодние туры",
            "description": "Роскошный альпийский побег с панорамным видом на горы и частным доступом к склонам",
            "price": 235000,
            "stars": 5,
            "features": ["Гастрономический рождественский ужин", "Частный инструктор по горным лыжам", "Дегустация вин", "Спа-комплекс"]
        },
        {
            "id": 103,
            "name": "Northern Lights Lodge",
            "image": "https://i.pinimg.com/originals/3f/09/58/3f095890e53e830e94fbc145c87b9486.jpg",
            "category": "Новогодние туры",
            "description": "Арктическая роскошь под танцующим северным сиянием в стеклянных купольных люксах",
            "price": 325000,
            "stars": 5,
            "features": ["Сервис пробуждения для наблюдения за сиянием", "Ледяной ресторан", "Сафари на хаски", "Стеклянные иглу"]
        },
        {
            "id": 104,
            "name": "Grand Frost Palace",
            "image": "https://i.pinimg.com/736x/ae/71/91/ae7191a0f2838cbfa0584921a2699aa4.jpg",
            "category": "Новогодние туры",
            "description": "Величественный курорт в имперском стиле с ледяными фонтанами и королевскими празднествами",
            "price": 275000,
            "stars": 5,
            "features": ["Императорский бал", "Мастер-классы по ледяным скульптурам", "Прогулки в королевской карете", "Икорный бар"]
        },
        {
            "id": 105,
            "name": "Crystal Peak Resort",
            "image": "https://i.pinimg.com/736x/ba/48/25/ba4825ec258f8588bb2f2558043c1e2b.jpg",
            "category": "Новогодние туры",
            "description": "Абсолютная зимняя сказка на горной вершине с хрустальной ледяной часовней",
            "price": 295000,
            "stars": 5,
            "features": ["Вершинный завтрак с шампанским", "Посещение ледяной часовни", "Вертолетные экскурсии", "Подогреваемые бассейны infinity"]
        },
        {
            "id": 106,
            "name": "Polar Night Sanctuary",
            "image": "https://static.mk.ru/upload/entities/2024/08/13/12/articles/facebookPicture/c1/8b/ac/65/d9a86c3a2228766a6d0bc58d629bc92e.jpg",
            "category": "Новогодние туры",
            "description": "Эксклюзивное арктическое убежище с виллами со стеклянной крышей и полярными ночными впечатлениями",
            "price": 385000,
            "stars": 5,
            "features": ["Фотосессия с северным сиянием", "Арктическая кухня", "Экспедиции на снегоходах", "Виллы со стеклянными потолками"]
        },
        {
            "id": 107,
            "name": "Emerald Frost Estate",
            "image": "https://kuda-sochi.ru/uploads/c4c92870724cf79e49fb18bba18fa32d.jpg",
            "category": "Новогодние туры",
            "description": "Захватывающая дух зимняя усадьба, окруженная замерзшими изумрудными лесами и озерами",
            "price": 255000,
            "stars": 5,
            "features": ["Приключения подледной рыбалки", "Мастер-классы по выживанию в лесу", "Гастрономические зимние пикники", "Отслеживание дикой природы"]
        },
        {
            "id": 108,
            "name": "Midnight Sun Castle",
            "image": "https://avatars.mds.yandex.net/i?id=2033288125175df84521a8322979adda6c433f6c-8529854-images-thumbs&n=13",
            "category": "Новогодние туры",
            "description": "Сказочный опыт средневекового замка с факельными пирами и рыцарскими турнирами",
            "price": 315000,
            "stars": 5,
            "features": ["Средневековый банкет", "Ледовая арена для рыцарских поединков", "Уроки стрельбы из лука", "Экскурсия по сокровищнице замка"]
        },
        {
            id: 109,
            name: "Snow Queen Hotel", 
            image: "https://cdn.vedomosti.ru/image/2021/9n/12xd52/mobile_high-1eg7.jpg",
            category: "Новогодние туры",
            description: "Новогодняя сказка в горах с катком и горками",
            price: 145000,
            stars: 4, 
            features: ["Каток", "Горки", "Новогодний ужин", "Сауна"]
        },
        {
            "id": 110,
            "name": "Mountain Frost Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=50a3e6e9b7b2174bfcb5bbbdceace48d_l-4274889-images-thumbs&n=13",
            "category": "Новогодние туры",
            "description": "Уютный горный отель с видом на заснеженные вершины и лесные трассы",
            "price": 142000,
            "stars": 4,
            "features": ["Горные лыжи", "Терраса с камином", "Баня", "Прогулки на снегоступах"]
        },
        {
            "id": 111,
            "name": "Winter Forest Lodge",
            "image": "https://i.pinimg.com/736x/ea/94/de/ea94de48dfe7f88f07a0f3e47cf5a915.jpg",
            "category": "Новогодние туры",
            "description": "Тихий отдых в сосновом лесу с домашней атмосферой и зимними забавами",
            "price": 168000,
            "stars": 4,
            "features": ["Бильярд", "Настольные игры", "Каминный зал", "Зимний пикник"]
        },
        {
            "id": 112,
            "name": "Frozen Lake Resort",
            "image": "https://avatars.mds.yandex.net/i?id=75a9eb4146af64a9cd33dd81eaaa02ca_l-4399580-images-thumbs&n=13",
            "category": "Новогодние туры",
            "description": "Отель на берегу замерзшего озера для рыбалки и катания на коньках",
            "price": 155000,
            "stars": 4,
            "features": ["Подледная рыбалка", "Прогулки по озеру", "Барбекю-зона", "Сауна на дровах"]
        },
        {
            "id": 113,
            "name": "Cozy Snow Inn",
            "image": "https://vlp.by/images/NYjordan.jpg",
            "category": "Новогодние туры",
            "description": "Небольшой семейный отель с домашней кухней и теплой атмосферой праздника",
            "price": 108000,
            "stars": 4,
            "features": ["Мастер-классы", "Домашняя кухня", "Детский клуб", "Настольный теннис"]
        },
        {
            "id": 114,
            "name": "Northern Comfort Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=9a3bca67638ace2f48c7b086f8eedb86_l-5032983-images-thumbs&n=13",
            "category": "Новогодние туры",
            "description": "Современный отель с панорамными окнами и доступом к зимним развлечениям",
            "price": 155000,
            "stars": 4,
            "features": ["Спа-зона", "Фитнес-центр", "Бассейн", "Ресторан с панорамным видом"]
        },
        {
            "id": 115,
            "name": "Alpine Village Resort",
            "image": "https://i.pinimg.com/736x/68/07/bb/6807bb239cf1d3617506c07f3b01ba7e.jpg",
            "category": "Новогодние туры",
            "description": "Деревенский стиль в альпийском духе с катком и горками для всей семьи",
            "price": 138000,
            "stars": 4,
            "features": ["Семейные номера", "Украшение елок", "Новогодние игры", "Бассейн"]
        },
        {
            "id": 116,
            "name": "Iceberg Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=45194f2f046cb6d4ad42d390d268f5b90f8461d8-4509882-images-thumbs&n=13",
            "category": "Новогодние туры",
            "description": "Стильный дизайн-отель с ледяным баром и современными удобствами",
            "price": 165000,
            "stars": 4,
            "features": ["Ледяной бар", "Дизайнерские интерьеры", "Караоке", "Боулинг"]
        },
        {
            "id": 117,
            "name": "Snow Valley Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=b820f0f03487dabc07119cc2787a81cf_l-5089285-images-thumbs&n=13",
            "category": "Новогодние туры",
            "description": "Отель в живописной долине с подъемником и трассами для начинающих",
            "price": 142000,
            "stars": 4,
            "features": ["Ски-пасс", "Прокат оборудования", "Горные экскурсии", "Бистро у склона"]
        },
        {
            "id": 118,
            "name": "Snowy Village Inn",
            "image": "https://avatars.mds.yandex.net/i?id=4a420092b786244cbe84ad0af81f4da2_l-12503299-images-thumbs&n=13",
            "category": "Новогодние туры",
            "description": "Уютный и доступный зимний отдых с традиционными празднованиями и семейными активностями",
            "price": 89000,
            "stars": 3,
            "features": ["Украшение рождественской елки", "Катание с горок", "Групповые уроки катания на лыжах", "Общий камин"]
        },
        {
            "id": 119,
            "name": "Frosty Pine Lodge",
            "image": "https://avatars.mds.yandex.net/get-altay/5485499/2a0000017ddda51fd8c1e0577fb6c4bb8f3c/orig",
            "category": "Новогодние туры",
            "description": "Теплый и гостеприимный отель в сосновом лесу с домашней атмосферой праздника",
            "price": 95000,
            "stars": 3,
            "features": ["Новогодний ужин", "Баня", "Настольные игры", "Прогулки по зимнему лесу"]
        },
        {
            "id": 120,
            "name": "Winter Comfort Hotel",
            "image": "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6550fe033c5d667dd4f35821_655102d2c2771d0295438a09/scale_1200",
            "category": "Новогодние туры",
            "description": "Комфортабельный отель с современными удобствами и зимними развлечениями для всей семьи",
            "price": 110000,
            "stars": 3,
            "features": ["Крытый бассейн", "Детская комната", "Ресторан", "Прокат коньков"]
        },
        {
            "id": 121,
            "name": "Northern Breeze Resort",
            "image": "https://avatars.mds.yandex.net/i?id=548160602fcfff7ccbba17bcbeaee9d0_l-3730871-images-thumbs&n=13",
            "category": "Новогодние туры",
            "description": "Небольшой уютный курорт с видом на заснеженные холмы и доступом к лыжным трассам",
            "price": 102000,
            "stars": 3,
            "features": ["Лыжные трассы для начинающих", "Терраса с обогревом", "Бильярд", "Чаепитие у камина"]
        },
        {
            "id": 122,
            "name": "Cozy Snow Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=ddec6b5b53d97cdf8db2beec769349e2_l-7947996-images-thumbs&n=13",
            "category": "Новогодние туры",
            "description": "Домашняя атмосфера и традиционные зимние забавы в семейном формате",
            "price": 85000,
            "stars": 3,
            "features": ["Мастер-класс по пряникам", "Каток", "Караоке", "Настольный футбол"]
        },
        {
            "id": 123,
            "name": "Frozen Lake Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=97a0bd754b00ca4db91c86cc0f6f997c_l-5883298-images-thumbs&n=13",
            "category": "Новогодние туры",
            "description": "Отель на берегу замерзшего озера с возможностью подледной рыбалки и катания на коньках",
            "price": 98000,
            "stars": 3,
            "features": ["Подледная рыбалка", "Прогулки по озеру", "Сауна", "Барбекю-зона"]
        },
        {
            "id": 124,
            "name": "Mountain View Lodge",
            "image": "https://investregion174.ru/upload/resize_cache/iblock/1ef/cz8biwywa4r51otz5m5xpfysk9wt1kiq/924_560_2/a6a34a846129453153695dc99826ef3d.jpeg",
            "category": "Новогодние туры",
            "description": "Панорамный вид на горы и доступ к основным зимним развлечениям по доступной цене",
            "price": 115000,
            "stars": 3,
            "features": ["Ски-пасс включен", "Прокат оборудования", "Горные экскурсии", "Фитнес-зал"]
        },
        {
            "id": 125,
            "name": "Winter Garden Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=06c6a5da0f3ae72da12c16c1323d9905_l-3548851-images-thumbs&n=13",
            "category": "Новогодние туры",
            "description": "Отель с зимним садом и уютными номерами для спокойного празднования Нового года",
            "price": 92000,
            "stars": 3,
            "features": ["Зимний сад", "Библиотека", "Настольный теннис", "Тематические вечеринки"]
        }
    ],
    "Свадебные туры": [
        {
            id: 126,
            name: "Romantic Wedding Palace",
            image: "https://i.ytimg.com/vi/0J4-8lE3RBE/maxresdefault.jpg",
            category: "Свадебные туры",
            description: "Идеальное место для свадебного путешествия",
            price: 320000,
            stars: 5,
            features: ["Свадебный ужин", "Фотосессия", "Романтический декор"]
        },
        {
            "id": 127,
            "name": "Eternal Bliss Resort & Spa",
            "image": "https://static.tildacdn.com/tild6337-3231-4633-a636-383333346333/IMG_2474-HDR6_Defaul.jpg",
            "category": "Свадебные туры",
            "description": "Исключительный курорт для роскошного начала вашей совместной жизни с приватными виллами и первоклассным сервисом",
            "price": 245000,
            "stars": 5,
            "features": ["Приватная вилла с бассейном", "Персональный дворецкий", "Спа-процедуры для пары", "Организация церемонии под ключ"]
        },
        {
            "id": 128,
            "name": "Infinity Love Palace",
            "image": "https://avatars.mds.yandex.net/i?id=be4c9bea5a7a1dff7095cb12aeb5214f_l-5306350-images-thumbs&n=13",
            "category": "Свадебные туры",
            "description": "Современный дворец на берегу моря с бесконечными бассейнами и панорамными залами для торжеств",
            "price": 275000,
            "stars": 5,
            "features": ["Зал с панорамным видом на океан", "Бассейн infinity", "Авторский свадебный торт", "Фейерверк в подарок"]
        },
        {
            "id": 129,
            "name": "Royal Hearts Castle",
            "image": "https://i.pinimg.com/736x/3d/97/93/3d9793bccee97d67ec477744616b99fa.jpg",
            "category": "Свадебные туры",
            "description": "Свадьба в стиле королевской сказки в стенах настоящего исторического замка с роскошными интерьерами",
            "price": 290000,
            "stars": 5,
            "features": ["Церемония в тронном зале", "Прогулка в карете", "Дегустация вин из собственных погребов", "Саундтрек от живого оркестра"]
        },
        {
            "id": 130,
            "name": "Azure Waves Boutique Hotel",
            "image": "https://mini-otel-premium.megotel.ru/images/hotels/980/b3342dc184efb.jpg",
            "category": "Свадебные туры",
            "description": "Бутик-отель на уединенном пляже с белым песком для изысканной и камерной свадьбы",
            "price": 285000,
            "stars": 5,
            "features": ["Свадьба на пляже у кромки воды", "Ужин при свечах на вилле", "Дайвинг для молодоженов", "Эксклюзивный дизайн номеров"]
        },
        {
            "id": 131,
            "name": "Tropical Garden Eden",
            "image": "https://i.pinimg.com/originals/5d/a2/d0/5da2d0a5bbf540f19b601e98fa65c3b2.jpg?nii=t",
            "category": "Свадебные туры",
            "description": "Церемония в райском тропическом саду с водопадами и экзотическими цветами для незабываемого праздника",
            "price": 310000,
            "stars": 5,
            "features": ["Церемония у водопада", "Флористика от признанного мастера", "Экскурсия по тропическому саду", "Свежая кокосовая вода в подарок"]
        },
        {
            "id": 132,
            "name": "Luxury Yacht Club Hotel",
            "image": "https://i.pinimg.com/736x/0f/97/61/0f97611ba6a1af09aa785bae78f62225.jpg",
            "category": "Свадебные туры",
            "description": "Свадьба на воде с возможностью провести церемонию на частной яхте и видом на марину из каждого номера",
            "price": 260000,
            "stars": 5,
            "features": ["Церемония на палубе яхты", "Членство в яхт-клубе на месяц", "Ужин из морепродуктов", "Катание на яхте на закате"]
        },
        {
            "id": 133,
            "name": "Harmony Bay Resort",
            "image": "https://avatars.mds.yandex.net/i?id=51d30ed838121f8fb5a23d04dda94345_l-10962086-images-thumbs&n=13",
            "category": "Свадебные туры",
            "description": "Комфортабельный курорт в бухте с живописными видами и качественным сервисом для вашего торжества",
            "price": 235000,
            "stars": 4,
            "features": ["Свадебная арка у бассейна", "Приветственный фруктовый букет", "Фотозона", "Трансфер до пляжа"]
        },
        {
            "id": 134,
            "name": "Sunset Cliffs Hotel",
            "image": "https://i.pinimg.com/736x/d8/a9/b2/d8a9b2b7b8fa03555ada2739d5620033.jpg",
            "category": "Свадебные туры",
            "description": "Отель на скалах с захватывающим видом на закат — идеальный романтический фон для свадебной церемонии",
            "price": 265000,
            "stars": 4,
            "features": ["Церемония на закате", "Шампанское и клубника", "Номер для молодоженов", "Завтрак в постель"]
        },
        {
            "id": 135,
            "name": "Vineyard Romance Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=9826b1f4035bcb6d2fe2773ee1ade74a_l-4576585-images-thumbs&n=13",
            "category": "Свадебные туры",
            "description": "Уютный отель среди виноградников для ценителей тихой романтики и хорошего вина",
            "price": 245000,
            "stars": 4,
            "features": ["Церемония в винограднике", "Дегустация местных вин", "Винный тур", "Пикник среди лоз"]
        },
        {
            "id": 136,
            "name": "La Dolce Vita Resort",
            "image": "https://avatars.mds.yandex.net/i?id=b9b7712c2e95c75f2a844a38ea85b51b1d4d4614-5381369-images-thumbs&n=13",
            "category": "Свадебные туры",
            "description": "Курорт в итальянском стиле с уютными внутренними двориками и атмосферой средиземноморского праздника",
            "price": 225000,
            "stars": 4,
            "features": ["Итальянская свадебная вечеринка", "Мастер-класс по приготовлению пиццы", "Фонтан во дворе", "Спагетти-бар"]
        },
        {
            "id": 137,
            "name": "Secret Garden Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=da7f996d91bd656a1ca5350da4cb50d3_l-4809558-images-thumbs&n=13",
            "category": "Свадебные туры",
            "description": "Скрытый от посторонних глаз отель с цветущим садом для камерной и уединенной свадьбы",
            "price": 195000,
            "stars": 4,
            "features": ["Церемония в беседке", "Романтический декор", "Ужин в саду", "Гамак для двоих"]
        },
        {
            "id": 138,
            "name": "Historic Manor Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=f673125c401a9cc7bf63e9aeba0c69e6944e43b8-5023864-images-thumbs&n=13",
            "category": "Свадебные туры",
            "description": "Отель в здании старинной усадьбы с аутентичной атмосферой и классическим подходом к празднованию",
            "price": 255000,
            "stars": 4,
            "features": ["Церемония в бальном зале", "Антикварный интерьер", "Каминный зал для ужина", "Прогулка по старинному парку"]
        },
        {
            "id": 139,
            "name": "Cozy Nest Hotel",
            "image": "https://avatars.mds.yandex.net/get-altay/14097168/2a00000191c14f072ad2ad728bb0900a8e96/XXL_height",
            "category": "Свадебные туры",
            "description": "Небольшой уютный отель с домашней атмосферой для скромного и душевного торжества",
            "price": 155000,
            "stars": 3,
            "features": ["Свадебный каравай", "Комплимент от шеф-повара", "Бесплатный трансфер", "Поздний выезд"]
        },
        {
            "id": 140,
            "name": "Sunny Bay Hotel",
            "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/125091540.jpg?k=382734c396f4e223210112a7420caf41bd553df6e8f297630bbf3796ce01c2b0&o=",
            "category": "Свадебные туры",
            "description": "Гостеприимный отель у моря с просторной территорией и всем необходимым для праздника",
            "price": 165000,
            "stars": 3,
            "features": ["Свадьба на открытой террасе", "Приветственный коктейль", "Двухместный номер с улучшением", "Доступ к пляжу"]
        },
        {
            "id": 141,
            "name": "City Romance Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=292187a762794fe66209355acb9704bc_l-4219276-images-thumbs&n=13",
            "category": "Свадебные туры",
            "description": "Удобный городской отель в центре для бракосочетания в ЗАГСе и последующего празднования",
            "price": 145000,
            "stars": 3,
            "features": ["Помощь с бронированием ЗАГСа", "Праздничный ужин в ресторане", "Романтический декор номера", "Парковка"]
        },
        {
            "id": 142,
            "name": "Green Valley Resort",
            "image": "https://avatars.mds.yandex.net/i?id=b12b177e9497404f5ff7967ddd309057_l-8366204-images-thumbs&n=13",
            "category": "Свадебные туры",
            "description": "Эко-отель в долине для любителей природы и спокойного отдыха после торжества",
            "price": 155000,
            "stars": 3,
            "features": ["Церемония на лужайке", "Эко-ужин из местных продуктов", "Прогулка на лошадях", "Костер вечером"]
        },
        {
            "id": 143,
            "name": "Honeymoon Suite Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=b6f8f1be1281f40619e31c7587e3bb92fa5ae305-16880815-images-thumbs&n=13",
            "category": "Свадебные туры",
            "description": "Отель, специализирующийся на номерах для молодоженов, с особым вниманием к романтическим деталям",
            "price": 135000,
            "stars": 3,
            "features": ["Номер для молодоженов", "Лепестки роз на кровати", "Бутылка шампанского", "Завтрак в номер"]
        }
    ],
    "VIP-туры и услуги": [
        {
            "id": 144,
            "name": "Imperial Diamond Resort",
            "image": "https://i.pinimg.com/originals/23/04/f0/2304f06333243aa00cf795b383197de3.jpg",
            "category": "VIP-туры и услуги",
            "description": "Эксклюзивный закрытый курорт с виллами, обслуживаемыми персональным дворецким и шеф-поваром",
            "price": 990000,
            "stars": 5,
            "features": ["Частный пляж", "Персональный дворецкий", "Шеф-повар на вилле", "Вертолетная площадка"]
        },
        {
            "id": 145,
            "name": "Private Island Sanctuary",
            "image": "https://avatars.mds.yandex.net/i?id=5be8b6d60418c1a6423cd4bc8803f627-5298260-images-thumbs&n=13",
            "category": "VIP-туры и услуги",
            "description": "Полностью приватный остров с собственной инфраструктурой для избранных гостей",
            "price": 1000000,
            "stars": 5,
            "features": ["Аренда всего острова", "Команда обслуживания 24/7", "Яхта в распоряжении", "Эксклюзивная экосистема"]
        },
        {
            "id": 146,
            "name": "Presidential Skyline Penthouse",
            "image": "https://i.pinimg.com/originals/da/ec/ca/daeccae1a1091cf921bd453ca6c0f8df.jpg",
            "category": "VIP-туры и услуги",
            "description": "Эксклюзивный пентхаус на частном острове с 360-градусным видом на океан и вертолетной площадкой",
            "price": 850000,
            "stars": 5,
            "features": ["Приватный лифт", "Бесконечный бассейн на крыше", "Частный шеф-повар", "Панорамные виды на море"]
        },
        {
            "id": 147,
            "name": "Alpine Royal Chalet",
            "image": "https://i.pinimg.com/originals/2b/2f/4c/2b2f4c94cf726c040edba5aecf0fdd2f.png",
            "category": "VIP-туры и услуги",
            "description": "Роскошная вилла на частном острове в тропиках с белоснежными пляжами и кокосовыми пальмами",
            "price": 920000,
            "stars": 5,
            "features": ["Частный пляж", "Инфинити-бассейн", "Дайвинг-центр", "Спа-комплекс у океана"]
        },
        {
            "id": 148,
            "name": "Gold Coast Mansion",
            "image": "https://avatars.mds.yandex.net/i?id=b890cd752160de97307e6bf9dd881ec7_l-8567894-images-thumbs&n=13",
            "category": "VIP-туры и услуги",
            "description": "Величественная вилла на Мальдивах с стеклянным полом, водными бунгало и коралловым садом",
            "price": 950000,
            "stars": 5,
            "features": ["Водные бунгало", "Стеклянный пол над лагуной", "Сноркелинг с черепахами", "Романтические ужины на песке"]
        },
        {
            "id": 149,
            "name": "Safari Royal Camp",
            "image": "https://avatars.mds.yandex.net/i?id=12068803cdf7944397d839ad496b878c_l-5214861-images-thumbs&n=13",
            "category": "VIP-туры и услуги",
            "description": "Элитный кемпинг на частном тропическом острове с виллами на сваях и бирюзовой лагуной",
            "price": 790000,
            "stars": 5,
            "features": ["Виллы на сваях над водой", "Прозрачная лодка-дно", "Персональный дайв-гид", "Морской сафари-тур"]
        },
        {
            "id": 150,
            "name": "Platinum Business Tower",
            "image": "https://avatars.mds.yandex.net/i?id=fda39f8fbcad45261d3bb2e73c9168a5_l-8243281-images-thumbs&n=13",
            "category": "VIP-туры и услуги",
            "description": "Бизнес-вилла на острове с современными переговорными и прямым доступом к коралловым рифам",
            "price": 750000,
            "stars": 5,
            "features": ["Офис над водой", "Встречи на яхте", "Скайп-комната", "Серфинг с инструктором"]
        },
        {
            "id": 151,
            "name": "Vineyard Castle Estate",
            "image": "https://avatars.mds.yandex.net/i?id=bd14434e1c787fd4028294432129cdf757496d4a-12649328-images-thumbs&n=13",
            "category": "VIP-туры и услуги",
            "description": "Замок на тропическом острове с частными виллами, бассейнами и коктейлями из кокосов",
            "price": 880000,
            "stars": 5,
            "features": ["Виллы с бассейнами", "Кокосовая плантация", "Морской трюфельный ужин", "Спа из водорослей"]
        },
        {
            "id": 152,
            "name": "Elite Business Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=5aa2677afe89885e3c7aff5505d2fb3f_l-9226126-images-thumbs&n=13",
            "category": "VIP-туры и услуги",
            "description": "Бизнес-курорт на острове с виллами для переговоров и отдыха в лагуне с мантами",
            "price": 720000,
            "stars": 4,
            "features": ["Вилла для встреч", "Сноркелинг с мантами", "Бизнес-ланч на яхте", "Вечерние коктейли"]
        },
        {
            "id": 153,
            "name": "Premium Spa Resort",
            "image": "https://avatars.mds.yandex.net/i?id=6b955e0f141d7498f4946655108bb587_l-5249900-images-thumbs&n=13",
            "category": "VIP-туры и услуги",
            "description": "Спа-остров с виллами над водой и ритуалами красоты на основе морских минералов",
            "price": 680000,
            "stars": 4,
            "features": ["Спа над водой", "Ванны с морской водой", "Йога на рассвете", "Массаж с ракушками"]
        },
        {
            "id": 154,
            "name": "Designer Boutique Hotel",
            "image": "https://online.space-travel.ru/data/hotel/16380_24400_photo_-1564890605.jpg",
            "category": "VIP-туры и услуги",
            "description": "Дизайнерские водные виллы с стеклянными стенами и коралловым садом под ногами",
            "price": 750000,
            "stars": 4,
            "features": ["Стеклянные стены", "Коралловый сад", "Подводная фотосессия", "Дизайнерский интерьер"]
        },
        {
            "id": 155,
            "name": "Golf & Country Club",
            "image": "https://avatars.mds.yandex.net/get-mpic/4591438/img_id881095954324495345.jpeg/orig",
            "category": "VIP-туры и услуги",
            "description": "Гольф-клуб на острове с полями у океана и виллами с приватными бассейнами",
            "price": 620000,
            "stars": 4,
            "features": ["Поле у океана", "Виллы с бассейнами", "Гольф-кэдди", "Клуб у пляжа"]
        },
        {
            "id": 156,
            "name": "Luxury Wine Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=304d6bf70147e93082202a7f248a37984f42f37a-10807162-images-thumbs&n=13",
            "category": "VIP-туры и услуги",
            "description": "Винный курорт на острове с дегустациями в бунгало над водой и ужинами при свечах",
            "price": 570000,
            "stars": 4,
            "features": ["Дегустации над водой", "Бунгало с винным погребом", "Ужины при свечах", "Винные круизы"]
        },
        {
            "id": 157,
            "name": "Executive Airport Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=4974cea87b302e0aa7b0af00aed4c906_l-12398265-images-thumbs&n=13",
            "category": "VIP-туры и услуги",
            "description": "Отель у моря с быстрым трансфером на гидросамолете и виллами на первой линии",
            "price": 590000,
            "stars": 4,
            "features": ["Трансфер на гидросамолете", "Виллы на первой линии", "Приватный чек-ин", "Вид на закат"]
        },
        {
            "id": 158,
            "name": "Business Comfort Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=01aefdac61a5eccf286318ad5e60e370_l-10748854-images-thumbs&n=13",
            "category": "VIP-туры и услуги",
            "description": "Комфортные бунгало у лагуны с рабочими зонами и быстрым доступом к дайвингу",
            "price": 585000,
            "stars": 3,
            "features": ["Бунгало у лагуны", "Рабочая зона", "Дайвинг-центр", "Завтрак в бунгало"]
        },
        {
            "id": 159,
            "name": "Premium City Hotel",
            "image": "https://i.pinimg.com/736x/2d/55/a1/2d55a1969d71055a08e1892084ab2dd7.jpg",
            "category": "VIP-туры и услуги",
            "description": "Городской отель на острове с видами на гавань и номерами с джакузи",
            "price": 465000,
            "stars": 3,
            "features": ["Вид на гавань", "Номер с джакузи", "Приветственный коктейль", "Парковка для яхт"]
        },
        {
            "id": 160,
            "name": "Comfort Spa Hotel",
            "image": "https://i.ytimg.com/vi/iJtDH6Xz_vk/maxresdefault.jpg",
            "category": "VIP-туры и услуги",
            "description": "Спа-отель на берегу океана с массажем под шум прибоя и коктейлями из тропических фруктов",
            "price": 395000,
            "stars": 3,
            "features": ["Массаж у океана", "Фруктовые коктейли", "Шезлонги на пляже", "Спа-ритуалы"]
        }        
    ],
    "Отдых на островах": [
        {
            "id": 161,
            "name": "Coral Paradise Resort",
            "image": "https://avatars.mds.yandex.net/i?id=27c01bea96fb945bbd4ce8e09a458c5b37f6bad1-16848981-images-thumbs&n=13",
            "category": "Отдых на островах",
            "description": "Роскошный курорт на частном острове с виллами над водой и кристально-чистой лагуной",
            "price": 920000,
            "stars": 5,
            "features": ["Виллы на сваях над водой", "Стеклянный пол в лагуне", "Персональный дайв-инструктор", "Романтические ужины на песке"]
        },
        {
            "id": 162,
            "name": "Maldives Royal Escape",
            "image": "https://avatars.mds.yandex.net/i?id=1b43c0cc6cffcac035b8a10ce5702738a8327b86-16110730-images-thumbs&n=13",
            "category": "Отдых на островах",
            "description": "Эксклюзивный островной ретрит с водными бунгало и коралловыми садами для сноркелинга",
            "price": 880000,
            "stars": 5,
            "features": ["Водные бунгало", "Приватный коралловый риф", "Спа-процедуры над водой", "Гидросамолет трансфер"]
        },
        {
            "id": 163,
            "name": "Tropical Diamond Island",
            "image": "https://avatars.mds.yandex.net/i?id=ade836e3ad2fca8e7cc9f21cf110fcf1_l-5235392-images-thumbs&n=13",
            "category": "Отдых на островах",
            "description": "Частный остров с виллами у океана и белоснежными пляжами в окружении пальмовых рощ",
            "price": 950000,
            "stars": 5,
            "features": ["Приватный пляж", "Бассейн infinity", "Шеф-повар на вилле", "Катамаран в аренду"]
        },
        {
            "id": 164,
            "name": "Ocean Whisper Resort",
            "image": "https://avatars.mds.yandex.net/i?id=6fc3b32bdf330b47008dad143413017aff5d8bdd-5965946-images-thumbs&n=13",
            "category": "Отдых на островах",
            "description": "Премиум курорт с подводными виллами и панорамным видом на морских обитателей",
            "price": 1100000,
            "stars": 5,
            "features": ["Подводные виллы", "Стеклянные стены в океане", "Наблюдение за мантами", "Ресторан под водой"]
        },
        {
            "id": 165,
            "name": "Sunset Bay Luxury",
            "image": "https://ak-d.tripcdn.com/images/200l1d000001ekvaxC35C_R_960_660_R5_D.jpg",
            "category": "Отдых на островах",
            "description": "Виллы премиум-класса на краю атолла с захватывающими закатами и приватностью",
            "price": 870000,
            "stars": 5,
            "features": ["Виллы на краю атолла", "Закаты над океаном", "Частный бассейн", "Обслуживание дворецким"]
        },
        {
            "id": 166,
            "name": "Pearl Island Sanctuary",
            "image": "https://avatars.mds.yandex.net/i?id=b22f4a38928db7d32ab70d60b6da3680_l-12733951-images-thumbs&n=13",
            "category": "Отдых на островах",
            "description": "Элитный спа-курорт на острове с натуральными процедурами из жемчуга и морских водорослей",
            "price": 780000,
            "stars": 5,
            "features": ["Жемчужные спа-процедуры", "Йога на пляже", "Детокс программы", "Натуральная косметика"]
        },
        {
            "id": 167,
            "name": "Blue Lagoon Boutique",
            "image": "https://avatars.mds.yandex.net/i?id=5519b39dada3b67146a782b66acfc520_l-11777771-images-thumbs&n=13",
            "category": "Отдых на островах",
            "description": "Бутик-отель в лагуне с комфортными бунгало и доступом к коралловым рифам",
            "price": 420000,
            "stars": 4,
            "features": ["Бунгало у лагуны", "Сноркелинг у рифа", "Ресторан морепродуктов", "Теннисный корт"]
        },
        {
            "id": 168,
            "name": "Palm Beach Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=6ef0013be62bbca53d000b34d8908169_l-4594612-images-thumbs&n=13",
            "category": "Отдых на островах",
            "description": "Отель на первой линии с пальмовой рощей и широким песчаным пляжем",
            "price": 380000,
            "stars": 4,
            "features": ["Пляж первой линии", "Пальмовая роща", "Бассейн с баром", "Водные виды спорта"]
        },
        {
            "id": 169,
            "name": "Coral Garden Resort",
            "image": "https://avatars.mds.yandex.net/i?id=ad310fdd39e62e81f32d11e0cf559041700f18f6-15428071-images-thumbs&n=13",
            "category": "Отдых на островах",
            "description": "Курорт у кораллового сада с комфортными номерами и морскими экскурсиями",
            "price": 350000,
            "stars": 4,
            "features": ["Коралловый сад", "Морские экскурсии", "Дайвинг центр", "Пляжные бунгало"]
        },
        {
            "id": 170,
            "name": "Island Breeze Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=d6b081bae59a8d67873e3a8dd6e850a3_l-5285663-images-thumbs&n=13",
            "category": "Отдых на островах",
            "description": "Уютный отель с тропическим садом и доступом к дикому пляжу с морскими черепахами",
            "price": 320000,
            "stars": 4,
            "features": ["Дикий пляж", "Наблюдение за черепахами", "Тропический сад", "Вечерние барбекю"]
        },
        {
            "id": 171,
            "name": "Sunset View Resort",
            "image": "https://i.pinimg.com/736x/93/ff/45/93ff45e1428117ac8dcfa97df6f3c5e7.jpg",
            "category": "Отдых на островах",
            "description": "Курорт на западном побережье с лучшими видами на закат и уютными бунгало",
            "price": 290000,
            "stars": 4,
            "features": ["Вид на закат", "Бунгало с террасой", "Бар у бассейна", "Серфинг уроки"]
        },
        {
            "id": 172,
            "name": "Beach Comber Hotel",
            "image": "https://attaches.1001tur.ru/hotels/gallery/4309/768-0__use_origin_data_062.jpeg",
            "category": "Отдых на островах",
            "description": "Простой отель у пляжа с базовыми удобствами и доступом к морским развлечениям",
            "price": 195000,
            "stars": 3,
            "features": ["Пляж в шаговой доступности", "Вентилятор/кондиционер", "Прокат снаряжения", "Кафе на пляже"]
        },
        {
            "id": 173,
            "name": "Coconut Grove Inn",
            "image": "https://avatars.mds.yandex.net/get-altay/14110197/2a00000192ea3720712c16a8d4e293237e3d/orig",
            "category": "Отдых на островах",
            "description": "Небольшая гостиница в кокосовой роще с бюджетными номерами и домашней атмосферой",
            "price": 250000,
            "stars": 3,
            "features": ["Кокосовая роща", "Домашняя кухня", "Прогулки по острову", "Гамаки в саду"]
        },
        {
            "id": 174,
            "name": "Sea Shell Hostel",
            "image": "https://avatars.mds.yandex.net/i?id=f96ac32b12c862f0632549542efd0106_l-5885375-images-thumbs&n=13",
            "category": "Отдых на островах",
            "description": "Экономный вариант размещения для любителей пляжного отдыха и морских приключений",
            "price": 220000,
            "stars": 3,
            "features": ["Общая кухня", "Пляжный волейбол", "Общежитие/номера", "Туры на лодке"]
        },
        {
            "id": 175,
            "name": "Island Backpackers",
            "image": "https://avatars.mds.yandex.net/i?id=6b4615726dd265c8ff4e1899fa289fe6_l-7998362-images-thumbs&n=13",
            "category": "Отдых на островах",
            "description": "Замечательная вилла для путешественников, исследующих островной мир",
            "price": 95000,
            "stars": 3,
            "features": ["Дайвинг", "Снорклинг", "Аренда яхты", "Морские прогулки"]
        },
        {
            "id": 176,
            "name": "Bay View Luxhouse",
            "image": "https://i.pinimg.com/736x/07/55/7f/07557f21e6a4d6dcc90d771396271846.jpg",
            "category": "Отдых на островах",
            "description": "Шикарный дом с видом на океан и прозрачной водой",
            "price": 110000,
            "stars": 3,
            "features": ["Вид на океан", "Общая терраса", "Снорклинг", "Рыбалка с местными"]
        }
    ],
    "Морские круизы": [
        {
            "id": 177,
            "name": "Royal Ocean Majesty",
            "image": "https://i.pinimg.com/originals/92/ad/8d/92ad8dbd6de22213d5334299492e3c1a.jpg",
            "category": "Морские круизы",
            "description": "Флагманский лайнер премиум-класса с люксами с балконами и эксклюзивным обслуживанием",
            "price": 850000,
            "stars": 5,
            "features": ["Люксы с приватными балконами", "Персональный дворецкий", "Гастрономические рестораны", "Спа-комплекс с талассотерапией"]
        },
        {
            "id": 178,
            "name": "Seven Seas Explorer",
            "image": "https://avatars.mds.yandex.net/i?id=885f6c12d4190b492d1362d6d59fa84f60f28b3b-5876637-images-thumbs&n=13",
            "category": "Морские круизы",
            "description": "Эксклюзивный круизный лайнер с suite-каютами и безлимитным премиальным алкоголем",
            "price": 920000,
            "stars": 5,
            "features": ["Suite-каюты с ванными", "Безлимитный премиальный алкоголь", "Экскурсии включены", "Частная смотровая палуба"]
        },
        {
            "id": 179,
            "name": "Crystal Serenity",
            "image": "https://avatars.mds.yandex.net/i?id=bf437cbe0e74e5efbce747bd37dd7459b1eb2a37-8312318-images-thumbs&n=13",
            "category": "Морские круизы",
            "description": "Лайнер класса люкс с каютами панорамным видом и мишленовской кухней на борту",
            "price": 780000,
            "stars": 5,
            "features": ["Панорамные каюты", "Ресторан с мишленовской звездой", "Бroadway шоу", "Винный погреб с сомелье"]
        },
        {
            "id": 180,
            "name": "Silver Muse",
            "image": "https://f.otzyv.ru/f/08/07/20347/otz/t/193212/100216103656.jpg",
            "category": "Морские круизы",
            "description": "Круизный лайнер с почти индивидуальным обслуживанием и каютами с гидромассажными ваннами",
            "price": 950000,
            "stars": 5,
            "features": ["Каюты с гидромассажными ваннами", "Соотношение персонала 1:1", "Все включено премиум", "Вертелная площадка"]
        },
        {
            "id": 181,
            "name": "Seabourn Encore",
            "image": "https://avatars.mds.yandex.net/i?id=ff7df4af637a8f581b448ea9ed0ccd6be864fca6-12541995-images-thumbs&n=13",
            "category": "Морские круизы",
            "description": "Яхта класса люкс с просторными suite и ресторанами от Томаса Келлера",
            "price": 880000,
            "stars": 5,
            "features": ["Просторные сьюты", "Рестораны от знаменитого шефа", "Marina platform", "Все портовые сборы включены"]
        },
        {
            "id": 182,
            "name": "Regent Seven Seas",
            "image": "https://i.pinimg.com/736x/18/73/4c/18734c808209c87373a195cbfaf83d96.jpg",
            "category": "Морские круизы",
            "description": "Круиз все включение премиум уровня с бизнес-перелетами и предкруизным отелем",
            "price": 1100000,
            "stars": 5,
            "features": ["Бизнес-класс авиаперелет", "Предкруизный отель", "Экскурсии на выбор", "Бесплатный визажный сервис"]
        },
        {
            "id": 183,
            "name": "Celebrity Beyond",
            "image": "https://th.bing.com/th?id=ORMS.b74ac3642b4d693cbda0bec50f8f838b&pid=Wdp",
            "category": "Морские круизы",
            "description": "Современный лайнер с каютами Infinite Veranda и инновационным дизайном",
            "price": 420000,
            "stars": 4,
            "features": ["Каюты Infinite Veranda", "Спа с морской водой", "Разнообразные рестораны", "Театр West End"]
        },
        {
            "id": 184,
            "name": "Holland America",
            "image": "https://avatars.mds.yandex.net/i?id=5dd48dd121b16ad22b94dea20018e14c_l-11540573-images-thumbs&n=13",
            "category": "Морские круизы",
            "description": "Классический круиз с каютами с балконами и обширной развлекательной программой",
            "price": 380000,
            "stars": 4,
            "features": ["Каюты с балконами", "Музыкальные выступления", "Кулинарные мастер-классы", "Спортивная палуба"]
        },
        {
            "id": 185,
            "name": "MSC Yacht Club",
            "image": "https://www.ocregister.com/wp-content/uploads/2024/12/OCR-L-TR-2025-CRUISES-04.jpg?fit=620%2C9999px&ssl=1",
            "category": "Морские круизы",
            "description": "Корабль в корабле - приватная яхт-клуб зона с отдельным рестораном и бассейном",
            "price": 550000,
            "stars": 4,
            "features": ["Приватная зона Yacht Club", "Отдельный ресторан", "Приватный бассейн", "Персональный консьерж"]
        },
        {
            "id": 186,
            "name": "Norwegian Viva",
            "image": "https://avatars.mds.yandex.net/i?id=39b7cae5ec34ebb13322b608c0d45c198fc6ce90-10608704-images-thumbs&n=13",
            "category": "Морские круизы",
            "description": "Современный лайнер с каютами The Haven и эксклюзивным доступом к зонам премиум класса",
            "price": 490000,
            "stars": 4,
            "features": ["The Haven приватная зона", "Эксклюзивный ресторан", "Приватный сан-дек", "Доступ в спа первым"]
        },
        {
            "id": 187,
            "name": "Princess Cruises",
            "image": "https://avatars.mds.yandex.net/i?id=e5b9c2f23b7c8da1bc1f8d59b0d385973177e763-5875818-images-thumbs&n=13",
            "category": "Морские круизы",
            "description": "Классический круиз с Movies Under the Stars и традиционной международной кухней",
            "price": 350000,
            "stars": 4,
            "features": ["Кино под открытым небом", "Международная кухня", "Традиционные танцы", "Обзорные палубы"]
        },
        {
            "id": 188,
            "name": "Costa Smeralda",
            "image": "https://i.pinimg.com/originals/cc/c2/54/ccc2544df35cbf8e9a9ecbcd2053ee4f.jpg",
            "category": "Морские круизы",
            "description": "Итальянский стиль круиза с каютами с видом на море и средиземноморской кухней",
            "price": 320000,
            "stars": 4,
            "features": ["Каюты с видом на море", "Итальянская кухня", "Европейский сервис", "Развлекательные шоу"]
        },
        {
            "id": 189,
            "name": "Carnival Vista",
            "image": "https://avatars.mds.yandex.net/i?id=c02ae96c89357d60eec79dc84221708e_l-5229243-images-thumbs&n=13",
            "category": "Морские круизы",
            "description": "Семейный круиз с внутренними каютами и разнообразными развлечениями для всех возрастов",
            "price": 185000,
            "stars": 3,
            "features": ["Внутренние каюты", "Аквапарк на борту", "Детские клубы", "Неформальная атмосфера"]
        },
        {
            "id": 190,
            "name": "Royal Caribbean",
            "image": "https://store.pac.ru/images/site/p640x420/45/457a6245-3c98-45ce-a949-cf7c7e686924.jpg?cc=209192888",
            "category": "Морские круизы",
            "description": "Бюджетный круиз с каютами без окна и базовыми развлечениями на борту",
            "price": 150000,
            "stars": 3,
            "features": ["Каюты без окна", "Основные рестораны", "Базовые развлечения", "Бассейны на борту"]
        },
        {
            "id": 191,
            "name": "MSC Seashore",
            "image": "https://avatars.mds.yandex.net/i?id=022fe81ac362300235665e0a3c75991e6d67a820-15505573-images-thumbs&n=13",
            "category": "Морские круизы",
            "description": "Экономный вариант круиза с простыми каютами и самообслуживанием в буфете",
            "price": 120000,
            "stars": 3,
            "features": ["Простая каюта", "Питание в буфете", "Базовые активности", "Доступ к палубам"]
        }
    ],
    "Детский отдых": [
        {
            "id": 192,
            "name": "Magic Kingdom Resort",
            "image": "https://avatars.mds.yandex.net/i?id=7a9dd8c877ac0480caa3472d8e3e0659_l-10349474-images-thumbs&n=13",
            "category": "Детский отдых",
            "description": "Волшебный курорт с тематическими зонами, аквапарком и анимацией 24/7 для незабываемого отдыха с детьми",
            "price": 250000,
            "stars": 5,
            "features": ["Тематический аквапарк", "Детский клуб с нянями", "Шоу персонажей", "Безопасная территория"]
        },
        {
            "id": 193,
            "name": "Pirates Adventure Bay",
            "image": "https://siapress.ru/images/news/main/124063-93-mln-rubley-potratili-na-letniy-otdih-shkolnikov-v-surgutskom-rayone.jpg",
            "category": "Детский отдых",
            "description": "Пиратский тематический парк-отель с сокровищами, квестами и водными приключениями для юных искателей приключений",
            "price": 220000,
            "stars": 5,
            "features": ["Пиратские квесты", "Водные горки", "Карта сокровищ", "Тематические номера-каюты"]
        },
        {
            "id": 194,
            "name": "Fantasy World Hotel",
            "image": "https://cdn5.imgbb.ru/user/76/761901/201902/e63de8c5935bd1efe7b5cb31b645a537.png",
            "category": "Детский отдых",
            "description": "Отель в мире сказок с замками из песка на берегу моря и интерактивными представлениями для детей всех возрастов",
            "price": 215000,
            "stars": 5,
            "features": ["Сказочные замки", "Интерактивные шоу", "Мастер-классы волшебства", "Детское спа"]
        },
        {
            "id": 195,
            "name": "Dino Land Resort",
            "image": "https://i.pinimg.com/originals/bd/30/93/bd30938ec151762c7b6d3597e7228e66.jpg",
            "category": "Детский отдых",
            "description": "Путешествие в водный мир,в котором детей ждет море аттракционов, игр и анаимаций",
            "price": 200000,
            "stars": 5,
            "features": ["Раскопки динозавров", "Научная лаборатория", "3D сафари", "Образовательные программы"]
        },
        {
            "id": 196,
            "name": "Aqua Fantasy Palace",
            "image": "https://avatars.mds.yandex.net/i?id=73ee2d61d106a87dabba8bcf8b1519a1_l-8497455-images-thumbs&n=13",
            "category": "Детский отдых",
            "description": "Водный рай с безопасными бассейнами, горками для всех возрастов и морскими программами с профессиональными инструкторами",
            "price": 205000,
            "stars": 5,
            "features": ["Детские бассейны с подогревом", "Горки для всех возрастов", "Обучение плаванию", "Водные шоу"]
        },
        {
            "id": 197,
            "name": "Sunny Kids Club",
            "image": "https://avatars.mds.yandex.net/i?id=67e79409f4c604dc21be425ce42135c4_l-4575726-images-thumbs&n=13",
            "category": "Детский отдых",
            "description": "Семейный курорт с развитой детской инфраструктурой, мини-клубом и развлечениями для разных возрастных групп",
            "price": 170000,
            "stars": 4,
            "features": ["Мини-клуб по возрастам", "Детское меню", "Игровые площадки", "Анимационная программа"]
        },
        {
            "id": 198,
            "name": "Family Beach House",
            "image": "https://www.tourdom.ru/hotline/upload/medialibrary/f5b/f5b10bfd73d265b0286ec1f3275e7a26.jpg",
            "category": "Детский отдых",
            "description": "Пляжный отель с мелководьем, песочными замками и безопасной территорией для отдыха с маленькими детьми",
            "price": 140000,
            "stars": 4,
            "features": ["Мелководный пляж", "Песочницы с игрушками", "Детские шезлонги", "Пляжные игры"]
        },
        {
            "id": 199,
            "name": "Happy Camp Resort",
            "image": "https://sundio-media.azureedge.net/products/Images/Original/700000/59000/759866-Original.jpg?width=1920&height=1280&scale=both&mode=crop",
            "category": "Детский отдых",
            "description": "Активный отдых для семей с детьми: походы, спортивные игры и творческие мастерские на природе",
            "price": 165000,
            "stars": 4,
            "features": ["Спортивные площадки", "Творческие мастерские", "Походы с гидом", "Вечерние костры"]
        },
        {
            "id": 200,
            "name": "Kids Friendly Hotel",
            "image": "https://i.pinimg.com/originals/29/13/16/291316c01764e8732624a4dc256fb452.jpg",
            "category": "Детский отдых",
            "description": "Семейный отдых с удобствами для детей и игровой комнатой",
            "price": 100000,
            "stars": 3,
            "features": ["Детская игровая комната", "Семейные номера", "Микроволновка в номере", "Прокат колясок"]
        },
        {
            "id": 201,
            "name": "Beach Kids Paradise",
            "image": "https://avatars.mds.yandex.net/i?id=21e32f49fc3dd556f671631f0f8d29b8_l-12461673-images-thumbs&n=13",
            "category": "Детский отдых",
            "description": "Простой отель у моря с песчаным пляжем и неглубокой водой для безопасного купания детей",
            "price": 105000,
            "stars": 3,
            "features": ["Песчаный пляж", "Неглубокое море", "Детский бассейн", "Пляжные игрушки"]
        },
        {
            "id": 202,
            "name": "Family Budget Inn",
            "image": "https://avatars.mds.yandex.net/i?id=a278e0d3e3ae116654378cb4b660efff_l-9029424-images-thumbs&n=13",
            "category": "Детский отдых",
            "description": "Размещение для семей с детьми с кухней и игровой зоной во дворе",
            "price": 120000,
            "stars": 3,
            "features": ["Общая кухня", "Игровая зона во дворе", "Семейные комнаты", "Бюджетное питание"]
        },
        {
            "id": 203,
            "name": "Little Stars Hotel",
            "image": "https://avatars.mds.yandex.net/i?id=c68eabbbdc47d4efc46b3bcd4864502ce137ce27-16441608-images-thumbs&n=13",
            "category": "Детский отдых",
            "description": "Семейный отель с основными удобствами для отдыха и парком развлечений рядом",
            "price": 145000,
            "stars": 3,
            "features": ["Парк развлечений рядом", "Детские кроватки", "Небольшой бассейн", "Кафе с детским меню"]
        }
    ],
};

// Названия опций
const optionTitles = {
    accommodation: {
        "hotelfive": "Отель 5 звезд",
        "hotelfour": "Отель 4 звезды", 
        "hotelthree": "Отель 3 звезды"
    },
    food: {
        "all-inclusive": "Все включено",
        "breakfast": "Только завтраки",
        "all": "Завтраки и ужины"
    },
    transfer: {
        "standard": "Стандартный трансфер",
        "vip": "VIP-трансфер"
    },
    duration: {
        "7-nights": "7 ночей",
        "10-nights": "10 ночей", 
        "14-nights": "14 ночей"
    },
    people: {
        "couple": "Для пары",
        "family": "Для семьи",
        "friends": "Для компании друзей"
    },
    gift: {
        "swimmingpool": "Визит в бассейн",
        "karaoke": "Билет в караоке", 
        "spa": "Спа-процедуры"
    }
};

// ОТЛАДОЧНАЯ ФУНКЦИЯ - добавьте в начало
function debugData() {
    console.log('=== ДЕБАГ ДАННЫХ ===');
    
    // Проверяем sessionStorage
    const storedData = sessionStorage.getItem('tourConstructionData');
    console.log('Данные в sessionStorage:', storedData);
    
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        console.log('Parsed data:', parsedData);
        
        // Проверяем структуру отелей
        console.log('Категории отелей:', Object.keys(hotelsByCategory));
        for (const category in hotelsByCategory) {
            console.log(`Отели в "${category}":`, hotelsByCategory[category].length);
            if (hotelsByCategory[category].length > 0) {
                console.log('Первый отель:', hotelsByCategory[category][0]);
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница results.html загружена');
    
    // Запускаем отладку
    debugData();
    
    const constructionData = JSON.parse(sessionStorage.getItem('tourConstructionData'));
    console.log('Данные из конструктора:', constructionData);
    
    if (!constructionData) {
        console.error('Данные не найдены в sessionStorage!');
        showNoResults();
        return;
    }

    // ДОБАВЬТЕ ПРОВЕРКУ СТРУКТУРЫ ДАННЫХ
    if (!constructionData.category || !constructionData.options) {
        console.error('Неверная структура данных:', constructionData);
        showNoResults();
        return;
    }

    displaySearchParams(constructionData);
    
    const suitableHotels = findSuitableHotels(constructionData);
    console.log('Найдено отелей:', suitableHotels.length);
    
    // ЕСЛИ НИЧЕГО НЕ НАЙДЕНО - ПОКАЗЫВАЕМ ВСЕ ОТЕЛИ КАТЕГОРИИ
    if (suitableHotels.length === 0) {
        console.log('По фильтру ничего не найдено, показываем все отели категории');
        const categoryHotels = hotelsByCategory[constructionData.category] || [];
        displayResults(categoryHotels.slice(0, 3), constructionData);
    } else {
        displayResults(suitableHotels, constructionData);
    }
});

function findSuitableHotels(data) {
    console.log('=== ФИЛЬТРАЦИЯ ОТЕЛЕЙ ===');
    const category = data.category;
    const selectedStars = getSelectedStars(data.options.accommodation);
    
    console.log('Ищем отели категории:', category);
    console.log('С звездами:', selectedStars);

    // Берем отели только нужной категории
    const categoryHotels = hotelsByCategory[category] || [];
    console.log('Все отели в категории:', categoryHotels.length);

    // Фильтруем по звездам
    const filteredHotels = categoryHotels.filter(hotel => {
        return hotel.stars === selectedStars;
    });

    console.log('После фильтрации по звездам:', filteredHotels.length);
    
    return filteredHotels;
}

// Функция получения количества звезд из выбранной опции
function getSelectedStars(accommodationOption) {
    if (!accommodationOption || !accommodationOption.value) return null;
    
    const starMap = {
        "hotelfive": 5,
        "hotelfour": 4,
        "hotelthree": 3
    };
    
    // Находим ключ опции по названию
    for (const [key, title] of Object.entries(optionTitles.accommodation)) {
        if (title === accommodationOption.value) {
            return starMap[key];
        }
    }
    
    return null;
}

// НОВАЯ ФУНКЦИЯ - получаем значение из текста
function getValueFromText(text, optionType) {
    // Ищем в optionTitles соответствие тексту
    for (const [value, title] of Object.entries(optionTitles[optionType] || {})) {
        if (title === text) {
            return value;
        }
    }
    return text; // Если не нашли, возвращаем как есть
}

// Исправленная функция displaySearchParams
function displaySearchParams(data) {
    const paramsContainer = document.getElementById('search-params');
    
    let paramsHtml = `
        <div class="param-item">
            <strong>Категория:</strong> ${data.category}
        </div>
    `;
    
    Object.entries(data.options).forEach(([optionType, optionData]) => {
        if (optionData && optionData.value) {
            // Используем значение как есть (уже человекочитаемое)
            paramsHtml += `
                <div class="param-item">
                    <strong>${getOptionLabel(optionType)}:</strong> ${optionData.value}
                </div>
            `;
        }
    });
    
    paramsContainer.innerHTML = paramsHtml;
}





function getOptionLabel(optionType) {
    const labels = {
        accommodation: "Размещение",
        food: "Питание",
        transfer: "Трансфер",
        duration: "Длительность",
        people: "Путешественники",
        gift: "Подарок"
    };
    return labels[optionType] || optionType;
}

function displayResults(hotels, searchData) {
    const resultsContainer = document.getElementById('hotels-results');
    const resultsCount = document.getElementById('results-count');
    
    if (hotels.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h3>Отелей по вашему запросу не найдено</h3>
                <p>Попробуйте изменить параметры поиска</p>
                <button class="new-search-btn" onclick="window.history.back()">Вернуться к конструктору</button>
            </div>
        `;
        resultsCount.textContent = 'Найдено отелей: 0';
        return;
    }
    
    resultsCount.textContent = `Найдено отелей: ${hotels.length}`;
    
    let resultsHtml = '<div class="hotels-grid">';
    
    hotels.forEach((hotel) => {
        const starsHtml = '★'.repeat(hotel.stars);
        
        resultsHtml += `
            <div class="hotel-card">
                <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
                
                <div class="hotel-info">
                    <h3 class="hotel-name">${hotel.name}</h3>
                    <div class="hotel-stars">${starsHtml}</div>
                    <p class="hotel-description">${hotel.description}</p>
                    
                    <div class="hotel-features">
                        ${hotel.features.map(feature => `
                            <span class="feature-tag">${feature}</span>
                        `).join('')}
                    </div>
                    
                    <!-- ВЫБРАННЫЕ ОПЦИИ ПОЛЬЗОВАТЕЛЯ -->
                    <div class="selected-options">
                        <h4>Ваши опции:</h4>
                        ${Object.entries(searchData.options).map(([type, option]) => 
                            option ? `<div class="selected-option">${getOptionLabel(type)}: ${option.value}</div>` : ''
                        ).join('')}
                    </div>
                    
                    <div class="hotel-price-section">
                        <div class="price">${hotel.price.toLocaleString('ru-RU')} руб.</div>
                        <button class="booking-btn" data-hotel-id="${hotel.id}">Забронировать</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    resultsHtml += '</div>';
    resultsContainer.innerHTML = resultsHtml;
    
    setupBookingButtons();
}

// В конструкторе сохраняем значение опции как ключ, а не текст
function updateGridItem(type, text, imageUrl, value) {
    const gridItem = document.querySelector(`.grid-item[data-type="${type}"]`);
    
    if (gridItem) {
        const imageContainer = gridItem.querySelector('.image-container');
        const placeholder = gridItem.querySelector('.placeholder');
        
        if (imageContainer && placeholder) {
            imageContainer.innerHTML = `<img src="${imageUrl}" alt="${text}">`;
            placeholder.textContent = text;
            gridItem.classList.add('filled');
            
            // Сохраняем КЛЮЧ значения, а не текст
            selectedOptions[type] = { 
                value: value, // Сохраняем ключ (например "hotelfive")
                text: text    // И текст для отображения
            };
        }
    }
}

// В обработчике селектов:
select.addEventListener('change', (e) => {
    const selectId = e.target.id;
    const selectedOption = e.target.options[e.target.selectedIndex];
    const value = selectedOption.value; // Ключ значения
    const text = selectedOption.textContent; // Текст для отображения
    const imageUrl = selectedOption.getAttribute('data-image');
    const type = selectMapping[selectId];
    
    if (value && imageUrl) {
        updateGridItem(type, text, imageUrl, value);
    }
});

function setupBookingButtons() {
    document.querySelectorAll('.booking-btn').forEach(button => {
        button.addEventListener('click', function() {
            const hotelId = this.getAttribute('data-hotel-id');
            alert(`Бронирование отеля ID: ${hotelId}`);
            // Здесь можно добавить логику бронирования
        });
    });
}

function showNoResults() {
    const resultsContainer = document.getElementById('hotels-results');
    resultsContainer.innerHTML = `
        <div class="no-results">
            <h3>Данные не найдены</h3>
            <p>Пожалуйста, вернитесь в конструктор и выберите параметры</p>
            <button class="new-search-btn" onclick="window.location.href = 'categtour.html'">Вернуться к категории туров</button>
        </div>
    `;
}





// Функция для настройки обработчиков кнопок бронирования
function setupBookingButtons() {
    document.querySelectorAll('.bookingbutton').forEach(button => {
        button.addEventListener('click', function() {
            // Получаем информацию об отеле
            const hotelCard = this.closest('.hotel-card');
            const hotelName = hotelCard.querySelector('.hotel-name').textContent;
            const hotelDescription = hotelCard.querySelector('.hotel-description').textContent;
            const hotelImage = hotelCard.querySelector('.hotel-image').src;
            const hotelPrice = hotelCard.querySelector('.room-price').textContent;
            
            // Показываем модальное окно с данными
            showBookingModal({
                hotelName: hotelName,
                hotelLocation: hotelDescription, // Используем описание как местоположение
                hotelImage: hotelImage,
                roomType: "Стандартный номер", // Заглушка, так как в данных нет информации о номерах
                roomPrice: hotelPrice,
                roomDetails: "2 взрослых" // Заглушка
            });
        });
    });
}

// Функция для показа модального окна
function showBookingModal(bookingData) {
    // Заполняем модальное окно данными
    document.getElementById('modalHotelImage').src = bookingData.hotelImage;
    document.getElementById('modalHotelImage').alt = bookingData.hotelName;
    document.getElementById('modalHotelName').textContent = bookingData.hotelName;
    document.getElementById('modalHotelLocation').textContent = bookingData.hotelLocation;
    document.getElementById('modalRoomType').textContent = bookingData.roomType;
    document.getElementById('modalRoomDetails').textContent = bookingData.roomDetails;
    document.getElementById('modalRoomPrice').textContent = bookingData.roomPrice;
    
    // Сохраняем данные о цене
    window.paymentAmount = bookingData.roomPrice;
    
    // Показываем модальное окно
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Функция для закрытия модального окна
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Обработчик формы бронирования
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const bookingData = {
                lastName: formData.get('lastName'),
                firstName: formData.get('firstName'),
                middleName: formData.get('middleName'),
                birthDate: formData.get('birthDate'),
                passportNumber: formData.get('passportNumber'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                comments: formData.get('comments')
            };
            
            // Переходим ко второму модальному окну
            goToSecondModal(bookingData);
        });
    }
    
    // Настраиваем кнопки бронирования после загрузки контента
    setTimeout(() => {
        setupBookingButtons();
    }, 500);
});

// Функция для перехода ко второму модальному окну
function goToSecondModal(bookingData) {
    // Формируем ФИО из данных
    const fio = `${bookingData.lastName} ${bookingData.firstName} ${bookingData.middleName || ''}`.trim();
    
    // Заполняем данные во втором модальном окне
    document.getElementById('confirmFio').value = fio;
    document.getElementById('confirmEmail').value = bookingData.email;
    
    // Закрываем первое и открываем второе модальное окно
    closeBookingModal();
    showSecondModal();
}

// Функция для показа второго модального окна
function showSecondModal() {
    const modal = document.getElementById('secondModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Функция для закрытия второго модального окна
function closeSecondModal() {
    const modal = document.getElementById('secondModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}


// Функция для показа модального окна с наличной оплатой
function showCashModal() {
    const modal = document.getElementById('cashModal');
    if (modal) {
        // Заполняем сумму оплаты
        document.getElementById('cashAmount').textContent = window.paymentAmount || '0 руб';
        
        // Показываем модальное окно
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Функция для закрытия модального окна с наличной оплатой
function closeCashModal() {
    const modal = document.getElementById('cashModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function printBooking() {
    // Сохраняем данные в sessionStorage
    const bookingData = {
        hotelName: document.getElementById('modalHotelName').textContent,
        roomType: document.getElementById('modalRoomType').textContent,
        amount: window.paymentAmount,
        date: new Date().toLocaleDateString('ru-RU')
    };
    
    sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
    
    // Открываем страницу cashpayment.html
    window.open('cashpayment.html', '_blank');
}

// Функция для завершения бронирования (существующая функция)
function completeBooking() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    if (paymentMethod === 'card') {
        // Переходим к оплате картой
        goToThirdModal();
    } else {
        // Показываем модальное окно для наличной оплаты
        goToCashModal();
    }
}

// Функция перехода к модальному окну с наличной оплатой
function goToCashModal() {
    // Закрываем текущее модальное окно
    closeSecondModal();
    
    // Показываем модальное окно с наличной оплатой
    showCashModal();
}

// Добавьте обработчики событий для модального окна
document.addEventListener('DOMContentLoaded', function() {
    // Закрытие по клику вне области
    const cashModal = document.getElementById('cashModal');
    if (cashModal) {
        cashModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCashModal();
            }
        });
    }
    
    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCashModal();
        }
    });
});

// Функция для перехода к третьему модальному окну
function goToThirdModal() {
    closeSecondModal();
    showThirdModal();
    
    // Заполняем информацию о платеже
    if (window.paymentAmount) {
        document.getElementById('paymentAmount').textContent = window.paymentAmount;
        document.getElementById('payButtonAmount').textContent = window.paymentAmount;
        document.getElementById('successAmount').textContent = window.paymentAmount;
    }
}


// Глобальная переменная для хранения суммы оплаты
let paymentAmount = '';

// Функция для показа третьего модального окна
function showThirdModal() {
    const modal = document.getElementById('thirdModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Показываем форму оплаты, скрываем успешный экран
        document.getElementById('paymentContent').style.display = 'block';
        document.getElementById('paymentSuccess').style.display = 'none';
        
        // Сбрасываем форму и ошибки
        resetPaymentForm();
    }
}

// Функция для сброса формы оплаты
function resetPaymentForm() {
    const form = document.getElementById('paymentForm');
    if (form) {
        form.reset();
    }
    
    // Скрываем все сообщения об ошибках
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => {
        msg.style.display = 'none';
    });
    
    // Убираем классы ошибок с полей
    const inputs = document.querySelectorAll('.card-input');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
}

// Функция для отображения ошибки
function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorElement = document.getElementById(inputId + 'Error');
    
    if (input && errorElement) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Функция для скрытия ошибки
function hideError(inputId) {
    const input = document.getElementById(inputId);
    const errorElement = document.getElementById(inputId + 'Error');
    
    if (input && errorElement) {
        input.classList.remove('error');
        errorElement.style.display = 'none';
    }
}

// Функция для валидации номера карты
function validateCardNumber(cardNumber) {
    // Удаляем все пробелы
    const cleaned = cardNumber.replace(/\s+/g, '');
    
    // Проверяем, что только цифры и длина 16 цифр
    if (!/^\d{16}$/.test(cleaned)) {
        return false;
    }
    
    // Проверяем алгоритм Луна
    let sum = 0;
    let shouldDouble = false;
    
    for (let i = cleaned.length - 1; i >= 0; i--) {
        let digit = parseInt(cleaned.charAt(i));
        
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    
    return sum % 10 === 0;
}

// Функция для валидации срока действия
function validateExpiryDate(expiryDate) {
    const pattern = /^(0[1-9]|1[0-2])\s?\/\s?([0-9]{2})$/;
    if (!pattern.test(expiryDate)) {
        return false;
    }
    
    const [month, year] = expiryDate.split('/').map(part => part.trim());
    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;
    
    if (parseInt(year) < currentYear) {
        return false;
    }
    
    if (parseInt(year) === currentYear && parseInt(month) < currentMonth) {
        return false;
    }
    
    return true;
}

// Функция для валидации CVC/CVV
function validateCVC(cvc) {
    return /^\d{3,4}$/.test(cvc);
}

// Функция для валидации имени владельца карты
function validateCardHolder(name) {
    return name.trim().length >= 3 && /^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(name);
}

// Функция для обработки оплаты
function processPayment() {
    // Получаем значения полей
    const cardNumber = document.getElementById('cardNumber').value;
    const cardHolder = document.getElementById('cardHolder').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvcCode = document.getElementById('cvcCode').value;
    
    // Сбрасываем предыдущие ошибки
    hideError('cardNumber');
    hideError('cardHolder');
    hideError('expiryDate');
    hideError('cvcCode');
    
    // Валидация полей
    let isValid = true;
    
    // Валидация номера карты
    if (!cardNumber.trim()) {
        showError('cardNumber', 'Номер карты обязателен для заполнения');
        isValid = false;
    } else if (!validateCardNumber(cardNumber)) {
        showError('cardNumber', 'Некорректный номер карты');
        isValid = false;
    }
    
    // Валидация имени владельца
    if (!cardHolder.trim()) {
        showError('cardHolder', 'Имя владельца карты обязательно для заполнения');
        isValid = false;
    } else if (!validateCardHolder(cardHolder)) {
        showError('cardHolder', 'Некорректное имя владельца карты');
        isValid = false;
    }
    
    // Валидация срока действия
    if (!expiryDate.trim()) {
        showError('expiryDate', 'Срок действия карты обязателен для заполнения');
        isValid = false;
    } else if (!validateExpiryDate(expiryDate)) {
        showError('expiryDate', 'Некорректный срок действия карты или карта просрочена');
        isValid = false;
    }
    
    // Валидация CVC/CVV
    if (!cvcCode.trim()) {
        console.log('CVC пустой - показываем ошибку');
        showError('cvcCode', 'CVC/CVV код обязателен для заполнения');
        isValid = false;
    } else if (!validateCVC(cvcCode)) {
        console.log('CVC невалидный - показываем ошибку');
        showError('cvcCode', 'Некорректный CVC/CVV код (3 или 4 цифры)');
        isValid = false;
    }

    
    if (!isValid) {
        return;
    }
    
    // Если все поля валидны, показываем экран успешной оплаты
    document.getElementById('paymentContent').style.display = 'none';
    document.getElementById('paymentSuccess').style.display = 'block';
}

// Функция для закрытия третьего модального окна
function closeThirdModal() {
    const modal = document.getElementById('thirdModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Добавляем обработчики событий для улучшения UX
document.addEventListener('DOMContentLoaded', function() {
    // Форматирование номера карты (добавление пробелов)
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '').replace(/\D/g, '');
            
            if (value.length > 0) {
                value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
                if (value.length > 19) value = value.substring(0, 19);
            }
            
            e.target.value = value;
            hideError('cardNumber');
        });
    }
    
    // Форматирование срока действия
    const expiryInput = document.getElementById('expiryDate');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value.length <= 2) {
                    value = value;
                } else {
                    value = value.substring(0, 2) + ' / ' + value.substring(2, 4);
                }
                if (value.length > 7) value = value.substring(0, 7);
            }
            
            e.target.value = value;
            hideError('expiryDate');
        });
    }
    
    // Ограничение ввода для CVC (только цифры)
    const cvcInput = document.getElementById('cvcCode');
    if (cvcInput) {
        cvcInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
            if (e.target.value.length > 4) {
                e.target.value = e.target.value.substring(0, 4);
            }
            hideError('cvcCode');
        });
    }
    
    // Ограничение ввода для имени (только буквы и пробелы)
    const cardHolderInput = document.getElementById('cardHolder');
    if (cardHolderInput) {
        cardHolderInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
            hideError('cardHolder');
        });
    }
});







