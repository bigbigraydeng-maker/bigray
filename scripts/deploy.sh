#!/bin/bash

# Render Deployment Script
# This script runs database migrations and seeding during deployment

set -e

echo "Starting deployment script..."

# Generate Prisma Client
echo "Generating Prisma Client..."
npx prisma generate

# Run database migrations
echo "Running database migrations..."
npx prisma migrate deploy || echo "No new migrations to apply"

# Seed database (only if it's empty or on first deploy)
echo "Checking if database needs seeding..."
SEED_CHECK=$(npx prisma db execute --stdin <<EOF
SELECT COUNT(*) as count FROM "Profile";
EOF
)

if [ "$SEED_CHECK" -eq "0" ]; then
    echo "Seeding database..."
    npx prisma db seed
else
    echo "Database already seeded, skipping..."
fi

echo "Deployment script completed!"
