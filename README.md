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

### 5. Если работать через докер / [wsl]
=== 

[0] docker exec -it laravel_app bash

#### поскольку это линукс нужно дать возможность писать и сохранять файлы
[1]sudo chown -R $USER:$USER . 

#### выполнение команд без которых не стартанет проект
[3]
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate

#### Установка зависимостей на фроненде
[4]
frontend npm install
[wsl/linux не забуть установить sudo apt update и sudo apt install nodejs npm -y без пакетов не заработет npm]
