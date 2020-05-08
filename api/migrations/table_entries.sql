create table entries (
	id SERIAL PRIMARY KEY,
	user_uuid TEXT,
	entry_date DATE,
	source_uuid TEXT,
	amount FLOAT,
	comments TEXT
)