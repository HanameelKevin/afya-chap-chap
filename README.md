# Afya Chap Chap — Clinic Manager

A premium, production-grade full-stack clinic management system built with React 19, Node.js, and MongoDB.

## 🚀 Overview
Afya Chap Chap (Health in a Hurry) transforms maternal healthcare delivery in Kenya by providing a seamless interface for health workers and patients. It features a high-end, editorial-style UI with real-time tracking, risk assessment, and AI-powered insights.

## 🛠 Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS v4, Framer Motion, Tabler Icons.
- **Backend**: Node.js, Express, Mongoose, JWT, Express Rate Limit.
- **Database**: MongoDB Atlas.
- **Design**: Premium Utilitarian Minimalism (SF Pro/Geist Sans typography).

## 📂 Features
- **Role-Based Dashboards**: Tailored views for Health Workers and Patients.
- **Risk Assessment**: Real-time tracking of critical maternal vitals (BP, Hb, FHR).
- **Dispatch System**: "Uber-style" tracking for mobile clinic dispatches.
- **AI Briefing**: Smart session summaries and health tips.
- **Security**: Rate limiting, role-based access, and secure data handling.

## 📋 Database Schemas

### User
- `name`, `email`, `password`, `role`, `avatar`.

### Patient
- `weeksPregnant`, `dueDate`, `riskLevel` (Critical/High/Medium/Low), `vitals` history.

### Booking (Dispatch)
- `serviceType`, `fare`, `status` (Pending/On the way/Completed), `eta`, `location`.

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (configured in `.env`)

### Installation
1. Clone the project.
2. Run `npm install` in the root directory.
3. Run `npm run install-all` to install all sub-dependencies.

### Environment Variables
Create a `backend/.env` file:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Running the App
- **Development**: `npm run dev` (Runs frontend and backend concurrently)
- **Production Build**: `npm run build`

## 🎨 Design Philosophy
The system adheres to **Editorial Minimalism**:
- **Typography**: SF Pro Display and Geist Sans.
- **Color**: Warm Monochrome (#FBFBFA canvas) with desaturated semantic accents.
- **Motion**: 200ms ease-out transitions, scale(0.97) interactions, and staggered reveals.
