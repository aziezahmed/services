CREATE TABLE authors (
    authorid SERIAL PRIMARY KEY,
    firstname character varying(255) NOT NULL,
    lastname character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE books (
    bookid SERIAL PRIMARY KEY,
    title character varying(255) NOT NULL UNIQUE,
    authorid INTEGER REFERENCES authors(authorid),
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO authors (authorid, firstname, lastname) VALUES 
(1, 'Neil', 'Postman'),
(2, 'Jerry', 'Mander'),
(3, 'Marie',  'Winn');

INSERT INTO books (bookid, title, authorid) VALUES 
(1, 'Amusing Ourselves to Death', 1),
(2, 'Four Arguments for the Elimination of Television', 2),
(3, 'The Plug-In Drug: Television, Computers, and Family Life ', 3);
