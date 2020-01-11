DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(45) NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);
INSERT INTO burgers (burger_name,devoured)
VALUES ("Cheeseburger",0);

INSERT INTO products (burger_name,devoured)
VALUES ("Hamburger",0);

INSERT INTO products (burger_name,devoured)
VALUES ("Pizzaburger",0);
