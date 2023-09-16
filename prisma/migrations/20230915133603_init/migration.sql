-- CreateTable
CREATE TABLE "Guest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullVegeterian" BOOLEAN NOT NULL DEFAULT false,
    "foodPreference" TEXT NOT NULL DEFAULT ''
);
