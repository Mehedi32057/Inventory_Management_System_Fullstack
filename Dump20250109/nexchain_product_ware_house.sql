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
-- Table structure for table `product_ware_house`
--

DROP TABLE IF EXISTS `product_ware_house`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_ware_house` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `batch_number` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `trucker_name` varchar(255) DEFAULT NULL,
  `worker_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_ware_house`
--

LOCK TABLES `product_ware_house` WRITE;
/*!40000 ALTER TABLE `product_ware_house` DISABLE KEYS */;
INSERT INTO `product_ware_house` VALUES (1,'A2024-01','xray',50,'Approved','rak','saunn'),(2,'3','wrthrr',32,'Approved','nhnjnj','fgfggb'),(3,'4','water',49,'Pending Approval','topayel','umayer'),(4,'565','gcfy',43,'Approved','hgvhjbj','hjbh'),(5,'34565','sugar cane',23,'Approved','aindrojit','saiful'),(6,'34','dogg food',34,'Approved','wahid','jhaaa'),(7,'A2024-01','Rice',4,'Approved','Mosaidul islam Sir','Rakibul '),(8,'5445','ftyft',54,'Pending Approval','uguy','ghgfgyu'),(9,'gbgb','fvfvg',3445,'Approved','gtybhy','vfv'),(10,'1','map',40,'Approved','sajjad','sunny'),(11,'1','Pine Apple',70,'Approved','Khalil','Pavon'),(12,'1','mango',54,'Approved','dffgtrkut','dfgffd'),(13,'1','computer',56,'Approved','Sakibur','Rakib'),(14,'A2024-01','Computer',700,'Approved','Mehedi Hasan','Siyam Hasan'),(15,'A2024-01','Computer',122,'Approved','Shakib','masud'),(16,'A2024-01','Computer',199,'Approved','Shobuj','Sanu'),(17,'A2024-01','grapes',100,'Approved','Rakib','Mehedi'),(18,'A2024-01','xray',13,'Approved','topayel','saunn'),(19,'A2024-01','Computer',128,'Approved','topayel','saunn'),(20,'A2024-01','xray',56,'Approved','topayel','umayer'),(21,'A2024-01','fgth',435,'Approved','rytry','dgr'),(22,'A2024-01','Computer',34,'Pending Approval','nhnjnj','saunn'),(23,'A2024-01','xray',800,'Approved','Sakib','Sunny'),(24,'A2024-01','xray',600,'Approved','topayel','Sakibur'),(25,'E12343_1234','Computer',70,'Approved','Mehedi','Sakibur'),(26,'C34545-45','Water Bootle',400,'Approved','Mehedi','Sakibur'),(27,'A2024-01','xray',78,'Approved','topayel','saunn'),(28,'A2024-01','xray',78,'Approved','6767566','saunn');
/*!40000 ALTER TABLE `product_ware_house` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-09 19:40:39
