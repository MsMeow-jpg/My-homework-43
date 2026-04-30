# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Homework 43 — React Router Dreamland Project

## 📌 Project Description

This is a tutorial project created using **React + Vite**.

The project demonstrates how to create navigation between pages using **React Router**.

The application is styled as a fictional page from a dark fantasy cartoon-like universe inspired by **Disenchantment**.  
It has a crooked medieval kingdom atmosphere with tavern colors, parchment-style cards, sarcastic fantasy text, magical bottles, and a little demon character in the corner.

The project implements:

- React project created with Vite
- routing between multiple pages
- `BrowserRouter` for enabling routing
- `Routes` and `Route` for page configuration
- `NavLink` for navigation links
- active navigation link styling
- separate page components
- dynamic navigation links created from an array of objects
- custom fantasy cartoon-inspired UI design
- decorative image inside the main header
- clickable demon character in the page corner
- music toggle when clicking the demon

---

## 🚀 Technologies

- React
- Vite
- JavaScript (ES6+)
- CSS
- React Router
- BrowserRouter
- Routes
- Route
- NavLink
- useRef
- HTML Audio

---

## 📁 Project Structure

---

```bash
HOMEWORK 43/
   └── my-react-router-app/
         ├── node_modules/
         ├── public/
         ├── src/
         │   ├── assets/
         │   │   ├── dreamland-potions.png
         │   │   ├── little-demon.png
         │   │   └── audio/
         │   │       └── dreamland-theme.mp3
         │   ├── components/
         │   │     ├── Home.jsx
         │   │     ├── About.jsx
         │   │     └── Contact.jsx
         │   ├── App.css
         │   ├── App.jsx
         │   ├── index.css
         │   └── main.jsx
         ├── .gitignore
         ├── eslint.config.js
         ├── index.html
         ├── package-lock.json
         ├── package.json
         ├── README.md
         └── vite.config.js

 ```
---
