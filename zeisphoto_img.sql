drop table if exists photobooth;
create table photobooth
(
id smallint unsigned not null auto_increment,
dateCreated date not null,
title varchar(255) not null, 
summary text not null, 
content mediumtext not null, 


PRIMARY KEY (id)
);