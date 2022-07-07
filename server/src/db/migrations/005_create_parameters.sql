CREATE TABLE IF NOT EXISTS parameters(
	id_parameter int not null auto_increment,
    name varchar(100) not null,
    value varchar(200) not null,
    primary key (id_parameter)
);

INSERT IGNORE INTO db_changes 
VALUES (005, 'Create table', 'Tabla de parámetros para perfiles', curdate())