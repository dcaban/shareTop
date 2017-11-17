### Schema
CREATE DATABASE inventory;
USE inventory;

CREATE TABLE Product
(
	id int NOT NULL AUTO_INCREMENT,
	maker varchar(100),
	model INT, DEFAULT false,
	type VARCHAR(100),
	PRIMARY KEY (id)
);

CREATE TABLE Laptop (
	code INT, 
	model VARCHAR(50),
	speed SMALLINT,
	ram SMALLINT,
	screen TINYINT,
	price MONEY
	PRIMARY KEY (code)
);

CREATE TABLE Tablet (
	code INT, 
	model VARCHAR(50),
	speed SMALLINT,
	ram SMALLINT,
	screen TINYINT,
	price MONEY,
	PRIMARY KEY (code)
);

CREATE TABLE Customer (
	customer_id
	first_name
	last_name
	email
	address_id
	active
	create_date
	last_update
);

CREATE TABLE Rental (
	rental_id
	rental_date
	inventory_id/code
	customer_id/username
	return_date
	last_update
)

CREATE TABLE Payment (
	payment_id
	customer_id
	rental_id
	amount
	payment_date
	last_update
);