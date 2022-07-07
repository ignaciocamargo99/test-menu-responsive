CREATE TABLE IF NOT EXISTS users(
	id_user int not null auto_increment,
    user_name varchar(50) not null,
    password varchar(200) not null,
    creation_date date not null,
    deleted_date date,
    id_profile int not null,
    id_rol int not null,
    primary key (id_user),
    key fk_profile (id_profile),
    key fk_rol (id_rol),
    constraint fk_profile foreign key (id_profile) references profiles (id_profile) on delete no action on update no action,
    constraint fk_rol foreign key (id_rol) references roles (id_rol) on delete no action on update no action
);

INSERT IGNORE INTO db_changes 
VALUES (006, 'Create table', 'Tabla de usuarios', curdate())