create table user_settings (
	id SERIAL PRIMARY KEY,
	user_id INT,
	default_language TEXT
)