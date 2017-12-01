CREATE DATABASE shareTop;
DROP TABLE IF EXISTS shareTop;
USE shareTop;

DROP TABLE IF EXISTS Equipment;
CREATE TABLE Equipment (
	eqid INT AUTO_INCREMENT NOT NULL, 
	model VARCHAR (50) DEFAULT NULL,
	speed INT (11) DEFAULT NULL,
	ram VARCHAR (10) DEFAULT NULL,
	screen_size INT DEFAULT NULL,
	price DECIMAL (10,0) DEFAULT NULL,
	description VARCHAR (255) DEFAULT NULL,
	routeName VARCHAR (45) DEFAULT NULL,
	createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
	-- FOREIGN KEY (emailaddress)
);

DROP TABLE IF EXISTS Passport;
CREATE TABLE Passport (
	userID INT (11) NOT NULL AUTO_INCREMENT,
	emailaddress VARCHAR (255),
	password VARCHAR (50),
	PRIMARY KEY (userID)
);

DROP TABLE IF EXISTS Customer;
CREATE TABLE Customer (
	emailaddress VARCHAR (255),
	first_name VARCHAR (100),
	last_name VARCHAR (100),	
	address_id INT,
	address VARCHAR (255),
	address2 VARCHAR (255),
	city VARCHAR (100),
	state VARCHAR (2),
	postal_code VARCHAR (5),
	phone VARCHAR (11),
	last_update timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (emailaddress)
);

DROP TABLE IF EXISTS Transactions;
CREATE TABLE Transactions (
	trans_id INT AUTO_INCREMENT NOT NULL,
	trans_date DATE,
	inventory_id INT,
	owner_email VARCHAR (255),
	return_date DATE,
	trans_status VARCHAR (25),
	customer_email VARCHAR (255), 
	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (trans_id)
	-- FOREIGN KEY (emailaddress)
);

DROP TABLE IF EXISTS Payment;
CREATE TABLE Payment (
	payment_id INT,
	customer_id INT,
	rental_id INT,
	amount DECIMAL,
	payment_date DATE,
	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (payment_id)
	-- FOREIGN KEY (emailaddress)
);

-- DROP TABLE IF EXISTS Status;
-- CREATE TABLE Status (
-- 	status_id INT AUTO_INCREMENT NOT NULL,
-- 	open BOOLEAN DEFAULT NULL,
--     closed BOOLEAN DEFAULT NULL,
--     pending BOOLEAN DEFAULT NULL,
--     PRIMARY KEY (status_id)
-- );