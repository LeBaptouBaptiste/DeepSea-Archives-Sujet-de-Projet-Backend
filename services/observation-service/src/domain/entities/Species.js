// Domaine : entité Species
// TODO: implémenter les règles métier (unicité du nom, calcul de rarityScore, etc.)

/**
 * Esquisse de fabrique d'entité Species.
 * Pour l'instant non utilisée, mais prête pour la couche application.
 */
function createSpecies(props) {
  return {
    id: props.id ?? null,
    authorId: props.authorId,
    name: props.name,
    rarityScore: props.rarityScore ?? 1,
    createdAt: props.createdAt ?? new Date(),
  };
}

module.exports = {
  createSpecies,
};


