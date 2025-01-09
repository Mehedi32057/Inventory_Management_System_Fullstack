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
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `supplier_id` bigint NOT NULL AUTO_INCREMENT,
  `supplier_company_name` varchar(255) DEFAULT NULL,
  `supplier_contact_info` varchar(255) DEFAULT NULL,
  `supplier_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`supplier_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES (1,'abc Company Limited','01366445334','Sunny'),(2,'BCD CO LTD','74674885','Rakib'),(3,'jpg comapny ltd','543456','topayel'),(4,'CDE CO LTD','6354554635','Sobhuj'),(5,'Fruits CO LTD','3344343445','Shanu Akter'),(6,'Gym Products Limited','34567645323','Rokon Uddin'),(7,'bbv co ltd','677887655','saiful'),(8,'masud gong','3456785','masudur Rahman'),(9,'fuad Co Limited','8765678876','fuad'),(10,'gftg','r6t6','junayed'),(11,'Sakib Company Limited','766566556','sakibur Rahman'),(12,'ABC CO LTD','0123454365','mosaidul islam sir'),(13,'USSL software Company Limited','013456764','Shohidul Islam Sir'),(14,'ABC Co Ltd','9373736643','mohit'),(15,'ABC CO LTD','645757677547','Monirul Islam'),(16,'Shikder group of Company','5454563','sabina'),(17,'Techno Limited','0182823374','Rauf '),(18,'Sharp Electronics LTD','01366445334','Mohit Hasan'),(19,'Raduan gen- Z CO Limited','022374473654','Raduan Hasan'),(20,'ABC CO LTD','01735355464','Gazi Saiful'),(21,'Masud CO LTD','01635346453','Masudur Rahman'),(22,'siyam co ltd','0176578765','siyam'),(23,'Mohit csb CO Ltd','0127726363644','Mohit Hossen'),(24,'Abc Co KLtd','027746466465','Sunny vai'),(25,'ABC CO LTD','01366445334','topayel'),(26,'abc Co Ltd','98488757556','Sunny'),(27,'ABC CO LTD','01366445334','Shoriful islam'),(28,'shohag co limited','01366445334','shohag'),(29,'Shobuj Furniture Limited','01765456897','Sobhuj'),(30,'ABC Electronics Limited','017867767554','Rakib'),(31,'ABC CO LTD','01366445334','Sunny'),(32,'ABC CO LTD','01366445334','Sunny'),(33,'Soltage CO Ltd','0987677876','Rakib');
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-09 19:40:36
