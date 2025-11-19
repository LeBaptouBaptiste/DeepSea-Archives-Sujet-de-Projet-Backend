// Implémentation Prisma du port ObservationRepository.

const { prisma } = require('../prisma/client');

const PrismaObservationRepository = {
  async create(observation) {
    return prisma.observation.create({ data: observation });
  },

  async findById(id) {
    return prisma.observation.findUnique({ where: { id: Number(id) } });
  },

  async findBySpeciesId(speciesId) {
    return prisma.observation.findMany({
      where: { speciesId: Number(speciesId) },
      orderBy: { createdAt: 'desc' },
    });
  },

  async findLastBySpeciesAndAuthor(speciesId, authorId) {
    return prisma.observation.findFirst({
      where: { speciesId: Number(speciesId), authorId: Number(authorId) },
      orderBy: { createdAt: 'desc' },
    });
  },

  async updateStatus(id, changes) {
    return prisma.observation.update({
      where: { id: Number(id) },
      data: changes,
    });
  },
};

module.exports = PrismaObservationRepository;


