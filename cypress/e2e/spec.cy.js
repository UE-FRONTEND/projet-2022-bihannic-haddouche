describe('Tests de l’application Vue.js', () => {
  
    it('L’application se charge correctement', () => {
      cy.visit('http://localhost:4000');
      cy.contains('Mot Mystère');
    });
  
    it('Le bouton “lancer une partie” fonctionne correctement', () => {
      cy.visit('http://localhost:4000');
      cy.contains('Démarrer une partie').click();
      cy.get('input[type="text"]');
    });
  
    it('Affiche un message d’erreur pour "zzzzz"', () => {
      cy.visit('http://localhost:4000');
      cy.contains('Démarrer une partie').click();
      cy.get('input[type="text"]').type('zzzzz');
      cy.contains('Valider').click();
      cy.wait(1000);
      cy.contains("Le mot n'est pas dans le dictionnaire.");
    });
  
    it('Accepte le mot "jante"', () => {
      cy.visit('http://localhost:4000');
      cy.contains('Démarrer une partie').click();
      cy.get('input[type="text"]').type('jante');
      cy.contains('Valider').click();
      cy.wait(1000);
      cy.contains('jante');
    });
  
    it('Arrive sur une page de défaite après l’abandon', () => {
      cy.visit('http://localhost:4000');
      cy.contains('Démarrer une partie').click();
      cy.contains('Abandonner').click();
      cy.contains('Dommage ! Réessayez.');
    });
  
    it('Affiche la page des statistiques', () => {
      cy.visit('http://localhost:4000');
      cy.contains('Statistiques').click();
      cy.contains('Statistiques');
    });
  
  });
  