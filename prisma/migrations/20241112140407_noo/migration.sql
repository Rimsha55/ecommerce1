-- AlterTable
ALTER TABLE `order` ADD COLUMN `status` ENUM('PENDING', 'SHIPPED', 'DELIVERED') NOT NULL DEFAULT 'PENDING';
