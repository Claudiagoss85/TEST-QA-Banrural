/// <reference types="cypress" />

describe('Prueba de victoria', () => {
  
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/TEST-QA-BANRURAL/Test%20mejorado/index-mejorado.html');
  });

  it('Verifica el escenario de victoria', () => {
    cy.window().then((win) => {
      const numeroAdivinar = win.numeroAdivinar;
      cy.get('#numero').type(numeroAdivinar); // Ingresar el número correcto
      cy.get('#jugar-btn').click();
      cy.get('#mensaje').should('have.class', 'success').and('contain', 'Felicitaciones! Adivinaste el número!');
      cy.get('#numero').should('be.disabled'); // Verificar que el input esté deshabilitado
      cy.get('#jugar-btn').should('be.disabled'); // Verificar que el botón esté deshabilitado
    });
  });

});
