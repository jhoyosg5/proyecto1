# proyecto1
Primer proyecto de topicos de telematica

Este proyecto consta en una aplicacion la cual posee las siguientes caracteristicas:

-Autenticación de usuarios y API REST

-Registro de eventos en tiempo real 

-Visualización de ruta previamente almacenada.

Requisitos:
Se debe tener npm, mongo y express

Para ambiente local:
Es necesario cambiar en el archivo de database.js cambiar la linea 3 por la siguiente linea
    env = process.env.NODE_ENV || 'development';

Para correr en el DCA:
Es necesario cambiar en el archivo de database.js cambiar la linea 3 por la siguiente linea
    env = process.env.NODE_ENV || 'test';

Para correr en el servidor de amazon:
Es necesario cambiar en el archivo de database.js cambiar la linea 3 por la siguiente linea
    env = process.env.NODE_ENV || 'production';

