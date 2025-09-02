document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("consultation-modal");
    const btn = document.getElementById("consultation-btn");
    const closeBtn = document.querySelector(".close");

    const form = document.querySelector("#consultation-modal form");
    
    const successMessage = document.createElement('div');
    successMessage.innerHTML = '<p style="color: green; text-align: center; font-weight: bold; margin-top: 20px;">Отправлено!</p>';
    successMessage.style.display = 'none';
    modal.querySelector('.modal-content').appendChild(successMessage);

    btn.addEventListener("click", () => {
        modal.style.display = "block";
        form.style.display = "block"; // Показываем форму
        successMessage.style.display = "none"; // Скрываем сообщение
        form.reset(); // Очищаем форму
    });

    // Закрытие на крестик
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрытие при клике вне формы
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        form.style.display = "none";
        successMessage.style.display = "block";

        setTimeout(() => {
            modal.style.display = "none";
        }, 5000);
    });

    const countries = ["ШРИ-ЛАНКА", "ТАИЛАНД", "СЕЙШЕЛЫ", "МАЛЬДИВЫ", "ВЬЕТНАМ", "ТУРЦИЯ", "ОАЭ", "ЕГИПЕТ", "КУБА"];
    const titleElement = document.getElementById("country-title");
    let currentIndex = 0;

    async function changeCountry() {
    titleElement.classList.add("fade-out");
    await new Promise(resolve => setTimeout(resolve, 700));
    currentIndex = (currentIndex + 1) % countries.length;
    titleElement.textContent = countries[currentIndex];
    titleElement.classList.remove("fade-out");
    titleElement.classList.add("fade-in");
    setTimeout(() => {
        titleElement.classList.remove("fade-in");
    }, 700);
    }
    setInterval(changeCountry, 2000);
    setTimeout(changeCountry, 2000);

    document.querySelector('.search-button').addEventListener('click', function() {
        const searchParams = {
            destination: document.getElementById('destination').value,
            departureDate: document.getElementById('departure-date').value,
            comebackDate: document.getElementById('comeback-date').value,
            category: document.getElementById('category').value,
            food: document.getElementById('food').value,
            adults: parseInt(document.getElementById('adult').value),
            children: parseInt(document.getElementById('children').value)
        };
        
        // Сохраняем в sessionStorage
        sessionStorage.setItem('tourSearchParams', JSON.stringify(searchParams));
        
        // Переходим на страницу результатов
        window.location.href = 'SearchResults.html';
    });
});