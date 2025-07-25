# 🪄 Remember Last Login

Auto focuses the input field on page load for faster user interaction.

---

## 💡 What it is

- Automatically puts cursor in the input when the component mounts
- Removes one extra tap/click, especially helpful on mobile
- Great for login forms, search bars, or step-based flows

## 🧠 How it works

```ts
// Focus input when component mounts
useEffect(() => {
  inputRef.current?.focus();
}, []);
```

- Uses `useRef` to access the input DOM node
- Triggers `focus()` once on mount using `useEffect`
- Prevents unnecessary scroll with `preventScroll: true` if needed

---

## ⚙️ Tech Stack

- React (Next.js)
- Shadcn UI
- Tailwind CSS
- TypeScript

---

## 🖼️ Screenshot

![Preview](./screenshot.png)

---

## 🔗 Demo

[lilygo.vercel.app/lab#02-input-autofocus](https://lilygo.vercel.app/lab#02-input-autofocus)

---

## 💻 Source

[components/lab/02-input-autofocus](https://github.com/devlilygo/devlilygo.github.io/tree/main/src/components/lab/02-input-autofocus)
