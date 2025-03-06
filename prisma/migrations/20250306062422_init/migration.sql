/*
  Warnings:

  - The values [male,female] on the enum `UserSex` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `userName` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `sureName` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `sureName` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `sureName` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `Teacher` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `score` on the `Result` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `birthday` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserSex_new" AS ENUM ('MALE', 'FEMALE');
ALTER TABLE "Student" ALTER COLUMN "sex" TYPE "UserSex_new" USING ("sex"::text::"UserSex_new");
ALTER TABLE "Teacher" ALTER COLUMN "sex" TYPE "UserSex_new" USING ("sex"::text::"UserSex_new");
ALTER TYPE "UserSex" RENAME TO "UserSex_old";
ALTER TYPE "UserSex_new" RENAME TO "UserSex";
DROP TYPE "UserSex_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_supervisorId_fkey";

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_gradeId_fkey";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "userName",
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Assignment" DROP COLUMN "endDate",
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "supervisorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Lesson" ALTER COLUMN "gradeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Parent" DROP COLUMN "sureName",
DROP COLUMN "userName",
ADD COLUMN     "surname" TEXT,
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Result" DROP COLUMN "score",
ADD COLUMN     "score" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "sureName",
DROP COLUMN "userName",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "surname" TEXT,
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "img" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "sureName",
DROP COLUMN "userName",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "surname" TEXT,
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "img" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_username_key" ON "Teacher"("username");

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
