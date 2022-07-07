CREATE TABLE IF NOT EXISTS permissions_x_roles(
	id_permission int not null,
    id_rol int not null,
    primary key (id_permission, id_rol),
    key fk_permissions (id_permission),
    key fk_roles (id_rol),
    constraint fk_permission foreign key (id_permission) references permissions (id_permission) on delete no action on update no action,
    constraint fk_roles foreign key (id_rol) references roles (id_rol) on delete no action on update no action
);

INSERT IGNORE INTO db_changes 
VALUES (007, 'Create table', 'Tabla que relaciona permisos con roles', curdate())