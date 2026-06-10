# 📁 REPOSITORY STRUCTURE FOR ChatGPT

## FRONTEND FILES
```
frontend/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Styles
│   ├── shop/page.tsx         # Shop page
│   ├── cart/page.tsx         # Cart page
│   ├── login/page.tsx        # Login page
│   └── register/page.tsx     # Register page
├── package.json              # Dependencies
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── .env.example

Dependencies:
- next@14.0.0
- react@18.2.0
- axios@1.6.0
- tailwindcss@3.3.5
- typescript@5.2.2
```

## BACKEND FILES
```
backend/
├── src/
│   ├── index.js                      # Server
│   ├── config/database.js            # MongoDB
│   ├── models/User.js                # User model
│   ├── models/Product.js             # Product model
│   ├── models/Order.js               # Order model
│   ├── middleware/auth.js            # JWT middleware
│   ├── routes/products.js            # Product APIs
│   ├── routes/auth.js                # Auth APIs
│   └── routes/orders.js              # Order APIs
├── package.json                      # Dependencies
└── .env.example

Dependencies:
- express@4.18.2
- mongoose@7.5.0
- bcryptjs@2.4.3
- jsonwebtoken@9.1.2
- cors@2.8.5
- dotenv@16.3.1
```

## DATABASE MODELS

### User
- name, email, password (hashed)
- phone, address, role (customer/vendor/admin)

### Product
- name, description, price, stock
- category (Fruits/Vegetables/Dairy/Bakery/Beverages/Other)
- vendor (ref: User), image

### Order
- orderNumber (unique), customer (ref: User)
- items (array), totalAmount
- status (pending/confirmed/shipped/delivered/cancelled)
- shippingAddress, paymentStatus

## API ROUTES

### Products
- GET /api/products
- GET /api/products/:id
- POST /api/products (vendor only)
- PUT /api/products/:id (vendor only)
- DELETE /api/products/:id (vendor only)

### Auth
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me (requires token)

### Orders
- POST /api/orders (requires token)
- GET /api/orders (requires token)
- GET /api/orders/:id (requires token)

## FRONTEND PAGES
- / (Home)
- /shop (Browse products)
- /cart (Shopping cart)
- /login (User login)
- /register (User registration)

## ENV VARIABLES

Backend:
- PORT=5000
- MONGODB_URI=mongodb://localhost:27017/grocery-store
- JWT_SECRET=your_secret_key
- JWT_EXPIRE=7d
- CLIENT_URL=http://localhost:3000
- NODE_ENV=development

Frontend:
- NEXT_PUBLIC_API_URL=http://localhost:5000/api

## AUTHENTICATION
- JWT tokens stored in localStorage
- Token included in Authorization header
- authMiddleware checks token on protected routes

## READY FOR ChatGPT
Share this structure with ChatGPT and it will generate code that fits perfectly!