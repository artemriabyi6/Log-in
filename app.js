// Функція для збереження логіну і паролю в localStorage
function saveToLocalStorage(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Додаємо нового користувача
    users.push({ username, password });
    
    // Зберігаємо назад в localStorage
    localStorage.setItem('users', JSON.stringify(users));
}

// Функція для входу користувача
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please enter both username and password');
        return;
    }

    // Зберігаємо дані користувача в localStorage
    saveToLocalStorage(username, password);

    // Показуємо повідомлення про успішний вхід
    alert(`User ${username} logged in successfully!`);
    
    // Очищуємо поля
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Для перевірки: отримати всіх користувачів з localStorage
function getUsersFromLocalStorage() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Saved users:', users);
}
