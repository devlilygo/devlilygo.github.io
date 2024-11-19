## Directory
src/
├── app/
│   ├── layout.tsx           # 전체 애플리케이션의 기본 레이아웃 (TypeScript)
│   ├── globals.css          # Tailwind CSS 전역 설정
│   ├── page.tsx             # 기본 홈 페이지 (TypeScript)
│   ├── project/
│   │   ├── layout.tsx       # 프로젝트 페이지의 레이아웃
│   │   └── page.tsx         # 프로젝트 페이지 메인 컴포넌트
│   └── about/
│       └── page.tsx         # About 페이지
│
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── molecules/
│   │   ├── Card.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── organisms/
│   │   ├── Header.tsx
│   │   ├── ProjectSection.tsx
│   │   └── ContactForm.tsx
│   └── templates/
│       ├── MainLayout.tsx
│       └── ProjectLayout.tsx
│
├── hooks/
│   └── useSomeCustomHook.ts
├── styles/
│   ├── globals.css          # Tailwind base 설정, 글로벌 스타일 (Reset 포함)
│   └── tailwind.css         # Tailwind CSS 전용 설정 파일 (Base, Components, Utilities)
├── types/
│   └── index.d.ts           # 글로벌 타입 정의 파일
└── utils/
    └── helpers.ts           # 유틸리티 함수



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
