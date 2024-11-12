/*
  Warnings:

  - You are about to drop the column `address` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `profile` on the `profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `profile_email_key` ON `profile`;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `address`,
    DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `profile`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
