document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modalgrid');
    const btn = document.querySelector('.btn-border-glow');
    const closeBtn = document.querySelector('.modalgrid .close');
    
    // Открываем модальное окно при клике на кнопку
    if (btn && modal) {
        btn.addEventListener('click', function() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
        });
    }
    
    // Закрываем модальное окно при клике на крестик
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Восстанавливаем скролл
        });
    }
});