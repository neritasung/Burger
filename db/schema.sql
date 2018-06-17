create database burgers_db

use burgers_db

create table burgers (
	id integer primary key auto_increment, 
    burger_name varchar (512),
    delivered boolean
);

select*
from burgers