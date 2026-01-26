# 🌍 World Extreme Web-Application

Многофункциональное веб-приложение, построенное на современном стеке технологий:

- ⚡ **Frontend**: Vue 3 + TypeScript  
- 🔥 **Backend**: Laravel 12  
- 🐘 **Database**: PostgreSQL  
- 🐳 **Docker**: контейнеризация и простота развёртывания  

---

## 🚀 Старт

```bash
git clone https://github.com/Viacheslav1998/world-extreame.git
cd world-extreame

### 2. Сборка и запуск в фоновом режиме
docker-compose up -d --build
===

### 3. Настройка Backend (Laravel)
# Вход в контейнер 
docker exec -it laravel_app bash

# Внутри контейнера:
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan config:clear

# Даем права текущему пользователю на всю папку проекта
sudo chown -R $USER:$USER .

# Проваливаемся в backend (если структура папок это предполагает)
cd backend 

# Разрешаем запись в хранилище, кеш и базу данных (необходимо для database)
sudo chmod -R 775 storage bootstrap/cache database

### 4 Настройка Frontend
проверь свежий ли node.js (должна быть 20.x.x) если нет обнови.
node -v
cd backend 
npm install
npm run dev
```

### Полезные команды
Остановка проекта: docker-compose down
Запуск без пересборки: docker-compose up -d
Очистка кеша Laravel: docker exec laravel_app php artisan config:clear


![World-Extreame.com](https://github.com/Viacheslav1998/world-extreame/raw/main/hmx.png)
