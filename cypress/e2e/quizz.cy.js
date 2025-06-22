// Adapte le viewport de sorte que les boutons soient visibles dans la vue
beforeEach(() => {
    cy.viewport(1280, 900);
});
describe('Test complet du quizz', () => {
    it('L’utilisateur répond au quizz et reçoit un résultat', () => {
      // Aller directement sur la page quizz
      cy.visit('http://localhost:5173/quizz');
  
      // Pour chaque question, cliquer sur une image et passer à la suivante
      for (let i = 0; i < 3; i++) {
        // Attendre le contenu de la question
        cy.get('.fullContent', { timeout: 5000 }).should('be.visible');
  
        // Cliquer sur la première image de réponse
        cy.get('[data-testid="answer-image"]').first().click();
  
        // Cliquer sur "QUESTION SUIVANTE"
        cy.contains('QUESTION SUIVANTE').click();
      }
  
      // Vérifier qu'on est redirigé sur /resultat
      cy.url().should('include', '/resultat');
  
      // Vérifier que le résultat est bien affiché
      cy.get('.result img').should('be.visible');
      cy.get('.result p').should('not.be.empty');
    });
  });