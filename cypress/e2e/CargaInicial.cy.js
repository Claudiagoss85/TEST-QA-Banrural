/// <reference types="cypress" />

describe('Carga inicial de la página', () => {
  
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/TEST-QA-BANRURAL/Test%20mejorado/index-mejorado.html');
  });

  it('Verifica la carga inicial de los elementos', () => {
    cy.get('h1').contains('Adivina tu Número');
    cy.get('#numero').should('be.visible');
    cy.get('#jugar-btn').should('be.visible').and('have.text', 'Adivinar');
    cy.get('#reiniciar-btn').should('be.visible').and('have.text', 'Reiniciar');
    cy.get('#intentos-restantes').should('contain', 'Intentos restantes: 10');
  });


  it('Verifica que las entradas no válidas sean rechazadas', () => {
    cy.get('#numero').type('abc'); // Entrada no numérica
    cy.get('#jugar-btn').click();
    cy.get('#mensaje').should('have.class', 'error').and('contain', 'Por favor, ingrese un número entero entre 1 y 100');
    
    cy.get('#numero').clear().type('0'); // Número fuera del rango (menor)
    cy.get('#jugar-btn').click();
    cy.get('#mensaje').should('have.class', 'error').and('contain', 'Por favor, ingrese un número entero entre 1 y 100');
    
    cy.get('#numero').clear().type('101'); // Número fuera del rango (mayor)
    cy.get('#jugar-btn').click();
    cy.get('#mensaje').should('have.class', 'error').and('contain', 'Por favor, ingrese un número entero entre 1 y 100');
  });



  
});
