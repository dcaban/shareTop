-- ### Schema
CREATE DATABASE shareTop;
USE shareTop;

CREATE TABLE Equipment (
	code INT NOT NULL AUTO_INCREMENT, 
	model VARCHAR(50),
	speed SMALLINT,
	ram SMALLINT,
	screen TINYINT,
	price MONEY,
	description VARCHAR(255),
	PRIMARY KEY (code)
);

CREATE TABLE UserAccount (
	userID INT (50) NOT NULL AUTO_INCREMENT,
	emailaddress VARCHAR (255),
	password VARCHAR (50),
	PRIMARY KEY (emailaddress)
);

CREATE TABLE Customer (
	emailaddress VARCHAR (255),
	first_name VARCHAR (100),
	last_name VARCHAR (100),
	emailaddress VARCHAR (255),
	address_id INT,
	address VARCHAR (255),
	address2 VARCHAR (255),
	city VARCHAR (100),
	state VARCHAR (2),
	postal_code VARCHAR (5),
	phone VARCHAR (11),
	active 
	create_date CURRENT_TIMESTAMP,
	last_update CURRENT_TIMESTAMP,
	PRIMARY KEY ()
);

CREATE TABLE Rental (
	rental_id INT,
	rental_date DATE,
	inventory_id/code INT NOT NULL AUTO_INCREMENT,
	username VARCHAR (255),
	return_date DATE,
	last_update CURRENT_TIMESTAMP
);

CREATE TABLE Payment (
	payment_id INT,
	customer_id INT,
	rental_id INT,
	amount MONEY,
	payment_date DATE,
	last_update CURRENT_TIMESTAMP
);