# Paradise Nursery 🌿

A responsive plant shop built with React, Vite, and Redux Toolkit. Browse houseplants by category, add plants to your cart, adjust quantities, and view the cart total.

## Features
- Landing page with a “Get Started” button
- Six unique houseplants in three categories
- Product cards with photos, names, prices, and add-to-cart controls
- Redux Toolkit cart slice
- Cart page with quantity controls, remove buttons, total quantity, and total cost
- Navigation between Home, Plants, and Cart
- Responsive layout

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Project structure
```text
paradise-nursery/
├── public/
│   └── plants.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── data/
│   │   └── plants.js
│   ├── pages/
│   │   ├── AboutUs.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartPage.jsx
│   │   ├── ProductList.jsx
│   │   └── Welcome.jsx
│   ├── store/
│   │   └── cartSlice.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```
