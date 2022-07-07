CREATE TABLE IF NOT EXISTS profiles_x_parameters(
	id_parameter int not null,
    id_profile int not null,
    primary key (id_parameter, id_profile),
    key fk_parameters (id_parameter),
    key fk_profiles (id_profile),
    constraint fk_parameters foreign key (id_parameter) references parameters (id_parameter) on delete no action on update no action,
    constraint fk_profiles foreign key (id_profile) references profiles (id_profile) on delete no action on update no action
);

INSERT IGNORE INTO db_changes 
VALUES (008, 'Create table', 'Tabla que relaciona perfiles con parámetros', curdate())