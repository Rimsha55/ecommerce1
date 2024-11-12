/*
  Warnings:

  - You are about to alter the column `price` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `price` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `addtocart` (
    `addtocard_id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `addtocart_userId_key`(`userId`),
    PRIMARY KEY (`addtocard_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carditems` (
    `id` VARCHAR(191) NOT NULL,
    `card_Id` VARCHAR(191) NOT NULL,
    `products` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `addtocart` ADD CONSTRAINT `addtocart_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carditems` ADD CONSTRAINT `carditems_card_Id_fkey` FOREIGN KEY (`card_Id`) REFERENCES `addtocart`(`addtocard_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carditems` ADD CONSTRAINT `carditems_products_fkey` FOREIGN KEY (`products`) REFERENCES `Product`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
