-- CreateTable
CREATE TABLE "Guest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullVegeterian" BOOLEAN NOT NULL DEFAULT false,
    "foodPreference" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);
