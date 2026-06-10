# 📁 Complete Repository Structure

## Project Root
```
grocery-store-app/
├── frontend/                    # Next.js Frontend
├── backend/                     # Express Backend
├── package.json                 # Root package.json
├── README.md                    # Main README
├── SETUP.md                     # Setup Guide
├── DOCUMENTATION.md             # Complete Documentation
├── .gitignore                   # Git ignore file
└── REPOSITORY_STRUCTURE.md      # This file
```

---

## 📦 FRONTEND Structure

```
frontend/
├── app/
│   ├── page.tsx                 # Home page (/)
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── shop/
│   │   └── page.tsx             # Shop page (/shop)
│   ├── cart/
│   │   └── page.tsx             # Cart page (/cart)
│   ├── login/
│   │   └── page.tsx             # Login page (/login)
│   └── register/
│       └── page.tsx             # Register page (/register)
│
├── components/                  # Reusable components (empty - ready for expansion)
│   ├── Navbar.tsx              # Navigation bar
│   ├── Footer.tsx              # Footer
│   ├── ProductCard.tsx         # Product card component
│   └── Hero.tsx                # Hero section
│
├── stores/                      # Zustand state management (empty - ready for expansion)
│   └── cartStore.ts            # Cart store
│
├── lib/                         # Utility functions (empty - ready for expansion)
│   └── api.ts                  # API utilities
│
├── public/                      # Static assets
│
├── package.json                 # Dependencies:
│                                #   - react@^18.2.0
│                                #   - next@^14.0.0
│                                #   - axios@^1.6.0
│                                #   - tailwindcss@^3.3.5
│                                #   - framer-motion@^10.16.4
│                                #   - zustand@^4.4.1
│                                #   - react-icons@^4.12.0
│                                #   - react-toastify@^9.1.3
│
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
├── next.config.js              # Next.js config
├── .env.example                # Environment variables template
└── .gitignore
```

---

## 🔧 BACKEND Structure

```
backend/
├── src/
│   ├── index.js                 # Server entry point
│   │
│   ├── config/
│   │   └── database.js          # MongoDB connection setup
│   │
│   ├── models/                  # Mongoose schemas
│   │   ├── User.js              # User model
│   │   │   - name, email, password
│   │   │   - phone, address
│   │   │   - role (customer/vendor/admin)
│   │   │   - timestamps
│   │   │
│   │   ├── Product.js           # Product model
│   │   │   - name, description, price
│   │   │   - category (Fruits/Vegetables/Dairy/Bakery/Beverages/Other)
│   │   │   - image, stock
│   │   │   - vendor (ref: User)
│   │   │   - timestamps
│   │   │
│   │   └── Order.js             # Order model
│   │       - orderNumber (unique)
│   │       - customer (ref: User)
│   │       - items (array)
│   │       - totalAmount
│   │       - shippingAddress
│   │       - status (pending/confirmed/shipped/delivered/cancelled)
│   │       - paymentStatus (pending/completed/failed)
│   │       - timestamps
│   │
│   ├── middleware/
│   │   └── auth.js              # JWT authentication middleware
│   │       - authMiddleware()   # Verify JWT token
│   │       - roleMiddleware()   # Check user role
│   │
│   ├── routes/
│   │   ├── products.js          # Product routes
│   │   │   - GET /api/products (list all)
│   │   │   - GET /api/products/:id (get single)
│   │   │   - POST /api/products (create)
│   │   │   - PUT /api/products/:id (update)
│   │   │   - DELETE /api/products/:id (delete)
│   │   │
│   │   ├── auth.js              # Authentication routes
│   │   │   - POST /api/auth/register
│   │   │   - POST /api/auth/login
│   │   │   - GET /api/auth/me
│   │   │
│   │   └── orders.js            # Order routes
│   │       - POST /api/orders (create order)
│   │       - GET /api/orders (get user orders)
│   │       - GET /api/orders/:id (get order details)
│   │
│   └── utils/                   # Utility functions (empty - ready for expansion)
│
├── package.json                 # Dependencies:
│                                #   - express@^4.18.2
│                                #   - mongoose@^7.5.0
│                                #   - bcryptjs@^2.4.3
│                                #   - jsonwebtoken@^9.1.2
│                                #   - cors@^2.8.5
│                                #   - dotenv@^16.3.1
│                                #   - stripe@^13.7.0
│
├── .env.example                 # Environment variables template
│                                # PORT=5000
│                                # NODE_ENV=development
│                                # MONGODB_URI=mongodb://localhost:27017/grocery-store
│                                # JWT_SECRET=your_secret_key
│                                # JWT_EXPIRE=7d
│                                # CLIENT_URL=http://localhost:3000
│
└── .gitignore
```

---

## 🔗 Frontend API Integration

### API Base URL
```
http://localhost:5000/api
```

### Frontend to Backend Communication
```typescript
// axios default
axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
// Resolves to: http://localhost:5000/api/products
```

---

## 📊 Database Connection

```
MongoDB URI: mongodb://localhost:27017/grocery-store
Collections:
├── users (User model)
├── products (Product model)
└── orders (Order model)
```

---

## 🔐 Authentication Flow

```
1. User registers at /register
   ↓
2. Frontend sends POST to /api/auth/register
   ↓
3. Backend creates user + password hash
   ↓
4. JWT token returned to frontend
   ↓
5. Token stored in localStorage
   ↓
6. Subsequent requests include: Authorization: Bearer {token}
   ↓
7. Backend authMiddleware verifies token
```

---

## 📝 Data Models Details

### User Model
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique, lowercase),
  password: String (hashed),
  phone: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  role: String (enum: customer, vendor, admin),
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Product Model
```javascript
{
  _id: ObjectId,
  name: String (indexed),
  description: String,
  price: Number,
  category: String (enum: Fruits, Vegetables, Dairy, Bakery, Beverages, Other),
  image: String,
  stock: Number,
  vendor: ObjectId (ref: User),
  vendorName: String,
  isActive: Boolean (indexed),
  createdAt: Date,
  updatedAt: Date
}
```

### Order Model
```javascript
{
  _id: ObjectId,
  orderNumber: String (unique),
  customer: ObjectId (ref: User),
  items: [{
    product: ObjectId (ref: Product),
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  shippingAddress: {
    name: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    zipCode: String
  },
  status: String (enum: pending, confirmed, shipped, delivered, cancelled),
  paymentStatus: String (enum: pending, completed, failed),
  paymentMethod: String,
  stripePaymentId: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎯 API Endpoints Summary

### Products
| Method | Endpoint | Auth | Role |
|--------|----------|------|------|
| GET | /api/products | No | - |
| GET | /api/products/:id | No | - |
| POST | /api/products | Yes | vendor, admin |
| PUT | /api/products/:id | Yes | vendor, admin |
| DELETE | /api/products/:id | Yes | vendor, admin |

### Authentication
| Method | Endpoint | Auth |
|--------|----------|------|
| POST | /api/auth/register | No |
| POST | /api/auth/login | No |
| GET | /api/auth/me | Yes |

### Orders
| Method | Endpoint | Auth | Role |
|--------|----------|------|------|
| POST | /api/orders | Yes | customer |
| GET | /api/orders | Yes | customer |
| GET | /api/orders/:id | Yes | customer |

---

## 🌐 Frontend Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| / | page.tsx | Home page |
| /shop | shop/page.tsx | Product listing |
| /cart | cart/page.tsx | Shopping cart |
| /login | login/page.tsx | User login |
| /register | register/page.tsx | User registration |

---

## 💾 Local Storage

```javascript
// Cart items stored in localStorage
localStorage.setItem('cartItems', JSON.stringify(items))

// Auth token stored in localStorage
localStorage.setItem('token', jwt_token)
```

---

## 🚀 Ready to Use with ChatGPT!

**Copy this structure and share with ChatGPT along with your request for:**
- New features
- Bug fixes
- Code improvements
- New pages/APIs
- Database schema updates

ChatGPT will now understand your exact file structure and generate code that fits perfectly! ✨
