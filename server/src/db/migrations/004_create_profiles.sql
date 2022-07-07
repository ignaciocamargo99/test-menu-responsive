CREATE TABLE IF NOT EXISTS profiles(
	id_profile int not null auto_increment,
    creation_date date not null,
    deleted_date date,
    primary key (id_profile)
);

INSERT IGNORE INTO db_changes
VALUES (004, 'Create table', 'Tabla para perfiles de usuarios', curdate())