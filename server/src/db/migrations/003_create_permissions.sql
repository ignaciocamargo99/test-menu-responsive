CREATE TABLE IF NOT EXISTS permissions(
	id_permission int not null auto_increment,
    name varchar(50) not null,
    description varchar(100) not null,
    primary key (id_permission)
);

INSERT IGNORE INTO db_changes
VALUES (003, 'Create table', 'Tabla para permisos de usuarios', curdate())