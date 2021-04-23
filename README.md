# p7_final_version
P7 du parcours développeur web 

Pour installer les dépendances : 

dans le root: NPM INSTALL,
cd client > NPM INSTALL puis NPM START

Nouveau Terminal:
cd api > NPM INSTALL puis NPM START.

dans XAMPP > PHPMYADMIN requète SQL : 

CREATE DATABASE IF NOT EXISTS express-api;
USE groupomania;
CREATE TABLE IF NOT EXISTS comments (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    author INT NOT NULL,
    content TEXT NOT NULL,
    post INT NOT NULL,
    date DATE DEFAULT CURRENT_TIMESTAMP())
   ;
CREATE TABLE IF NOT EXISTS likes(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    postid INT NOT NULL,
    liker INT NOT NULL)
    ;
    
CREATE TABLE IF NOT EXISTS post(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    author INT NOT NULL,
    title TEXT NOT NULL,
    img TEXT NULL,
    content TEXT NOT NULL,
    tag int NOT NULL,
   date_time DATE DEFAULT CURRENT_TIMESTAMP())

    ;
    
 CREATE TABLE IF NOT EXISTS tags(
     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     tag VARCHAR(255) NOT NULL
 )
;
 
 CREATE TABLE IF NOT EXISTS users(
     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     username VARCHAR(255) NOT NULL,
      lastname VARCHAR(255) NOT NULL,
      firstname VARCHAR(255) NOT NULL,
      job VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL
 )
 ;
 
 Le projet est prêt. 
