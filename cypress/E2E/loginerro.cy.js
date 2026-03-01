describe('teste de login com erro', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
    })
    it('Deve preencher os campos do formulário com dados incorretos para testar o login', () => {
        cy.login('invalido_usuario', 'senha_incorreta')
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    })
})