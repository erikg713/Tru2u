README.md
Skip to content
Navigation Menu
erikg713
Tru2u

Code
Issues
Pull requests
Discussions
Actions
Projects
Wiki
Security
Insights
Tru2u
Public template
erikg713/Tru2u
Name		
erikg713
erikg713
Create codescan.yml
a05fb86
 · 
16 hours ago
.github/workflows
Create codescan.yml
16 hours ago
__mocks__
Create pi-network-sdk.js
last month
backend
Create requirements.txt
last month
cypress/e2e
Update cypress.config.js
last month
database
Delete database/models/Users
2 months ago
docker
Create Dockerfile
3 months ago
frontend
Update Chat.js
last month
reverse-proxy
Update Nginx.conf
3 months ago
.gitignore
Update .gitignore
last month
LICENSE
Initial commit
4 months ago
README.md
Update README.md
last month
Repository files navigation
README
MIT license
True-2-u-dating-network
True-2-u-dating-network is a Web3-powered dating app built on the Pi Network ecosystem, ensuring secure transactions, fully encrypted user data, and a premium matching experience. It features a robust platform for user interaction and matchmaking.

Table of Contents
Features
Tech Stack
Installation
Environment Variables
Running the Application
Deployment
Screenshots
Contributing
License
Features
User Authentication: Secure JWT-based authentication for all users.
Role-Based Access Control (RBAC): Different features for regular users, premium users, and admins.
Advanced Matching Algorithm: Match users based on interests and location proximity.
Real-Time Notifications: Live messaging and notifications for activity and matches.
Privacy Settings: Users can control who sees their profile and block other users.
Web3 Integration: Pi Network transactions for premium membership and additional features.
Fully Responsive: Optimized for mobile, tablet, and desktop.
Dockerized Deployment: Seamless containerized deployment for frontend, backend, and database.
Tech Stack
Frontend:
React.js: UI framework.
Material-UI: Modern, responsive UI components.
Socket.IO: Real-time messaging.
JWT: Secure authentication.
Pi Network SDK: Web3 integration for transactions.
Backend:
Flask: Backend framework.
PostgreSQL: Relational database.
Flask-SocketIO: Real-time communication between users.
JWT: Secure token-based authentication.
Pi Network SDK: For Web3 Pi token transactions.
Deployment:
Docker: Containerization of frontend, backend, and database.
NGINX: Reverse proxy for serving frontend and backend in production.
Installation
Prerequisites
Node.js and npm (for frontend)
Python 3.10+ (for backend)
Docker and Docker Compose (for deployment)
PostgreSQL (or Dockerized version)
Clone the repository
git clone https://github.com/<your-github-username>/true-2-u-dating-network.git
cd true-2-u-dating-network
Environment Variables
Create a .env file in both the backend and frontend directories and populate it with the necessary keys:

Backend .env:
DATABASE_URL=postgresql://user:password@db/true2udating
JWT_SECRET_KEY=your_jwt_secret_key
PI_API_KEY=your_pi_api_key
MESSAGE_ENCRYPTION_KEY=your_message_encryption_key
Frontend .env:
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_PI_API_KEY=your_pi_api_key
Running the Application
1. Backend Setup
Navigate to the backend folder, install dependencies, and run the Flask app:

mkdir backend
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
flask run
2. Frontend Setup
Navigate to the frontend folder, install dependencies, and start the React app:

cd frontend
npm install
npm start
Deployment
Using Docker
Step 1: Build and Start the Containers Navigate to the root of the project and run the following command:

docker-compose up --build
Step 2: Access the Application The app will be available on http://localhost or your server’s IP address. The backend will be running on port 5000, while the frontend runs on port 3000 (proxied through NGINX).

Docker Compose Overview
The docker-compose.yml file defines three services:

Frontend: React app containerized for production.
Backend: Flask app containerized with PostgreSQL and Pi Network SDK.
Database: PostgreSQL container for data persistence.
NGINX as a Reverse Proxy
The app uses NGINX to route traffic between the frontend and backend efficiently.

Screenshots
Feature	Screenshot
User Registration	Registration
Profile Matching	Profile Matching
Messaging	Messaging
Contributing
We welcome contributions from the community to make True-2-u-dating-network even better! Please follow these steps:

Fork the repository.
Create a new branch: git checkout -b feature-branch-name
Make your changes.
Push to the branch: git push origin feature-branch-name
Submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.


You can copy this enhanced README and update the file in your repository. If you need further customization or have specific requirements, let me know!
About
No description, website, or topics provided.
Resources
 Readme
License
 MIT license
 Activity
Stars
 0 stars
Watchers
 1 watching
Forks
 0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Contributors
2
@erikg713
erikg713 Dev713
@dependabot[bot]
dependabot[bot]
Languages
JavaScript
100.0%
Footer
© 2025 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact
Manage cookies
Do not share my personal information
erikg713/Tru2u

The README.md file for the **True-2-u-dating-network** project provides a comprehensive overview of the Web3-powered dating application. It highlights its features, tech stack, installation steps, environment setup, and deployment instructions. Below are the key points summarized:

---

### **Project Overview**
**True-2-u-dating-network** is a Web3-based dating app leveraging the Pi Network ecosystem to ensure secure transactions, encrypted user data, and an advanced matching experience.

---

### **Features**
- **Authentication**: Secure JWT-based login.
- **RBAC**: Role-specific features for users, premium members, and admins.
- **Matching Algorithm**: Matches based on interests and location.
- **Real-Time Features**: Messaging and notifications.
- **Privacy Controls**: Profile visibility and blocking options.
- **Web3 Integration**: Pi Network for premium features.
- **Responsive Design**: Optimized for all devices.
- **Dockerized Deployment**: Simplified deployment with Docker.

---

### **Tech Stack**
- **Frontend**: React.js, Material-UI, Socket.IO, Pi Network SDK.
- **Backend**: Flask, PostgreSQL, Flask-SocketIO, JWT.
- **Deployment**: Docker, NGINX.

---

### **Installation Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-github-username>/true-2-u-dating-network.git
   cd true-2-u-dating-network
   ```
2. Set up environment variables in `.env` files for both backend and frontend.
3. Run the backend:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   flask run
   ```
4. Run the frontend:
   ```bash
   cd frontend
   npm install
   npm start
   ```

---

### **Deployment**
1. Use Docker Compose:
   ```bash
   docker-compose up --build
   ```
2. Access the app at `http://localhost`.

---

### **Contributing**
Contributions are welcome! Fork the repo, create a branch, make changes, and submit a pull request.

---

### **License**
The project is licensed under the MIT License.

This README provides clear instructions for developers to set up, run, and contribute to the project.
