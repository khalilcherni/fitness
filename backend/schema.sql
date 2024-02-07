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
    15,
    12,
    'Who says exercise has to be complicated? Pick up something heavy and move it somewhere else — this is the idea behind the farmer''s walk. Try and use weights that add to a total of half your current bodyweight — 40kg is a good gauge for most men — to tax your grip strength, your core and your upper-back. Farmer''s walks can be fairly low-skill, too. So they make for an ideal bang-for-your-buck exercise.',
    'https://hips.hearstapps.com/hmg-prod/images/trap-bar-farmers-walk-640ddd9a8bed7.jpg?crop=1xw:1xh;center,top&resize=980:*'
);

INSERT INTO fitnessformen (ExerciseName, DurationInMinutes, Repetitions, Description, Image)
VALUES (
    'Weighted Sled (Prowler)',
    10,
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
    'https://hips.hearstapps.com/hmg-prod/images/airbike-1582219718.jpg?crop=1xw:1xh;center,top&resize=980:*'
);

INSERT INTO fitnessformen (ExerciseName, DurationInMinutes, Repetitions, Description, Image)
VALUES (
    'Barbell Deadlifts',
    10,
    10,
    'The king of compound exercises, there''s not much a well-performed deadlift can''t do. But here''s the beauty of it: as a compound exercise, the barbell deadlift will hit multiple muscle groups all at once, including your quads, hamstrings, arms, abs and grip strength. By challenging yourself with progressively heavier weights, you''ll increase your lean muscle mass, something important for improving your physique.',
    'https://hips.hearstapps.com/menshealth-uk/main/assets/deadlift.gif?crop=0.807xw:1.00xh;0.135xw,0&resize=980:*'
);

INSERT INTO fitnessformen (ExerciseName, DurationInMinutes, Repetitions, Description, Image)
VALUES (
    'Barbell Lunges',
    10,
    10,
    'The classic barbell lunges engage your legs, glutes, and core muscles simultaneously, making it an excellent compound exercise. By challenging yourself with progressively heavier weights, you can effectively build lower body strength and improve balance and stability.',
    'https://hips.hearstapps.com/menshealth-uk/main/assets/bench-press.gif?crop=0.670xw:1.00xh;0.202xw,0&resize=980:*'
);
INSERT INTO fitnessformen (ExerciseName, DurationInMinutes, Repetitions, Description, Image)
VALUES (
    'Front Squats',
    5,
    10,
    'Squats, but not as you know them — with most guys shying away from this leg-bulking variation, front squats are a great move for building strength. Generally, front squats can be safer than barbell back squats and more beginner-friendly. Your core should be fighting to keep your chest upright, while scaling the load to a weight lighter than your normal squatting strength will help you front squat at a faster pace, ramping up your fat-burn.',
    'https://hips.hearstapps.com/menshealth-uk/main/assets/how-to-do-the-front-squat.gif?crop=0.667xw:1.00xh;0.221xw,0&resize=980:*'
);

INSERT INTO fitnessformen (ExerciseName, DurationInMinutes, Repetitions, Description, Image)
VALUES (
    'Dumbbell Deadlift',
    5,
    15,
    'Don''t feel comfortable with the conventional bar deadlift? No dramas — the dumbbell deadlift is an ideal scaling option for those looking to build strength before hitting the bar. It''s another good example of a full-body exercise that can be done almost anywhere — from home to hotel gyms — with a truckload of benefits including total-body strength, grip improvement, and better mobility. Thankfully, all these will transfer over to the barbell deadlift, helping you build stronger quads, glutes, traps, and core.',
    'https://hips.hearstapps.com/hmg-prod/images/db-deadlift-1676549341.jpeg?crop=1xw:1xh;center,top&resize=980:*'
);



INSERT INTO fitnessformen (ExerciseName, DurationInMinutes, Repetitions, Description, Image)
VALUES (
    'Dumbbell Goblet Squat',
    10,
    15,
    'It''s squatting at its most basic. Well, almost. A progression from the simple bodyweight squat, the goblet squat (which can also be done with a kettlebell) is ideal for those looking to build lower-body strength before racking plates up on a barbell. Similarly, using proper form will encourage your core, shoulders, and back to work, while your legs and glutes get a big hit. Plus, this exercise will improve your mobility and, when you move slower, become ideal for time-under-tension training.',
    'https://hips.hearstapps.com/menshealth-uk/main/assets/dumbbellgoblet.gif?crop=0.5625xw:1xh;center,top&resize=980:*'
);
