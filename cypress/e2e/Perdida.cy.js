/// <reference types="cypress" />

describe('Prueba de derrota', () => {
  
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/TEST-QA-BANRURAL/Test%20mejorado/index-mejorado.html');
  });

  it('Verifica el escenario de derrota', () => {
    cy.window().then((win) => {
      let numeroAdivinar = win.numeroAdivinar;

      // Verificar que numeroAdivinar es un número válido
      if (typeof numeroAdivinar !== 'number' || isNaN(numeroAdivinar)) {
        throw new Error('El número a adivinar no es válido: ' + numeroAdivinar);
      }

      // Hacer 10 intentos fallidos
      for (let i = 0; i < 10; i++) {
        // Asegurarse de que cy.type reciba un número válido
        cy.get('#numero').clear().type((numeroAdivinar + 1).toString());
        cy.get('#jugar-btn').click();
      }
      
      // Verificar que el mensaje de derrota se muestra
      cy.get('#mensaje').should('have.class', 'error').and('contain', '!!!Pérdiste!!!');
      cy.get('#numero').should('be.disabled'); // Verificar que el input esté deshabilitado
      cy.get('#jugar-btn').should('be.disabled'); // Verificar que el botón esté deshabilitado
    });
  });

});
