# 🌍 World Extreme Web-Application

Многофункциональное веб-приложение, построенное на современном стеке технологий:

- ⚡ **Frontend**: Vue 3 + TypeScript  
- 🔥 **Backend**: Laravel 12  
- 🐘 **Database**: PostgreSQL  
- 🐳 **Docker**: контейнеризация и простота развёртывания  

---

## 🚀 Старт проекта

### 1. Клонирование репозитория
```bash
git clone git@github.com:Viacheslav1998/world-extreame.git
or
git clone https://github.com/Viacheslav1998/world-extreame.git

cd world-extreame

### 2. сборка
docker-compose up -d --build
===

### 3. остановка контейнеров
docker-compose down
===

### 4. запуск контейнеров
===
docker-compose up -d

### 5. Если работать через докер
=== 

#### Выполнение миграций бд - (важно ведь без ник проект не стартанет)
docker-compose exec backend php artisan migrate

#### Установка зависимостей на фроненде
docker-compose exe frontend npm install

Альтернатива - используй cli и выполни в директоии frontend [npm i]
Также нужно установить зависимости в директории backend - [composer install] 