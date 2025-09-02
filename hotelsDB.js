        const hotelsDatabase = {
            // Страны
            countries: {
                thailand: {
                    name: "Тайланд",
                    cities: ["Пхукет", "Паттайя", "Самуи"]
                },
                turkey: {
                    name: "Турция",
                    cities: ["Анталия", "Кемер", "Бодрум"]
                },
                egypt: {
                    name: "Египет",
                    cities: ["Хургада", "Шарм-эль-Шейх"]
                },
                shrilanka: {
                    name: "Шри-Ланка",
                    cities: ["Коломбо", "Бентота", "Галле"]
                },
                vietnam: {
                    name: "Вьетнам",
                    cities: ["Нячанг", "Фукуок", "Хошимин"]
                },
                uae: {
                    name: "ОАЭ",
                    cities: ["Дубай", "Абу-Даби", "Шарджа"]
                },
                kuba: {
                    name: "Куба",
                    cities: ["Варадеро", "Гавана"]
                },
                maldivs: {
                    name: "Мальдивы",
                    cities: ["Мале", "Ари Атолл"]
                },
                seishels: {
                    name: "Сейшелы",
                    cities: ["Маэ", "Праслен"]
                }
            },

            // Отели
            hotels: [
                {
                    id: 1,
                    name: "Rixos Premium Belek",
                    country: "turkey",
                    city: "Анталия",
                    rating: 5,
                    image: "https://avatars.mds.yandex.net/i?id=e406efc9d0bb3008062984fb1bc92fc6_l-9106775-images-thumbs&n=13",
                    description: "Роскошный пятизвездочный комплекс с аквапарком",
                    features: ["аквапарк", "SPA", "7 ресторанов", "частный пляж"],
                    rooms: [
                        {
                            type: "Standard Room",
                            adults: 2,
                            children: 0,
                            price: 160000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 240000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Emerald Oasis",
                    country: "turkey",
                    city: "Бодрум",
                    rating: 5,
                    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
                    description: "Экзотическое место для отдыха с семьей",
                    features: ["водные горки", "снорклинг", "дайвинг центр", "йога"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        }
                    ]
                },
                {
                    id: 3,
                    name: "Blue Lagoon Retreat",
                    country: "turkey",
                    city: "Кемер",
                    rating: 5,
                    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
                    description: "Отель с потрясающим видом и великолепным сервисом",
                    features: ["доступ к пляжу", "бар", "детский клуб", "анимация"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 4,
                    name: "Silk Sands Resort",
                    country: "turkey",
                    city: "Бодрум",
                    rating: 5,
                    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
                    description: "Отель с потрясающим видом и великолепным сервисом",
                    features: ["интернет", "конференц-зал", "прокат велосипедов", "боулинг"],
                    rooms: [
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        }
                    ]
                },
                {
                    id: 5,
                    name: "Coconut Grove Suites",
                    country: "turkey",
                    city: "Анталия",
                    rating: 4,
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
                    description: "Летний отдых с множеством водных развлечений",
                    features: ["петанк", "сауна", "вегетарианское меню", "караоке"],
                    rooms: [
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        }
                    ]
                },
                {
                    id: 6,
                    name: "Coconut Grove Suites",
                    country: "turkey",
                    city: "Кемер",
                    rating: 4,
                    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
                    description: "Модный отель с современными удобствами",
                    features: ["водные горки", "снорклинг", "дайвинг центр", "йога"],
                    rooms: [
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        }
                    ]
                },
                {
                    id: 7,
                    name: "Silk Sands Resort",
                    country: "turkey",
                    city: "Бодрум",
                    rating: 4,
                    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
                    description: "Курорт с собственным аквапарком и развлекательным центром",
                    features: ["теннисный корт", "гольф-поле", "сервис 24/7", "шведский стол"],
                    rooms: [
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 8,
                    name: "Ocean Breeze Resort",
                    country: "turkey",
                    city: "Бодрум",
                    rating: 3,
                    image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8",
                    description: "Идеальное место для романтического отпуска",
                    features: ["интернет", "конференц-зал", "прокат велосипедов", "боулинг"],
                    rooms: [
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 9,
                    name: "Sunset Paradise",
                    country: "turkey",
                    city: "Анталия",
                    rating: 3,
                    image: "https://i.pinimg.com/736x/cc/12/7d/cc127dedb52241866445503fdb8a1fac.jpg",
                    description: "Комфортное пребывание в центре города",
                    features: ["петанк", "сауна", "вегетарианское меню", "караоке"],
                    rooms: [
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 10,
                    name: "Mango Tree Inn",
                    country: "turkey",
                    city: "Бодрум",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=5c6c60b4eee0d4e5ac1f0224e51474fa_l-5337260-images-thumbs&n=13",
                    description: "Летний отдых с множеством водных развлечений",
                    features: ["клуб для подростков", "арт-мастерская", "диско-клуб", "рыбалка"],
                    rooms: [
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        }
                    ]
                },
                {
                    id: 11,
                    name: "Tropical Haven",
                    country: "shrilanka",
                    city: "Галле",
                    rating: 5,
                    image: "https://i.pinimg.com/736x/36/11/af/3611affe95c03769a814389113332ca7.jpg",
                    description: "Уютный курорт с видом на океан",
                    features: ["водные горки", "снорклинг", "дайвинг центр", "йога"],
                    rooms: [
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        }
                    ]
                },
                {
                    id: 12,
                    name: "Emerald Oasis",
                    country: "shrilanka",
                    city: "Коломбо",
                    rating: 4,
                    image: "https://avatars.mds.yandex.net/i?id=d49523a5facda50a0d91dd5842a7ca55_l-5296782-images-thumbs&n=13",
                    description: "Летний отдых с множеством водных развлечений",
                    features: ["петанк", "сауна", "вегетарианское меню", "караоке"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        }
                    ]
                },
                {
                    id: 13,
                    name: "Crystal Cove Lodges",
                    country: "shrilanka",
                    city: "Бентота",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=7ff79850ff9e4136607994a3de17e84480300079-5699743-images-thumbs&n=13",
                    description: "Экзотическое место для отдыха с семьей",
                    features: ["интернет", "конференц-зал", "прокат велосипедов", "боулинг"],
                    rooms: [
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 14,
                    name: "Coconut Grove Suites",
                    country: "shrilanka",
                    city: "Галле",
                    rating: 3,
                    image: "https://edge.travelatacdn.ru/thumbs/640x480/upload/2015_52/content_hotel_56fdfcb3e603f8.08481936.jpg",
                    description: "Летний отдых с множеством водных развлечений",
                    features: ["водные горки", "снорклинг", "дайвинг центр", "йога"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 15,
                    name: "Palm Springs Hotel",
                    country: "egypt",
                    city: "Шарм-эль-Шейх",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=476633cc07f7c0b0f5fc51ffa037d58b_l-10636511-images-thumbs&n=13",
                    description: "Роскошный отель с приватным бассейном и спа",
                    features: ["клуб для подростков", "арт-мастерская", "диско-клуб", "рыбалка"],
                    rooms: [
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        }
                    ]
                },
                {
                    id: 16,
                    name: "Coral Bay Inn",
                    country: "egypt",
                    city: "Хургада",
                    rating: 5,
                    image: "https://avatars.mds.yandex.net/i?id=27668e161d6fd0dc2f9377e92932aeb2bf80c87a-4872385-images-thumbs&n=13",
                    description: "Экзотическое место для отдыха с семьей",
                    features: ["интернет", "конференц-зал", "прокат велосипедов", "боулинг"],
                    rooms: [
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 17,
                    name: "Golden Sands Resort",
                    country: "egypt",
                    city: "Шарм-эль-Шейх",
                    rating: 5,
                    image: "https://avatars.mds.yandex.net/i?id=0852a90aa22503cf9b19fbd7ced8dabe056ebfcb-4568431-images-thumbs&n=13",
                    description: "Отель с потрясающим видом и великолепным сервисом",
                    features: ["спа-процедуры", "джакузи", "терраса для загара", "живая музыка"],
                    rooms: [
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        }
                    ]
                },
                {
                    id: 18,
                    name: "Palm Springs Hotel",
                    country: "egypt",
                    city: "Шарм-эль-Шейх",
                    rating: 4,
                    image: "https://avatars.mds.yandex.net/i?id=462558b0c88eddcfd8827429d37ea57b71e21bf2-5284035-images-thumbs&n=13",
                    description: "Отель с потрясающим видом и великолепным сервисом",
                    features: ["интернет", "конференц-зал", "прокат велосипедов", "боулинг"],
                    rooms: [
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        }
                    ]
                },
                {
                    id: 19,
                    name: "Crystal Cove Lodges",
                    country: "egypt",
                    city: "Хургада",
                    rating: 4,
                    image: "https://avatars.mds.yandex.net/i?id=4e7d79df7a2270ee7466ddb2ab9fafba_l-5580236-images-thumbs&n=13",
                    description: "Комфортное пребывание в центре города",
                    features: ["спа-процедуры", "джакузи", "терраса для загара", "живая музыка"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        }
                    ]
                },
                {
                    id: 20,
                    name: "Tropical Haven",
                    country: "egypt",
                    city: "Хургада",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=6f82f2cf100f0ab0faf30246e3e2aeea_l-5261734-images-thumbs&n=13",
                    description: "Роскошный отель с приватным бассейном и спа",
                    features: ["SPA", "бассейн", "ресторан", "тренажерный зал"],
                    rooms: [
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 21,
                    name: "Palm Springs Hotel",
                    country: "egypt",
                    city: "Шарм-эль-Шейх",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=43396ef1c0a8669512403cf3eeecc5f72546486c-16448618-images-thumbs&n=13",
                    description: "Роскошный отель с приватным бассейном и спа",
                    features: ["клуб для подростков", "арт-мастерская", "диско-клуб", "рыбалка"],
                    rooms: [
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        }
                    ]
                },
                {
                    id: 22,
                    name: "Ocean Breeze Resort",
                    country: "egypt",
                    city: "Шарм-эль-Шейх",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=f1e9a4e4959d4a8f4fddc9569685331d19bc92f2-10649741-images-thumbs&n=13",
                    description: "Укромный уголок для отдыха в тропическом раю",
                    features: ["интернет", "конференц-зал", "прокат велосипедов", "боулиng"],
                    rooms: [
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 23,
                    name: "Sunset Paradise",
                    country: "egypt",
                    city: "Хургада",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=bd65a2dec01cbbdaba65ed6efb8c768179d492c4-5239800-images-thumbs&n=13",
                    description: "Экзотическое место для отдыха с семьей",
                    features: ["клуб для подростков", "арт-мастерская", "диско-клуб", "рыбалка"],
                    rooms: [
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 24,
                    name: "The Surin Phuket",
                    country: "thailand",
                    city: "Пхукет",
                    rating: 5,
                    image: "https://avatars.mds.yandex.net/i?id=8149779c100d25fe74191865b66ac992eee7d233-11481522-images-thumbs&n=13",
                    description: "Роскошный курорт с частным пляжем и виллами у океана",
                    features: ["SPA", "2 бассейна", "ресторан", "детский клуб"],
                    rooms: [
                        {
                            type: "Deluxe Villa",
                            adults: 2,
                            children: 0,
                            price: 150000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Family Villa",
                            adults: 2,
                            children: 2,
                            price: 220000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 25,
                    name: "JW Marriott Phuket",
                    country: "thailand",
                    city: "Пхукет",
                    rating: 5,
                    image: "https://avatars.mds.yandex.net/i?id=66f88a4751a1d53cc3ab92aa01046c07_l-6887327-images-thumbs&n=13",
                    description: "Элитный курорт с частным пляжем и спа-центром",
                    features: ["SPA", "бассейн", "фитнес-центр", "3 ресторана"],
                    rooms: [
                        {
                            type: "Ocean View Room",
                            adults: 2,
                            children: 0,
                            price: 180000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 250000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 26,
                    name: "Silk Sands Resort",
                    country: "thailand",
                    city: "Паттайя",
                    rating: 5,
                    image: "https://avatars.mds.yandex.net/i?id=5519381635cf78555a688e598a0d5988efe4596f-10122207-images-thumbs&n=13",
                    description: "Идеальное место для романтического отпуска",
                    features: ["водные горки", "снорклинг", "дайвинг центр", "йога"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        }
                    ]
                },
                {
                    id: 27,
                    name: "Palm Springs Hotel",
                    country: "thailand",
                    city: "Паттайя",
                    rating: 5,
                    image: "https://avatars.mds.yandex.net/i?id=2596c4ee51230775963c110904a7885fa5b04781-5253306-images-thumbs&n=13",
                    description: "Комфортное пребывание в центре города",
                    features: ["интернет", "конференц-зал", "прокат велосипедов", "боулинг"],
                    rooms: [
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 28,
                    name: "Holiday Inn Pattaya",
                    country: "thailand",
                    city: "Паттайя",
                    rating: 4,
                    image: "https://avatars.mds.yandex.net/i?id=56fd9654a2400bdea7500fda84c4d49f392c669f-9181298-images-thumbs&n=13",
                    description: "Комфортный отель в центре Паттайи с видом на море",
                    features: ["бассейн", "фитнес-центр", "3 ресторана"],
                    rooms: [
                        {
                            type: "Standard",
                            adults: 2,
                            children: 0,
                            price: 80000,
                            food: "breakfast"
                        },
                        {
                            type: "Family Room",
                            adults: 2,
                            children: 2,
                            price: 120000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 29,
                    name: "Centara Grand Beach Resort",
                    country: "thailand",
                    city: "Паттайя",
                    rating: 4,
                    image: "https://avatars.mds.yandex.net/i?id=6043340400182a72145566f6b3ee0ea75172349a-5280865-images-thumbs&n=13",
                    description: "Отличный семейный отель с аквапарком",
                    features: ["аквапарк", "бассейн", "детский клуб", "ресторан"],
                    rooms: [
                        {
                            type: "Standard",
                            adults: 2,
                            children: 0,
                            price: 90000,
                            food: "breakfast"
                        },
                        {
                            type: "Family Room",
                            adults: 2,
                            children: 2,
                            price: 140000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 30,
                    name: "Sunshine Hotel & Spa",
                    country: "thailand",
                    city: "Паттайя",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=6f8b3fb10d37ec78c6fa9fce280b964abe3dfb45-6489726-images-thumbs&n=13",
                    description: "Уютный отель с спа-центром в центре города",
                    features: ["SPA", "бассейн", "ресторан"],
                    rooms: [
                        {
                            type: "Standard",
                            adults: 2,
                            children: 0,
                            price: 50000,
                            food: "breakfast"
                        },
                        {
                            type: "Family Room",
                            adults: 2,
                            children: 1,
                            price: 70000,
                            food: "breakfast"
                        }
                    ]
                },
                {
                    id: 31,
                    name: "Silk Sands Resort",
                    country: "thailand",
                    city: "Самуи",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=3ab53ab6ef13bbf18865022e22187075_l-2366455-images-thumbs&n=13",
                    description: "Летний отдых с множеством водных развлечений",
                    features: ["доступ к пляжу", "бар", "детский клуб", "анимация"],
                    rooms: [
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        }
                    ]
                },
                {
                    id: 32,
                    name: "Silk Sands Resort",
                    country: "kuba",
                    city: "Варадеро",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=acf1ce372b8afd9288639465392dd4885bbb54bd-12814900-images-thumbs&n=13",
                    description: "Идеальное место для романтического отпуска",
                    features: ["петанк", "сауна", "вегетарианское меню", "караоке"],
                    rooms: [
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        }
                    ]
                },
                {
                    id: 33,
                    name: "Tropical Haven",
                    country: "uae",
                    city: "Шарджа",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=3c1e2e7ce39ba4910d75e63001585863_l-5233671-images-thumbs&n=13",
                    description: "Отель с потрясающим видом и великолепным сервисом",
                    features: ["водные горки", "снорклинг", "дайвинг центр", "йога"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        }
                    ]
                },
                {
                    id: 34,
                    name: "Silk Sands Resort",
                    country: "turkey",
                    city: "Бодрум",
                    rating: 4,
                    image: "https://avatars.mds.yandex.net/i?id=15ed19e1c13b8c06ae7c6ee31615454e_l-8750458-images-thumbs&n=13",
                    description: "Курорт с собственным аквапарком и развлекательным центром",
                    features: ["теннисный корт", "гольф-поле", "сервис 24/7", "шведский стол"],
                    rooms: [
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 35,
                    name: "Crystal Cove Lodges",
                    country: "egypt",
                    city: "Хургада",
                    rating: 4,
                    image: "https://avatars.mds.yandex.net/i?id=1f6fb99c22350acac874780ea1ede84c815cf071-7045415-images-thumbs&n=13",
                    description: "Комфортное пребывание в центре города",
                    features: ["спа-процедуры", "джакузи", "терраса для загара", "живая музыка"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        }
                    ]
                },
                {
                    id: 36,
                    name: "Coconut Grove Suites",
                    country: "vietnam",
                    city: "Нячанг",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=f3e9601710f832597dbfe06a5f06cf80b8d51718-12179478-images-thumbs&n=13",
                    description: "Укромный уголок для отдыха в тропическом раю",
                    features: ["доступ к пляжу", "бар", " детский клуб", "анимация"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 37,
                    name: "Silk Sands Resort",
                    country: "thailand",
                    city: "Самуи",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=8bbff48fb55f21f8b502826546e3b5ec_l-5736044-images-thumbs&n=13",
                    description: "Летний отдых с множеством водных развлечений",
                    features: ["доступ к пляжу", "бар", " детский клуб", "анимация"],
                    rooms: [
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        }
                    ]
                },
                {
                    id: 38,
                    name: "Golden Sands Resort",
                    country: "maldivs",
                    city: "Ари Атолл",
                    rating: 4,
                    image: "https://avatars.mds.yandex.net/i?id=9a28843f1fe6819961921b36ecbc951dcb8bc412-5436735-images-thumbs&n=13",
                    description: "Курорт с собственным аквапарком и развлекательным центром",
                    features: ["петанк", "сауна", "вегетарианское меню", "караоке"],
                    rooms: [
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 39,
                    name: "Emerald Oasis",
                    country: "maldivs",
                    city: "Мале",
                    rating: 5,
                    image: "https://avatars.mds.yandex.net/i?id=6041e823277e84f9cc265f1c623610b87f79b2da-10686310-images-thumbs&n=13",
                    description: "Уютный курорт с видом на океан",
                    features: ["доступ к пляжу", "бар", " детский клуб", "анимация"],
                    rooms: [
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        }
                    ]
                },
                {
                    id: 40,
                    name: "Palm Springs Hotel",
                    country: "vietnam",
                    city: "Нячанг",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=197746b3c20e41871368f5629c214b5b0eec8e7c-16425995-images-thumbs&n=13",
                    description: "Уютный курорт с видом на океан",
                    features: ["водные горки", "снорклинг", "дайвинг центр", "йога"],
                    rooms: [
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        }
                    ]
                },
                {
                    id: 41,
                    name: "Sunset Paradise",
                    country: "egypt",
                    city: "Хургада",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=73c73271432e073ccaedd934fa75b185ddcb546f-4985796-images-thumbs&n=13",
                    description: "Экзотическое место для отдыха с семьей",
                    features: ["клуб для подростков", "арт-мастерская", "диско-клуб", "рыбалка"],
                    rooms: [
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 42,
                    name: "Coral Bay Inn",
                    country: "uae",
                    city: "Абу-Даби",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=53bcfdf9d43a8923e35c53ea5dfe3e5312c0071a-16114946-images-thumbs&n=13",
                    description: "Роскошный отель с приватным бассейном и спа",
                    features: ["теннисный корт", "гольф-поле", "сервис 24/7", "шведский стол"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        }
                    ]
                },
                {
                    id: 43,
                    name: "Coral Bay Inn",
                    country: "kuba",
                    city: "Варадеро",
                    rating: 4,
                    image: "https://avatars.mds.yandex.net/i?id=e9de66b15ae0c346d091c85814545558af1f2fed-5305969-images-thumbs&n=13",
                    description: "Роскошный отель с приватным бассейном и спа",
                    features: ["интернет", "конференц-зал", "прокат велосипедов", "боулинг"],
                    rooms: [
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        }
                    ]
                },
                {
                    id: 44,
                    name: "Emerald Oasis",
                    country: "shrilanka",
                    city: "Коломбо",
                    rating: 4,
                    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
                    description: "Летний отдых с множеством водных развлечений",
                    features: ["петанк", "сауна", "вегетарианское меню", "караоке"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        }
                    ]
                },
                {
                    id: 45,
                    name: "Mango Tree Inn",
                    country: "shrilanka",
                    city: "Галле",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=5ab410adf60a7d6273724c6c8b8e9f22b046684d-10384273-images-thumbs&n=13",
                    description: "Курорт с собственным аквапарком и развлекательным центром",
                    features: ["водные горки", "снорклинг", "дайвинг центр", "йога"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 46,
                    name: "Ocean Breeze Resort",
                    country: "egypt",
                    city: "Шарм-эль-Шейх",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=4887121d7cd7aff81ff7323f6237faca273672dd-12716743-images-thumbs&n=13",
                    description: "Укромный уголок для отдыха в тропическом раю",
                    features: ["интернет", "конференц-зал", "прокат велосипедов", "боулиng"],
                    rooms: [
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 47,
                    name: "Emerald Oasis",
                    country: "maldivs",
                    city: "Мале",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=79367ab55805b59440f6cc523583f5c66ea1729e-14682143-images-thumbs&n=13",
                    description: "Укромный уголок для отдыха в тропическом раю",
                    features: ["SPA", "бассейн", "ресторан", "тренажерный зал"],
                    rooms: [
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        }
                    ]
                },
                {
                    id: 48,
                    name: "Coconut Grove Suites",
                    country: "shrilanka",
                    city: "Галле",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=398a8116657b90aefe082ffae644d16df23644f6-9674922-images-thumbs&n=13",
                    description: "Летний отдых с множеством водных развлечений",
                    features: ["водные горки", "снорклинг", "дайвинг центр", "йога"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Bungalow",
                            adults: 2,
                            children: 2,
                            price: 300000,
                            food: "full-board"
                        },
                        {
                            type: "Presidential Suite",
                            adults: 4,
                            children: 2,
                            price: 500000,
                            food: "all-inclusive"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        },
                        {
                            type: "Deluxe Room",
                            adults: 2,
                            children: 0,
                            price: 100000,
                            food: "all-inclusive"
                        }
                    ]
                },
                {
                    id: 49,
                    name: "Blue Lagoon Retreat",
                    country: "maldivs",
                    city: "Мале",
                    rating: 3,
                    image: "https://avatars.mds.yandex.net/i?id=d1dcd57b4981915e07b5f9f9f2a78e752afd9694-4872191-images-thumbs&n=13",
                    description: "Экзотическое место для отдыха с семьей",
                    features: ["спа-процедуры", "джакузи", "терраса для загара", "живая музыка"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        }
                    ]
                },
                {
                    id: 50,
                    name: "Crystal Cove Lodges",
                    country: "maldivs",
                    city: "Ари Атолл",
                    rating: 3,
                    image: "https://i.pinimg.com/originals/b3/86/6e/b3866e87f14ec71eb8da512990d566e2.png",
                    description: "Курорт с собственным аквапарком и развлекательным центрум",
                    features: ["спа-процедуры", "джакузи", "терраса для загара", "живая музыка"],
                    rooms: [
                        {
                            type: "Family Suite",
                            adults: 2,
                            children: 2,
                            price: 200000,
                            food: "breakfast"
                        },
                        {
                            type: "Single Room",
                            adults: 1,
                            children: 0,
                            price: 75000,
                            food: "half-board"
                        }
                    ]
                },
                {
                    id: 51,
                    name: "Grand Beach Resort",
                    country: "seishels",
                    city: "Праслен",
                    rating: 5,
                    image: "https://avatars.mds.yandex.net/i?id=893162d95dfa004919939ee2c630bd12f974ebea-4076159-images-thumbs&n=13",
                    description: "Гранд-отель с видом на океан",
                    features: ["бассейн", "ресторан"],
                    rooms: [
                        {
                            type: "Standard",
                            adults: 2,
                            children: 0,
                            price: 70000,
                            food: "breakfast"
                        },
                        {
                            type: "Family Room",
                            adults: 2,
                            children: 2,
                            price: 180000,
                            food: "all-inclusive"
                        }
                    ]
                },
            ]
        }

        // Функция для фильтрации отелей по параметрам
        function filterHotels(searchParams) {
            const { destination, category, food, adults, children } = searchParams;

            return hotelsDatabase.hotels.filter(hotel => {
                // 1. Проверка страны
                if (hotel.country !== destination) return false;

                // 2. Проверка звезд (если выбрано не "Все")
                if (category !== 'all' && hotel.rating != category) return false;

                // 3. Проверка наличия подходящих номеров
                const hasSuitableRooms = hotel.rooms.some(room => {
                    // Соответствие по взрослым/детям
                    const guestsMatch = room.adults >= adults && room.children >= children;
                    
                    // Соответствие по питанию (если выбрано не "Все")
                    const foodMatch = food === 'all' || room.food === food;
                    
                    return guestsMatch && foodMatch;
                });

                return hasSuitableRooms;
            });
        }

        // Функция для сортировки и фильтрации отелей по рейтингу
        function sortAndFilterHotels() {
            const sortSelect = document.getElementById('sort-options');
            const selectedRating = sortSelect.value;
            
            const searchParams = JSON.parse(sessionStorage.getItem('tourSearchParams'));
            if (!searchParams) return;
            
            // Фильтруем отели по первоначальным параметрам
            let filteredHotels = filterHotels(searchParams);
            
            // Дополнительная фильтрация по рейтингу
            if (selectedRating !== 'allrating') {
                const ratingMap = {
                    'ratingff': 5,
                    'ratingf': 4,
                    'ratingt': 3
                };
                
                const targetRating = ratingMap[selectedRating];
                filteredHotels = filteredHotels.filter(hotel => hotel.rating === targetRating);
            }
            
            // Отображаем результаты
            displayResults(filteredHotels, searchParams);
        }

        // Функция для отображения параметров поиска
        function displaySearchParams(params) {
            const paramsContainer = document.getElementById('search-params');
            
            const countryName = hotelsDatabase.countries[params.destination]?.name || params.destination;
            const foodText = params.food === 'all' ? 'Все' : 
                            params.food === 'breakfast' ? 'Только завтрак' : 'Все включено';
            
            const paramsHtml = `
                <div class="param-item">
                    <strong>Страна:</strong> ${countryName}
                </div>
                <div class="param-item">
                    <strong>Дата вылета:</strong> ${formatDate(params.departureDate)}
                </div>
                <div class="param-item">
                    <strong>Дата прилета:</strong> ${formatDate(params.comebackDate)}
                </div>
                <div class="param-item">
                    <strong>Категория отеля:</strong> ${params.category === 'all' ? 'Все' : params.category + ' звезды'}
                </div>
                <div class="param-item">
                    <strong>Питание:</strong> ${foodText}
                </div>
                <div class="param-item">
                    <strong>Количество человек:</strong><br>${params.adults} взрослых, ${params.children} детей
                </div>
            `;
            paramsContainer.innerHTML = paramsHtml;
        }

        // Функция для отображения результатов
        function displayResults(hotels, searchParams) {
            const resultsContainer = document.getElementById('hotels-results');
            const resultsCount = document.getElementById('results-count');
            
            if (hotels.length === 0) {
                resultsContainer.innerHTML = `
                    <div class="no-results">
                        <h3>По вашему запросу ничего не найдено</h3>
                        <p>Попробуйте изменить параметры поиска</p>
                        <button class="new-search-btn" onclick="window.history.back()">Новый поиск</button>
                    </div>
                `;
                resultsCount.textContent = 'Найдено отелей: 0';
                return;
            }
            
            const sortSelect = document.getElementById('sort-options');
            const selectedRating = sortSelect ? sortSelect.value : 'allrating';
            
            let resultsHtml = '';
            
            if (selectedRating === 'allrating') {
                // Группируем отели по рейтингу
                const hotelsByRating = {
                    5: hotels.filter(hotel => hotel.rating === 5),
                    4: hotels.filter(hotel => hotel.rating === 4),
                    3: hotels.filter(hotel => hotel.rating === 3)
                };
                
                // Добавляем секции для каждого рейтинга
                [5, 4, 3].forEach(rating => {
                    if (hotelsByRating[rating].length > 0) {
                        resultsHtml += `
                            <div class="rating-section">
                                <h2 class="rating-title">
                                    <span class="rating-stars">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</span>
                                    Отели ${rating} звезд
                                </h2>
                                <div class="hotels-grid">
                        `;
                        
                        hotelsByRating[rating].forEach(hotel => {
                            resultsHtml += generateHotelCard(hotel, searchParams);
                        });
                        
                        resultsHtml += `
                                </div>
                            </div>
                        `;
                    }
                });
            } else {
                // Показываем все отели без группировки
                resultsHtml += `<div class="hotels-grid">`;
                hotels.forEach(hotel => {
                    resultsHtml += generateHotelCard(hotel, searchParams);
                });
                resultsHtml += `</div>`;
            }
            
            resultsContainer.innerHTML = resultsHtml;
            resultsCount.textContent = `Найдено отелей: ${hotels.length}`;

        }

        // Функция для настройки обработчиков кнопок бронирования
        function setupBookingButtons() {
            document.querySelectorAll('.book-btn').forEach(button => {
                button.addEventListener('click', function() {
                    // Получаем информацию о выбранном номере
                    const roomOption = this.closest('.room-option');
                    const roomType = roomOption.querySelector('.room-type').textContent;
                    const roomPrice = roomOption.querySelector('.room-price').textContent;
                    
                    // Получаем доп информацию
                    const roomDetailsSpan = roomOption.querySelector('.room-details span:first-child');
                    const roomDetails = roomDetailsSpan ? roomDetailsSpan.textContent : '';
                    
                    // Получаем информацию об отеле
                    const hotelCard = this.closest('.hotel-card');
                    const hotelName = hotelCard.querySelector('.hotel-name').textContent;
                    const hotelLocation = hotelCard.querySelector('.hotel-location').textContent;
                    const hotelImage = hotelCard.querySelector('.hotel-image').src;
                    
                    // Показываем модальное окно с данными
                    showBookingModal({
                        hotelName: hotelName,
                        hotelLocation: hotelLocation,
                        hotelImage: hotelImage,
                        roomType: roomType,
                        roomPrice: roomPrice,
                        roomDetails: roomDetails
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

        // Функция для обработки бронирования
        function processBooking(form) {
            const formData = new FormData(form);
            const bookingData = {
                tourist: {
                    lastName: formData.get('lastName'),
                    firstName: formData.get('firstName'),
                    middleName: formData.get('middleName'),
                    birthDate: formData.get('birthDate'),
                    passportNumber: formData.get('passportNumber'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    comments: formData.get('comments')
                },
                timestamp: new Date().toISOString()
            };
            console.log('Данные бронирования:', bookingData);
            alert('Бронирование успешно оформлено! С вами свяжутся для подтверждения.');
            closeBookingModal();
            form.reset();
        }

        // Настраиваем обработчики для модального окна после загрузки DOM
        document.addEventListener('DOMContentLoaded', function() {
            // Обработчик формы бронирования
            const bookingForm = document.getElementById('bookingForm');
            if (bookingForm) {
                bookingForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    processBooking(this);
                });
            }
            
            // Закрытие по клику вне области
            const bookingModal = document.getElementById('bookingModal');
            if (bookingModal) {
                bookingModal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        closeBookingModal();
                    }
                });
            }
            
            // Закрытие по Escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeBookingModal();
                }
            });
            
            // Обработчик для кнопки закрытия
            const modalClose = document.querySelector('.modal-close');
            if (modalClose) {
                modalClose.addEventListener('click', closeBookingModal);
            }
            
            // Обработчик для кнопки отмены
            const btnCancel = document.querySelector('.btn-cancel');
            if (btnCancel) {
                btnCancel.addEventListener('click', closeBookingModal);
            }
            
            // Настраиваем кнопки бронирования после загрузки контента
            setTimeout(() => {
                setupBookingButtons();
            }, 100);
        });
        

        // Вспомогательная функция для генерации карточки отеля
        function generateHotelCard(hotel, searchParams) {
            // Фильтруем номера по выбранным параметрам
            const suitableRooms = hotel.rooms.filter(room => 
                room.adults >= searchParams.adults && 
                room.children >= searchParams.children &&
                (searchParams.food === 'all' || room.food === searchParams.food)
            );
            
            if (suitableRooms.length === 0) return '';
            
            const foodText = {
                'all-inclusive': 'Все включено',
                'breakfast': 'Завтрак',
            };
            
            return `
                <div class="hotel-card">
                    <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
                    <div class="hotel-info">
                        <h3 class="hotel-name">${hotel.name}</h3>
                        <div class="hotel-rating">
                            ${'★'.repeat(hotel.rating)}${'☆'.repeat(5-hotel.rating)}
                        </div>
                        <div class="hotel-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${hotel.city}, ${hotelsDatabase.countries[hotel.country].name}
                        </div>
                        <p class="hotel-description">${hotel.description}</p>
                        
                        <div class="hotel-features">
                            ${hotel.features.map(feature => `
                                <span class="feature-tag">${feature}</span>
                            `).join('')}
                        </div>
                        
                        <h4>Доступные номера:</h4>
                        ${suitableRooms.map(room => `
                            <div class="room-option">
                                <div class="room-type">${room.type}</div>
                                <div class="room-details">
                                    <span>${room.adults} взр. + ${room.children} дет.</span>
                                    <span>${foodText[room.food] || room.food}</span>
                                </div>
                                <div class="room-price">${room.price.toLocaleString()} руб.</div>
                                <button class="book-btn">Забронировать</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Вспомогательная функция для форматирования даты
        function formatDate(dateString) {
            if (!dateString) return 'Не указана';
            const date = new Date(dateString);
            return date.toLocaleDateString('ru-RU');
        }

        // При загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            // Получаем параметры поиска из sessionStorage
            const searchParams = JSON.parse(sessionStorage.getItem('tourSearchParams'));
            
            if (!searchParams) {
                document.getElementById('hotels-results').innerHTML = `
                    <div class="no-results">
                        <h3>Параметры поиска не найдены</h3>
                        <p>Пожалуйста, выполните поиск с главной страницы</p>
                        <button class="new-search-btn" onclick="window.location.href = 'index.html'">Новый поиск</button>
                    </div>
                `;
                return;
            }
            
            // Отображаем параметры поиска
            displaySearchParams(searchParams);
            
            // Фильтруем отели
            const filteredHotels = filterHotels(searchParams);
            
            // Отображаем результаты
            displayResults(filteredHotels, searchParams);
            
            // Добавляем обработчик для select
            const sortSelect = document.getElementById('sort-options');
            if (sortSelect) {
                sortSelect.addEventListener('change', sortAndFilterHotels);
            }
        });