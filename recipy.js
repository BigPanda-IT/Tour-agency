// Получаем данные из sessionStorage
document.addEventListener('DOMContentLoaded', function() {
    const bookingData = JSON.parse(sessionStorage.getItem('bookingData'));
    
    if (bookingData) {
        // Вставляем данные в HTML
        document.getElementById('bookingDetails').innerHTML = `
            <p><strong>Отель:</strong> ${bookingData.hotelName}</p>
            <p><strong>Номер:</strong> ${bookingData.roomType}</p>
            <p><strong>Сумма к оплате:</strong> ${bookingData.amount}</p>
            <p><strong>Способ оплаты:</strong> Наличные в офисе</p>
            <p><strong>Статус:</strong> Ожидает оплаты</p>
            <p><strong>Дата бронирования:</strong> ${bookingData.date}</p>
        `;
        
        // Очищаем storage после использования
        sessionStorage.removeItem('bookingData');
    } else {
        document.getElementById('bookingDetails').innerHTML = 
            '<p style="color: red; text-align: center;">Данные бронирования не найдены</p>';
    }
});