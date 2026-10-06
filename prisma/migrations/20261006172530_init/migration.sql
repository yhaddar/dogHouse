-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "CategoryDogs" AS ENUM ('GOLDEN_RETRIEVER', 'LABRADOR_RETRIEVER', 'GERMAN_SHEPHERD', 'FRENCH_BULLDOG', 'BULLDOG', 'POODLE', 'CHIHUAHUA', 'ROTTWEILER', 'HUSKY', 'BEAGLE', 'DACHSHUND', 'BORDER_Collie', 'SHIH_TZU', 'POMEREANIAN', 'DOBERMAN', 'AKITA', 'BOXER', 'GREAT_DANE', 'COCKER_SPANIEL', 'YORKSHIRE_TERRIER');

-- CreateEnum
CREATE TYPE "CategoryBlogs" AS ENUM ('DOG_BREEDS', 'NUTRITION', 'HEALTH', 'TRAINING', 'GROOMING', 'EXERCISE', 'PUPPIES', 'TIPS_GUIDES');

-- CreateEnum
CREATE TYPE "CategoryProduct" AS ENUM ('FOOD_TREATS', 'TOYS', 'COLLARS_LEASHES', 'BEDS', 'GROOMING', 'CLOTHING', 'BOWLS_FEEDERS', 'TRAINING', 'HEALTH_WELLNESS', 'TRAVEL');

-- CreateEnum
CREATE TYPE "GenderProduct" AS ENUM ('MALE', 'FEMALE', 'UNISEX');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "profile" TEXT NOT NULL DEFAULT 'default.jpeg',
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "vile" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dog" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "date_birth" TIMESTAMP(3) NOT NULL,
    "size" "Size" NOT NULL,
    "color" TEXT NOT NULL,
    "vaccinated" BOOLEAN NOT NULL,
    "dewormed" BOOLEAN NOT NULL,
    "category" "CategoryDogs" NOT NULL,
    "microship" BOOLEAN NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "image_principale" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Dog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageDog" (
    "id" TEXT NOT NULL,
    "dog_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "ImageDog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageDogWithCostumer" (
    "id" TEXT NOT NULL,
    "dog_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "ImageDogWithCostumer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blogs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "CategoryBlogs" NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "category" "CategoryProduct" NOT NULL,
    "size" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "color" TEXT[],
    "material" TEXT NOT NULL,
    "gender" "GenderProduct" NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- AddForeignKey
ALTER TABLE "Dog" ADD CONSTRAINT "Dog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageDog" ADD CONSTRAINT "ImageDog_dog_id_fkey" FOREIGN KEY ("dog_id") REFERENCES "Dog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageDogWithCostumer" ADD CONSTRAINT "ImageDogWithCostumer_dog_id_fkey" FOREIGN KEY ("dog_id") REFERENCES "Dog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
