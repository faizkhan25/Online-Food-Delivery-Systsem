#  Online Food Delivery System

A **full-stack web application** built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js) that allows users to browse restaurants, view menus, add food items to their cart, place orders, and make real-time payments. It also features an **Admin Panel** for managing restaurants, menus, users, and orders, with **secure authentication**, **real-time order tracking**, and **password reset via email**.

---

## 🚀 Features

### 👤 User Features
- **User Registration & Login** with JWT authentication
- **Secure Password Hashing** using bcrypt
- **Reset Password via Email** using Gmail SMTP
- Browse restaurants and menus
- Add items to **Cart**
- Place orders with **Razorpay Payment Gateway**
- **Real-Time Order Tracking**
- View **Order History** and **Current Order Status**

### 🛠 Admin Features
- Admin Login (JWT Authentication)
- Manage **Restaurants** (Add, Update, Delete)
- Manage **Menu Items**
- Manage **Orders** and update their status in real-time
- Manage **Users**

### 🔒 Security
- JWT (JSON Web Token) based authentication
- Password encryption with **bcrypt**
- Protected API routes for Admin and Users

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- React Router
- Context API / Redux (if used)
- Axios
- CSS / TailwindCSS / Bootstrap (choose your styling method)

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt for password hashing

**Other Integrations:**
- Razorpay Payment Gateway
- Gmail SMTP for password reset
- Discount coupons support

## Discount Coupons

- SAVE25: ₹25 off
- SAVE50: ₹50 off
- SAVE75: ₹75 off
---

## 📂 Folder Structure
- *backend*: Contains the Express.js server code and Razor pay API integration.
- *frontend*: The client-side React application.
- *admin*: The admin panel frontend for managing orders and users.
