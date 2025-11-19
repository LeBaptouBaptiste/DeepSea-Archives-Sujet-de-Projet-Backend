// Port de dépôt (repository) pour les Observations – interface côté domaine.

/**
 * @typedef {Object} ObservationRepository
 * @property {(observation: import('../entities/Observation').createObservation) => Promise<any>} create
 * @property {(id: string|number) => Promise<any|null>} findById
 * @property {(speciesId: string|number) => Promise<any[]>} findBySpeciesId
 * @property {(speciesId: string|number, authorId: string|number) => Promise<any|null>} findLastBySpeciesAndAuthor
 * @property {(id: string|number, changes: any) => Promise<any>} updateStatus
 */

// Ce fichier sert de contrat que l’infrastructure devra respecter.


