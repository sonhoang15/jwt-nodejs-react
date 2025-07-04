-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2025 at 05:39 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jwt`
--

-- --------------------------------------------------------

--
-- Table structure for table `group`
--

CREATE TABLE `group` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `group`
--

INSERT INTO `group` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Dev', 'development', '2025-06-26 16:22:37', '2025-06-26 16:22:37'),
(2, 'Leader', 'leader/manager', '2025-06-26 16:22:37', '2025-06-26 16:22:37'),
(3, 'Customer', 'Our customer', '2025-06-26 16:22:37', '2025-06-26 16:22:37'),
(4, 'Guest', 'view only', '2025-06-28 06:32:50', '2025-06-28 06:32:50');

-- --------------------------------------------------------

--
-- Table structure for table `group_role`
--

CREATE TABLE `group_role` (
  `id` int(11) NOT NULL,
  `roleId` int(11) DEFAULT NULL,
  `groupId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `group_role`
--

INSERT INTO `group_role` (`id`, `roleId`, `groupId`, `createdAt`, `updatedAt`) VALUES
(36, 11, 4, '2025-07-02 05:37:06', '2025-07-02 05:37:06'),
(37, 1, 4, '2025-07-02 05:37:06', '2025-07-02 05:37:06'),
(38, 5, 2, '2025-07-02 05:37:25', '2025-07-02 05:37:25'),
(39, 4, 2, '2025-07-02 05:37:25', '2025-07-02 05:37:25'),
(40, 3, 2, '2025-07-02 05:37:25', '2025-07-02 05:37:25'),
(41, 1, 2, '2025-07-02 05:37:25', '2025-07-02 05:37:25'),
(72, 20, 3, '2025-07-02 18:08:19', '2025-07-02 18:08:19'),
(73, 19, 3, '2025-07-02 18:08:19', '2025-07-02 18:08:19'),
(74, 12, 3, '2025-07-02 18:08:19', '2025-07-02 18:08:19'),
(75, 11, 3, '2025-07-02 18:08:19', '2025-07-02 18:08:19'),
(76, 54, 1, '2025-07-03 04:04:34', '2025-07-03 04:04:34'),
(77, 21, 1, '2025-07-03 04:04:34', '2025-07-03 04:04:34'),
(78, 20, 1, '2025-07-03 04:04:34', '2025-07-03 04:04:34'),
(79, 19, 1, '2025-07-03 04:04:34', '2025-07-03 04:04:34'),
(80, 12, 1, '2025-07-03 04:04:34', '2025-07-03 04:04:34'),
(81, 11, 1, '2025-07-03 04:04:34', '2025-07-03 04:04:34'),
(82, 6, 1, '2025-07-03 04:04:34', '2025-07-03 04:04:34'),
(83, 5, 1, '2025-07-03 04:04:34', '2025-07-03 04:04:34'),
(84, 4, 1, '2025-07-03 04:04:34', '2025-07-03 04:04:34'),
(85, 3, 1, '2025-07-03 04:04:34', '2025-07-03 04:04:34'),
(86, 1, 1, '2025-07-03 04:04:34', '2025-07-03 04:04:34');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `startDate` varchar(255) DEFAULT NULL,
  `customerId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_user`
--

CREATE TABLE `project_user` (
  `id` int(11) NOT NULL,
  `projectId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `url`, `description`, `createdAt`, `updatedAt`) VALUES
(1, '/user/read', 'show all user', '2025-06-28 06:51:52', '2025-06-28 06:51:52'),
(3, '/user/update', 'delete user', '2025-06-28 06:53:08', '2025-06-28 06:53:08'),
(4, 'user/delete', NULL, '2025-06-28 12:58:23', '2025-06-28 12:58:23'),
(5, '/group/read', NULL, '2025-06-28 12:58:23', '2025-06-28 12:58:23'),
(6, '/role/create', 'create roles', '2025-07-01 04:18:21', '2025-07-01 04:18:21'),
(11, '/role/read', '', '2025-07-01 09:32:40', '2025-07-01 09:32:40'),
(12, '/role/delete', '', '2025-07-01 09:34:52', '2025-07-01 09:34:52'),
(19, '/role/by-group', '', '2025-07-01 10:55:37', '2025-07-01 10:55:37'),
(20, '/role/assign-to-group', '', '2025-07-02 02:55:17', '2025-07-02 02:55:17'),
(21, '/user/create', 'create user', '2025-07-02 05:50:02', '2025-07-03 05:50:30'),
(54, '/role/update', 'update roles', '2025-07-03 04:04:27', '2025-07-03 04:04:27');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20250622144026-create-user.js'),
('migrations-group-role.js'),
('migrations-group.js'),
('migrations-project-user.js'),
('migrations-project.js'),
('migrations-role.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `groupId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `username`, `address`, `sex`, `phone`, `groupId`, `createdAt`, `updatedAt`) VALUES
(11, 'yani.gaming123@gmail.com', '$2a$10$DYOTrOsiFiFP1GMuxyLAkefqDr75REKbeQkJdCPp6Q9kHyKD5xdjC', 'hoang son123', NULL, NULL, '1234465767', 2, '2025-06-26 14:04:33', '2025-06-27 05:48:35'),
(12, 'h@gmail.com', '1234567', 'h3', 'ha noi', '', '276438123645', 1, '2025-06-26 16:41:27', '2025-06-27 05:48:25'),
(14, 'hoangson@1gmail.com', '1234567', 'h2', 'ha nam', 'Other', '0325542941', 3, '2025-06-26 16:48:44', '2025-06-27 05:48:20'),
(15, 'dghsagdja@gmail.com', '1234567', 'hoang son', 'sdasdasd', '', '213241', 1, '2025-06-26 16:49:01', '2025-06-26 16:49:01'),
(16, 'test@gmail.com', '$2a$10$bgrzwrBrCcPs6sQN5EmE/uHb6wKS0.myp8rUJNYyxbrFJ0Unn4inS', 'test', 'việt nam', 'Other', '2141345666453', 4, '2025-06-27 04:41:17', '2025-06-27 04:41:17'),
(17, 'dsahdg@hajskhdkas.com', '$2a$10$.0ljvyr2smvfy1xggUwJpe2M0i5fLy1w3oNHvJwPeo0fpsNb7dnNO', 'test axios', 'dong nai', 'Other', 'fdasdasdasda', 1, '2025-06-27 04:42:10', '2025-06-30 07:57:40'),
(18, 'jwt@gmail.com', '$2a$10$D6.Du1WsfgV9lHbMBYd.FeMmVi5TNT5q6EZ9wGPKXzlrUWCD02woe', 'jwt', 'china', NULL, '1123453656', 1, '2025-06-28 04:36:46', '2025-06-30 11:16:49'),
(21, 'c@gmail.com', '$2a$10$DCi3qNsDxbNbHaPavEixLuj3JFollRRnoQrey6kEbAgSVx.83l7Km', 'hi son', 'ha noi', 'Male', '12323435', 2, '2025-07-02 05:51:32', '2025-07-02 05:51:56'),
(22, 'test1@gmail.com', '$2a$10$MSu79adLoggoSNE2/1q9FuTErKC4dewzOtxC7PF3rAxntbDhr23ri', 'test', 'ha nam', 'Female', '42534543', 3, '2025-07-02 05:53:02', '2025-07-02 05:53:02'),
(24, 'hihi@gmail.com', '$2a$10$vzM4ZSatL3o8Wejw1VIO9um/NctiPSSU.1eu3oAL/li2oxx7239XK', 'son hoang', 'việt nam', 'Male', '432534654', 1, '2025-07-02 05:57:53', '2025-07-03 05:03:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group_role`
--
ALTER TABLE `group_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_user`
--
ALTER TABLE `project_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `group`
--
ALTER TABLE `group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `group_role`
--
ALTER TABLE `group_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `project_user`
--
ALTER TABLE `project_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
