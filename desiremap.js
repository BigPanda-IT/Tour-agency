// Получаем параметр категории из URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category') || 'Путешествие';

// Устанавливаем категорию в заголовок
document.querySelector('h2').textContent = `Соберите свой тур в ${category}`;

// Объект для хранения выбранных значений
const selectedOptions = {
    accommodation: null,
    food: null,
    duration: null,
    people: null,
    room: null,
    transfer: null
};

// Маппинг ID select'ов к типам данных
const selectMapping = {
    'accommodation-type': 'accommodation',
    'food-type': 'food',
    'transfer-type': 'transfer',
    'duration': 'duration',
    'people-count': 'people',
    'room': 'room'
};

// Назначаем обработчики на все select'ы
document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', (e) => {
        const selectId = e.target.id;
        const selectedOption = e.target.options[e.target.selectedIndex];
        const value = selectedOption.value;
        const imageUrl = selectedOption.getAttribute('data-image');
        const type = selectMapping[selectId];
        
        if (value && imageUrl) {
            // Сохраняем выбор
            selectedOptions[type] = { 
                value: selectedOption.textContent, 
                image: imageUrl 
            };
            
            // Обновляем соответствующий квадрат с картинкой
            updateGridItem(type, selectedOption.textContent, imageUrl);
        }
    });
});

// Функция обновления квадрата с картинкой
function updateGridItem(type, text, imageUrl) {
    const gridItem = document.querySelector(`.grid-item[data-type="${type}"]`);
    if (!gridItem) {
        console.error(`Элемент с data-type="${type}" не найден`);
        return;
    }
    
    const imageContainer = gridItem.querySelector('.image-container');
    const placeholder = gridItem.querySelector('.placeholder');
    
    if (imageContainer && placeholder) {
        // Очищаем контейнер
        imageContainer.innerHTML = '';
        
        // Создаем и добавляем изображение
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = text;
        img.style.display = 'block'; // Исправляем display: none
        imageContainer.appendChild(img);
        
        // Обновляем текст
        placeholder.textContent = text;
        
        // Добавляем класс filled
        gridItem.classList.add('filled');
    }
}

// Кнопка сброса (упрощенная версия)
document.getElementById('reset-btn').addEventListener('click', () => {
    // Сбрасываем select'ы
    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });
    
    // Очищаем объект выбора
    Object.keys(selectedOptions).forEach(key => {
        selectedOptions[key] = null;
    });
    
    // Восстанавливаем карточки
    document.querySelectorAll('.grid-item').forEach(item => {
        const type = item.getAttribute('data-type');
        const imageContainer = item.querySelector('.image-container');
        const placeholder = item.querySelector('.placeholder');
        
        if (imageContainer && placeholder) {
            imageContainer.innerHTML = '<img src="key.jpg" alt="Выберите опцию" style="display:block;">';
            placeholder.textContent = getPlaceholderText(type);
            item.classList.remove('filled');
        }
    });
    
    // Перезапускаем анимацию синхронно
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.animation = 'none';
    });
    
    // Включаем анимацию через небольшой timeout
    setTimeout(() => {
        document.querySelectorAll('.grid-item').forEach(item => {
            item.style.animation = 'pulse 1s infinite';
        });
    }, 50);
});

// Функция для текста плейсхолдера
function getPlaceholderText(type) {
    const placeholders = {
        duration: 'Длительность',
        accommodation: 'Размещение',
        food: 'Питание',
        people: 'Путешественники',
        room: 'Тип комнаты',
        transfer: 'Трансфер'
    };
    return placeholders[type] || 'Выберите опцию';
}

// Кнопка отправки
document.getElementById('submit-btn').addEventListener('click', () => {
    // Проверяем, все ли поля заполнены
    const allFilled = Object.values(selectedOptions).every(value => value !== null);
    
    if (!allFilled) {
        alert('Пожалуйста, заполните все параметры вашего путешествия!');
        return;
    }
    
    // Здесь можно отправить данные на сервер или перейти к результатам
    console.log('Выбранные параметры:', selectedOptions);
    alert('Ищем лучшие варианты для вас!');
    
    // Пример перенаправления на страницу с результатами
    const queryParams = {
        category: category,
        ...Object.fromEntries(
            Object.entries(selectedOptions).map(([key, value]) => [key, value.value])
        )
    };
    
    const queryString = new URLSearchParams(queryParams).toString();
    console.log('Query string:', queryString);
    // window.location.href = `results.html?${queryString}`;
});

// Предзагрузка изображений для плавного отображения
function preloadImages() {
    const images = [];
    document.querySelectorAll('option[data-image]').forEach(option => {
        const img = new Image();
        img.src = option.getAttribute('data-image');
        images.push(img);
    });
    return images;
}

// Запускаем предзагрузку при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    preloadImages();
    console.log('Конструктор загружен!');
});