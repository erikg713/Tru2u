# True-2-u-dating-network

**True-2-u-dating-network** is a Web3-powered dating app built on the Pi Network ecosystem, ensuring secure transactions, fully encrypted user data, and a premium matching experience. It features advanced user authentication, privacy controls, role-based access, and real-time messaging for a fully interactive dating experience.

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Running the Application](#running-the-application)
6. [Deployment](#deployment)
7. [Screenshots](#screenshots)
8. [Contributing](#contributing)
9. [License](#license)

## Features

- **User Authentication**: Secure JWT-based authentication for all users.
- **Role-Based Access Control (RBAC)**: Different features for regular users, premium users, and admins.
- **Advanced Matching Algorithm**: Match users based on interests and location proximity.
- **Real-Time Notifications**: Live messaging and notifications for activity and matches.
- **Privacy Settings**: Users can control who sees their profile and block other users.
- **Web3 Integration**: Pi Network transactions for premium membership and additional features.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop.
- **Dockerized Deployment**: Seamless containerized deployment for frontend, backend, and database.

## Tech Stack

### Frontend:
- **React.js**: UI framework.
- **Material-UI**: Modern, responsive UI components.
- **Socket.IO**: Real-time messaging.
- **JWT**: Secure authentication.
- **Pi Network SDK**: Web3 integration for transactions.

### Backend:
- **Flask**: Backend framework.
- **PostgreSQL**: Relational database.
- **Flask-SocketIO**: Real-time communication between users.
- **JWT**: Secure token-based authentication.
- **Pi Network SDK**: For Web3 Pi token transactions.

### Deployment:
- **Docker**: Containerization of frontend, backend, and database.
- **NGINX**: Reverse proxy for serving frontend and backend in production.

## Installation

### Prerequisites
- **Node.js** and **npm** (for frontend)
- **Python 3.10+** (for backend)
- **Docker** and **Docker Compose** (for deployment)
- **PostgreSQL** (or Dockerized version)

### Clone the repository
```bash
git clone https://github.com/<your-github-username>/true-2-u-dating-network.git
cd true-2-u-dating-network
```

## Environment Variables

Create a `.env` file in both the backend and frontend directories and populate it with the necessary keys:

### Backend `.env`:
```bash
DATABASE_URL=postgresql://user:password@db/true2udating
JWT_SECRET_KEY=your_jwt_secret_key
PI_API_KEY=your_pi_api_key
MESSAGE_ENCRYPTION_KEY=your_message_encryption_key
```

### Frontend `.env`:
```bash
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_PI_API_KEY=your_pi_api_key
```

## Running the Application

### 1. Backend Setup
Navigate to the `backend` folder, install dependencies, and run the Flask app:
mkdir backend
cd backend
npm init -y
npm install express mongoose dotenv cors bcryptjs jsonwebtoken body-parser
npm install nodemon --save-dev

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PI_API_KEY=your_pi_network_api_key

### 2. Frontend Setup
Navigate to the `frontend` folder, install dependencies, and start the React app:

```bash
cd frontend
npm install
npm start
```

## Deployment

### Using Docker

**Step 1: Build and Start the Containers**
Navigate to the root of the project and run the following command:

```bash
docker-compose up --build
```

**Step 2: Access the Application**
The app will be available on `http://localhost` or your server’s IP address. The backend will be running on port 5000, while the frontend runs on port 3000 (proxied through NGINX).

### Docker Compose Overview
The `docker-compose.yml` file defines three services:
1. **Frontend**: React app containerized for production.
2. **Backend**: Flask app containerized with PostgreSQL and Pi Network SDK.
3. **Database**: PostgreSQL container for data persistence.

### NGINX as a Reverse Proxy
The app uses NGINX to route traffic between the frontend and backend efficiently.

## Screenshots

| Feature            | Screenshot                    |
|--------------------|-------------------------------|
| User Registration  | ![Registration](./screenshots/registration.png) |
| Profile Matching   | ![Profile Matching](./screenshots/matching.png) |
| Messaging          | ![Messaging](./screenshots/messaging.png) |

## Contributing

We welcome contributions from the community to make **True-2-u-dating-network** even better! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes.
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

### Key Additions in the README:
- **Features**: Detailed the app’s features and functionalities.
- **Tech Stack**: Clearly identified the technologies used in frontend, backend, and deployment.
- **Installation and Environment Variables**: Instructions to set up both frontend and backend locally.
- **Deployment**: Step-by-step Docker deployment guide.
- **Screenshots**: Placeholder for screenshots (you can add actual screenshots as needed).
- **Contributing and License**: Included details for potential contributors and the license.

This README ensures users can quickly set up, understand, and contribute to **True-2-u-dating-network**. Let me know if you'd like any further customization!
