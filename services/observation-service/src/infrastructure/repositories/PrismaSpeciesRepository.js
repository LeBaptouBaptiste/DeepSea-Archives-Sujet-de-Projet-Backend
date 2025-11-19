// Implémentation Prisma du port SpeciesRepository.

const { prisma } = require('../prisma/client');

const PrismaSpeciesRepository = {
  async create(species) {
    return prisma.species.create({ data: species });
  },

  async findById(id) {
    return prisma.species.findUnique({ where: { id: Number(id) } });
  },

  async findAll() {
    return prisma.species.findMany();
  },

  async findByName(name) {
    return prisma.species.findUnique({ where: { name } });
  },
};

module.exports = PrismaSpeciesRepository;


