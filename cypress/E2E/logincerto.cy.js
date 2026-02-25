describe('teste de login', () => {
    it('Deve preencher os campos do formulário corretamente para realizar o login', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    })
})