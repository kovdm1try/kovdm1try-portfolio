# kovdm1try-portfolio

Personal portfolio website — [kovdm1try-portfolio.vercel.app](https://kovdm1try-portfolio.vercel.app)

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | React 19, Tailwind CSS v4 |
| Animation | Motion (Framer Motion) v12 |
| 3D | Three.js, @react-three/fiber, @react-three/drei |
| State | Zustand |
| Icons | react-icons |
| Fonts | Inter, JetBrains Mono (next/font) |
| Linting | ESLint, Stylelint, Prettier |

## Pages

- **About** — hero with interactive magnetic background, info console with typewriter effect (JSON with skills & achievements)
- **Projects** — scroll-snap sections: portfolio showcase and Square-1 Helper, each with animated project card and 3D/grid backgrounds
- **Contacts** — social links with entrance animations, 3D laptop model (desktop only)

## Features

- Custom strip page transitions (Zustand-driven, no `<Link>` dependency)
- 3D scenes lazy-loaded with `dynamic` + `ssr: false`; laptop model skipped entirely on mobile
- Scroll-snap sectioned pages
- Responsive: mobile-first, breakpoint at 997px for 3D content

## Dev

```bash
npm run dev       # start dev server
npm run build     # production build
npm run lint      # ESLint + Stylelint
npm run format    # Prettier check
```

