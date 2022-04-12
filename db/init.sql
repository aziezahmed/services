CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    title character varying(255) NOT NULL UNIQUE,
    author character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO book (id, title, author) VALUES 
(1, 'Amusing Ourselves to Death', 'Neil Postman'),
(2, 'Four Arguments for the Elimination of Television', 'Jerry Mander'),
(3, 'The Plug-In Drug: Television, Computers, and Family Life ', 'Marie Winn');
