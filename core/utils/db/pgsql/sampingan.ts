import { PrismaClient } from '@prisma/sampingan_dev'; // Corrected import statement

const client = new PrismaClient({
    datasources: { db: { url: process.env.DB_SAMPINGAN_DEV } },
});

// Export the Prisma client instance directly
export const sampingandb = client;
