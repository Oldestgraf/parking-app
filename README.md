# Parking App (React Native + Expo)

Мобільний додаток для оплати паркування з підтримкою карти, замовлень, автомобілів, карток та профілю користувача. Реалізовано на Expo (React Native) з навігацією та стилями.

---

## 🧩 Основні компоненти

### 🔘 1. CustomButton

Кнопка з динамічним заголовком та кастомним стилем.

![CustomButton Screenshot](./images/screenshots/button.png)

> Компонент: `components/CustomButton.jsx`  
> Пропси: `title`, `onPress`

---

### 🚗 2. VehicleCard

Картка з номером авто та моделлю, а також кнопкою "Edit".

![VehicleCard Screenshot](./images/screenshots/vehicle.png)

> Компонент: `components/VehicleCard.jsx`  
> Пропси: `plate`, `model`, `onEdit`

---

### 📋 3. OrdersScreen (FlatList)

Список замовлень користувача з датою, адресою та сумою.

> Екран: `screens/OrdersScreen.jsx`  
> Кожен елемент — картка замовлення, реалізована у FlatList.

---

### 🗺️ 4. MapScreen

Екран із Map та геопозицією користувача (через `expo-location` та `react-native-maps`).

> Екран: `screens/MapScreen.jsx`  
> Показує карту з маркером поточної позиції.

---

### 🧾 5. CreditCardsScreen

Простий placeholder-екран для майбутньої роботи з банківськими картками.

---

### 👤 6. ProfileScreen

Профіль користувача з телефоном, статусом та кнопкою "Logout".

---

### 📦 7. Навігація (Tab + Stack)

Поєднання `Tab.Navigator` і `Stack.Navigator` для перемикання між основними екранами та деталями.

![Orders -> OrderDetails video](./images/video/swipe-video.mp4)

> Файл: `navigation/AppNavigator.jsx`

---

## 📱 Адаптивність

- Використовується `useWindowDimensions()` для обчислення ширини/висоти
- Компоненти адаптовані під `portrait` і `landscape`
- Можна повертати екран і компоненти адаптуються до нової орієнтації

---

## 🧪 Встановлення та запуск

```bash
git clone https://github.com/yourname/parking-app.git
cd parking-app
npm install
npx expo start
