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
  `description` VARCHAR(45) NOT NULL,
  `image` VARCHAR(255) NOT NULL DEFAULT 'N/A',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
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
  `description` VARCHAR(45) NOT NULL,
  `image` VARCHAR(255) NOT NULL DEFAULT 'N/A',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
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
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



  INSERT INTO fitnessformen (ExerciseName, DurationInMinutes, Repetitions, Description, Image)
VALUES (
    'Farmer''s Carry',
    15min,
    12,
    'Who says exercise has to be complicated? Pick up something heavy and move it somewhere else — this is the idea behind the farmer''s walk. Try and use weights that add to a total of half your current bodyweight — 40kg is a good gauge for most men — to tax your grip strength, your core and your upper-back. Farmer''s walks can be fairly low-skill, too. So they make for an ideal bang-for-your-buck exercise.',
    'https://hips.hearstapps.com/hmg-prod/images/trap-bar-farmers-walk-640ddd9a8bed7.jpg?crop=1xw:1xh;center,top&resize=980:*'
);

INSERT INTO fitnessformen (ExerciseName, DurationInMinutes, Repetitions, Description, Image)
VALUES (
    'Weighted Sled (Prowler)',
    10min,
    20,
    'As with the farmer''s walks, the strength and stamina to move a heavy object at pace is a particular skill that many neglect. Pushing a weighted sled is another example of a low-skill move that requires a decent amount of effort. Load the sled up with around half of your weight, performing rounds of 20-30m runs and back, resting on a 1:2 ratio. You''ll benefit from aerobic and anaerobic gains.',
    'https://hips.hearstapps.com/hmg-prod/images/prowler1-1549553753.jpg?crop=1xw:1xh;center,top&resize=980:*'
);
  

  INSERT INTO fitnessformen (ExerciseName, DurationInMinutes, Repetitions, Description, Image)
VALUES (
    'Kettlebell Swings',
    10,
    20,
    'Easy to master and one of the most effective exercises, kettlebell swings are an absolute must. You''ll use your glutes, hips and quads to power the kettlebell upwards, and use your abs to help keep your core stable. Even your shoulders will get some love. All of this will spike your heart rate and torch calories.',
    'https://hips.hearstapps.com/hmg-prod/images/kettlebell-swing-1586253630.jpg?crop=1xw:1xh;center,top&resize=980:*'
);


INSERT INTO fitnessformen (ExerciseName, DurationInMinutes, Repetitions, Description, Image)
VALUES (
    'Burpee',
    10,
    25,
    'Our list of best exercises to lose weight wouldn''t be complete without burpees. This exercise torches calories and skyrockets your heart rate. Don''t forget to regress the exercise if you need to. The burpee can be completed without the jumps and with a knees down press-up if you need it. Performing just 10 reps of chest-to-floor burpees at a fast pace can rev your metabolism as much as a 30-second, all-out bike sprint, according to a study from the American College of Sports Medicine. And that means one thing: burning calories.',
    'https://hips.hearstapps.com/hmg-prod/images/burpee-1600165356.jpg?crop=1xw:1xh;center,top&resize=980:*'
);


INSERT INTO fitnessformen (ExerciseName, DurationInMinutes, Repetitions, Description, Image)
VALUES (
    'Airbike',
    15,
    10,
    'A truly fiendish piece of fitness kit, the assault bike is one of the most threatening pieces of equipment. It''s simple really, you sit on the bike and ride like hell until you can''t anymore — then do that a few more times. The trick is, however, that the harder you push and pedal the bike, the harder the work becomes, as the resistance setting responds to your pace. Just don''t give up. Aim for quick sprints — 15 seconds, or 12 calories are ideal benchmarks — resting for a 1:2 ratio for five rounds or above.',
    'https://hips.hearstapps.com/hmg-prod/images/airbike-1582219718.jpg?crop=1xw:1xh;center,top&resize=980:'
);
