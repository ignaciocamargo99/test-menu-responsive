CREATE TABLE IF NOT EXISTS db_changes(
	id_change bigint not null,
    change_type varchar(50) not null,
    description varchar(100) not null,
    creation_date date not null,
    primary key (id_change)
);

INSERT IGNORE INTO db_changes
VALUES (001, 'Create table', 'Tabla para almacenar scripts que corrieron en la BD actual.', curdate())