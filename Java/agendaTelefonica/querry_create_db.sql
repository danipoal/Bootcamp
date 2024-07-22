CREATE SCHEMA Agenda;
USE Agenda;
CREATE TABLE IF NOT EXISTS Agenda.agenda (
	id_contacto INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20),
    apellido VARCHAR(50),
    telefono INTEGER
);
