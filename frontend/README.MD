Here's a detailed **README.md** for the **frontend** of the **True-2-u-dating-network** app:

---

# True-2-u-dating-network - Frontend

This is the frontend for the **True-2-u-dating-network**, a Web3-powered dating app built on the Pi Network ecosystem. The app provides secure user authentication, real-time notifications, and a premium matching experience, leveraging React.js, Socket.IO, and JWT for frontend security.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure JWT-based login, registration, and session management.
- **Role-Based Access Control**: Different features for regular users, premium users, and admins.
- **Advanced Matching Algorithm**: Match users based on preferences, proximity, and interests.
- **Real-Time Messaging**: Instant chat with matched users using Socket.IO.
- **Real-Time Notifications**: Receive notifications for matches, messages, and interactions.
- **Profile Management**: Users can edit their profiles, set privacy controls, and manage preferences.
- **Fully Responsive**: Mobile-first design to ensure compatibility with all screen sizes.
- **Web3 Integration**: Pi Network token-based transactions for premium features.

## Tech Stack

### Frontend:
- **React.js**: UI framework.
- **Material-UI**: Modern UI components for a responsive and professional design.
- **Socket.IO**: Real-time communication for messaging and notifications.
- **JWT**: Secure authentication system.
- **Pi Network SDK**: For integration with Pi Network Web3 transactions.

## Getting Started

To get started with the frontend of the **True-2-u-dating-network**, follow these steps:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14+)
- **npm** (v6+)
- **React.js** (v18+)
- **Docker** (for containerization)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-github-username>/true-2-u-dating-network.git
   cd true-2-u-dating-network/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the `frontend` folder and add the necessary environment variables (API URLs, Socket.IO URL, etc.).

   Example:
   ```bash
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_SOCKET_URL=http://localhost:5000
   REACT_APP_PI_NETWORK_SANDBOX_KEY=<YOUR_PI_SANDBOX_KEY>
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

The app should now be running locally at `http://localhost:3000`.

## Project Structure

```bash
frontend/
├── public/                 # Public assets (HTML template, favicon, etc.)
├── src/                    # React app source code
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── components/         # Reusable components (Navbar, Auth, Messaging, etc.)
│   ├── context/            # Global context (authentication, notifications, etc.)
│   ├── pages/              # Full-page components (Login, Register, Profile, etc.)
│   ├── services/           # API service files (authService, matchService, etc.)
│   ├── styles/             # Global and component-specific styles
│   ├── utils/              # Utility functions (auth helpers, token management)
│   ├── App.js              # Main React component
│   ├── index.js            # Entry point of the React app
│   └── routes.js           # Routes configuration
└── package.json            # Project dependencies and scripts
```

### Key Folders:

- **`components/`**: Contains reusable React components such as `Navbar`, `ChatWindow`, `ProfileCard`, and more.
- **`context/`**: Contains React context providers for managing global states like authentication and notifications.
- **`pages/`**: Full-page components for the main sections of the app (Login, Home, Profile, Matches).
- **`services/`**: Manages API calls to the backend for authentication, messaging, and matches.
- **`styles/`**: Contains global and component-specific styles using CSS/SCSS.
- **`utils/`**: Utility functions for handling tokens, API responses, and user roles.

## Environment Variables

To run this application, you will need to set up environment variables. These can be added to a `.env` file in the root of the frontend project.

- `REACT_APP_API_URL`: The base URL for your backend API (e.g., `http://localhost:5000/api`).
- `REACT_APP_SOCKET_URL`: URL for the Socket.IO server (e.g., `http://localhost:5000`).
- `REACT_APP_PI_NETWORK_SANDBOX_KEY`: Your Pi Network sandbox key for Web3 transactions.

Example `.env`:
```bash
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000
REACT_APP_PI_NETWORK_SANDBOX_KEY=<YOUR_PI_SANDBOX_KEY>
```

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- **`npm test`**: Launches the test runner.
- **`npm run build`**: Builds the app for production to the `build` folder.
- **`npm run lint`**: Lints your code for any errors or warnings based on ESLint rules.

## Deployment

### Docker

To run the frontend using Docker, follow these steps:

1. **Build the Docker image**:
   ```bash
   docker build -t true-2-u-frontend .
   ```

2. **Run the Docker container**:
   ```bash
   docker run -p 3000:3000 true-2-u-frontend
   ```

This will serve the frontend on `http://localhost:3000`.

### NGINX (Production)

For production, it's recommended to serve the React app with NGINX. The following steps are required:

1. **Build the React app**:
   ```bash
   npm run build
   ```

2. **Deploy the `build/` directory to your server**.

3. **Set up NGINX** to serve the static files from the `build/` directory.

## Contributing

If you wish to contribute to the **True-2-u-dating-network**, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

---

This **README.md** provides a detailed overview of the frontend setup for **True-2-u-dating-network**, helping developers understand the structure, installation, and deployment process. Let me know if you need further details or any adjustments!