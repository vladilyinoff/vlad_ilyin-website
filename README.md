# My Personal Website

> Современное одностраничное приложение-резюме, построенное на React, TypeScript и Vite. Включает динамические виджеты, интернационализацию, переключение тем и плавные анимации.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)

---

## 🎯 Обзор проекта

Персональный сайт, демонстрирующий профессиональные навыки, проекты и контактную информацию. Приложение предоставляет современный пользовательский опыт с динамическим контентом, интернационализацией и адаптивным дизайном.

**Основные возможности:**
- Динамические виджеты погоды и валют с данными в реальном времени
- Полная поддержка русского и английского языков
- Система тем (светлая/тёмная) с сохранением предпочтений
- Адаптивный дизайн для всех устройств
- Оптимизация производительности и предзагрузка ресурсов

**Деплой:**
- **Frontend**: Развёрнут на [Netlify](https://www.netlify.com/)
- **Backend API**: Развёрнут на [Vercel](https://vercel.com/) (Node.js + Express.js)

---

## 🛠 Технологический стек

### Frontend
- **React 18.3** + **TypeScript 5.9** - UI библиотека с типизацией
- **Vite 6.0** - Сборщик и dev-сервер
- **React Router DOM 7.3** - Клиентская маршрутизация
- **Framer Motion 12.7** - Библиотека анимаций
- **i18next** + **react-i18next** - Интернационализация (RU/EN)
- **Axios 1.9** - HTTP-клиент
- **EmailJS 3.2** - Отправка email из браузера

### Backend
- **Node.js** + **Express.js** - Сервер для обработки API-запросов
- **OpenWeatherMap API** - Данные о погоде
- **Центральный Банк РФ** - Парсинг курсов валют с официального сайта

---

## 💾 Хранилище данных

### localStorage
Используется для **постоянного хранения** пользовательских предпочтений:
- Тема интерфейса (светлая/тёмная)
- Выбранный язык интерфейса (ru/en)

### sessionStorage
Используется для **временного хранения** данных в рамках одной сессии:
- Кэширование данных виджетов (погода, валюты)
- Оптимизация количества API-запросов
- Данные автоматически очищаются при закрытии вкладки

**Стратегия кэширования:**
1. При первой загрузке виджета — запрос к API
2. Сохранение ответа в sessionStorage
3. При повторном рендере — использование кэшированных данных

---

## 🌐 Backend API

Собственный сервер на **Node.js + Express.js**, развёрнутый на **Vercel**, обрабатывает запросы от виджетов:

**Endpoints:**
- `GET /weather?lat={latitude}&lon={longitude}` - Данные о погоде
  - Интеграция с OpenWeatherMap API
  - Получение данных по геолокации пользователя
  - Поддержка русского и английского языков

- `GET /currency` - Курсы валют
  - Парсинг XML данных с официального сайта ЦБ РФ
  - Обработка и форматирование курсов USD/EUR
  - Курсы валют установлены относительно языка сайта

---

## 📁 Структура проекта

```
vlad_ilyin/
├── public/     
├── src/
│   ├── components/      # React компоненты
│   │   ├── pages/      # Страничные компоненты (home, about, portfolio, tools, contacts)
│   │   ├── menu/       # Компоненты навигации
│   │   ├── copyright/  # Компонент copyright
│   │   ├── theme_button/  # Кнопка переключения темы
│   │   ├── language_button/  # Кнопка переключения языка
│   │   ├── winter_effect/  # Зимние анимации
│   │   └── App.tsx/  # Родительский компонент
│   ├── fonts/          # Кастомные шрифты (Actay, Caveat)
│   ├── translations/    # Ресурсы i18n (ru.json, en.json)
│   ├── main.tsx        # Точка входа
│   ├── index.css        # Preload стили
│   └── preloadResources.ts
└── package.json
```

---

## 🚀 Установка и запуск

### Требования
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Установка

1. **Клонируйте репозиторий**
   ```bash
   git clone <repository-url>
   cd vlad_ilyin
   ```

2. **Установите зависимости**
   ```bash
   npm install
   ```

3. **Настройте переменные окружения**
   
   Создайте файл `.env` в корневой директории:
   ```env
   VITE_URL_SERVER_W=https://your-weather-api.vercel.app/weather
   VITE_URL_SERVER_C=https://your-currency-api.vercel.app/currency
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

4. **Запустите dev-сервер**
   ```bash
   npm run dev
   ```
   
   Приложение будет доступно по адресу `http://localhost:3000`

### Доступные команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev-сервера с HMR |
| `npm run build` | Production сборка в `dist/` |
| `npm run preview` | Предпросмотр production сборки |
| `npm run lint` | Проверка кода через ESLint |

---

## 🏗 Сборка и деплой

### Production сборка

```bash
npm run build
```

### Деплой Frontend (Netlify)

1. Убедитесь, что файл `public/_redirects` содержит:
   ```
   /*    /index.html   200
   ```

2. Настройте переменные окружения в Netlify Dashboard

3. Деплой через Git или Netlify CLI:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Деплой Backend (Vercel)

Backend сервер на Node.js + Express.js развёрнут на Vercel:
- Endpoints для виджетов погоды и валют
- Интеграция с OpenWeatherMap API
- Парсинг данных с сайта ЦБ РФ

---

## 🔍 SEO оптимизация

Проект оптимизирован для поисковых систем (**Google Search**), чтобы сайт находился в результатах поиска, а не только по прямой ссылке.

### Реализованные механизмы

- **Meta теги**: description, keywords, author, robots
- **Open Graph теги**: для корректного отображения в соцсетях
- **Google Search Console**: верификация сайта и мониторинг индексации
- **robots.txt**: настройка для поисковых роботов
- **sitemap.xml**: XML карта сайта для ускорения индексации
- **Семантическая HTML разметка**: правильная структура документа
- **Техническая оптимизация**: быстрая загрузка, мобильная адаптивность

**Результат:**
- ✅ Сайт индексируется поисковыми системами
- ✅ Появляется в результатах поиска по релевантным запросам
- ✅ Корректно отображается в сниппетах поисковой выдачи

---

## 👤 Автор

**Влад Ильин** - Frontend Engineer

- 🌐 **Портфолио**: [vladilyin.netlify.app](https://vladilyin.netlify.app/)
- 💻 **GitHub**: [@vladilyinoff](https://github.com/vladilyinoff)
- 📱 **Telegram**: [@worldhacker](https://t.me/worldhacker)
- 📷 **Instagram**: [@vladilyinoff](https://www.instagram.com/vladilyinoff/)
- 📧 **Email**: vladjsx.it@gmail.com

---

**Создано с ❤️ используя React, TypeScript, Node.js и современные веб-технологии.**
"# vlad_ilyin-website" 
