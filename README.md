Commit Connect

Commit Connect is a full-stack web application that connects students with mentors for learning, guidance, and career advice. It includes a login/signup system, secure authentication, and a modern dark interface.

Overview

Frontend: React.js with plain CSS (black and green theme)
Backend: Node.js, Express.js, Prisma, MySQL
Authentication: JWT (JSON Web Token)
Security: Password hashing with bcrypt
Other Tools: dotenv, nodemon, cors


Features

User signup and login with form validation
Encrypted password storage
JWT-based authentication for protected routes
Responsive dark-mode interface with a minimal design
Simple REST API integration between frontend and backend


Folder Structure
mentor-connect-app/
│
├── backend/
│   ├── src/
│   │   ├── index.js
│   │   └── verifyToken.js
│   ├── prisma/schema.prisma
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/AuthForm.jsx
    │   ├── styles/app.css
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── public/index.html



API Endpoints-

Method	Endpoint	Description
POST	/signup	Register a new user
POST	/login	Login and return JWT
GET	/protected	Access with valid token