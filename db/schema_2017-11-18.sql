# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.19)
# Database: locations
# Generation Time: 2017-11-18 17:25:24 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table starbucks
# ------------------------------------------------------------
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

DROP TABLE IF EXISTS `starbucks`;

CREATE TABLE `starbucks` (
  `Brand` varchar(255) DEFAULT NULL,
  `Store Number` varchar(255) DEFAULT NULL,
  `Store Name` varchar(255) DEFAULT NULL,
  `Ownership Type` varchar(255) DEFAULT NULL,
  `Street Address` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `State/Province` varchar(255) DEFAULT NULL,
  `Country` varchar(255) DEFAULT NULL,
  `Postcode` varchar(255) DEFAULT NULL,
  `Phone Number` varchar(255) DEFAULT NULL,
  `Timezone` varchar(255) DEFAULT NULL,
  `Longitude` varchar(255) DEFAULT NULL,
  `Latitude` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;