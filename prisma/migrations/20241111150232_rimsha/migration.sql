/*
  Warnings:

  - You are about to drop the column `user_contact_id` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `OTP` on the `user_secret` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `contact` DROP FOREIGN KEY `Contact_user_contact_id_fkey`;

-- AlterTable
ALTER TABLE `contact` DROP COLUMN `user_contact_id`;

-- AlterTable
ALTER TABLE `user_secret` DROP COLUMN `OTP`;
