// Use case : validation d'une Observation.
// Règle importante : impossible de valider sa propre observation.

async function execute(/* deps, input */) {
  // TODO: injecter ObservationRepository, vérifier auteur != validateur, mettre à jour status + reputation.
  throw new Error('validateObservation use case not implemented yet');
}

module.exports = {
  execute,
};


