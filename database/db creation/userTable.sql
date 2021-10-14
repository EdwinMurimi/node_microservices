CREATE TABLE dbo.users (
    _id VARCHAR (40) PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    email VARCHAR (50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    is_deleted BIT CONSTRAINT USER_IS_DELETED DEFAULT 0
);