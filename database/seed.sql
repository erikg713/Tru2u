INSERT INTO users (email, password_hash) VALUES
('alice@example.com', 'hashedpassword1'),
('bob@example.com', 'hashedpassword2');

INSERT INTO profiles (user_id, display_name, age, gender, bio, profile_picture_url) VALUES
(1, 'Alice', 25, 'Female', 'Love hiking and reading!', 'https://example.com/alice.jpg'),
(2, 'Bob', 30, 'Male', 'Tech enthusiast and foodie.', 'https://example.com/bob.jpg');

INSERT INTO preferences (user_id, preferred_gender, age_min, age_max) VALUES
(1, 'Male', 25, 35),
(2, 'Female', 20, 30);

INSERT INTO matches (user_id1, user_id2) VALUES
(1, 2);

INSERT INTO messages (match_id, sender_id, message) VALUES
(1, 1, 'Hi Bob!'),
(1, 2, 'Hi Alice!');a