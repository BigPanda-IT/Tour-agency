// Получаем категорию из localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedCategory = localStorage.getItem('selectedTourCategory');
    const category = savedCategory || 'Путешествие';
    
    // Устанавливаем категорию в заголовок
    document.getElementById('category-title').textContent = category;
    console.log('Загружена категория:', category);
});


// Объект для хранения выбранных значений
const selectedOptions = {
    accommodation: null,
    food: null,
    duration: null,
    people: null,
    gift: null,
    transfer: null
};

// Маппинг ID селектов к типам данных
const selectMapping = {
    'accommodation-type': 'accommodation',
    'food-type': 'food',
    'transfer-type': 'transfer',
    'duration': 'duration',
    'people-count': 'people',
    'gift': 'gift'
};

// Назначаем обработчики на все селекты
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
        img.style.display = 'block'; 
        imageContainer.appendChild(img);
        
        // Обновляем текст
        placeholder.textContent = text;
        
        // Добавляем класс filled
        gridItem.classList.add('filled');
    }
}


const modalForWarning = document.getElementById('modalforwarning');
const modalMessage = document.getElementById('modal-message');
const modalClose = document.querySelector('.closeofwarningwindow');
const modalOkBtn = document.getElementById('modal-ok-btn');

// Функция показа модального окна с ошибкой
function showErrorModal() {
    modalMessage.textContent = 'Пожалуйста, заполните все параметры вашего путешествия!';
    modalForWarning.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
}

// Функция скрытия модального окна
function hideErrorModal() {
    modalForWarning.style.display = 'none';
    document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
}

// Обработчики событий для модального окна
modalClose.addEventListener('click', hideErrorModal);
modalOkBtn.addEventListener('click', hideErrorModal);

// Закрытие модального окна при клике вне его области
window.addEventListener('click', (event) => {
    if (event.target === modalForWarning) {
        hideErrorModal();
    }
});

// Закрытие модального окна по клавише Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalForWarning.style.display === 'block') {
        hideErrorModal();
    }
});


// Кнопка сброса
document.getElementById('reset-btn').addEventListener('click', () => {
    // Сбрасываем селекты
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
        gift: 'Подарок',
        transfer: 'Трансфер'
    };
    return placeholders[type] || 'Выберите опцию';
}

// Кнопка отправки
document.getElementById('submit-btn').addEventListener('click', () => {
    const currentCategory = document.getElementById('category-title').textContent;

    // Проверяем, все ли поля заполнены
    const allFilled = Object.values(selectedOptions).every(value => value !== null);
    
    if (!allFilled) {
        showErrorModal();
        return;
    }

    // Сохраняем ВСЕ данные для results.html
    const tourData = {
        category: currentCategory,
        options: selectedOptions
    };
    
    console.log('Сохраняем в sessionStorage:', tourData);
    sessionStorage.setItem('tourConstructionData', JSON.stringify(tourData));
    
    // Перенаправляем
    window.location.href = `results.html`;
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