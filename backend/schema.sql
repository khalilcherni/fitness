-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema fitness
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema fitness
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fitness` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `fitness` ;

-- -----------------------------------------------------
-- Table `fitness`.`fitnessformen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitness`.`fitnessformen` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `ExerciseName` VARCHAR(250) NOT NULL,
  `DurationInMinutes` INT NULL DEFAULT NULL,
  `Repetitions` INT NULL DEFAULT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `Image` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `fitness`.`fitnessforwomen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitness`.`fitnessforwomen` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `ExerciseName` VARCHAR(250) NOT NULL,
  `DurationInMinutes` INT NULL DEFAULT NULL,
  `Repetitions` INT NULL DEFAULT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `Image` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `fitness`.`gainweight`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitness`.`gainweight` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `calories` VARCHAR(45) NOT NULL,
  `description` VARCHAR(250) NOT NULL,
  `image` VARCHAR(255) NOT NULL DEFAULT 'N/A',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 22
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `fitness`.`loseweight`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitness`.`loseweight` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `calories` VARCHAR(45) NOT NULL,
  `description` VARCHAR(250) NOT NULL,
  `image` VARCHAR(255) NOT NULL DEFAULT 'N/A',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `fitness`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitness`.`products` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` VARCHAR(225) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `Image` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `fitness`.`protein`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitness`.`protein` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` VARCHAR(225) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `Image` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `fitness`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitness`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;