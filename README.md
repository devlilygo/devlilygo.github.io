# 🛠️ DailyXP Frontend Project Guide

## ✅ Development Environment

- **Framework**: Next.js 14 (App Router) (Turbopack not used)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui
- **Animation**: Framer Motion (if needed)
- **Directory Structure**: Modular with `src/app`, `src/components`, `src/styles`, etc.
- **Node.js Version**: **20.x (latest LTS)** recommended  
  → Use `nvm` for Node version management (`nvm install 20`)
- **UI Documentation**: Storybook (optional)  
  → Run with `npm run storybook`  
  → Write `*.stories.tsx` files based on `components/*` structure

---

## ✅ Commit Convention (Conventional Commits)

All commits follow this format:

```
<type>: message
```

### 📌 Common Types

| Type       | Description                        |
|------------|------------------------------------|
| `feat`     | Add new feature                    |
| `fix`      | Fix a bug                          |
| `refactor` | Code refactoring (no feature change) |
| `style`    | UI style changes                   |
| `chore`    | Setup, build, or other chores      |
| `docs`     | Documentation updates              |

**Examples**:

```bash
feat: implement creation screen
fix: fix XP increment logic bug
style: adjust home page padding
```

---

## ✅ Commit Checks (Husky + Commitlint)

- `commitlint` checks commit message format
- `prettier` auto-formats your code
- `lint-staged` formats only staged files before commit

### 📦 Command Summary

```bash
npm install       # Install dependencies
npm run prepare   # Initialize Husky
npm run commit    # Use commitizen for guided commits
```

---

## ✅ Folder Structure Example

```
/src
  /app
    /page.tsx             ← Home screen
    /layout.tsx           ← Global layout
  /components             ← Shared UI components
    /atoms                ← Smallest units (Button, Icon)
    /molecules            ← Combined elements
    /organisms            ← Complex UI
    /templates            ← Page-level composition
  /styles                 ← Tailwind & global styles
  /types                  ← Type definitions
  /constants              ← UI metadata
  /mock                   ← Mock data for dev
  /lib                    ← Utility functions and helpers
```

---

## 🔗 Example URL Structure

```
/app
  page.tsx                ← Home (/)
```

---

## 📦 Component Structure (Atomic Design Based)

This project is structured following the Atomic Design concept:

- `atoms`: Smallest UI units like buttons, icons
- `molecules`: Basic component combinations like input fields, cards
- `organisms`: Complex sections like lists, forms, dialogs
- `templates`: Page-level layout compositions

---

## 🧪 Testing & Lint Tools (Optional)

- Includes `eslint` + `prettier` setup
- Testing tool: Consider `vitest` or `jest` in the future

---

## 💡 Other Notes

---

✨ Lily’s portfolio project — crafted with purpose, growing with every commit.
