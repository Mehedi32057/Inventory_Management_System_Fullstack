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
-- Table structure for table `productionrecords`
--

DROP TABLE IF EXISTS `productionrecords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productionrecords` (
  `production_id` bigint NOT NULL AUTO_INCREMENT,
  `batch_number` varchar(255) DEFAULT NULL,
  `production_date` date DEFAULT NULL,
  `production_quantity` int NOT NULL,
  `quality_control_info` varchar(255) DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  PRIMARY KEY (`production_id`),
  KEY `FKjlp9r1jm8bgptqxl2rn6ednhk` (`product_id`),
  CONSTRAINT `FKjlp9r1jm8bgptqxl2rn6ednhk` FOREIGN KEY (`product_id`) REFERENCES `production_product` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productionrecords`
--

LOCK TABLES `productionrecords` WRITE;
/*!40000 ALTER TABLE `productionrecords` DISABLE KEYS */;
INSERT INTO `productionrecords` VALUES (1,'1','2024-12-13',30,'ghjhj',2),(2,'A2024-01','2024-12-09',34,'orange are source from reputate farm',4),(3,'1','2024-12-09',23,'orange are source from reputate farm',4),(4,'32445','2024-12-12',30,'orange are source from reputate farm',4),(5,'A2024-01','2024-12-12',60,'rgghttgtg',4),(6,'3','2024-12-17',34,'very good product',3),(7,'A2024-01','2024-12-17',67,'orange are source from reputate farm',4),(8,'A2024-01','2024-12-17',32,'orange are source from reputate farm',4),(9,'1','2024-12-17',34,'tftyfugu',3),(10,'1','2024-12-17',56,'very good product',3),(11,'A2024-01','2024-12-18',50,'Banana the mo d',3),(12,'B2343-02','2024-12-21',70,'Electronics is a scientific and engineering field that studies and applies the principles of physics to design, create, and operate electronic devices',2),(14,'A2024-01','2024-12-22',34,'orange are source from reputate farm',4),(15,'B3445-32-54','2024-12-22',90,'very good product',3),(16,'A2024-01','2024-12-22',60,'very good product',3);
/*!40000 ALTER TABLE `productionrecords` ENABLE KEYS */;
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
