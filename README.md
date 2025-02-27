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
  git clone https://github.com/erikg713/true-2-u-dating-network.git 
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
   npm install axios
   npm start
   ```

---

### **Deployment**
1. Use Docker Compose:
   ```bash
   docker-compose up --build
   ```
2. 

---

### **Contributing**
Contributions are welcome! Fork the repo, create a branch, make changes, and submit a pull request.

---

### **License**
The project is licensed under the MIT License.

This README provides clear instructions for developers to set up, run, and contribute to the project.
