describe('teste de login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
    })
    it('Login com sucesso', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', 'inventory')
  })
})