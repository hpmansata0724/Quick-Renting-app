-- Users table
CREATE TABLE Users(
    user_id serial primary key,
    firstname varchar(255) not null,
    lastname varchar(255) not null,
    age int not null,
    mobile varchar(20) not null,
    email varchar(255) unique not null,
    password varchar(255) not null
);
