// Client Prisma pour observation-service.
// La configuration du datasource est définie dans prisma/schema.prisma.

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  prisma,
};


