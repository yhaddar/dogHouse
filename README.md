my-app/
│
├── src/
│   │
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── home.tsx
│   │   │   ├── login/
│   │   │   │   └── home.tsx
│   │   │   └── register/
│   │   │       └── home.tsx
│   │   │
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/
│   │   │   │   └── home.tsx
│   │   │   └── users/
│   │   │       └── home.tsx
│   │   │
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── register/
│   │   │   │   │   └── route.ts
│   │   │   │   └── logout/
│   │   │   │       └── route.ts
│   │   │   │
│   │   │   ├── users/
│   │   │   │   ├── route.ts
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts
│   │   │   │
│   │   │   └── products/
│   │   │       ├── route.ts
│   │   │       └── [id]/
│   │   │           └── route.ts
│   │   │
│   │   ├── layout.tsx
│   │   └── providers.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── forms/
│   │   ├── navbar/
│   │   └── dashboard/
│   │
│   ├── redux/
│   │   ├── store.ts
│   │   ├── provider.tsx
│   │   │
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   ├── userSlice.ts
│   │   │   └── productSlice.ts
│   │   │
│   │   └── middleware/
│   │       ├── loggerMiddleware.ts
│   │       └── authMiddleware.ts
│   │
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── user.service.ts
│   │   └── product.service.ts
│   │
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── auth.ts
│   │   └── utils.ts
│   │
│   ├── validations/
│   │   ├── auth.schema.ts
│   │   ├── user.schema.ts
│   │   └── product.schema.ts
│   │
│   ├── types/
│   │   ├── auth.ts
│   │   ├── user.ts
│   │   └── product.ts
│   │
│   └── middleware.ts
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── public/
│
├── .env
├── .env.example
├── package.json
└── tsconfig.json