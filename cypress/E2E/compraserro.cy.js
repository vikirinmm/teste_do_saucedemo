describe('checkout - caminho ruim', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.login('standard_user', 'secret_sauce')

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

    // garante que está na tela certa do checkout
    cy.url().should('include', 'checkout-step-one')
  })

  it('deve mostrar erro ao tentar continuar sem preencher dados', () => {
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'First Name is required')

    cy.url().should('include', 'checkout-step-one')
  })

  it('deve mostrar erro quando falta o sobrenome', () => {
    cy.get('[data-test="firstName"]').type('João')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Last Name is required')

    cy.url().should('include', 'checkout-step-one')
  })

  it('deve mostrar erro quando falta o CEP', () => {
    cy.get('[data-test="firstName"]').type('João')
    cy.get('[data-test="lastName"]').type('Silva')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Postal Code is required')

    cy.url().should('include', 'checkout-step-one')
  })
})