# Administration Panel (Client)

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
Клієнтський сервіс взаємодіє з серверним сервісом через такі API-ендпоінти:
```properties
 POST /auth/register — реєстрація нового користувача
 POST /auth/login — авторизація користувача та отримання JWT токена
 GET  /auth/profile — отримання профілю користувача (з токеном у заголовку)
```

### Cтруктура проєкту
```properties
├── public/
├── src/
    ├──── app/                    
          └── store.ts
    ├──── features/
          ├── auth/               
              ├── authSlice.ts
              ├── authApi.ts      
              ├── LoginPage.tsx
              └── RegisterPage.tsx
          └── dashboard/         
              └── DashboardPage.tsx
    ├──── components/             
          └── Navbar.tsx
    ├──── routes/                 
          └── AppRoutes.tsx
    ├──── utils/                  
          └── authGuard.tsx
    ├── main.tsx
    └── App.tsx
├── .gitignore
├── .prettierignore
├── .prettierrc
├── README.md
├── .eslintrc.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

## Запуск
Запуск у IDE JetBrains WebStorm через консоль наступною командою:
```properties
npm run dev
```

## Оновлення всіх залежностей npm до останніх версій
Запуск у IDE JetBrains WebStorm через консоль наступними командами:
```properties
npm install -g npm-check-updates
ncu -u
npm install
```

### Встановлення залежностей
Запуск у IDE JetBrains WebStorm через консоль наступною командою:
```properties
npm install
```


