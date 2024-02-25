-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: taskmanagement
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks`
(
    `taskId`      int          NOT NULL AUTO_INCREMENT,
    `title`       varchar(255) NOT NULL,
    `description` varchar(255)      DEFAULT NULL,
    `dueDate`     timestamp    NULL DEFAULT CURRENT_TIMESTAMP,
    `priority`    tinyint(1)        DEFAULT NULL,
    `status`      tinyint(1)        DEFAULT '0',
    `userId`      int               DEFAULT NULL,
    PRIMARY KEY (`taskId`),
    KEY           `FK_usertask`(`userId`
) ,
  CONSTRAINT `FK_usertask` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks`
VALUES (1, 'title', '', '2021-01-24 15:41:44', 1, 0, 101000),
       (2, 'title2', '', '2024-01-27 16:41:44', 1, 0, 101001);
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users`
(
    `userId`   int          NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `email`    varchar(255)      DEFAULT NULL,
    `signDate` timestamp    NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=101016 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users`
VALUES (101000, 'test1', '5a105e8b9d40e1329780d62ea2265d8a', '101000@email.com', '2024-01-22 02:16:00'),
       (101001, 'test2', 'ad0234829205b9033196ba818f7a872b', NULL, '2024-01-22 02:16:00'),
       (101002, 'test3', '8ad8757baa8564dc136c1e07507f4a98', NULL, '2024-01-22 02:16:00'),
       (101003, 'test4', '86985e105f79b95d6bc918fb45ec7727', NULL, '2024-01-22 02:16:00'),
       (101004, 'test5', 'e3d704f3542b44a621ebed70dc0efe13', NULL, '2024-01-22 02:16:00'),
       (101005, 'test6', '4cfad7076129962ee70c36839a1e3e15', NULL, '2024-01-22 02:16:00'),
       (101006, 'test7', 'b04083e53e242626595e2b8ea327e525', NULL, '2024-01-22 02:16:00'),
       (101007, 'test8', '5e40d09fa0529781afd1254a42913847', NULL, '2024-01-22 02:16:00'),
       (101008, 'test9', '739969b53246b2c727850dbb3490ede6', NULL, '2024-01-22 02:16:00'),
       (101009, 'test10', 'c1a8e059bfd1e911cf10b626340c9a54', NULL, '2024-01-22 02:16:00'),
       (101010, 'test11', 'f696282aa4cd4f614aa995190cf442fe', NULL, '2024-01-22 02:16:00'),
       (101011, 'test12', '60474c9c10d7142b7508ce7a50acf414', NULL, '2024-01-22 02:16:00'),
       (101012, 'test13', '33fc3dbd51a8b38a38b1b85b6a76b42b', NULL, '2024-01-22 02:16:00'),
       (101013, 'test14', 'b99c94f62fb2a61433c4e44e27406050', NULL, '2024-01-22 02:16:00'),
       (101014, 'test15', '4b377d23309d4ed39c9da5791417aeff', NULL, '2024-01-22 02:16:00'),
       (101015, 'a', 'b', NULL, '2024-01-27 16:33:13');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-27 11:43:15
