from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    hashed_password = generate_password_hash(data['password'], method='bcrypt')
    # Save hashed_password in the database
    return jsonify({"message": "User registered successfully!"})
