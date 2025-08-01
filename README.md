# 🛠️  KasirSir Setup Guide (React + Vite & Laravel)

## 📦 Clone Repository
```bash
git clone https://github.com/Mikoofficial404/KasirSir.git
cd KasirSir
```

## 📁 Folder React
```bash
cd fe-kasir
```

## 📦 Install dependencies:
With bun
```bash
bun install
```
With npm
```bash
npm install
```
## 🚀 Run development server:
With bun
```bash
bun run dev
```
With npm
```bash
npm run dev
```
## 🔙 Backend (Laravel API)

## 📁 folder backend:
```bash
cd be-kasir
```
## 📦 Install dependencies:
```bash
composer install
```

## ⚙️ copy file .env:
```bash
cp .env.example .env
```
## 🔑 Generate APP Key:
```bash
php artisan key:generate
```
## 🔐 Generate JWT Secret:
```bash
php artisan jwt:secret
```

## 🧬 run migrasi database (opsional):
```bash
php artisan migrate
```

## 🚀 run server Laravel:
```bash
php artisan serve
```

## 📷 Demo
<img width="1895" height="991" alt="Image" src="https://github.com/user-attachments/assets/cdd511d5-474f-487d-850e-5f98c851e090" />

<img width="1895" height="994" alt="Image" src="https://github.com/user-attachments/assets/a4e3ddb2-68b1-466d-bf8d-ba14797d748e" />


