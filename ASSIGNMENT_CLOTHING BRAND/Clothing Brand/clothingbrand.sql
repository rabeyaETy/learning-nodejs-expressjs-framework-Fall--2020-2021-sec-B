-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2020 at 03:18 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clothingbrand`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(15) NOT NULL,
  `customerName` varchar(30) NOT NULL,
  `customerContactNumber` varchar(20) NOT NULL,
  `customerAddress` varchar(50) NOT NULL,
  `customerEmail` varchar(50) NOT NULL,
  `customerStatus` varchar(10) NOT NULL,
  `customerGender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `customerName`, `customerContactNumber`, `customerAddress`, `customerEmail`, `customerStatus`, `customerGender`) VALUES
(3, 'ety', '01234567893', '23/1 Dhaka', 'ety01@gmail.com', 'customer', 'female'),
(6, 'Rabeya aktar', '01234567896', 'dhaka 1205', 'ety01@gmail.com', 'genarel', 'female'),
(7, 'Rabeya aktar', '01234567896', 'dhaka 1205', 'ety01@gmail.com', 'genarel', 'female'),
(8, 'test', '01234567896', 'dhaka 1205', 'test@gmail.com', 'general', 'female'),
(9, 'customer', '01234567893', 'Barisal', 'customer01@gmail.com', 'customer', 'female');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(15) NOT NULL,
  `productCode` varchar(50) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `productVendor` varchar(255) DEFAULT NULL,
  `quantityInStock` int(255) NOT NULL,
  `buyPrice` float NOT NULL,
  `sellPrice` float NOT NULL,
  `productDescription` varchar(255) DEFAULT NULL,
  `productImage` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `productCode`, `productName`, `productVendor`, `quantityInStock`, `buyPrice`, `sellPrice`, `productDescription`, `productImage`) VALUES
(9, '24', 'women\'s dess', 'goodie', 32, 1500, 3000, 'long dress', 'undefined'),
(11, '23', 'Men\'s T-shirt', 'sunmoon', 30, 750, 1000, 'Men\'s ', 'nn');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(256) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(256) NOT NULL,
  `type` varchar(255) NOT NULL,
  `designation` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `type`, `designation`) VALUES
(4, 'admin', 'admin@gmail.com', 'admin', 'admin', 'admin'),
(5, 'customer', 'customer@gmail.com', '1234', 'customer', 'customer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
