-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: nexchain
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `inventory_id` bigint NOT NULL AUTO_INCREMENT,
  `last_stock_update_date` date DEFAULT NULL,
  `quantity_in_stock` int DEFAULT NULL,
  `unit_price` double DEFAULT NULL,
  `procurement_id` bigint DEFAULT NULL,
  `material_id` bigint DEFAULT NULL,
  PRIMARY KEY (`inventory_id`),
  KEY `FKl9kvhx7li7jt1yqbsmynrtm7o` (`procurement_id`),
  KEY `FKk6d2e6xijnaln8hgc3khobdgb` (`material_id`),
  CONSTRAINT `FKk6d2e6xijnaln8hgc3khobdgb` FOREIGN KEY (`material_id`) REFERENCES `raw_material` (`material_id`),
  CONSTRAINT `FKl9kvhx7li7jt1yqbsmynrtm7o` FOREIGN KEY (`procurement_id`) REFERENCES `procurement` (`procurement_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES (1,'2024-12-05',20,4,1,1),(2,'2024-12-07',400,5,2,2),(3,'2024-12-28',500,4,3,3),(4,'2024-11-23',300,4,4,4),(5,'2024-12-17',45,4,6,5),(6,'2024-12-12',34,4,7,3),(7,'2024-12-18',56,5,8,6),(8,'2024-12-14',78,8,6,2),(9,'2024-12-10',655,5,9,6),(10,'2024-12-11',67,4.09,11,4),(11,'2024-12-11',56,4,12,3),(12,'2024-12-10',56,4,13,3),(13,'2024-12-26',90,7,14,7),(14,'2024-12-25',56,6,16,5),(15,'2024-12-31',98,7,17,8),(16,'2024-12-14',70,5,18,9),(17,'2024-12-14',70,7,19,10),(18,'2024-12-18',43,8,20,11),(19,'2024-12-19',56,100,21,13),(20,'2024-12-20',700,130,23,15),(21,'2024-12-18',45,7,24,16),(22,'2024-12-20',100,100,25,17),(23,'2024-12-20',100,18,26,20),(24,'2024-12-20',100,7,28,23),(25,'2024-12-20',100,7,29,24),(26,'2024-12-26',100,50,30,25),(27,'2024-12-12',49,4,31,27),(28,'2024-12-21',50,7,32,28),(29,'2024-12-21',1000,4000,33,29),(30,'2024-12-21',700,800,34,30),(31,'2024-12-19',800,100,35,31),(32,'2024-12-20',70,8,36,32),(33,'2024-12-28',78,7,38,34);
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-09 19:40:35
