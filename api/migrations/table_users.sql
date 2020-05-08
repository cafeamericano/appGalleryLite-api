create table users (
	id SERIAL PRIMARY KEY,
	user_uuid TEXT,
	first_name TEXT,
	last_name TEXT,
    encrypted_password TEXT
)