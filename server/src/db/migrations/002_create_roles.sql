CREATE TABLE IF NOT EXISTS roles(
	id_rol int not null auto_increment,
    name varchar(50) not null,
    description varchar(100) not null,
    primary key (id_rol)
);

INSERT IGNORE INTO db_changes
VALUES (002, 'Create table', 'Tabla para roles de usuarios', curdate())