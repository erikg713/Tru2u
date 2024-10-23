module.exports = {
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/tru2uDB',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key',
    PI_API_KEY: process.env.PI_API_KEY || 'your_pi_network_api_key',
};
