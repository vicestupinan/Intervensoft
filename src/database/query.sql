CREATE DATABASE Intervensoft

USE Intervensoft;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    cedula VARCHAR(255) NOT NULL,
    telefono VARCHAR(255)
);

SELECT * FROM usuarios;
