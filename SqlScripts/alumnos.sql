-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.28-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para laravelclase
CREATE DATABASE IF NOT EXISTS `nodeclase` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `nodeclase`;

-- Volcando estructura para tabla nodeclase.alumno
CREATE TABLE IF NOT EXISTS `alumno` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `edad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `carrera` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla nodeclase.alumno: ~16 rows (aproximadamente)
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
INSERT INTO `alumno` (`id`, `name`, `edad`, `carrera`, `created_at`, `updated_at`) VALUES
	(2, 'Pato', '20', 'IDS', NULL, NULL),
	(5, 'Tio Bimbo', '24', 'II', NULL, NULL),
	(6, 'Negrito', '33', 'LAE', NULL, NULL),
	(8, 'Luigi', '33', 'LAE', NULL, NULL),
	(9, 'Viejo', '15', 'LAE', NULL, NULL),
	(10, 'Pequeñin', '15', 'LAE', NULL, NULL),
	(11, 'probando', '16', 'II', NULL, NULL),
	(12, 'Miguel Eduardo Pineda López!', '222', 'IDS', '2018-08-28 01:23:17', '2018-09-06 00:21:05'),
	(14, 'Sosa', '35', 'IDS', '2018-08-28 01:41:56', '2018-08-28 01:41:56'),
	(15, 'tu padre', '55', 'IDS', '2018-09-06 00:19:43', '2018-09-06 00:19:43'),
	(16, 'Mario', '20', 'Plomero', NULL, NULL),
	(17, 'Hitler', '200', 'IDSSS', NULL, NULL),
	(18, 'Radios', '19', 'Intendente', NULL, NULL),
	(19, 'Alfonso', '21', 'IDSSS', NULL, NULL),
	(20, 'Alonso', '22', 'IDSSS', NULL, NULL),
	(21, 'Pepe poncho', '23', 'IDSSS', NULL, NULL);
/*!40000 ALTER TABLE `alumno` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
