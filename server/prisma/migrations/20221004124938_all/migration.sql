-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'DEVELOPER');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('ERROR', 'USER', 'ADMIN', 'DEVELOPER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Total" (
    "id" INTEGER NOT NULL,
    "total" INTEGER NOT NULL DEFAULT 300000000,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "Votes" (
    "id" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" INTEGER NOT NULL,
    "votesId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "type" "EventType" NOT NULL,
    "topic" TEXT,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Total_id_key" ON "Total"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Item_id_key" ON "Item"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Item_userId_key" ON "Item"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Votes_id_key" ON "Votes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Votes_itemId_key" ON "Votes"("itemId");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_id_key" ON "Vote"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_votesId_key" ON "Vote"("votesId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Votes" ADD CONSTRAINT "Votes_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_votesId_fkey" FOREIGN KEY ("votesId") REFERENCES "Votes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
