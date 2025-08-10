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
- 
## 💳 Payment Integration (Razorpay)
Fully integrated Razorpay payment gateway for real-time payments.
Secure transaction handling.
Test and Live keys supported.

## 📧 Password Reset (Gmail SMTP)
Users can reset their password by entering their registered email.
Secure reset link sent to email using Gmail SMTP.
Token-based verification for password reset

## 📂 Folder Structure
- *backend*: Contains the Express.js server code and Razor pay API integration.
- *frontend*: The client-side React application.
- *admin*: The admin panel frontend for managing orders and users.

## ⚙️ Installation & Setup

##  Clone the repository

git clone https://github.com/faizkhan25/Online-Food-Delivery-Systsem

cd online-food-delivery

3. *Install dependencies* for each folder:

   - *Backend*:
    
     cd backend -
     npm install
     

   - *Frontend*:
     
     cd frontend -
     npm install
     

   - *Admin*:
    
     cd admin -
     npm install

 *Set up environment variables*:

 Create a .env file in the root of each directory (backend, frontend, admin) and add your environment variables. The .env file should be configured with the necessary variables for your project.

 *Run the development servers*:

   - *Backend*:

     cd backend -
     npm run server
     

   - *Frontend*:

     cd frontend -
     npm run dev
     

   - *Admin*:

     cd admin -
     npm run dev

## Razor Pay Integration

Ensure you have your Razor pay API keys and  set up in the .env file of the backend directory. Refer to this documentation for setting up and managing your API keys.

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

RAZORPAY_KEY_ID=your_razorpay_key_id

RAZORPAY_KEY_SECRET=your_razorpay_key_secret

EMAIL_USER=your_gmail

EMAIL_PASS=your_gmail_app_password

### 📬 Contact
Author: Faiz khan

Email: faizkhan951925email.com

GitHub: https://github.com/faizkhan25

LinkedIn: https://www.linkedin.com/in/faiz-khan-b047b8218

### Screenshots

## Home Page

<img width="1891" height="866" alt="Screenshot 2025-08-11 000615" src="https://github.com/user-attachments/assets/38e15b1d-ca20-4a55-801c-07ac46a07286" />

## Explore Menu

<img width="1909" height="861" alt="Screenshot 2025-08-11 000638" src="https://github.com/user-attachments/assets/11434ea5-2bb3-46b7-94a7-1543cbf219ca" />

## Login Page

<img width="1900" height="847" alt="Screenshot 2025-08-11 000731" src="https://github.com/user-attachments/assets/9df8c1a9-a696-4b88-816f-787a9a5f9285" />

## Add to Cart

<img width="1903" height="872" alt="Screenshot 2025-08-11 000811" src="https://github.com/user-attachments/assets/a66aa134-5d6b-4fda-9465-b1083df2b147" />

## Order Page

<img width="1907" height="882" alt="Screenshot 2025-08-11 001034" src="https://github.com/user-attachments/assets/813a0d05-7f4a-4a17-a7c8-3887c14c1ada" />

### Admin Panel

<img width="1899" height="881" alt="Screenshot 2025-08-11 001752" src="https://github.com/user-attachments/assets/0b19155e-1e6d-4c48-9a30-0b9c3a2ffb75" />

<img width="1902" height="883" alt="Screenshot 2025-08-11 001823" src="https://github.com/user-attachments/assets/08f55c22-6b27-4783-979f-26e1978c2481" />

<img width="1906" height="885" alt="Screenshot 2025-08-11 002107" src="https://github.com/user-attachments/assets/27859161-9799-44ad-9b45-aa80734fa74a" />






