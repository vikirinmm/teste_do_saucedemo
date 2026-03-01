import { loginelements } from './pages/login.elements'

Cypress.Commands.add('login', (username, password) => {
  cy.get(loginelements.usernameInput).type(username)
  cy.get(loginelements.passwordInput).type(password)
  cy.get(loginelements.loginButton).click()
})
Cypress.Commands.add('checkout', ({ firstName, lastName, zip }) => {
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type(firstName)
  cy.get('[data-test="lastName"]').type(lastName)
  cy.get('[data-test="postalCode"]').type(zip)
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="finish"]').click()
  cy.get('.complete-header').should('contain', 'Thank you for your order!')
})
Cypress.Commands.add('AdicinarCarrinho', (item) => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('.shopping_cart_link').click()
  cy.get('[data-test="checkout"]').click()
  cy.url().should('include', 'checkout-step-one')
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })