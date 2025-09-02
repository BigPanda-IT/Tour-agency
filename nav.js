document.addEventListener('DOMContentLoaded', function() {
    const warningModal = document.getElementById('external-link-warning');
    const socialName = document.getElementById('social-name');
    const cancelBtn = document.getElementById('cancel-redirect');
    const confirmBtn = document.getElementById('confirm-redirect');
    let currentUrl = '';
    
    // Обработчики для всех иконок
    document.querySelectorAll('.warning-trigger').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем стандартный переход
            
            // Устанавливаем данные для модального окна
            currentUrl = this.getAttribute('data-url');
            socialName.textContent = this.getAttribute('data-social');
            
            // Показываем предупреждение
            warningModal.style.display = 'flex';
        });
    });
    
    // Кнопка "Остаться"
    cancelBtn.addEventListener('click', function() {
        warningModal.style.display = 'none';
    });
    
    // Кнопка "Перейти"
    confirmBtn.addEventListener('click', function() {
        warningModal.style.display = 'none';
        window.open(currentUrl, '_blank'); // Открываем в новой вкладке
    });
});