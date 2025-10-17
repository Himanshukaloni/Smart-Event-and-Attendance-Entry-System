# 🎟️ Smart Event and Attendance Entry System

An advanced **Event Management and Smart Check-in System** built using **Node.js**, **MySQL**, **Firebase Authentication**, and **QR code-based check-ins**.  
This project helps organizers **create events**, **register participants**, **generate certificates**, and **manage attendees efficiently** through a modern, responsive web interface.

---

## 🚀 Features

### 🧑‍💼 User Management (Firebase)
- Secure **User Registration & Login** with Firebase Authentication  
- Stores user profile info (first name, last name, email) in Firestore  
- Logged-in users can access their personalized homepage  

### 🎫 Event Management
- Admin can:
  - Create events (individual/team type)
  - Set event name, type, slug, and date  
- Participants can:
  - Register for events  
  - Get an auto-generated **QR Code** for their registration  

### 📱 Smart Check-in
- Integrated **QR Code Scanner** using `html5-qrcode`  
- Supports **manual token check-in** as backup  
- Automatically records timestamp and participant details  

### 👥 Attendee Dashboard
- View all registered attendees for an event  
- See check-in status (`✅ Checked In` or `— Not Checked In`)  
- Export attendee list as **CSV file**


---

## 🧩 Tech Stack

| Layer | Technologies |
|--------|----------------|
| **Frontend** | HTML, CSS, JavaScript (Vanilla), jsPDF, html5-qrcode |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL (event & registration data) |
| **Authentication** | Firebase Auth + Firestore |
| **Other** | QR Code generation, CSV export |



