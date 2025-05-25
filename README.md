# 🛠️ Offline-First Smart Complaint Management System

A smart, offline-first complaint management web app built using **HTML, CSS, JavaScript, and Node.js** — specially designed for **rural or low-internet areas** where users can submit complaints even when offline. Once reconnected, the app **automatically syncs** the complaints to the backend server.

---

## ✨ Features

- ✅ Submit complaints even when offline
- ✅ Data stored locally via **IndexedDB**
- 🔄 Automatic sync to backend when online
- 🌐 PWA supported (installable like an app)
- 🧾 Backend REST API to handle and view complaints
- 🗂️ Clean and modular file structure

---

## 🧱 Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Storage:** IndexedDB (client-side), In-memory (server-side)
- **Backend:** Node.js + Express.js
- **Offline Support:** Service Worker, Manifest
- **Optional Deployment:** Render, Railway, or Heroku

---

## 📁 Folder Structure

> offline-complaint-system/
- │
- ├── index.html # Main HTML page
- ├── style.css # Styling
- ├── app.js # Main app logic (submit + sync)
- ├── db.js # IndexedDB helper functions
- ├── sync.js # Auto-sync functionality
- ├── service-worker.js # PWA offline caching
- ├── manifest.json # PWA metadata
- ├── assets/
- │ └── logo.png # App logo
- ├── complaints.json # (Optional) Dummy data file
- └── offline-complaint-system-backend/
- └── index.js # Node.js backend server


---

## 🚀 How to Run Locally

### 🔹 Frontend Setup

1. Download or clone this repo:

```bash
git clone https://github.com/khdxsohee/offlne-first-smart-complaint-management-system.git
```
Navigate to the project folder:

```
cd offlne-first-smart-complaint-management-system
```
Open index.html in your browser (or use VS Code Live Server)


# Optionally
npx live-server
You can also manually open index.html from the browser

### 🔹 Backend Setup
Navigate to backend folder:

```
cd offlne-first-smart-complaint-management-system/offline-complaint-system-backend
```
Install dependencies:
```
npm install
```
Start the server:

```
node index.js
```
Server will start on: http://localhost:3000

### 📬 API Endpoints (Backend)

- POST	/complaints	Submit a new complaint
- GET	/complaints	Get all submitted data
- GET	/ (optional)	Home test route (optional)

### ✅ Things to Improve (Future Scope)
- 🔐 Add admin login and complaint dashboard

- 📁 Save complaints permanently to JSON or database (MongoDB / SQLite)

- 📱 Build native Android version using WebView or Capacitor

- 📦 Add complaint categories and file attachment support

> ### 🧑‍💻 Author
Developed by khdxsohee


### 📜 License
This project is licensed under the MIT License.
