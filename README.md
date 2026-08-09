# 🌱 Urban Harvest – City Farming Simplified

**Urban Harvest** is a web-based urban gardening platform designed to make city farming simple, interactive, and accessible. It helps users explore gardening ideas, learn through tutorials, get crop suggestions, and connect with other gardening enthusiasts through a community platform.

## 🚀 Live Project

**Frontend:** Deployed on Vercel

## ✨ Features

### 🏠 Home

* Clean and responsive landing page
* Navigation to all major sections
* Introduction to urban gardening

### 🖼️ Gallery

* Explore different urban gardening setups
* Images of terrace, balcony, rooftop, and kitchen gardens

### 📚 Tutorials

* Step-by-step gardening tutorials
* Topics include:

  * Balcony Gardening
  * Terrace Gardening
  * Rooftop Gardening
  * Watering
  * Composting

### 🌱 GrowSmart

Users can enter gardening-related information such as:

* Temperature
* City
* State
* Garden type
* Available area

The application then provides suitable crop suggestions.

### 🤝 Community

Users can:

* Join the gardening community
* Add their name, email, city, garden type, and experience
* Upload a profile image
* View community members
* Interact with other gardening enthusiasts

### 🔐 Authentication

* User Login
* User Signup
* Login protection for community features

### 🌿 Crop Details

* View detailed information about suggested crops
* Explore crops based on gardening requirements

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Axios
* React Icons
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer

### Deployment

* Frontend: Vercel
* Backend: Node.js/Express deployment
* Database: MongoDB

## 📁 Project Structure

```text
Urban-Harvest-City-Farming-Simplified/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── Pages/
│   │   │   ├── Home/
│   │   │   ├── Gallery/
│   │   │   ├── Tutorials/
│   │   │   ├── GrowSmart/
│   │   │   ├── Community/
│   │   │   ├── Login/
│   │   │   ├── Signup/
│   │   │   ├── Profile/
│   │   │   ├── CropDetails/
│   │   │   └── NotFound/
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Nikita-Sharma1811/Urban-Harvest-City-Farming-Simplified.git
```

### 2. Open the Project

```bash
cd Urban-Harvest-City-Farming-Simplified
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 4. Start the Frontend

```bash
npm run dev
```

The frontend will run on the Vite development server.

### 5. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 6. Start the Backend

```bash
npm run dev
```

## ▶️ How to Start

To run the complete project locally:

**Terminal 1 – Frontend**

```bash
cd frontend
npm install
npm run dev
```

**Terminal 2 – Backend**

```bash
cd backend
npm install
npm run dev
```

Make sure MongoDB is connected and the required environment variables are configured before starting the backend.

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

**Do not upload `.env` to GitHub.**

## 🌍 Deployment

The frontend is configured for deployment using **Vercel**.

For Vercel:

```text
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
```

## 🎯 Project Goal

The goal of Urban Harvest is to encourage **urban farming and sustainable living** by providing an easy-to-use platform where people can learn gardening, discover suitable crops, and connect with a gardening community.

## 🔮 Future Improvements

* Real-time community chat
* Community likes and comments
* Gardening events
* Weather-based crop recommendations
* Plant disease detection
* Gardening reminders
* User-generated gardening posts
* Location-based gardening suggestions

## 👩‍💻 Author

**Nikita Sharma**

Computer Science Engineering Student

---

⭐ If you like this project, consider giving the repository a star!
