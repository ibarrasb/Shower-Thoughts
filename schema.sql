DROP DATABASE IF EXISTS showerthoughts_db;

CREATE DATABASE showerthoughts_db;

USE showerthoughts_db;

CREATE TABLE customer (
	cust_id INT AUTO_INCREMENT NOT NULL,
	cust_nme VARCHAR(30) NOT NULL,
    cust_email VARCHAR(255) NOT NULL,
    psword INT NOT NULL,
    PRIMARY KEY(cust_id)
);

CREATE TABLE category (
	cat_id int AUTO_INCREMENT NOT NULL,
    cat_name varchar(35) NOT NULL,
    PRIMARY KEY(cat_id)
);

CREATE TABLE posts (
	post_id INT AUTO_INCREMENT NOT NULL,
    post_title VARCHAR(60) NOT NULL,
    post_desc VARCHAR(280),
    post_date DATE DEFAULT (CURRENT_DATE),
    cat_id int,
    cust_id int,
    PRIMARY KEY (post_id),
    FOREIGN KEY (cat_id) REFERENCES category(cat_id),
    FOREIGN KEY (cust_id) REFERENCES customer(cust_id)
);

CREATE TABLE reply (
	rep_id INT AUTO_INCREMENT NOT NULL,
    rep_desc varchar(280) NOT NULL,
    cust_id int,
    post_id int,
    PRIMARY KEY (rep_id),
	FOREIGN KEY (cust_id) REFERENCES customer(cust_id),
	FOREIGN KEY (post_id) REFERENCES posts (post_id)
);