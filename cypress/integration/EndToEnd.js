describe('visit the about page', function () {
   it('Visits the about page', function () {
      cy.visit('http://localhost:3000/');

      //finds an element
      cy.get('.help-falcone').click();

      //verifies url
      cy.url().should('include', '/find');

      //testing planets drop down
      cy.get('#select-planet-1').click();
      cy.get('#Donlon').click();

      cy.get('#select-planet-2').click();
      cy.get('#Enchai').click();

      cy.get('#select-planet-3').click();
      cy.get('#Jebing').click();

      cy.get('#select-planet-4').click();
      cy.get('#Sapir').click();

      //testing vehicles drop down
      cy.get('#select-vehicle-1').click();
      cy.get('#2').click();

      cy.get('#select-vehicle-2').click();
      cy.get('#4').click();

      cy.get('#select-vehicle-3').click();
      cy.get('#5').click();

      cy.get('#select-vehicle-4').click();
      cy.get('#10').click();

      cy.get('.start-search').click();

      //verifies url
      cy.url().should('include', '/result');

      //verifies the result page
      cy.contains('You found Falcone!');
   });
});
