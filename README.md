# Todo App (React + TypeScript + Custom State Manager)

Простой и лёгкий Todo-проект на **React + TypeScript**, с самописным **стейт-менеджером**, реализованным как переиспользуемая библиотека.

---

## Технологии

-  React + TypeScript
-  Vite (сборка)
-  Custom Store (без Redux, MobX и т.п.)
-  CSS-анимации
-  Без сторонних UI/animation библиотек (по условиям ТЗ)

---

## Демонстрация

Функциональность:
- Добавление, удаление и редактирование задач
- Фильтрация: **All / Active / Completed**
- Сохранение задач в `localStorage`
- Анимации для появления/удаления элементов
- Кнопка **"Clear Completed"** с красивой анимацией

---

## Структура проекта

src/
├── App.tsx # Точка входа (только <TodoApp />)
├── types.ts # Типы данных
├── library/
│ └── store.ts # Кастомный стейт-менеджер
└── components/
├── TodoApp.tsx # Главная логика приложения
├── TodoInput.tsx
├── TodoItem.tsx
├── TodoList.tsx
├── Filters.tsx
└── Footer.tsx

---

## Установка и запуск

```bash
# 1. Клонировать репозиторий
git clone https://github.com/your-username/your-repo-name.git

# 2. Перейти в папку
cd frontend

# 3. Установить зависимости
npm install

# 4. Запустить проект
npm run dev

# 5. Открыть браузер на http://localhost:5173/
```


Разработано: 
Matvey Genchev (Junior Frontend Developer)
Сделано в рамках тестового задания для компании "ООО Аналитические программные решения"
