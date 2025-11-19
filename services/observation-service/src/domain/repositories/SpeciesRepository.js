// Port de dépôt (repository) pour les Species – interface côté domaine.
// L’implémentation concrète (Prisma, etc.) sera dans infrastructure.

/**
 * @typedef {Object} SpeciesRepository
 * @property {(species: import('../entities/Species').createSpecies) => Promise<any>} create
 * @property {(id: string|number) => Promise<any|null>} findById
 * @property {() => Promise<any[]>} findAll
 * @property {(name: string) => Promise<any|null>} findByName
 */

// Ce fichier sert surtout de documentation de port à implémenter.


