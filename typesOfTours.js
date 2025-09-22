// БД для категорий
const tourData = {
    "🎄 Новогодние туры": {
        images: [
            "https://i.pinimg.com/736x/3c/00/57/3c0057686798689d8ca4ddcb787a1df8.jpg",
            "https://avatars.mds.yandex.net/i?id=4f2decfb0782017c77ec20945612821e_l-7863844-images-thumbs&n=13",
            "https://cdn.myslo.ru/Content/NewsImage/11/d4/11d4631e-8732-4525-9b45-759ce3e263db_3.jpg",
            "https://avatars.mds.yandex.net/i?id=81c277076c4895a9fdb04d315726939c_l-9271747-images-thumbs&n=13"
        ],
        description: "Встретьте Новый год в сказочной обстановке! Незабываемая атмосфера праздника и волшебства.",
        link: "categtour.html"
    },
    "💍 Свадебные туры": {
        images: [
            "https://avatars.mds.yandex.net/i?id=0be22ffdce409b12ea14689f5f0360fc_l-9211785-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=f34d8115dcb61bb232777446bfbae1c4_l-4819109-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=d3e9be85d4e59cca013fec76cc5d05f8_l-5235791-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=ed94ebed222fc09208e54d96af905226_l-8376360-images-thumbs&n=13"
        ],
        description: "Идеальный медовый месяц в романтических уголках мира. Создайте memories на всю жизнь.",
        link: "categtour.html"
    },
    "👑 VIP-туры и услуги": {
        images: [
            "https://avatars.mds.yandex.net/i?id=36c7cb75e815d771f4ee2dbc8182c7b5_l-16349001-images-thumbs&n=13",
            "https://i.pinimg.com/originals/3e/f0/fd/3ef0fd174dc4c65e41759d90d820f3e2.jpg",
            "https://avatars.mds.yandex.net/i?id=de4145c565f5dbe1d94a1a9794808672_l-8439163-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=ebb088cd93e1319f0e527b6c42280150_l-11723847-images-thumbs&n=13"
        ],
        description: "Эксклюзивный отдых по высшему разряду. Персональный подход и премиум-сервис.",
        link: "categtour.html"
    },
    "🌴 Отдых на островах": {
        images: [
            "https://i.pinimg.com/736x/bb/18/f2/bb18f23af7c1cc8a73c3a51da89c0e99.jpg",
            "https://i.pinimg.com/736x/12/c0/4e/12c04ebef9139052794e664ffa915af4.jpg",
            "https://www.flagman.travel/upload/medialibrary/fc7/cg4yk9ajw5cxze656wstdw4v9pvq8mdp.jpg",
            "https://avatars.mds.yandex.net/i?id=4c81c279a71b06ab54a263af23e7222af822c109-16489467-images-thumbs&n=13"
        ],
        description: "Райские острова с кристально чистой водой и белоснежными пляжами. Идеальный escape от городской суеты.",
        link: "categtour.html"
    },
    "🚢 Морские круизы": {
        images: [
            "https://avatars.mds.yandex.net/i?id=d35ed591b359f1acbec0c70d79288b8277e44708-10853576-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/get-altay/13994056/2a000001948c64e0b00012d78a11f50a0f55/orig",
            "https://avatars.mds.yandex.net/i?id=1007f59c6078b982fba7586604df3f86_l-5256019-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=f300db2d2bc7a88702ed3a630be92c9e_l-5192545-images-thumbs&n=13"
        ],
        description: "Незабываемые путешествия по морям и океанам. Все включено на роскошных лайнерах.",
        link: "categtour.html"
    },
    "🧸 Детский отдых": {
        images: [
            "https://avatars.mds.yandex.net/i?id=aa21d24c206fd7a528bc1d29dbfe151d3ac1ea54-4988309-images-thumbs&n=13",
            "https://i.pinimg.com/736x/ad/c5/f0/adc5f0487a83caba793c1c4337fe924d.jpg",
            "https://avatars.mds.yandex.net/i?id=6904a996909afbcbf772aaf38a6e5d9b_l-5281839-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=182069f19739d107692b0ddf990935d7_l-4876504-images-thumbs&n=13"
        ],
        description: "Специальные программы для детей с анимацией, квестами и развивающими занятиями.",
        link: "categtour.html"
    },
    "👨‍👩‍👧‍👦 Отдых с детьми": {
        images: [
            "https://avatars.mds.yandex.net/i?id=8f832256335b0ca5f25d72cb2cf6b955_l-5906237-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=4d0098815114bc21650e6994b7aa7c7f_l-11846045-images-thumbs&n=13",
            "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6683f56d768fc17b6577e62b_6683f71275153d43b30e82a5/scale_1200",
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/52202124.jpg?k=11178c91d5a6ea24f4894fa8427bb493f6baacaddbc40ecc9d2fbab8b48c067d&o=&s=800x"
        ],
        description: "Комфортный семейный отдых с продуманной инфраструктурой и развлечениями для всех возрастов.",
        link: "categtour.html"
    },
    "🏢 Корпоративы": {
        images: [
            "https://avatars.mds.yandex.net/i?id=0aa672c36f98897489ffda5da2d20f10_l-5232882-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=71851defdff3300d2d12687608192d41_l-4080605-images-thumbs&n=13",
            "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66cf80f9d97f5971251ad9bd_66cf84af594d2a0490095017/scale_1200",
            "https://avatars.mds.yandex.net/i?id=a8bad76136c949cd8c70a616e0b622ae_l-8242815-images-thumbs&n=13"
        ],
        description: "Тимбилдинги, бизнес-тренинги и мотивационные поездки для вашей команды.",
        link: "categtour.html"
    },
    "🏛️ Экскурсии": {
        images: [
            "https://avatars.mds.yandex.net/i?id=432836284196d58119d03e805bce0980_l-3006166-images-thumbs&n=13",
            "https://grand-auto.by/images/news/290/2049.jpg",
            "https://avatars.mds.yandex.net/i?id=f77a6a39520cf8187889f2a6eea55e69_l-4450014-images-thumbs&n=13",
            "https://kuku.travel/wp-content/uploads/2018/06/Туристический-двухэтажны-автобус.jpg"
        ],
        description: "Погружение в культуру и историю самых fascinating мест планеты с профессиональными гидами.",
        link: "categtour.html"
    },
    "🏖️ Пляжный отдых": {
        images: [
            "https://avatars.mds.yandex.net/i?id=c16399a90aa9059b87314bde642601b0_l-4406391-images-thumbs&n=13",
            "https://i.pinimg.com/736x/46/62/e7/4662e725ae23b5045df3b1ee130e6e40.jpg",
            "https://thepointsguy.global.ssl.fastly.net/us/originals/2021/11/Chairs-on-the-beach-in-Cozumel-Mexico.jpg",
            "https://static.life.ru/posts/2019/11/1257229/596ffc090e36619951410ecbf9352949.jpg"
        ],
        description: "Идеальные пляжи, лазурное море и релакс под шум прибоя. Ваш perfect getaway.",
        link: "categtour.html"
    },
    "⛰️ Горные походы": {
        images: [
            "https://avatars.mds.yandex.net/i?id=f5da8dff2a18c66dcd049bcea53298b2_l-5236662-images-thumbs&n=13",
            "https://sun9-79.userapi.com/impf/c831408/v831408748/1ce150/uZgzTnno8pA.jpg?size=807x538&quality=96&sign=eaf7e78ba506f5cc10cb63f52c1a4213&c_uniq_tag=zv9jdTi6WOO54S8hKHBrUmyrp5MoNQySa8rGe-U0MVI&type=album",
            "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_67164eb45c2f3c3980059a9f_6716666da3ca051fc1db890d/scale_1200",
            "https://avatars.mds.yandex.net/i?id=261d56f6efef714a0799891de1c4693f_l-9145122-images-thumbs&n=13"
        ],
        description: "Покоряйте снежные склоны лучших курортов мира. Яркие эмоции и адреналин гарантированы!",
        link: "categtour.html"
    },

};

// Элементы DOM
const modal = document.getElementById('tourModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');
const movingStrip = document.getElementById('movingStrip');
const closeModalButton = document.querySelector('.modal-close');

// Функция создания движущейся ленты
function createMovingStrip(images) {
    // Очищаем ленту
    movingStrip.innerHTML = '';
    movingStrip.classList.remove('animated', 'paused');
    
    // Создаем дубликаты изображений для бесконечного эффекта
    const duplicatedImages = [...images, ...images];
    
    duplicatedImages.forEach((imageSrc) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = `Фото для ${modalTitle.textContent}`;
        imgElement.classList.add('moving-strip-image');
        movingStrip.appendChild(imgElement);
    });
    
    // Запускаем анимацию после небольшой задержки
    setTimeout(() => {
        movingStrip.classList.add('animated');
    }, 100);
}

// Функция открытия модального окна
function openModal(categoryName) {
    const data = tourData[categoryName];

    if (!data) {
        console.error('Данные для категории не найдены:', categoryName);
        return;
    }

    // Устанавливаем заголовок, описание и ссылку
    modalTitle.textContent = categoryName;
    modalDescription.textContent = data.description;
    modalLink.href = data.link;

    // Создаем движущуюся ленту с изображениями
    createMovingStrip(data.images);

    // Показываем модальное окно
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Обработчик для кнопки "Узнать подробнее"
modalLink.addEventListener('click', function(e) {
    // Получаем актуальное название категории из модального окна
    const currentCategory = modalTitle.textContent;
    
    // Сохраняем в localStorage
    localStorage.setItem('selectedTourCategory', currentCategory);
    
    console.log('Сохранена категория:', currentCategory);
    
    // Продолжаем стандартное поведение ссылки
    return true;
});


// Функция закрытия модального окна
function closeModal() {
    // Останавливаем анимацию перед закрытием
    movingStrip.classList.add('paused');
    
    setTimeout(() => {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }, 300);
}

// Обработчики событий для паузы анимации при наведении
movingStrip.addEventListener('mouseenter', () => {
    movingStrip.classList.add('paused');
});

movingStrip.addEventListener('mouseleave', () => {
    movingStrip.classList.remove('paused');
});

// Назначаем обработчики на категории
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        openModal(item.textContent);
    });
});

// Обработчики для закрытия модального окна
closeModalButton.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Обработчик для остановки анимации при скрытии вкладки
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        movingStrip.classList.add('paused');
    } else {
        movingStrip.classList.remove('paused');
    }
});

