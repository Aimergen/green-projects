<<<<<<< HEAD
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
=======
CREATE TABLE category (
  id int unsigned AUTO_INCREMENT,
  name varchar(255),
  slug varchar(255),
  imgUrl varchar(200),
  productCount int unsigned DEFAULT '0',
  createdAt datetime,
  PRIMARY KEY (id),
>>>>>>> f24706f9986585712638ae0bc222a50bacf25d38
);

