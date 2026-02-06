# Administration Panel Frontend

Невеликий фронтенд‑застосунок, створений на React.js, який відповідає за інтерфейс панелі адміністрування.  
Застосунок взаємодіє з бекенд‑мікросервісом (Spring Boot) через REST API та використовує JWT (JSON Web Token) для аутентифікації.

### Використані технології
- React.js 18;
- TypeScript;
- React Router;
- Vite;
- Redux Toolkit (RTK Query);
- Axios;
- JWT (JSON Web Token);
- Material UI;

### Логіка роботи
Клієнтський сервіс взаємодіє з серверним сервісом через такі ендпоінти:
```properties
 POST /auth/register — реєстрація нового користувача
 POST /auth/login — авторизація користувача та отримання JWT токена
 GET /auth/profile — отримання профілю користувача (з токеном у заголовку)
```

### Cтруктура проєкту
```properties
├── frontend/
├──── src/
│   ├──── app/                  # Redux store
│   │   └── store.ts
│   ├──── features/
│   │   ├── auth/               # Авторизація та реєстрація
│   │   │   ├── authSlice.ts
│   │   │   ├── authApi.ts      # RTK Query для /login, /register
│   │   │   ├── LoginPage.tsx
│   │   │   └── RegisterPage.tsx
│   │   └── dashboard/          # Панель адміністратора
│   │       └── DashboardPage.tsx
│   ├──── components/           # Загальні компоненти
│   │   └── Navbar.tsx
│   ├────── routes/             # React Router маршрути
│   │   └── AppRoutes.tsx
│   ├────── utils/              # Хелпери, токен, guard
│   │   └── authGuard.tsx
│   ├── main.tsx
│   └── App.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
├── prettier.config.js
└── .eslintrc.config.js
```

## Запуск
Запуск у IDE JetBrains WebStorm через консоль наступною командою:
```properties
npm run dev
```

### Встановлення залежностей
```properties
npm install
```


