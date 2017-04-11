-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-04-06 03:25:03
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdnews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` varchar(100) NOT NULL,
  `newstitle` varchar(150) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(22, '推荐', '推荐1', 'img/1.jpg', '2017-03-30 00:00:00', '推荐'),
(23, '推荐', '推荐2', 'img/2.jpeg', '2017-03-30 00:00:00', '推荐'),
(24, '推荐', '推荐3', 'img/1.jpg', '2017-03-30 00:00:00', '推荐'),
(25, '图片', '图片', 'img/1.jpg', '2017-03-30 00:00:00', '推荐'),
(26, '百家', '图片', 'img/1.jpg', '2017-03-30 00:00:00', '推荐'),
(27, '百家', '图片', 'img/1.jpg', '2017-03-30 00:00:00', '推荐'),
(28, '百家', '图片', 'img/1.jpg', '2017-03-30 00:00:00', '推荐'),
(29, '贴吧', '图片', 'img/1.jpg', '2017-03-30 00:00:00', '推荐'),
(30, '外卖', '图片', 'img/1.jpg', '2017-03-30 00:00:00', '推荐');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
