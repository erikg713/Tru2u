from flask import Flask
from flask_jwt_extended import JWTManager
from flask_socketio import SocketIO
from flask_bcrypt import Bcrypt
from models import db

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'super-secret-key'  # Change to an environment variable
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@localhost/dbname'

# Initialize extensions
jwt = JWTManager(app)
bcrypt = Bcrypt(app)
socketio = SocketIO(app)

db.init_app(app)

from routes.auth import auth_blueprint
app.register_blueprint(auth_blueprint)

if __name__ == "__main__":
    socketio.run(app)
