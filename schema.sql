create database burgers_db

use burgers_db

CREATE TABLE burgers(
id INT AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR (100) NOT NULL,
delivered BOOLEAN default false,
date TIMESTAMP
);

select*
from burgers

