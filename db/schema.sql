-- ### Schema
CREATE DATABASE shareTop;
DROP TABLE IF EXISTS shareTop;
USE shareTop;

CREATE TABLE Equipment (
	id INT AUTO_INCREMENT NOT NULL, 
	model VARCHAR(50),
	speed INT,
	ram VARCHAR(10),
	screen_size INT,
	price DECIMAL,
	description VARCHAR(255),
	PRIMARY KEY (id)
	-- FOREIGN KEY (emailaddress)
);

CREATE TABLE UserAccount (
	userID INT (11) NOT NULL AUTO_INCREMENT,
	emailaddress VARCHAR (255),
	password VARCHAR (50),
	PRIMARY KEY (userID)
);

CREATE TABLE Customer (
	emailaddress2 VARCHAR (255),
	first_name VARCHAR (100),
	last_name VARCHAR (100),	
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
	PRIMARY KEY (emailaddress2)
);

-- CREATE TABLE Rental (
-- 	rental_id INT,
-- 	rental_date DATE,
-- 	inventory_id INT AUTO_INCREMENT NOT NULL,
-- 	username VARCHAR (255),
-- 	return_date DATE,
-- 	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
-- 
-- CREATE TABLE Payment (
-- 	payment_id INT,
-- 	customer_id INT,
-- 	rental_id INT,
-- 	amount DECIMAL,
-- 	payment_date DATE,
-- 	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );