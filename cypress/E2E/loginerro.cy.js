describe('teste de login com erro', () => {
    it('Deve preencher os campos do formulário com dados incorretos para testar o login', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').type('invalid_user');
        cy.get('[data-test="password"]').type('wrong_password');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    })
})