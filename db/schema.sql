DROP DATABASE IF EXISTS burger_db;
-- Creates the "todolist" database --
CREATE DATABASE burger_db;

use burger_db;

create table burgers(
   id int auto_increment,
   burger_name varchar(200) not null,
   devoured boolean,
   primary key (id)
);
