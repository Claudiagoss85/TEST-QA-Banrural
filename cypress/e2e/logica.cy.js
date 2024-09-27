/// <reference types="cypress" />

describe('Lógica del juego', () => {
  
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/TEST-QA-BANRURAL/Test%20mejorado/index-mejorado.html');
    });
  
    it('Verifica la lógica de comparación de números', () => {
      cy.window().then((win) => {
        const numeroAdivinar = win.numeroAdivinar;
        
        // Probar con un número mayor al número a adivinar
        cy.get('#numero').type(numeroAdivinar + 1);
        cy.get('#jugar-btn').click();
        cy.get('#mensaje').should('contain', 'Incorrecto! El número es menor!');
        
        // Probar con un número menor al número a adivinar
        cy.get('#numero').clear().type(numeroAdivinar - 1);
        cy.get('#jugar-btn').click();
        cy.get('#mensaje').should('contain', 'Incorrecto! El número es mayor!');
      });
    });
  
  });
  