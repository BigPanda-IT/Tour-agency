// База данных отелей по категориям - ИСПРАВЛЕННАЯ
const hotelsByCategory = {
    "Новогодние туры": [
        {
            id: 101,
            name: "Winter Fairy Tale Resort",
            image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400",
            category: "Новогодние туры", // Исправлено на совпадение
            description: "Уединение и магия зимы: камин, лес и тишина заснеженного парка",
            price: 189000,
            rating: 5, // Добавлен рейтинг
            features: ["Новогодний банкет", "Дед Мороз", "Детская анимация", "каток"],
            includedOptions: {
                accommodation: "hotelfive",    // Должно совпадать с значениями в селектах
                food: "all-inclusive",        // Должно совпадать с значениями в селектах
                transfer: "vip",              // Должно совпадать с значениями в селектах
                duration: "10-nights",        // Должно совпадать с значениями в селектах
                people: "family",             // Должно совпадать с значениями в селектах
                gift: "spa"                   // Должно совпадать с значениями в селектах
            }
        },
        {
            id: 102,
            name: "Snow Queen Hotel",
            image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=400", // Исправлена картинка
            category: "Новогодние туры", // Исправлено на совпадение
            description: "Новогодняя сказка в горах с катком и горками",
            price: 145000,
            rating: 4, // Добавлен рейтинг
            features: ["Каток", "Горки", "Новогодний ужин", "сауна"],
            includedOptions: {
                accommodation: "hotelfive",
                food: "all-inclusive",
                transfer: "vip",
                duration: "7-nights",
                people: "family",
                gift: "karaoke"
            }
        },
        {
            id: 103,
            name: "Fairy Tale Resort",
            image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400",
            category: "Новогодние туры", // Исправлено на совпадение
            description: "Уединение и магия зимы: камин, лес и тишина заснеженного парка",
            price: 205000,
            rating: 3, // Добавлен рейтинг
            features: ["Новогодний банкет", "Дед Мороз", "Детская анимация", "каток"],
            includedOptions: {
                accommodation: "hotelthree",    // Должно совпадать с значениями в селектах
                food: "all-inclusive",        // Должно совпадать с значениями в селектах
                transfer: "vip",              // Должно совпадать с значениями в селектах
                duration: "10-nights",        // Должно совпадать с значениями в селектах
                people: "couple",             // Должно совпадать с значениями в селектах
                gift: "spa"                   // Должно совпадать с значениями в селектах
            }
        } 
    ] // Закрывающая скобка массива
}; // Закрывающая скобка объекта

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

// УПРОЩЕННАЯ ФУНКЦИЯ ФИЛЬТРАЦИИ
function findSuitableHotels(data) {
    console.log('=== ФИЛЬТРАЦИЯ ОТЕЛЕЙ ===');
    const category = data.category;
    const options = data.options;
    
    console.log('Ищем категорию:', category);
    console.log('С опциями:', options);

    // Получаем все отели выбранной категории
    const categoryHotels = hotelsByCategory[category] || [];
    console.log('Все отели в категории:', categoryHotels.length);
    
    if (categoryHotels.length === 0) {
        return [];
    }

    // ФИЛЬТРУЕМ отели по ВЫБРАННЫМ опциям
    const filteredHotels = categoryHotels.filter(hotel => {
        let isSuitable = true;
        
        Object.entries(options).forEach(([optionType, optionData]) => {
            // Если опция выбрана в конструкторе
            if (optionData && optionData.value) {
                const hotelOptionValue = hotel.includedOptions[optionType];
                const selectedValue = getValueFromText(optionData.value, optionType);
                
                console.log(`Опция ${optionType}: отель=${hotelOptionValue}, выбрано=${selectedValue}`);
                
                if (hotelOptionValue !== selectedValue) {
                    isSuitable = false;
                }
            }
        });
        
        return isSuitable;
    });

    console.log('После фильтрации осталось отелей:', filteredHotels.length);
    
    return filteredHotels;
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
    
    hotels.forEach((hotel) => {
        const rating = hotel.rating || 4;
        const ratingStars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
        
        // Получаем человекочитаемые названия ВСЕХ опций отеля
        const accommodationType = optionTitles.accommodation[hotel.includedOptions.accommodation] || hotel.includedOptions.accommodation;
        const foodType = optionTitles.food[hotel.includedOptions.food] || hotel.includedOptions.food;
        const transferType = optionTitles.transfer[hotel.includedOptions.transfer] || hotel.includedOptions.transfer;
        const durationType = optionTitles.duration[hotel.includedOptions.duration] || hotel.includedOptions.duration;
        const peopleType = optionTitles.people[hotel.includedOptions.people] || hotel.includedOptions.people;
        const giftType = optionTitles.gift[hotel.includedOptions.gift] || hotel.includedOptions.gift;
        
        resultsHtml += `
            <div class="hotel-card">
                <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image" 
                     onerror="this.src='https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400'">
                
                <div class="hotel-info">
                    <h3 class="hotel-name">${hotel.name}</h3>
                    <div class="hotel-rating">${ratingStars}</div>
                    <p class="hotel-description">${hotel.description}</p>
                    
                    <!-- ОСНОВНЫЕ ОПЦИИ ОТЕЛЯ -->
                    <div class="hotel-features">
                        ${hotel.features.map(feature => `
                            <span class="feature-tag">${feature}</span>
                        `).join('')}
                    </div>
                    
                    <!-- ДЕТАЛИ ОПЦИЙ (автоматически подтягиваются) -->
                    <div class="hotel-details-grid">
                        <div class="detail-card">
                            <div class="detail-icon">🏨</div>
                            <div class="detail-content">
                                <span class="detail-label">Размещение</span>
                                <span class="detail-value">${accommodationType}</span>
                            </div>
                        </div>
                        
                        <div class="detail-card">
                            <div class="detail-icon">🍽️</div>
                            <div class="detail-content">
                                <span class="detail-label">Питание</span>
                                <span class="detail-value">${foodType}</span>
                            </div>
                        </div>
                        
                        <div class="detail-card">
                            <div class="detail-icon">🚗</div>
                            <div class="detail-content">
                                <span class="detail-label">Трансфер</span>
                                <span class="detail-value">${transferType}</span>
                            </div>
                        </div>
                        
                        <div class="detail-card">
                            <div class="detail-icon">🌙</div>
                            <div class="detail-content">
                                <span class="detail-label">Ночей</span>
                                <span class="detail-value">${durationType}</span>
                            </div>
                        </div>
                        
                        <div class="detail-card">
                            <div class="detail-icon">👥</div>
                            <div class="detail-content">
                                <span class="detail-label">Для кого</span>
                                <span class="detail-value">${peopleType}</span>
                            </div>
                        </div>
                        
                        <div class="detail-card">
                            <div class="detail-icon">🎁</div>
                            <div class="detail-content">
                                <span class="detail-label">Подарок</span>
                                <span class="detail-value">${giftType}</span>
                            </div>
                        </div>
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







