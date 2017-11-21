-- ### Schema
CREATE DATABASE shareTop;
DROP TABLE IF EXISTS shareTop;
USE shareTop;

CREATE TABLE Equipment (
	code INT AUTO_INCREMENT NOT NULL, 
	model VARCHAR(50),
	speed SMALLINT,
	ram SMALLINT,
	screen TINYINT,
	price DECIMAL,
	description VARCHAR(255),
	PRIMARY KEY (code)
	-- FOREIGN KEY (emailaddress)
);

CREATE TABLE UserAccount (
	userID INT AUTO_INCREMENT NOT NULL,
	emailaddress VARCHAR (255),
	password VARCHAR (50),
	PRIMARY KEY (emailaddress)
);

CREATE TABLE Customer (
	emailaddress VARCHAR (255),
	first_name VARCHAR (100),
	last_name VARCHAR (100),
	emailaddress2 VARCHAR (255),
	address_id INT,
	address VARCHAR (255),
	address2 VARCHAR (255),
	city VARCHAR (100),
	state VARCHAR (2),
	postal_code VARCHAR (5),
	phone VARCHAR (11),
	-- active 
	create_date DATE,
	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (emailaddress)
);

-- CREATE TABLE Rental (
-- 	rental_id INT,
-- 	rental_date DATE,
-- 	inventory_id/code INT NOT NULL AUTO_INCREMENT,
-- 	username VARCHAR (255),
-- 	return_date DATE,
-- 	last_update CURRENT_TIMESTAMP
-- );

-- CREATE TABLE Payment (
-- 	payment_id INT,
-- 	customer_id INT,
-- 	rental_id INT,
-- 	amount MONEY,
-- 	payment_date DATE,
-- 	last_update CURRENT_TIMESTAMP
-- );