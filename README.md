# 🛒 Grocery Store App

A fully animated, mobile-responsive online grocery store with multi-vendor support.

## Features

- 🛍️ **Product Browsing** - Browse and search grocery items
- 🛒 **Shopping Cart** - Add/remove items with real-time updates
- 💳 **Secure Checkout** - Stripe payment integration
- 👤 **User Authentication** - JWT-based authentication
- 📦 **Order Tracking** - Real-time order status
- 👨‍💼 **Admin Dashboard** - Vendor management for products and inventory
- 📱 **Mobile Responsive** - Fully optimized for all devices
- ✨ **Smooth Animations** - Beautiful UI with Framer Motion
- 🏪 **Multi-Vendor** - Support for multiple vendors/owners

## Tech Stack

### Frontend
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Zustand (State Management)
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stripe API

## Project Structure

```
grocery-store-app/
├── frontend/           # Next.js frontend
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── public/
├── backend/           # Express backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middleware/
│   └── config/
└── README.md
```

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ankitmehra9984-lang/grocery-store-app.git
cd grocery-store-app
```

2. Install dependencies
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

3. Create `.env` files (see `.env.example` in each directory)

4. Start development servers
```bash
npm run dev
```

### Development

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Deployment

- Frontend: Deploy to Vercel
- Backend: Deploy to Railway or Render
- Database: MongoDB Atlas

## License

MIT

## Author

Created for Ankit Mehra - 2026
