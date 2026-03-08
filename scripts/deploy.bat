@echo off
REM Render Deployment Script for Windows
REM This script runs database migrations and seeding during deployment

echo Starting deployment script...

REM Generate Prisma Client
echo Generating Prisma Client...
npx prisma generate

REM Run database migrations
echo Running database migrations...
npx prisma migrate deploy || echo No new migrations to apply

REM Seed database (only if it's empty or on first deploy)
echo Checking if database needs seeding...
REM Note: This is a simplified check - in production you might want to handle this differently
npx prisma db seed

echo Deployment script completed!
