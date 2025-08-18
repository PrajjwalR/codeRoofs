## Ultra Viral – Signup Screen (React + Vite)

Pixel-perfect clone of the provided signup design built in a React (Vite) project. It uses plain CSS with glassmorphism, gradient borders, and a simple header.

### Tech
- React 19 + Vite 7
- Plain CSS (no UI framework)
- ESLint preconfigured

### Project structure (key files)
- `src/App.jsx` – page layout
- `src/components/Header.jsx` – top navigation with brand and search
- `src/components/SignupCard.jsx` – signup card (tabs, inputs, checkbox, CTA)
- `src/App.css` – page, header, and component styles
- `src/index.css` – base styles

### Getting started
```bash
pnpm i   # or npm install / yarn
pnpm dev # or npm run dev / yarn dev
```
Then open the printed local URL.

### Available scripts
```bash
pnpm dev       # start dev server
pnpm build     # production build
pnpm preview   # preview production build
pnpm lint      # run eslint
```

### Notes
- Tabs are visual; only the “Fan Sign Up” tab is styled as active by default. I can wire real tab switching if needed.
- Inputs are native `<input>` fields with custom styling for focus/placeholder.
- The gradient border uses `-webkit-mask` and standard `mask` for cross-browser support.

### Customization
- Replace icons or fonts as desired (currently using system fonts and emoji/SVG icons).
- To change background glows, tweak the radial-gradients in `.page` inside `src/App.css`.

### License
This project is a learning/demo clone of a provided design. Use for educational purposes.

