const usuarios = require('../fixtures/usuarios.json').usuarios

describe('Login com múltiplos usuários - validações específicas', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  usuarios.forEach((usuario) => {

    it(`Login com ${usuario.username}`, () => {

      cy.login(usuario.username, usuario.password)

      // 🔴 Usuário bloqueado
      if (usuario.username === 'locked_out_user') {
        cy.get('[data-test="error"]')
          .should('be.visible')
          .and('contain', 'locked out')
      }

      // 🟡 Usuário com lentidão (validação simples)
      else if (usuario.username === 'performance_glitch_user') {
        cy.url().should('include', 'inventory')
        cy.get('.title').should('contain', 'Products')
      }

      // 🔵 Usuário com possíveis problemas visuais
      else if (usuario.username === 'visual_user') {
        cy.url().should('include', 'inventory')
        cy.get('.inventory_list').should('be.visible')
      }

      // 🟠 Usuário com comportamento problemático
      else if (usuario.username === 'problem_user') {
        cy.url().should('include', 'inventory')
        cy.get('.inventory_item').should('have.length.greaterThan', 0)
      }

      // 🟣 Usuário que pode gerar erro
      else if (usuario.username === 'error_user') {
        cy.url().should('include', 'inventory')
      }

      // 🟢 Usuário padrão
      else {
        cy.url().should('include', 'inventory')
      }

    })

  })

})