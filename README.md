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
## ⚙️ Installation and Launch
1. Clone the repository:
```bash
git clone https://github.com/MsMeow-jpg/My-homework-43
```
2. Go to the project folder:
```bash
cd My-homework-43/my-react-app
```
3. Install dependencies:
```bash
npm install
```
4. Install React Router:
```bash
npm install react-router
```
5. Launch the project:
```bash
npm run dev
```
---
After this, the project will be available at:
```
http://localhost:5173
```

---
## 🌐 Demo

🔗 Live demo:
https://my-homework-43.vercel.app/
---
## 📦 Functionality

- The project uses React Router for page navigation
- `BrowserRouter` wraps the application and enables routing
- `Routes` stores all route configurations
- `Route` connects each URL path with a separate component
- `NavLink` creates navigation links
- active navigation links are highlighted with custom CSS
- navigation works without page reload
- route links are created dynamically from an array of objects
- the project has three pages:
  - Home
  - About
  - Contact
- each page is stored in a separate component file
- a decorative fantasy image is displayed in the header
- a little demon image is fixed in the bottom-right corner
- clicking the demon turns music on and off
- custom CSS creates a dark fantasy cartoon-inspired interface
---
## 🧠 What we learned

- Creating a React project with Vite
- Installing and using React Router
- Creating separate page components
- Setting up routing in React
- Using `BrowserRouter`
- Using `Routes` and `Route`
- Using `NavLink` instead of regular links
- Styling active navigation links
- Creating navigation from an array of objects
- Importing images from the assets folder
- Adding fixed decorative elements to the page
- Using `useRef` to control audio
- Playing and pausing music on click
- Styling a React app with custom CSS
- Creating a themed UI design
---
## 🎨 Design

The application uses a dark fantasy cartoon-inspired visual style:

- crooked medieval kingdom atmosphere
- dark tavern and castle colors
- parchment-style content cards
- old fantasy notice board mood
- sarcastic kingdom-themed text
- magical bottle illustration in the header
- little demon character in the page corner
- white sticker-like outline around the demon
- custom styled navigation buttons
- warm gold, muddy green, brown, and dark purple colors
---
## 🧭 Routes
```bash
/          → Home page
/about     → Kingdom Gossip page
/contact   → Send a Raven page
```

---
## ✍️ Author

GitHub: MsMeow-jpg
---
## 📌 Note

This project was completed as part of a React + Vite course assignment.

The main goal of the project is to practice routing in React using React Router, create navigation between multiple pages, use NavLink for active link styling, and organize page components in separate files.

The project also includes a custom fantasy cartoon-inspired design to make the interface more creative and visually interesting.