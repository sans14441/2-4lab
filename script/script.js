// Код для обробки натискання кнопки
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняє перезавантаження сторінки
    
    // --- ТУТ МОЖНА ЗМІНИТИ ПОВІДОМЛЕННЯ ---
    alert('Дякуємо! Ваше повідомлення надіслано.');
    this.reset(); // Очищує форму
});

// Адаптивне меню (якщо захочеш додати "бургер-меню" пізніше)
console.log("Сайт завантажено та готовий до роботи!");
let orderCount = localStorage.getItem('shaurmaCount') || 0;


const buttons = document.querySelectorAll('.add-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        orderCount++; 
        localStorage.setItem('shaurmaCount', orderCount);
    
        if (orderCount % 10 === 0) {
            alert(" Вітаємо! Це ваше 10-те замовлення. Ця шаурма для вас БЕЗКОШТОВНА!");
        } else {
            let leftToGift = 10 - (orderCount % 10);
            alert(`Додано! Залишилося ще ${leftToGift} замовлень до безкоштовної шаурми.`);
        }
        
        console.log("Всього замовлено:", orderCount);
    });
});