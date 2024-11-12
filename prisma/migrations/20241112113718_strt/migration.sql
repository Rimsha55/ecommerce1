-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `tot_amount` INTEGER NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `payment` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `oderItem` (
    `id` VARCHAR(191) NOT NULL,
    `quantity` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `orderitems` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `oderItem` ADD CONSTRAINT `oderItem_orderitems_fkey` FOREIGN KEY (`orderitems`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
