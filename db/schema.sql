CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("Double Bacon Cheeseburger", true);

SELECT * FROM burgers;