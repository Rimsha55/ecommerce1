/*
  Warnings:

  - You are about to drop the `billing` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productid` to the `oderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `billing` DROP FOREIGN KEY `Billing_productId_fkey`;

-- DropForeignKey
ALTER TABLE `billing` DROP FOREIGN KEY `Billing_userId_fkey`;

-- AlterTable
ALTER TABLE `oderitem` ADD COLUMN `productid` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `billing`;

-- AddForeignKey
ALTER TABLE `oderItem` ADD CONSTRAINT `oderItem_productid_fkey` FOREIGN KEY (`productid`) REFERENCES `Product`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
