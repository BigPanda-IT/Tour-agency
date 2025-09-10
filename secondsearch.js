// База данных отелей по категориям
const hotelsByCategory = {
    "Новогодние туры": [
        {
            id: 101,
            name: "Winter Fairy Tale Resort",
            image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400",
            rating: 5, // Добавили рейтинг
            description: "Волшебный новогодний отдых с программой для детей",
            price: 189000,
            features: ["Новогодний банкет", "Дед Мороз", "Детская анимация", "каток"],
            includedOptions: {
                accommodation: "hotelfive",
                food: "all-inclusive",
                transfer: "vip",
                duration: "7-nights",
                people: "family",
                gift: "spa"
            }
        },
        {
            id: 102,
            name: "Snow Queen Hotel",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
            rating: 4, // Добавили рейтинг
            description: "Новогодняя сказка в горах с катком и горками",
            price: 145000,
            features: ["Каток", "Горки", "Новогодний ужин", "сауна"],
            includedOptions: {
                food: "all-inclusive",
                transfer: "standard",
                duration: "10-nights",
                gift: "karaoke"
            }
        },
        {
            id: 13,
            name: "Christmas Magic Resort",
            image: "https://images.unsplash.com/photo-1543083115-5c92253eb5d3?w=400",
            rating: 4, // Добавили рейтинг
            description: "Рождественская атмосфера и праздничное настроение",
            price: 135000,
            features: ["рождественский ужин", "гирлянды", "подарки", "концерты"],
            includedOptions: {
                food: "all",
                transfer: "standard",
                duration: "14-nights",
                gift: "swimmingpool"
            }
        },
        {
            id: 14,
            name: "Frost Palace",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
            rating: 5,
            description: "Дворец в зимнем лесу с камином и горячим шоколадом",
            price: 220000,
            features: ["камин", "горячий шоколад", "санки", "зимний сад"],
            includedOptions: {
                food: "all-inclusive",
                transfer: "vip",
                duration: "7-nights",
                gift: "spa"
            }
        }
    ],

    "Свадебные туры": [
        {
            id: 21,
            name: "Romantic Paradise",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
            rating: 5,
            description: "Идеальное место для медового месяца",
            price: 220000,
            features: ["Свадебный пакет", "Романтический ужин", "SPA", "фотосессия"],
            includedOptions: {
                food: "all-inclusive",
                transfer: "vip",
                duration: "10-nights",
                gift: "spa"
            }
        },
        {
            id: 22,
            name: "Honeymoon Suite Resort",
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400",
            rating: 5,
            description: "Люксовые номера для молодоженов с видом на океан",
            price: 245000,
            features: ["люксовый номер", "джакузи", "букет", "подарок"],
            includedOptions: {
                food: "all-inclusive",
                transfer: "vip",
                duration: "14-nights",
                gift: "karaoke"
            }
        },
        {
            id: 23,
            name: "Love Story Hotel",
            image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400",
            rating: 4,
            description: "Романтическая атмосфера и незабываемые моменты",
            price: 165000,
            features: ["романтический ужин", "цветы", "музыка", "декор"],
            includedOptions: {
                food: "all-inclusive",
                transfer: "vip",
                duration: "7-nights",
                gift: "swimmingpool"
            }
        },
        {
            id: 24,
            name: "Wedding Castle",
            image: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=400",
            rating: 5,
            description: "Свадьба в настоящем замке с королевским приемом",
            price: 320000,
            features: ["замок", "королевский прием", "лимузин", "фейерверк"],
            includedOptions: {
                food: "all-inclusive",
                transfer: "vip",
                duration: "10-nights",
                gift: "spa"
            }
        }
    ],

    "Пляжный отдых": [
        {
            id: 31,
            name: "Azure Beach Resort",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
            rating: 5,
            description: "Лазурный берег и кристально чистая вода",
            price: 155000,
            features: ["private beach", "дайвинг", "бассейн", "бар"],
            includedOptions: {
                food: "all-inclusive",
                transfer: "vip",
                duration: "14-nights",
                gift: "swimmingpool"
            }
        },
        {
            id: 32,
            name: "Golden Sands Hotel",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
            rating: 4,
            description: "Золотые пески и ласковое море для идеального отдыха",
            price: 110000,
            features: ["пляж", "шезлонги", "водные виды спорта", "ресторан"],
            includedOptions: {
                food: "all",
                transfer: "standard",
                duration: "10-nights",
                gift: "karaoke"
            }
        },
        {
            id: 33,
            name: "Coral Bay Resort",
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400",
            rating: 4,
            description: "Коралловый риф и богатый подводный мир",
            price: 135000,
            features: ["снорклинг", "кораллы", "экскурсии", "SPA"],
            includedOptions: {
                food: "all-inclusive",
                transfer: "standard",
                duration: "7-nights",
                gift: "spa"
            }
        }
    ]
};

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
        "standard": "Стандарт",
        "vip": "VIP-трансфер"
    },
    duration: {
        "7-nights": "до 7 ночей",
        "10-nights": "до 10 ночей", 
        "14-nights": "до 14 ночей"
    },
    people: {
        "couple": "Пара",
        "family": "Взрослые и дети",
        "friends": "Компания друзей"
    },
    gift: {
        "swimmingpool": "Визит в бассейн",
        "karaoke": "Билет в караоке", 
        "spa": "Сеанс на массаж"
    }
};


document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница results.html загружена');
    
    // Получаем данные из конструктора
    const constructionData = JSON.parse(sessionStorage.getItem('tourConstructionData'));
    console.log('Данные из конструктора:', constructionData);
    
    if (!constructionData) {
        console.error('Данные не найдены в sessionStorage!');
        showNoResults();
        return;
    }

    // Проверяем структуру данных
    console.log('Категория:', constructionData.category);
    console.log('Опции:', constructionData.options);

    // Отображаем параметры поиска
    displaySearchParams(constructionData);
    
    // Получаем подходящие отели
    const suitableHotels = findSuitableHotels(constructionData);
    console.log('Найдено отелей:', suitableHotels.length);
    console.log('Отели:', suitableHotels);
    
    // Отображаем результаты
    displayResults(suitableHotels, constructionData);
});

function findSuitableHotels(data) {
    console.log('=== ФИЛЬТРАЦИЯ ОТЕЛЕЙ ===');
    const category = data.category;
    const options = data.options;
    
    console.log('Категория:', category);
    console.log('Выбранные опции:', options);

    // Получаем все отели выбранной категории
    const categoryHotels = hotelsByCategory[category] || [];
    console.log('Все отели в категории:', categoryHotels.length);
    
    if (categoryHotels.length === 0) {
        console.error('Нет отелей в категории:', category);
        return [];
    }

    // ВРЕМЕННО: показываем ВСЕ отели категории без фильтрации
    console.log('Показываем все отели категории (без фильтрации)');
    const result = categoryHotels.slice(0, 7);
    console.log('Будет показано отелей:', result.length);
    console.log('Отели:', result.map(h => h.name));
    
    return result;
}


function displaySearchParams(data) {
    const paramsContainer = document.getElementById('search-params');
    
    let paramsHtml = `
        <div class="param-item">
            <strong>Категория:</strong> ${data.category}
        </div>
    `;
    
    // Добавляем выбранные опции
    Object.entries(data.options).forEach(([optionType, optionData]) => {
        if (optionData && optionData.value) {
            const optionTitle = optionTitles[optionType]?.[optionData.value] || optionData.value;
            paramsHtml += `
                <div class="param-item">
                    <strong>${getOptionLabel(optionType)}:</strong> ${optionTitle}
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
    
    console.log('displayResults вызвана с', hotels.length, 'отелями');
    
    if (hotels.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h3>По вашему запросу ничего не найдено</h3>
                <p>Попробуйте изменить параметры поиска</p>
                <button class="new-search-btn" onclick="window.history.back()">Вернуться к конструктору</button>
            </div>
        `;
        if (resultsCount) resultsCount.textContent = 'Найдено отелей: 0';
        return;
    }
    
    if (resultsCount) resultsCount.textContent = `Найдено отелей: ${hotels.length}`;
    
    let resultsHtml = '<div class="hotels-grid">';
    
    hotels.forEach((hotel, index) => {
        console.log(`Отель ${index + 1}:`, hotel.name);
        
        const rating = hotel.rating || 4;
        const ratingStars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
        
        resultsHtml += `
            <div class="hotel-card">
                <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image" 
                     onerror="this.src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400'">
                <div class="hotel-info">
                    <h3 class="hotel-name">${hotel.name}</h3>
                    <div class="hotel-rating">${ratingStars}</div>
                    <p class="hotel-description">${hotel.description}</p>
                    
                    <div class="hotel-features">
                        ${hotel.features.map(feature => `
                            <span class="feature-tag">${feature}</span>
                        `).join('')}
                    </div>
                    
                    <div class="room-price">${hotel.price.toLocaleString('ru-RU')} руб.</div>
                    <button class="bookingbutton">Забронировать</button>
                </div>
            </div>
        `;
    });
    
    resultsHtml += '</div>';
    resultsContainer.innerHTML = resultsHtml;
    
    setupBookingButtons();
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
};





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

// Функция для завершения бронирования (ваша существующая функция)
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


// Функция для перехода к модальному окну с сообщением об оплате наличными
function goToThirdModal() {
    closeSecondModal();
    showCashModal();
}


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







