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
            id: 201,
            name: "Romantic Wedding Palace",
            image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400",
            category: "Свадебные туры",
            description: "Идеальное место для свадебного путешествия",
            price: 220000,
            stars: 5,
            features: ["Свадебный ужин", "Фотосессия", "Романтический декор"]
        }
    ]
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







