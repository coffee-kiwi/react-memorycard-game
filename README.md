# Pokémon Memory Game

A memory card game built with React and Vite. Click each Pokémon once to score a point, and the cards shuffle after every click. Click the same Pokémon twice and your score resets. Click all 12 without repeating to win.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+ (required by Vite)
- npm (included with Node.js)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/coffee-kiwi/react-memorycard-game.git
   cd react-memorycard-game
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Then open the local URL shown in the terminal (usually http://localhost:5173).

### Other scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run build`   | Build the app for production into `dist/`    |
| `npm run preview` | Serve the production build locally           |
| `npm run lint`    | Run ESLint over the project                  |

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
