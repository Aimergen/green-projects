create table category(
    id int unsigned auto_increment,
    name varchar(255),
    slug varchar(255) unique,
    description text,
    productCount int unsigned default 0,
    createdAt datetime,
    primary key(id)
);

create table product(
    id int unsigned auto_increment,
    name varchar(255),
    slug varchar(255) unique,
    description text,
    productCount int unsigned default 0,
    createdAt datetime,
    primary key(id)
);

