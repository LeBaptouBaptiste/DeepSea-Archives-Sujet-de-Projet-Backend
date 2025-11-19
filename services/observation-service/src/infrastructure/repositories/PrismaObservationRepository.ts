// Implémentation Prisma du port ObservationRepository.

import { prisma } from '../prisma/client';
import type { ObservationProps } from '../../domain/entities/Observation';
import type {
  ObservationHistoryListOptions,
  ObservationListOptions,
} from '../../domain/repositories/ObservationRepository';
import type { ObservationHistoryProps } from '../../domain/entities/ObservationHistory';

export const PrismaObservationRepository = {
  async create(observation: ObservationProps) {
    return prisma.observation.create({ data: observation as any });
  },

  async findById(id: number) {
    return prisma.observation.findUnique({ where: { id: Number(id) } });
  },

  async findBySpeciesId(speciesId: number, options: ObservationListOptions = {}) {
    const { status, includeDeleted = false } = options;

    return prisma.observation.findMany({
      where: {
        speciesId: Number(speciesId),
        ...(includeDeleted ? {} : { deletedAt: null }),
        ...(status && status.length > 0
          ? {
              status: {
                in: status as any,
              },
            }
          : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
  },

  async findLastBySpeciesAndAuthor(speciesId: number, authorId: number) {
    return prisma.observation.findFirst({
      where: {
        speciesId: Number(speciesId),
        authorId: Number(authorId),
        deletedAt: null,
      },
      orderBy: { createdAt: 'desc' },
    });
  },

  async updateStatus(id: number, changes: any) {
    return prisma.observation.update({
      where: { id: Number(id) },
      data: changes,
    });
  },

  async softDelete(id: number) {
    return prisma.observation.update({
      where: { id: Number(id) },
      data: { deletedAt: new Date() },
    });
  },

  async restore(id: number) {
    return prisma.observation.update({
      where: { id: Number(id) },
      data: { deletedAt: null },
    });
  },

  async createHistoryEntry(entry: ObservationHistoryProps) {
    return prisma.observationHistory.create({
      data: entry as any,
    });
  },

  async listHistory(options: ObservationHistoryListOptions = {}) {
    const { speciesId, observationId, limit = 100 } = options;

    return prisma.observationHistory.findMany({
      where: {
        ...(speciesId ? { speciesId: Number(speciesId) } : {}),
        ...(observationId ? { observationId: Number(observationId) } : {}),
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  },

  async countActiveBySpecies(speciesId: number) {
    return prisma.observation.count({
      where: { speciesId: Number(speciesId), deletedAt: null },
    });
  },
};

