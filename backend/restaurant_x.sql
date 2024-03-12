/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 8.0.30 : Database - restaurant_x
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`restaurant_x` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `restaurant_x`;

/*Table structure for table `cancelled_orders` */

DROP TABLE IF EXISTS `cancelled_orders`;

CREATE TABLE `cancelled_orders` (
  `id` bigint NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `net_amount` bigint DEFAULT NULL,
  `order_items` varbinary(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `time` time(6) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `cancelled_orders` */

/*Table structure for table `completed_orders` */

DROP TABLE IF EXISTS `completed_orders`;

CREATE TABLE `completed_orders` (
  `id` bigint NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `net_amount` bigint DEFAULT NULL,
  `order_items` varbinary(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `time` time(6) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `completed_orders` */

/*Table structure for table `file_data` */

DROP TABLE IF EXISTS `file_data`;

CREATE TABLE `file_data` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `file_path` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `file_data` */

/*Table structure for table `food_items` */

DROP TABLE IF EXISTS `food_items`;

CREATE TABLE `food_items` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `food_image` varchar(255) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `quantity` bigint DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `food_items` */

insert  into `food_items`(`id`,`description`,`food_image`,`price`,`quantity`,`title`) values 
(1,'Food Closeup. Grilled Ribs In Barbecue Restaurant. Spareribs With Vegetables And Sauce On Wooden Tray. ','https://plus.unsplash.com/premium_photo-1663036447682-8f0d918adbed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',400,50,'Grilled Ribs'),
(2,'roasted ribs with sliced tomatoes and potatoes','https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',500,50,'Roasted ribs'),
(3,'bowl of vegetable','https://images.unsplash.com/photo-1556040220-4096d522378d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',200,50,'bowl of vegetable');

/*Table structure for table `image_data` */

DROP TABLE IF EXISTS `image_data`;

CREATE TABLE `image_data` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `imagedata` blob,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `image_data` */

/*Table structure for table `inventory` */

DROP TABLE IF EXISTS `inventory`;

CREATE TABLE `inventory` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `enlist_time` datetime(6) DEFAULT NULL,
  `enlisted_by` varchar(255) DEFAULT NULL,
  `inventory_category` varchar(255) DEFAULT NULL,
  `item_description` varchar(255) DEFAULT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `item_quantity` bigint DEFAULT NULL,
  `unit_cost` bigint DEFAULT NULL,
  `unit_type` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `inventory` */

insert  into `inventory`(`id`,`enlist_time`,`enlisted_by`,`inventory_category`,`item_description`,`item_name`,`item_quantity`,`unit_cost`,`unit_type`,`updated_at`,`updated_by`) values 
(4,'2024-03-10 15:26:02.186156','1','fish','Good Rui fish','Rui Fish',600,150,'kg','2024-03-10 15:26:02.186156',NULL);

/*Table structure for table `kitchen_items` */

DROP TABLE IF EXISTS `kitchen_items`;

CREATE TABLE `kitchen_items` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `enlist_time` datetime(6) DEFAULT NULL,
  `enlisted_by` varchar(255) DEFAULT NULL,
  `inventory_category` varchar(255) DEFAULT NULL,
  `item_description` varchar(255) DEFAULT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `item_quantity` bigint DEFAULT NULL,
  `unit_cost` bigint DEFAULT NULL,
  `unit_type` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `updated_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `kitchen_items` */

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `net_amount` bigint DEFAULT NULL,
  `order_items` varbinary(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `time` time(6) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `orders` */

insert  into `orders`(`id`,`address`,`net_amount`,`order_items`,`order_status`,`time`,`user_id`) values 
(1,'dhaka',700,'¬í\0ur\0[Ljava.lang.String;­ÒVçé{G\0\0xp\0\0\0t\0Roasted ribst\0bowl of vegetable','pending','16:20:00.000000',1),
(2,NULL,800,'¬í\0ur\0[Ljava.lang.String;­ÒVçé{G\0\0xp\0\0\0t\0Grilled Ribst\0Grilled Ribs','pending',NULL,1),
(3,NULL,1300,'¬í\0ur\0[Ljava.lang.String;­ÒVçé{G\0\0xp\0\0\0ppp','pending',NULL,1),
(4,NULL,2100,'¬í\0ur\0[Ljava.lang.String;­ÒVçé{G\0\0xp\0\0\0ppppp','pending',NULL,1);

/*Table structure for table `restaurant_table` */

DROP TABLE IF EXISTS `restaurant_table`;

CREATE TABLE `restaurant_table` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `capacity` bigint DEFAULT NULL,
  `paid_amount` bigint DEFAULT NULL,
  `reservation_booking_time` datetime(6) DEFAULT NULL,
  `reservation_end_time` datetime(6) DEFAULT NULL,
  `reservation_start_time` datetime(6) DEFAULT NULL,
  `service_charge` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `restaurant_table` */

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `role_name` varchar(255) NOT NULL,
  `role_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `roles` */

insert  into `roles`(`role_name`,`role_description`) values 
('Manager','Manager Role'),
('User','User Role');

/*Table structure for table `user_roles` */

DROP TABLE IF EXISTS `user_roles`;

CREATE TABLE `user_roles` (
  `user_id` bigint NOT NULL,
  `role_id` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`),
  CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_name`),
  CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `user_roles` */

insert  into `user_roles`(`user_id`,`role_id`) values 
(1,'Manager');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` bigint DEFAULT NULL,
  `terms_of_service` bit(1) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`email`,`first_name`,`last_name`,`password`,`phone_number`,`terms_of_service`,`user_name`) values 
(1,'hossainmozammel27@gmail.com','Md. Mozammel','Hossain','tanvir',1945824828,NULL,'tanvir');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
